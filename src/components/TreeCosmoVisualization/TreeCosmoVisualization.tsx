import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect
} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Html, Billboard } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================================
// Types
// ============================================================================

export interface TreeNode {
  id: number;
  parentId: number | null;
  text: string;
  uuid: string;
  children?: TreeNode[] | null;
}

export interface TreeCosmoData {
  data: TreeNode;
}

export interface TreeCosmoVisualizationProps {
  /** The tree data in JSON format */
  data: TreeCosmoData;
  /** Callback when a node is selected */
  onNodeSelect?: (node: TreeNode | null) => void;
  /** Initial zoom level (default: 1) */
  initialZoom?: number;
  /** Base planet radius (default: 1) */
  baseRadius?: number;
  /** Minimum planet radius (default: 0.3) */
  minRadius?: number;
  /** Maximum planet radius (default: 2) */
  maxRadius?: number;
  /** Orbit distance between parent and child (default: 4) */
  orbitDistance?: number;
  /** Animation speed multiplier (default: 1) */
  animationSpeed?: number;
  /** Show labels on planets (default: true) */
  showLabels?: boolean;
  /** Custom class name for the container */
  className?: string;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Calculate the depth of a node in the tree
 */
const getNodeDepth = (
  node: TreeNode,
  nodeMap: Map<number, TreeNode>,
  rootId: number
): number => {
  let depth = 0;
  let currentNode = node;

  while (currentNode.parentId !== rootId && currentNode.id !== rootId) {
    const parent = nodeMap.get(currentNode.parentId!);
    if (!parent) break;
    currentNode = parent;
    depth++;
  }

  return depth;
};

/**
 * Count all descendants of a node
 */
const countDescendants = (node: TreeNode): number => {
  if (!node.children || node.children.length === 0) return 0;

  let count = node.children.length;
  for (const child of node.children) {
    count += countDescendants(child);
  }
  return count;
};

/**
 * Get color based on depth using a cosmic color palette
 */
const getDepthColor = (depth: number, maxDepth: number): string => {
  const cosmicColors = [
    '#FF6B6B', // Red - root
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEAA7', // Yellow
    '#DDA0DD', // Plum
    '#98D8C8', // Mint
    '#F7DC6F' // Gold
  ];

  return cosmicColors[depth % cosmicColors.length];
};

/**
 * Calculate planet radius based on child count
 */
const calculateRadius = (
  childCount: number,
  baseRadius: number,
  minRadius: number,
  maxRadius: number
): number => {
  const scale = Math.sqrt(childCount + 1) * 0.3;
  return Math.min(maxRadius, Math.max(minRadius, baseRadius * (1 + scale)));
};

// ============================================================================
// Planet Component
// ============================================================================

interface PlanetProps {
  node: TreeNode;
  position: [number, number, number];
  radius: number;
  color: string;
  depth: number;
  isSelected: boolean;
  onClick: (node: TreeNode) => void;
  showLabel: boolean;
  orbitSpeed: number;
  orbitOffset: number;
}

const Planet: React.FC<PlanetProps> = ({
  node,
  position,
  radius,
  color,
  depth,
  isSelected,
  onClick,
  showLabel,
  orbitSpeed,
  orbitOffset
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [localPosition, setLocalPosition] = useState<[number, number, number]>([
    0, 0, 0
  ]);

  // Animate orbital motion for moons
  useFrame(({ clock }) => {
    if (depth > 0) {
      const time = clock.getElapsedTime() * orbitSpeed + orbitOffset;
      const x = position[0] + Math.cos(time) * 0.5;
      const y = position[1] + Math.sin(time) * 0.3;
      const z = position[2] + Math.sin(time) * 0.5;
      setLocalPosition([x, y, z]);
    }
  });

  const displayPosition = depth === 0 ? position : localPosition;

  // Pulse animation for selected planet
  useFrame(({ clock }) => {
    if (meshRef.current && isSelected) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.1;
      meshRef.current.scale.setScalar(scale);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <group position={displayPosition}>
      {/* Planet mesh */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(node);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={isSelected ? color : hovered ? '#ffffff' : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : hovered ? 0.3 : 0.1}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>

      {/* Selection ring */}
      {isSelected && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius * 1.3, radius * 1.5, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Glow effect */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Label — always faces the camera */}
      {showLabel && (
        <Billboard position={[0, radius + 0.5, 0]}>
          <Text
            fontSize={Math.max(0.3, radius * 0.4)}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.05}
            outlineColor="#000000"
          >
            {node.text.length > 10
              ? node.text.substring(0, 10) + '...'
              : node.text}
          </Text>
        </Billboard>
      )}

      {/* Hover tooltip */}
      {hovered && !isSelected && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{node.text}</div>
            <div style={{ fontSize: '10px', opacity: 0.7 }}>Depth: {depth}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

// ============================================================================
// Orbit Path Component
// ============================================================================

interface OrbitPathProps {
  parentPosition: [number, number, number];
  radius: number;
  color: string;
}

const OrbitPath: React.FC<OrbitPathProps> = ({
  parentPosition,
  radius,
  color
}) => {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          parentPosition[0] + Math.cos(angle) * radius,
          parentPosition[1],
          parentPosition[2] + Math.sin(angle) * radius
        )
      );
    }
    return pts;
  }, [parentPosition, radius]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={0.2} />
    </line>
  );
};

// ============================================================================
// Tree Node Renderer
// ============================================================================

interface TreeNodeRendererProps {
  node: TreeNode;
  nodeMap: Map<number, TreeNode>;
  depth: number;
  maxDepth: number;
  parentPosition: [number, number, number];
  orbitDistance: number;
  baseRadius: number;
  minRadius: number;
  maxRadius: number;
  selectedNode: TreeNode | null;
  onNodeSelect: (node: TreeNode) => void;
  showLabels: boolean;
  animationSpeed: number;
  nodePositions: Map<number, [number, number, number]>;
}

const TreeNodeRenderer: React.FC<TreeNodeRendererProps> = ({
  node,
  nodeMap,
  depth,
  maxDepth,
  parentPosition,
  orbitDistance,
  baseRadius,
  minRadius,
  maxRadius,
  selectedNode,
  onNodeSelect,
  showLabels,
  animationSpeed,
  nodePositions
}) => {
  const childCount = node.children?.length || 0;
  const radius = calculateRadius(childCount, baseRadius, minRadius, maxRadius);
  const color = getDepthColor(depth, maxDepth);
  const isSelected = selectedNode?.id === node.id;

  // Calculate orbit radius for children
  const childOrbitDistance = orbitDistance * (1 + depth * 0.3) * 30;

  // For depth 0 (root) render at origin; for all other nodes, parentPosition
  // is already the precomputed position for this node (passed by the parent renderer).
  const position: [number, number, number] =
    depth === 0 ? [0, 0, 0] : parentPosition;

  return (
    <>
      {/* Orbit path for children */}
      {childCount > 0 && (
        <OrbitPath
          parentPosition={position}
          radius={childOrbitDistance}
          color={color}
        />
      )}

      {/* This planet */}
      <Planet
        node={node}
        position={position}
        radius={radius}
        color={color}
        depth={depth}
        isSelected={isSelected}
        onClick={onNodeSelect}
        showLabel={showLabels}
        orbitSpeed={animationSpeed * 0.5}
        orbitOffset={node.id * 0.5}
      />

      {/* Render children */}
      {node.children?.map((child, index) => {
        // Distribute children evenly around the parent
        const childCount = node.children?.length || 1;
        const angleOffset = (2 * Math.PI) / childCount;
        const baseAngle = depth * 0.5; // Add some variation based on depth
        const angle = baseAngle + index * angleOffset;

        // Calculate child position - spread them evenly in a circle
        const childPosition: [number, number, number] = [
          position[0] + Math.cos(angle) * childOrbitDistance,
          position[1] + Math.sin(depth * 0.3 + index * 0.2) * 1.5, // Slight vertical variation
          position[2] + Math.sin(angle) * childOrbitDistance
        ];

        return (
          <TreeNodeRenderer
            key={child.id}
            node={child}
            nodeMap={nodeMap}
            depth={depth + 1}
            maxDepth={maxDepth}
            parentPosition={childPosition}
            orbitDistance={orbitDistance}
            baseRadius={baseRadius}
            minRadius={minRadius}
            maxRadius={maxRadius}
            selectedNode={selectedNode}
            onNodeSelect={onNodeSelect}
            showLabels={showLabels}
            animationSpeed={animationSpeed}
            nodePositions={nodePositions}
          />
        );
      })}
    </>
  );
};

// ============================================================================
// Camera Controller - Free movement in 3D space
// ============================================================================

interface CameraControllerProps {
  controlsRef: React.RefObject<any>;
}

const CameraController: React.FC<CameraControllerProps> = ({ controlsRef }) => {
  const { camera } = useThree();
  const moveSpeed = 0.5;
  const keysPressed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key.toLowerCase());
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!controlsRef.current) return;

    const keys = keysPressed.current;
    const direction = new THREE.Vector3();

    // Get camera's forward and right vectors (ignoring up/down)
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    // Calculate movement direction
    if (keys.has('w')) direction.add(forward);
    if (keys.has('s')) direction.sub(forward);
    if (keys.has('a')) direction.sub(right);
    if (keys.has('d')) direction.add(right);
    if (keys.has('q')) direction.y -= 1; // Move down
    if (keys.has('e')) direction.y += 1; // Move up

    if (direction.length() > 0) {
      direction.normalize().multiplyScalar(moveSpeed);

      // Move the orbit controls target (camera will follow)
      controlsRef.current.target.add(direction);
      controlsRef.current.update();
    }
  });

  return null;
};

