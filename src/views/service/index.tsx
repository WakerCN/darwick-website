/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 08:38
 * @LastEditTime : 2025-06-06 22:35
 * @LastEditors  : StarOne
 * @Description  :
 */
import { PageBreadcrumb } from '@/layout/PageBreadcrumb';
import { Affix, Menu, type MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import './index.scss';
import { useTranslation } from 'react-i18next';

export const ServiceView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState('service/repair');

  const { t } = useTranslation();

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location.pathname, navigate]);

  const onClick: MenuProps['onClick'] = (info) => {
    navigate(info.key);
  };

  return (
    <div className="service-view">
      <PageBreadcrumb />
      <div className="content">
        <div className="aside">
          <Affix style={{ position: 'absolute', top: '170px', width: '200px' }}>
            <Menu
              selectedKeys={[activeKey]}
              onClick={onClick}
              items={[
                {
                  label: t('menu.repair'),
                  key: '/service/repair'
                },
                {
                  label: t('menu.serviceContact'),
                  key: '/service/contact'
                }
              ]}
            />
          </Affix>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
