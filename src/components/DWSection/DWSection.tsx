/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:26
 * @LastEditTime : 2025-12-22
 * @LastEditors  : StarOne
 * @Description  : 区块组件 - 带滚动渐入动画
 */

import { Typography } from 'antd';
import React from 'react';
import { DWICon } from '../DWIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './index.scss';

interface DWSectionProps {
  title: string;
  children?: React.ReactNode;
}

export const DWSection: React.FC<DWSectionProps> = (props) => {
  const { title, children } = props;
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      className={`DWSection ${isVisible ? 'animate-visible' : 'animate-hidden'}`}
      ref={ref}
    >
      <Typography.Title level={2}>
        <DWICon className="title-icon" iconName="title" />
        {title}
      </Typography.Title>
      {children}
    </section>
  );
};
