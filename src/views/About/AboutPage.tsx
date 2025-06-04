/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 13:27
 * @LastEditTime : 2025-06-04 11:04
 * @LastEditors  : StarOne
 * @Description  :
 */
import { PageBreadcrumb } from '@/layout/PageBreadcrumb';
import { Affix, Menu, type MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import './aboutPage.scss';

export const AboutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('about/workshop');

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
                  label: '配件供应与维修',
                  key: '/about/workshop'
                },
                {
                  label: '资质认证',
                  key: '/about/certificate'
                },
                {
                  label: '公司简介',
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
