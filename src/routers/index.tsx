/*
 * @Author       : 魏威
 * @Date         : 2025-06-02 10:41
 * @LastEditTime : 2025-06-04 11:17
 * @LastEditors  : StarOne
 * @Description  :
 */

import { createBrowserRouter } from 'react-router';
import Home from '@/layout/Home/Home.tsx';
import APP from '@/App.tsx';
import { lazy } from 'react';
const Service = lazy(() => import('@/views/service/index.tsx'));
const RepairPage = lazy(() => import('@/views/service/Repair/index.tsx'));
const ContactPage = lazy(() => import('@/views/service/Contact/index.tsx'));
const AboutPage = lazy(() => import('@/views/About/AboutPage.tsx'));
const WorkshopPage = lazy(() => import('@/views/About/WorkShop/index.tsx'));
const CompanyPage =lazy(() => import('@/views/About/Company/index.tsx'));

// import RepairPage from '@/views/service/Repair/index.tsx';
// import ContactPage from '@/views/service/Contact/index.tsx';
// import AboutPage from '@/views/About/AboutPage.tsx';
// import WorkshopPage from '@/views/About/WorkShop/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: APP,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'service',
        Component: () => <Service />,
        children: [
          {
            index: true,
            path: 'repair',
            Component: () => <RepairPage />
          },
          {
            path: 'contact',
            Component: () => <ContactPage />
          }
        ]
      },
      {
        path: '/about',
        Component: () => <AboutPage />,
        children: [
          {
            index: true,
            path: 'workshop',
            Component: WorkshopPage
          },
          {
            path: 'certificate',
            Component: () => <div>certificate</div>
          },
          {
            path: 'company',
            Component: CompanyPage
          }
        ]
      }
    ]
  }
]);

export const routerName = [
  {
    path: 'service',
    name: '服务'
  },
  {
    path: 'repair',
    name: '备件供应与维修'
  },
  {
    path: 'contact',
    name: '服务地址与联系方式'
  },
  {
    path: 'about',
    name: '关于我们'
  },
  {
    path: 'workshop',
    name: '车间设施与工程师'
  },
  {
    path: 'certificate',
    name: '资质认证'
  },
  {
    path: 'company',
    name: '公司简介'
  }
];
