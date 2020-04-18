import React from 'react';
import './App.scss';
import { Card } from 'antd';

function App() {

  const allCards = [
    {
      name:"个人简历",
      url:"",
      content:"网页版个人简历，欢迎查阅。"
    }
  ];

  return (
    <div className="wrap">
      <div className="app">
        {
          allCards.map((card,index)=>{
            return (
              <Card hoverable key={index} title={card.name} extra={<a href="#">详情</a>} style={{ width: 300, height: 200 }}>
                {card.content}
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
