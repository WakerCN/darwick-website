import { commentList } from '@/constant/feedback';
import { Flex, Rate, Typography } from 'antd';
import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

export const FeedbackPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="feedback-pages">
      <div className="customer-reviews">
        <h3>{t('feedback.title')}</h3>
        <ul>
          {commentList.map((c) => (
            <li className="comment-item" key={c.ShipName}>
              <p>
                <strong style={{ fontSize: '1.2rem' }}>🚢 {c.ShipName}</strong>
                <br />
                <Typography.Paragraph>
                  <strong>{c.TechnicianName}:</strong> {c.Review}
                </Typography.Paragraph>
                <Flex align="center" justify="start" gap={10}>
                  Rating：{c.Rating}{' '}
                  <Rate count={5} value={c.StarRating}></Rate>
                </Flex>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackPage;