// ============================================================================
// Camera Focus Component - Auto-move to selected planet
// ============================================================================

interface CameraFocusProps {
  selectedNode: TreeNode | null;
  nodePositions: Map<number, [number, number, number]>;
  controlsRef: React.RefObject<any>;
}

const CameraFocus: React.FC<CameraFocusProps> = ({
  selectedNode,
  nodePositions,
  controlsRef
}) => {
  const { camera } = useThree();
  const targetPosition = useRef<THREE.Vector3 | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!selectedNode || !controlsRef.current) return;

    const position = nodePositions.get(selectedNode.id);
    if (!position) return;

    // Set the destination for the orbit controls target
    targetPosition.current = new THREE.Vector3(
      position[0],
      position[1],
      position[2]
    );
    isAnimating.current = true;
  }, [selectedNode, nodePositions, controlsRef]);

  useFrame(() => {
    if (!isAnimating.current || !targetPosition.current || !controlsRef.current)
      return;

    const target = targetPosition.current;
    const currentTarget = controlsRef.current.target;

    // Smoothly lerp the orbit-controls target toward the planet
    currentTarget.lerp(target, 0.08);

    // Move camera to stay at a fixed distance above/behind the target
    const desiredCameraPos = new THREE.Vector3(
      currentTarget.x,
      currentTarget.y + 10,
      currentTarget.z + 25
    );
    camera.position.lerp(desiredCameraPos, 0.08);

    controlsRef.current.update();

    // Stop animating once close enough
    if (currentTarget.distanceTo(target) < 0.1) {
      currentTarget.copy(target);
      controlsRef.current.update();
      isAnimating.current = false;
    }
  });

  return null;
};

