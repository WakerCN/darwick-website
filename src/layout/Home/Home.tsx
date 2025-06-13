/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 13:48
 * @LastEditTime : 2025-06-13 14:03
 * @LastEditors  : StarOne
 * @Description  :
 */
import { DWSection } from '@/components/DWSection/DWSection';
import { businessList } from '@/constant/bussiness';
import { brandList } from '@/constant/supplier';
import { workPictureList } from '@/constant/work';
import { Carousel, Col, Flex, Image, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import BrandWall from './BrandWall';
import './index.scss';
import { DWICon } from '@/components/DWIcon';
import { useNavigate } from 'react-router';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const isEn = i18n.language === 'en';

  const handleJumpRepair = () => {
    navigate('/service/repair');
  };

  return (
    <div className="home-section">
      <section className="section1">
        <Flex className="mask" vertical align="center" justify="center">
          <ReactTyped
            className="web-title"
            strings={
              isEn
                ? ['WE CARE ABOUT OUR PROMISIE', 'DRIVE TO THE EXCELLENCE']
                : ['我们信守承诺，追求卓越']
            }
            typeSpeed={80}
            backDelay={3000}
            backSpeed={0}
            showCursor={false}
            loop
          />
          <div className="web-desc">{t('home.desc')}</div>
        </Flex>
      </section>

      <DWSection title={t('home.t3.title')}>
        <Row className="business-area" gutter={[10, 10]}>
          {businessList.map((bItem) => {
            let descElem = null;
            switch (bItem.type) {
              case '涡轮增压器':
                descElem = (
                  <div>
                    🌀 ABB {t('home.t3.series')}： VTR、VTC、TPL、TPS
                    <br />
                    🌀 MAN {t('home.t3.series')}： NR、NA、TCA、TCR、MET
                    <br />
                    🌀 NAPIER、MAK、KBB {t('home.t3.series')}
                    ...
                  </div>
                );
                break;
              case '调速器':
                descElem = (
                  <div>
                    🎛️ WOODWARD {t('home.t3.series')}：UG、PGA
                    <br />
                    🎛️ ZEXEL {t('home.t3.series')}：RHD
                    <br />
                    🎛️ YANMAR {t('home.t3.series')}：NZ
                    <br />
                    🎛️ OBAMA EUROPA、SG、PSG、1102、1115、2231
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
                onClick={handleJumpRepair}
              >
                <div className="card-content">
                  <Flex
                    className="card-title"
                    vertical
                    justify="center"
                    align="center"
                  >
                    <DWICon
                      iconName={bItem.iconName}
                      style={{ width: 40, height: 40, color: '#fff' }}
                    />
                    <span>{t(`machine.${bItem.key}`)}</span>
                  </Flex>
                  <div className="card-desc">{descElem}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DWSection>

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

      <DWSection title={t('home.t4.title')}>
        <Row className="section4">
          <Col
            className="description"
            span={8}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={8}
            xxl={8}
          >
            <div
              className="card-item"
              onClick={() => navigate('/service/contact')}
            >
              <DWICon className="service-icon" iconName="_24h" />
              <Typography.Text className="list-item">
                {t('home.t4.title')}
              </Typography.Text>
            </div>
            <div
              className="card-item"
              onClick={() => navigate('/service/contact')}
            >
              <DWICon className="service-icon" iconName="city" />
              <Typography.Text className="list-item">
                {t('home.t4.p2')}
              </Typography.Text>
            </div>
            <div
              className="card-item"
              onClick={() => navigate('/service/contact')}
            >
              <DWICon className="service-icon" iconName="hand" />
              <Typography.Text className="list-item">
                {t('home.t4.p3')}
              </Typography.Text>
            </div>
          </Col>
          <Col
            className="right-pic"
            span={16}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={16}
            xxl={16}
          />
        </Row>
      </DWSection>
    </div>
  );
};

export default Home;
