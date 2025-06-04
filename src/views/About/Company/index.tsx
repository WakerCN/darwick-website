import { Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

export const CompanyPage: React.FC = () => {
  return (
    <div className="company-about">
      <Paragraph>
        大威船舶将是您在船用涡轮增压器、调速器、燃油泵和液压系统领域的可靠服务提供商。
      </Paragraph>
      <Paragraph>
        我们的工程师在三菱、曼恩和伍德沃德接受过培训，我们聘请了前ABB和曼恩工程师，并有持续的培训计划，确保他们与市场上最新的涡轮增压器和调速器等保持同步。
      </Paragraph>
      <Paragraph>大威船舶通过了DNV-GLISO9001-2015认证。</Paragraph>
    </div>
  );
};

export default CompanyPage;
