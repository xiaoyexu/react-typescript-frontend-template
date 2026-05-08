import React, { createContext, useContext, useState, useCallback } from 'react';
import { NavBar } from 'antd-mobile';

export type NavBarConfig = {
  disabled?: boolean;
  title?: string;
  onBack?: () => void;
  back?: React.ReactNode;
  backIcon?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const NavBarContext = createContext<{
  config: NavBarConfig;
  setNavBarConfig: (config: NavBarConfig) => void;
}>({ config: {}, setNavBarConfig() {} });

export const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [config, setConfig] = useState<NavBarConfig>({});

  return (
    <NavBarContext.Provider value={{ config, setNavBarConfig: setConfig }}>
      {config.disabled ? (
        <> {children}</>
      ) : (
        <>
          <NavBar
            back={config.back}
            backIcon={config.backIcon}
            left={config.left}
            right={config.right}
            onBack={config.onBack || (() => window.history.back())}
          >
            {config.title}
          </NavBar>
          <div style={{ paddingTop: 45 }}>{children}</div>
        </>
      )}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;
