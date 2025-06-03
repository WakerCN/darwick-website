import React from 'react';
import './index.scss';
import { Timeline, Typography } from 'antd';

const contactAddress = [
  { name: '大连' },
  { name: '威海' },
  { name: '青岛' },
  { name: '深圳' },
  { name: '广州' },
  { name: '广西' }
];

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="left-img"></div>
      <div className="right-content">
        <Typography.Text>7天24小时竭诚为您服务</Typography.Text>
        <Typography.Title className="title" level={3}>
          总部联系方式
        </Typography.Title>
        <Typography.Text>📮 邮箱：info@darwickmarine.com</Typography.Text>
        <br />
        <Typography.Text>☎️ 电话：0086-13685872345</Typography.Text>
        <br />
        <Typography.Text>
          📍 舟山总部地址：浙江省舟山市六横龙山创业路1号
        </Typography.Text>
        <br />
        <Typography.Text>💌 邮编：316131</Typography.Text>
        <Typography.Title className="title" level={3}>
          分服务点地址
        </Typography.Title>
        <Timeline items={contactAddress.map((c) => ({ children: c.name }))} />
      </div>
    </div>
  );
};

export default ContactPage;
