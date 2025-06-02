/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 13:48
 * @LastEditTime : 2025-06-02 10:29
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import PNG1 from '@/assets/home/home-png1.png';
import './index.scss';
import { brandList } from '@/constant/supplier';
import BrandWall from './BrandWall';
import { DWSection } from '@/components/DWSection/DWSection';
import { Carousel, Col, Row, Typography, Image } from 'antd';
import { businessList } from '@/constant/bussiness';
import { workPictureList } from '@/constant/work';

export const Home: React.FC = () => {
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
          <div className="desc-2">
            您在船用涡轮增压器、调速器、燃油泵和
            <br />
            液压系统领域的可靠服务商
          </div>
        </div>
      </section>
      <DWSection title={'备件服务商'}>
        <BrandWall brands={brandList} />
      </DWSection>
      <DWSection title={'专业可靠的选择'}>
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
                    style={{
                      width: '700px',
                      height: '400px',
                      objectFit: 'cover'
                    }}
                    src={item.url}
                  />
                </div>
              );
            })}
          </Carousel>
          <div className="description">
            <Typography.Text className="list-item">
              ⛑️ 工程师在三菱、曼恩和伍德沃德接受培训
            </Typography.Text>
            <Typography.Text className="list-item">
              ⛑️ 聘请前ABB和曼恩工程师
            </Typography.Text>
            <Typography.Text className="list-item">
              ⚙️
              持续的工程师培训计划，确保与市场上最新的涡轮增压和调速器保持同步
            </Typography.Text>
            <Typography.Text className="list-item">
              📃 DNV-GL ISO9001-2015 认证
            </Typography.Text>
          </div>
        </div>
      </DWSection>
      <DWSection title={'丰富全面的配件供应与维修服务'}>
        <Row className="business-area" gutter={[10, 10]}>
          {businessList.map((bItem) => {
            let descElem = null;
            switch (bItem.type) {
              case '涡轮增压器':
                descElem = (
                  <div>
                    ⚙️ ABB VTR0/1、TPL、A 型系列
                    <br />
                    ⚙️ MAN 系列 NR、NA、TCA、TCR、MET
                    <br />
                    ⚙️ NAPIER 和 MAK、KBB 系列...
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
                descElem = <div>所有类型</div>;
                break;
              case '液压系统':
                descElem = <div>所有类型</div>;
                break;
              default:
                break;
            }
            return (
              <Col className="business-card" span={12} key={bItem.type}>
                <div className="card-content">
                  <div className="card-title">{bItem.type}</div>
                  <div className="card-desc">{descElem}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DWSection>
      <DWSection title={'7天24小时全天候服务'}>
        <div className="section4">
          <div className="left-pic" />
          <div className="description">
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-_24h"></use>
              </svg>
              <Typography.Text className="list-item">
                提供 7 天 24 全天服务
              </Typography.Text>
            </div>
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-city"></use>
              </svg>
              <Typography.Text className="list-item">
                全国多个港口城市服务点
              </Typography.Text>
            </div>
            <div className="card-item">
              <svg className="icon service-icon" aria-hidden="true">
                <use xlinkHref="#icon-hand"></use>
              </svg>
              <Typography.Text className="list-item">
                您在中国沿海可靠伙伴
              </Typography.Text>
            </div>
          </div>
        </div>
      </DWSection>
    </div>
  );
};

export default Home;
