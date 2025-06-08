/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 10:21
 * @LastEditTime : 2025-06-08 10:00
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import './index.scss';
import { Timeline, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const contactAddress = [
  { key: 'dl', name: '大连' },
  { key: 'wh', name: '威海' },
  { key: 'qd', name: '青岛' },
  { key: 'sz', name: '深圳' },
  { key: 'gz', name: '广州' },
  { key: 'gx', name: '广西' }
];

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="left-img" />
      <div className="right-content">
        <Typography.Text>{t('contact.service')}</Typography.Text>
        <Typography.Title className="title" level={3}>
          {t('contact.mainContact')}
        </Typography.Title>
        <Typography.Text>
          📮 <Typography.Text strong>{t('contact.email')}：</Typography.Text>
          info@darwickmarine.com
        </Typography.Text>
        <br />
        <Typography.Text>
          ☎️ <Typography.Text strong>{t('contact.phone')}：</Typography.Text>
          0086-13685872345
        </Typography.Text>
        <br />
        <Typography.Text>
          📍 <Typography.Text strong>{t('contact.address')}：</Typography.Text>
          {t('contact.addressDetail')}
        </Typography.Text>
        <br />
        <Typography.Text>
          💌 <Typography.Text strong>{t('contact.postal')}：</Typography.Text>
          316131
        </Typography.Text>
        <Typography.Title className="title" level={3}>
          {t('contact.otherContact')}
        </Typography.Title>
        <Timeline
          items={contactAddress.map((c) => ({
            children: t(`contact.city.${c.key}`)
          }))}
        />
      </div>
    </div>
  );
};

export default ContactPage;