// ============================================================================
// Starfield Background
// ============================================================================

const Starfield: React.FC = () => {
  const starsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    // Reduced from 3000 to 500 stars
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  // Create circular star texture
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;

    // Draw a circular gradient for soft edges
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        map={starTexture}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// ============================================================================
// Scene Component
// ============================================================================

interface SceneProps {
  data: TreeCosmoData;
  selectedNode: TreeNode | null;
  onNodeSelect: (node: TreeNode) => void;
  baseRadius: number;
  minRadius: number;
  maxRadius: number;
  orbitDistance: number;
  showLabels: boolean;
  animationSpeed: number;
  nodePositions: Map<number, [number, number, number]>;
}

const Scene: React.FC<SceneProps> = ({
  data,
  selectedNode,
  onNodeSelect,
  baseRadius,
  minRadius,
  maxRadius,
  orbitDistance,
  showLabels,
  animationSpeed,
  nodePositions
}) => {
  // Build node map for quick lookup
  const nodeMap = useMemo(() => {
    const map = new Map<number, TreeNode>();
    const traverse = (node: TreeNode) => {
      map.set(node.id, node);
      node.children?.forEach(traverse);
    };
    traverse(data.data);
    return map;
  }, [data]);

  // Calculate max depth
  const maxDepth = useMemo(() => {
    let max = 0;
    const traverse = (node: TreeNode, depth: number) => {
      max = Math.max(max, depth);
      node.children?.forEach((child) => traverse(child, depth + 1));
    };
    traverse(data.data, 0);
    return max;
  }, [data]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ECDC4" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#FFEAA7" />

      {/* Starfield background */}
      <Starfield />

      {/* Render tree */}
      <TreeNodeRenderer
        node={data.data}
        nodeMap={nodeMap}
        depth={0}
        maxDepth={maxDepth}
        parentPosition={[0, 0, 0]}
        orbitDistance={orbitDistance}
        baseRadius={baseRadius}
        minRadius={minRadius}
        maxRadius={maxRadius}
        selectedNode={selectedNode}
        onNodeSelect={onNodeSelect}
        showLabels={showLabels}
        animationSpeed={animationSpeed}
        nodePositions={nodePositions}
      />
    </>
  );
};

// ============================================================================
// Sidebar Component
// ============================================================================

interface SidebarProps {
  node: TreeNode | null;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '100%',
        background: 'rgba(10, 10, 30, 0.95)',
        backdropFilter: 'blur(10px)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        overflowY: 'auto',
        zIndex: 100,
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <h2 style={{ color: '#ffffff', margin: 0, fontSize: '18px' }}>
          Node Details
        </h2>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DetailItem label="ID" value={node.id.toString()} />
        <DetailItem
          label="Parent ID"
          value={node.parentId?.toString() ?? 'null'}
        />
        <DetailItem label="Text" value={node.text} />
        <DetailItem label="UUID" value={node.uuid} />
        <DetailItem
          label="Children"
          value={node.children?.length?.toString() || '0'}
        />
      </div>
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <div
      style={{
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px',
        marginBottom: '4px'
      }}
    >
      {label}
    </div>
    <div
      style={{
        color: '#ffffff',
        fontSize: '14px',
        wordBreak: 'break-all',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '8px 12px',
        borderRadius: '4px'
      }}
    >
      {value}
    </div>
  </div>
);

// ============================================================================
// Controls Component
// ============================================================================

interface ControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onToggleLabels: () => void;
  showLabels: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
  onToggleLabels,
  showLabels
}) => (
  <div
    style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      zIndex: 100
    }}
  >
    <ControlButton onClick={onZoomIn} icon="+" title="Zoom In" />
    <ControlButton onClick={onZoomOut} icon="−" title="Zoom Out" />
    <ControlButton onClick={onReset} icon="⟲" title="Reset View" />
    <ControlButton
      onClick={onToggleLabels}
      icon="T"
      title={showLabels ? 'Hide Labels' : 'Show Labels'}
      active={showLabels}
    />
  </div>
);

