/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 13:27
 * @LastEditTime : 2025-06-08 10:31
 * @LastEditors  : StarOne
 * @Description  :
 */
import { PageBreadcrumb } from '@/layout/PageBreadcrumb';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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

  // 移动端不使用 Affix:其内部会在滚动吸顶时动态改写内联样式,
  // 与固定的 position: absolute 内联样式及 CSS 媒体查询相互冲突,
  // 曾导致菜单悬浮叠在内容上(见 PR #4 / revert PR #5)。
  // 移动端直接渲染 Menu,规避该冲突。
  const isMobile = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    setActiveKey(location.pathname);
  }, [location.pathname, navigate]);

  const onClick: MenuProps['onClick'] = (info) => {
    navigate(info.key);
  };

  const menu = (
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
        },
        {
          label: t('menu.business'),
          key: '/about/business'
        }
      ]}
    />
  );

  return (
    <div className="about-view">
      <PageBreadcrumb />
      <div className="content">
        <div className="aside">
          {isMobile ? (
            menu
          ) : (
            <Affix
              style={{ position: 'absolute', top: '170px', width: '200px' }}
            >
              {menu}
            </Affix>
          )}
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
