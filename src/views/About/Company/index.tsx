/*
 * @Author       : 魏威
 * @Date         : 2025-06-04 11:09
 * @LastEditTime : 2025-06-08 14:22
 * @LastEditors  : StarOne
 * @Description  : 
 */
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Paragraph } = Typography;

export const CompanyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="company-about">
      <Paragraph>{t('about.g1')}</Paragraph>
      <Paragraph>{t('about.g2')}</Paragraph>
      <Paragraph>{t('about.g3')}</Paragraph>
    </div>
  );
};

export default CompanyPage;
