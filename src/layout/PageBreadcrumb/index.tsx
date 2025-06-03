/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 09:10
 * @LastEditTime : 2025-06-03 10:13
 * @LastEditors  : StarOne
 * @Description  :
 */
import { Breadcrumb } from 'antd';
import type { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './index.scss';
import { routerName } from '@/routers';

export const PageBreadcrumb: React.FC = () => {
  const location = useLocation();

  const [items, setItems] = useState<Array<BreadcrumbItemType>>([
    { title: '首页', href: '/' }
  ]);

  useEffect(() => {
    const homeItem = { title: '首页', href: '/' };
    const resItems: Array<BreadcrumbItemType> = [homeItem];

    const paths = location.pathname
      .split('/')
      .slice(1)
      .map((item) => {
        return { title: routerName.find((i) => i.path === item)?.name };
      });
    setItems([...resItems, ...paths]);
  }, [location.pathname]);

  return <Breadcrumb className="page-breadcrumb" items={items} />;
};
