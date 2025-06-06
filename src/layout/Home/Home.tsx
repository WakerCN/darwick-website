/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 13:48
 * @LastEditTime : 2025-06-06 22:38
 * @LastEditors  : StarOne
 * @Description  :
 */
import PNG1 from '@/assets/home/home-png1.png';
import { DWSection } from '@/components/DWSection/DWSection';
import { businessList } from '@/constant/bussiness';
import { brandList } from '@/constant/supplier';
import { workPictureList } from '@/constant/work';
import { Carousel, Col, Image, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BrandWall from './BrandWall';
import './index.scss';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-section">
      <section className="section1">
        <div className="img1-area">
          <img className="img1" src={PNG1} />
        </div>
        <div className="description">
          <div className="desc-1">
            WE CARE ABOUT OUR PROMISIE,
            <br />
            DRIVE TO THE EXCELLENCE
          </div>
          <div className="desc-2">{t('home.desc')}</div>
        </div>
      </section>

      <DWSection title={t('home.t1')}>
        <BrandWall brands={brandList} />
      </DWSection>

      <DWSection title={t('home.t2.title')}>
        <div className="section3">
          <Carousel
            className="image-area"
            autoplay={{ dotDuration: true }}
            autoplaySpeed={2000}
          >
            {workPictureList.map((item) => {
              return (
                <div className="image-item" key={item.title}>
                  <Image
                    width={'100%'}
                    style={{ objectFit: 'contain' }}
                    src={item.url}
                  />
                </div>
              );
            })}
          </Carousel>
          <div className="description">
            <Typography.Text className="list-item">
              ⛑️ {t('home.t2.p1')}
            </Typography.Text>
            <Typography.Text className="list-item">
              ⛑️ {t('home.t2.p2')}
            </Typography.Text>
            <Typography.Text className="list-item">
              ⚙️ {t('home.t2.p3')}
            </Typography.Text>
            <Typography.Text className="list-item">
              ⚙️ {t('home.t2.p4')}
            </Typography.Text>
          </div>
        </div>
      </DWSection>

      <DWSection title={t('home.t3.title')}>
        <Row className="business-area" gutter={[10, 10]}>
          {businessList.map((bItem) => {
            let descElem = null;
            switch (bItem.type) {
              case '涡轮增压器':
                descElem = (
                  <div>
                    ⚙️ ABB VTR0/1、TPL、A{t('home.t3.type')}{' '}
                    {t('home.t3.series')}
                    <br />
                    ⚙️ MAN {t('home.t3.series')} NR、NA、TCA、TCR、MET
                    <br />
                    ⚙️ NAPIER {t('home.t3.and')} MAK、KBB {t('home.t3.series')}
                    ...
                  </div>
                );
                break;
              case '调速器':
                descElem = (
                  <div>
                    ⚙️ WOODWARD、SG、PSG、UG、PGA、RHD、NZ、OBAMA EUROPA
                  </div>
                );
                break;
              case '燃油泵':
                descElem = <div>⚙️ {t('home.t3.allType')}</div>;
                break;
              case '液压系统':
                descElem = <div>⚙️ {t('home.t3.allType')}</div>;
                break;
              default:
                break;
            }
            return (
              <Col
                className="business-card"
                span={12}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={12}
                xxl={12}
                key={bItem.type}
              >
                <div className="card-content">
                  <div className="card-title">{t(`machine.${bItem.key}`)}</div>
                  <div className="card-desc">{descElem}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DWSection>

      <DWSection title={t('home.t4.title')}>
        <div className="section4">
          <div className="left-pic" />
          <div className="description">
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-_24h"></use>
              </svg>
              <Typography.Text className="list-item">
                {t('home.t4.title')}
              </Typography.Text>
            </div>
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-city"></use>
              </svg>
              <Typography.Text className="list-item">
                {t('home.t4.p2')}
              </Typography.Text>
            </div>
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-hand"></use>
              </svg>
              <Typography.Text className="list-item">
                {t('home.t4.p3')}
              </Typography.Text>
            </div>
          </div>
        </div>
      </DWSection>
    </div>
  );
};

export default Home;
