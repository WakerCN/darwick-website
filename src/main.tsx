/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-02 10:46
 * @LastEditors  : StarOne
 * @Description  :
 */
import './styles/index.scss';

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@/assets/iconfont/iconfont.js';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
