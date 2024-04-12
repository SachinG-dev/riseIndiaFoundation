// VerticalTabs.tsx
import React, { useEffect, Suspense } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { TabButton } from "./VerticalTabsButton";

interface TabItem {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs: TabItem[];
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

function VerticalTabs({ tabs, activeTab, setActiveTab }: VerticalTabsProps) {
  function handleTabChange(tabKey: string) {
    if (setActiveTab) {
      setActiveTab(tabKey);
    }
  }
  useEffect(() => {}, [activeTab]);

  return (
    <Tab.Container id="vertical-tabs" activeKey={activeTab}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column mt-5">
            {tabs.map((tab) => (
              <TabButton
                key={tab.key}
                title={tab.title}
                active={activeTab === tab.key}
                onClick={() => handleTabChange(tab.key)}
              />
            ))}
          </Nav>
        </Col>
        <Col
          sm={9}
          className="tab-content col-lg-9 col-sm-8 p-0 pb-5 border-start"
        >
          <Tab.Content>
            {tabs.map((tab) => (
              <Tab.Pane key={tab.key} eventKey={tab.key}>
                {activeTab === tab.key && (
                  <Suspense fallback={<div>Loading...</div>}>
                    {tab.content}
                  </Suspense>
                )}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default VerticalTabs;
