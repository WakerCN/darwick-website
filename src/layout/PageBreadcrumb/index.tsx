/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 09:10
 * @LastEditTime : 2025-06-10 10:15
 * @LastEditors  : StarOne
 * @Description  :
 */
import { Breadcrumb } from 'antd';
import type { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './index.scss';
import { routerName } from '@/routers';
import { HomeFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const homeItem = { title: <HomeFilled />, href: '/' };

export const PageBreadcrumb: React.FC = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const [items, setItems] = useState<Array<BreadcrumbItemType>>([
    { title: <HomeFilled />, href: '/' }
  ]);

  useEffect(() => {
    const resItems: Array<BreadcrumbItemType> = [homeItem];

    const paths = location.pathname
      .split('/')
      .slice(1)
      .map((item) => {
        return {
          title: t(`menu.${routerName.find((i) => i.path === item)?.i18nName}`)
        };
      });
    setItems([...resItems, ...paths]);
  }, [location.pathname, i18n.language]);

  return <Breadcrumb className="page-breadcrumb" items={items} />;
};
