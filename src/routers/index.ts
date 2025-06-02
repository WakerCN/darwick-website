/*
 * @Author       : 魏威
 * @Date         : 2025-06-02 10:41
 * @LastEditTime : 2025-06-02 10:41
 * @LastEditors  : StarOne
 * @Description  :
 */

import { createBrowserRouter } from 'react-router';
import Home from '@/layout/Home/Home.tsx';

export const router = createBrowserRouter([
  {
    path: '/home',
    Component: Home
  }
]);
