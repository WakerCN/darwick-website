/*
 * @Author       : 魏威
 * @Date         : 2025-06-04 11:09
 * @LastEditTime : 2025-06-08 16:01
 * @LastEditors  : StarOne
 * @Description  :
 */
import { DWPicktureGroup } from '@/components/DWPictureGroup';
import { DWSection } from '@/components/DWSection/DWSection';
import { teamPictureList } from '@/constant/team';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Paragraph } = Typography;

export const CompanyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="company-about">
      <DWSection title="About us">
        <Paragraph>{t('about.g1')}</Paragraph>
        <Paragraph>{t('about.g2')}</Paragraph>
        <Paragraph>{t('about.g3')}</Paragraph>
      </DWSection>
      <DWSection title="Team Pictures">
        <DWPicktureGroup items={teamPictureList} showDesc={false} />
      </DWSection>
    </div>
  );
};

export default CompanyPage;
