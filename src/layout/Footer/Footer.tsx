/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:54
 * @LastEditTime : 2025-05-28 11:03
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import './index.scss';
import Logo from '@/assets/company-logo.png';

export const DWFooter: React.FC = () => {
  return (
    <footer className="webFooter">
      <div className="footer-left">
        <img className="logo" src={Logo} />
        <div className="logo-desc">大威船舶服务工程有限公司</div>
      </div>
      <div className="footer-right">
        <div className="info">
          地址：
          <br />
          浙江省舟山市六横龙山创业路1号
        </div>
        <div className="info">
          邮编：
          <br />
          316131
        </div>
        <div className="info">
          邮箱/E-mail：
          <br />
          info@darwickmarine.com
        </div>
      </div>
    </footer>
  );
};
