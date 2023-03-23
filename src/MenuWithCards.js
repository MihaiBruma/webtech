import { Menu, Card } from 'antd';

const { SubMenu } = Menu;

function handleClick(e) {
  const cardContent = (
    <div style={{ padding: '30px' }}>
      <Card title={`Card Title ${e.key}`} bordered={false}>
        <p>Card content for {e.key} goes here</p>
      </Card>
    </div>
  );
  window.open(`data:text/html;charset=UTF-8,${encodeURIComponent(cardContent)}`);
}

function MenuWithCards() {
  return (
    <div>
      <Menu onClick={handleClick} mode="horizontal">
        <SubMenu key="sub1" title="Menu">
          <Menu.Item key="1">Item 1</Menu.Item>
          <Menu.Item key="2">Item 2</Menu.Item>
          <Menu.Item key="3">Item 3</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default MenuWithCards;