interface ControlButtonProps {
  onClick: () => void;
  icon: string;
  title: string;
  active?: boolean;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  onClick,
  icon,
  title,
  active
}) => (
  <button
    onClick={onClick}
    title={title}
    style={{
      width: '40px',
      height: '40px',
      background: active
        ? 'rgba(78, 205, 196, 0.3)'
        : 'rgba(255, 255, 255, 0.1)',
      border: active
        ? '1px solid #4ECDC4'
        : '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease'
    }}
  >
    {icon}
  </button>
);

// ============================================================================
// Main Component
// ============================================================================

const TreeCosmoVisualization: React.FC<TreeCosmoVisualizationProps> = ({
  data,
  onNodeSelect,
  initialZoom = 1,
  baseRadius = 1,
  minRadius = 0.3,
  maxRadius = 2,
  orbitDistance = 4,
  animationSpeed = 1,
  showLabels: initialShowLabels = true,
  className = ''
}) => {
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [showLabels, setShowLabels] = useState(initialShowLabels);
  const controlsRef = useRef<any>(null);
  const [zoom, setZoom] = useState(initialZoom);

  // Track node positions for camera focus
  const nodePositions = useMemo(() => {
    const positions = new Map<number, [number, number, number]>();
    const traverse = (
      node: TreeNode,
      pos: [number, number, number],
      depth: number,
      orbitDistance: number
    ) => {
      positions.set(node.id, pos);
      if (node.children) {
        const childCount = node.children.length;
        const childOrbitDistance = orbitDistance * (1 + depth * 0.3) * 30;
        node.children.forEach((child, index) => {
          const angleOffset = (2 * Math.PI) / childCount;
          const angle = depth * 0.5 + index * angleOffset;
          const childPos: [number, number, number] = [
            pos[0] + Math.cos(angle) * childOrbitDistance,
            pos[1] + Math.sin(depth * 0.3 + index * 0.2) * 1.5,
            pos[2] + Math.sin(angle) * childOrbitDistance
          ];
          traverse(child, childPos, depth + 1, orbitDistance);
        });
      }
    };
    traverse(data.data, [0, 0, 0], 0, orbitDistance);
    return positions;
  }, [data, orbitDistance]);

  const handleNodeSelect = useCallback(
    (node: TreeNode) => {
      setSelectedNode((prev) => (prev?.id === node.id ? null : node));
      onNodeSelect?.(selectedNode?.id === node.id ? null : node);
    },
    [onNodeSelect, selectedNode]
  );

  const handleCloseSidebar = useCallback(() => {
    setSelectedNode(null);
    onNodeSelect?.(null);
  }, [onNodeSelect]);

  const factor = 1.5;
  const handleZoomIn = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(factor);
      setZoom((prev) => Math.min(prev * factor, 10));
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(factor);
      setZoom((prev) => Math.max(prev / factor, 0.1));
    }
  }, []);

  const handleReset = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      setZoom(initialZoom);
    }
  }, [initialZoom]);

  const handleToggleLabels = useCallback(() => {
    setShowLabels((prev) => !prev);
  }, []);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '400px',
        background:
          'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene
          data={data}
          selectedNode={selectedNode}
          onNodeSelect={handleNodeSelect}
          baseRadius={baseRadius}
          minRadius={minRadius}
          maxRadius={maxRadius}
          orbitDistance={orbitDistance}
          showLabels={showLabels}
          animationSpeed={animationSpeed}
          nodePositions={nodePositions}
        />

        <CameraFocus
          selectedNode={selectedNode}
          nodePositions={nodePositions}
          controlsRef={controlsRef}
        />

        <OrbitControls
          ref={controlsRef}
          enablePan
          enableZoom
          enableRotate
          minDistance={5}
          maxDistance={100}
          autoRotate={!selectedNode}
          autoRotateSpeed={0.5}
          rotateSpeed={-1}
        />

        <CameraController controlsRef={controlsRef} />
      </Canvas>

      {/* Sidebar */}
      <Sidebar node={selectedNode} onClose={handleCloseSidebar} />

      {/* Controls */}
      <Controls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        onToggleLabels={handleToggleLabels}
        showLabels={showLabels}
      />

      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: selectedNode ? '320px' : '20px',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '12px 16px',
          borderRadius: '8px',
          color: '#ffffff',
          fontSize: '12px',
          transition: 'right 0.3s ease',
          zIndex: 100
        }}
      >
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
          Depth Legend
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <LegendItem color="#FF6B6B" label="Root (Depth 0)" />
          <LegendItem color="#4ECDC4" label="Depth 1" />
          <LegendItem color="#45B7D1" label="Depth 2" />
          <LegendItem color="#96CEB4" label="Depth 3+" />
        </div>
      </div>

      {/* Instructions */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '12px 16px',
          borderRadius: '8px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '11px',
          zIndex: 100
        }}
      >
        <div>🖱️ Drag to rotate • Scroll to zoom • Click planet for details</div>
        <div style={{ marginTop: '4px' }}>
          ⌨️ W/A/S/D to move • Q/E for up/down
        </div>
      </div>
    </div>
  );
};

interface LegendItemProps {
  color: string;
  label: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`
      }}
    />
    <span>{label}</span>
  </div>
);

export default TreeCosmoVisualization;
