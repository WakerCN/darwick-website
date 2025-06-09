/*
 * @Author       : 魏威
 * @Date         : 2025-06-05 14:53
 * @LastEditTime : 2025-06-08 16:05
 * @LastEditors  : StarOne
 * @Description  : 图片渲染组件
 */
import type { Picture } from '@/constant/work';
import { Col, Image, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';

interface DWPicktureGroupProps {
  items: Picture[];
  showDesc?: boolean;
}

export const DWPicktureGroup: React.FC<DWPicktureGroupProps> = (props) => {
  const { items, showDesc = true } = props;

  const { t } = useTranslation();

  return (
    <Row className="pic-wrap" gutter={[20, 20]}>
      <Image.PreviewGroup>
        {items.map((item) => {
          return (
            <Col
              className="card-wrap"
              span={8}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={8}
              xxl={8}
            >
              <Image
                className="card-img"
                src={item.url}
                width={'100%'}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              {showDesc && (
                <div className="desc">
                  <Typography.Text>{t(`picture.${item.key}`)}</Typography.Text>
                </div>
              )}
            </Col>
          );
        })}
      </Image.PreviewGroup>
    </Row>
  );
};
