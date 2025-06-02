/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:26
 * @LastEditTime : 2025-05-28 09:26
 * @LastEditors  : StarOne
 * @Description  :
 */

import { Typography } from 'antd';
import React from 'react';

interface DWSectionProps {
  title: string;
  children?: React.ReactNode;
}

export const DWSection: React.FC<DWSectionProps> = (props) => {
  const { title, children } = props;

  return (
    <section className="DWSection">
      <Typography.Title level={4}>{title}</Typography.Title>
      {children}
    </section>
  );
};
