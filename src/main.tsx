/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-02 11:08
 * @LastEditors  : StarOne
 * @Description  :
 */
import './styles/index.scss';

import { createRoot } from 'react-dom/client';
import '@/assets/iconfont/iconfont.js';
import { RouterProvider } from 'react-router';
import { router } from './routers/index.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
