/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:54
 * @LastEditTime : 2025-06-06 22:20
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import './index.scss';
import Logo from '@/assets/company-logo.png';
import { useTranslation } from 'react-i18next';

export const DWFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="webFooter">
      <div className="footer-left">
        <img className="logo" src={Logo} />
        <div className="logo-desc">大威船舶服务工程有限公司</div>
      </div>
      <div className="footer-right">
        <div className="info">
          {t('footer.address')}：
          <br />
          {t('footer.addressDetail')}
        </div>
        <div className="info">
          {t('footer.postal')}：
          <br />
          316131
        </div>
        <div className="info">
          {t('footer.email')}：
          <br />
          info@darwickmarine.com
        </div>
      </div>
    </footer>
  );
};
