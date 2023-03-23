import React from 'react'; 
import { Card } from 'antd'; 
 
const MenuList = ({ menuItems }) => { 
  return ( 
    <div className="menu-list"> 
      {menuItems.map(item => ( 
        <Card title={item.title} key={item.id}> 
          {item.description} 
        </Card> 
      ))} 
    </div> 
  ); 
}; 
 
export default MenuList;