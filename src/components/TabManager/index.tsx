import React, { ReactNode, useState } from 'react';
import styles from './TabManager.module.scss';

type TabManagerProps = {
  tabs: Record<string, ReactNode>;
};

const TabManager: React.FC<TabManagerProps> = ({ tabs }) => {
  const tabNames = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState<string>(tabNames[0]);

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabHeader}>
        {tabNames.map((name) => (
          <div
            key={name}
            className={`${styles.tabItem} ${activeTab === name ? styles.active : ''}`}
            onClick={() => setActiveTab(name)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab]}</div>
    </div>
  );
};

export default TabManager;
