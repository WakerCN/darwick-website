/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 13:27
 * @LastEditTime : 2025-06-06 22:28
 * @LastEditors  : StarOne
 * @Description  :
 */
import { PageBreadcrumb } from '@/layout/PageBreadcrumb';
import { Affix, Menu, type MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import './aboutPage.scss';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState('about/workshop');

  const { t } = useTranslation();

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location.pathname, navigate]);

  const onClick: MenuProps['onClick'] = (info) => {
    navigate(info.key);
  };

  return (
    <div className="about-view">
      <PageBreadcrumb />
      <div className="content">
        <div className="aside">
          <Affix style={{ position: 'absolute', top: '170px', width: '200px' }}>
            <Menu
              selectedKeys={[activeKey]}
              onClick={onClick}
              items={[
                {
                  label: t('menu.workshop'),
                  key: '/about/workshop'
                },
                {
                  label: t('menu.certification'),
                  key: '/about/certificate'
                },
                {
                  label: t('menu.company'),
                  key: '/about/company'
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

export default AboutPage;
