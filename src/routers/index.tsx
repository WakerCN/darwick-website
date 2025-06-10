/*
 * @Author       : 魏威
 * @Date         : 2025-06-02 10:41
 * @LastEditTime : 2025-06-08 14:09
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
const FeedbackPage = lazy(() => import('@/views/service/Feedback/index.tsx'));
const AboutPage = lazy(() => import('@/views/About/AboutPage.tsx'));
const WorkshopPage = lazy(() => import('@/views/About/WorkShop/index.tsx'));
const CompanyPage = lazy(() => import('@/views/About/Company/index.tsx'));
const CertificatePage = lazy(
  () => import('@/views/About/Certificate/index.tsx')
);
const BusinessPage = lazy(() => import('@/views/About/Business/index.tsx'));

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
          },
          {
            path: 'feedback',
            Component: FeedbackPage
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
            Component: CertificatePage
          },
          {
            path: 'company',
            Component: CompanyPage
          },
          {
            path: 'business',
            Component: BusinessPage
          }
        ]
      }
    ]
  }
]);

export const routerName = [
  {
    path: 'service',
    name: '服务',
    i18nName: 'service'
  },
  {
    path: 'repair',
    name: '备件供应与维修',
    i18nName: 'repair'
  },
  {
    path: 'contact',
    name: '服务地址与联系方式',
    i18nName: 'serviceContact'
  },
  {
    path: 'feedback',
    name: '服务地址与联系方式',
    i18nName: 'feedback'
  },
  {
    path: 'about',
    name: '关于我们',
    i18nName: 'about'
  },
  {
    path: 'workshop',
    name: '车间设施与工程师',
    i18nName: 'workshop'
  },
  {
    path: 'certificate',
    name: '资质认证',
    i18nName: 'certification'
  },
  {
    path: 'company',
    name: '公司简介',
    i18nName: 'company'
  },
  {
    path: 'business',
    name: '业绩历史',
    i18nName: 'business'
  }
];
