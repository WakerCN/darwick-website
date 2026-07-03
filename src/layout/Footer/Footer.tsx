/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 09:54
 * @LastEditTime : 2025-06-13 16:30
 * @LastEditors  : StarOne
 * @Description  :
 */
import Logo from '@/assets/company-logo.webp';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';
const { Text } = Typography;

export const DWFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="webFooter">
      <div className="footer-left">
        <img className="logo" src={Logo} loading="lazy" decoding="async" />
        <div className="logo-desc">
          <Text strong>{t('footer.company')}</Text>
        </div>
      </div>
      <div className="footer-right">
        <div className="info">
          <Text strong>📍 {t('footer.address')}：</Text>
          <br />
          <Text>{t('footer.addressDetail')}</Text>
        </div>
        <div className="info">
          <Text strong>💌 {t('footer.email')}：</Text>{' '}
          <Text>
            <a href="mailto:info@darwickmarine.com">info@darwickmarine.com</a>
          </Text>
        </div>
        <div className="info">
          <Text strong>📮 {t('footer.postal')}：</Text> <Text>316131</Text>
        </div>
      </div>
    </footer>
  );
};
