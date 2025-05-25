import React, { ReactNode, useState } from 'react';
import styles from './TabManager.module.scss';

type Tabs = {
  title: string;
  element: ReactNode;
};

type TabManagerProps = {
  tabs: Tabs[];
};

const TabManager: React.FC<TabManagerProps> = ({ tabs }) => {
  const tabNames = tabs.map((tab) => tab.title);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabHeader}>
        {tabNames.map((name, index) => (
          <div
            key={name}
            className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].element}</div>
    </div>
  );
};

export default TabManager;
