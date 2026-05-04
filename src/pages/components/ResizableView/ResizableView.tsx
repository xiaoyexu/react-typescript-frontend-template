import React, { useRef } from 'react';

export default ({
  leftView,
  rightView
}: {
  leftView: React.ReactElement;
  rightView: React.ReactElement;
}) => {
  const dataViewRef = useRef<HTMLDivElement>(null);
  const resizableContainerRef = useRef<HTMLDivElement>(null);
  const detailsViewRef = useRef<HTMLDivElement>(null);

  // Handle resize start
  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event propagation

    // Get initial dimensions
    const startX = e.clientX;
    const container = resizableContainerRef.current;
    if (!container) return;

    const startDataWidth = dataViewRef.current?.offsetWidth || 0;
    const startDetailsWidth = detailsViewRef.current?.offsetWidth || 0;

    const handleResize = (moveEvent: MouseEvent) => {
      const diff = moveEvent.clientX - startX;

      if (dataViewRef.current && detailsViewRef.current) {
        // Calculate new widths
        const newDataWidth = startDataWidth + diff;
        const newDetailsWidth = startDetailsWidth - diff;

        // Ensure minimum width (100px each)
        if (newDataWidth >= 100 && newDetailsWidth >= 100) {
          dataViewRef.current.style.flex = `0 0 ${newDataWidth}px`;
          detailsViewRef.current.style.flex = `0 0 ${newDetailsWidth}px`;
        }
      }
    };

    const handleResizeEnd = () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  return (
    <div className="resizable-container" ref={resizableContainerRef}>
      <div className="data-view" ref={dataViewRef}>
        {leftView}
      </div>
      <div className="resize-handle" onMouseDown={handleResizeStart}>
        &nbsp;
      </div>
      <div className="details-view" ref={detailsViewRef}>
        {rightView}
      </div>
    </div>
  );
};
