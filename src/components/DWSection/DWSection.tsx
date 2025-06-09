/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:26
 * @LastEditTime : 2025-06-08 15:17
 * @LastEditors  : StarOne
 * @Description  :
 */

import { Typography } from 'antd';
import React from 'react';
import { DWICon } from '../DWIcon';
import './index.scss';

interface DWSectionProps {
  title: string;
  children?: React.ReactNode;
}

export const DWSection: React.FC<DWSectionProps> = (props) => {
  const { title, children } = props;

  return (
    <section className="DWSection">
      <Typography.Title level={2}>
        <DWICon className="title-icon" iconName="title" />
        {title}
      </Typography.Title>
      {children}
    </section>
  );
};
