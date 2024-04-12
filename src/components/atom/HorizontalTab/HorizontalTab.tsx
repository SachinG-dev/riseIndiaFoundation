import React, { useState } from "react";
import { Nav, TabContent, Tab } from "react-bootstrap";
import "./HorizontalTab.css";

interface HorizontalTab {
  key: string;
  title: string;
  content: React.ReactNode; // Assuming each tab has associated content
}

interface HorizontalTabsProps {
  tabs: HorizontalTab[];
}

export function HorizontalTabs({ tabs }: HorizontalTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      <Nav variant="tabs" className="custom-nav">
        {tabs.map((tab) => (
          // <TabButton
          //   key={tab.key}
          //   title={tab.title}
          //   active={activeTab === tab.key}
          //   onClick={() => handleTabClick(tab.key)}
          // />
          <Nav.Item
            key={tab.key}
            className={`custom-tab ${activeTab === tab.key ? "active" : ""}`}
          >
            <Nav.Link
              active={activeTab === tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={activeTab === tab.key ? "active-tab-link" : ""}
            >
              {tab.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      {/* <Card> */}
      <TabContent>
        {tabs.map((tab) => (
          <Tab.Pane
            key={tab.key}
            eventKey={tab.key}
            active={activeTab === tab.key}
          >
            {tab.content}
          </Tab.Pane>
        ))}
      </TabContent>
      {/* </Card> */}
    </div>
  );
}
