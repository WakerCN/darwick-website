/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 09:35
 * @LastEditTime : 2025-06-10 09:34
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import './index.scss';
import { businessList } from '@/constant/bussiness';
import { DWICon } from '@/components/DWIcon';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export const RepairPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="repair-page">
      {businessList.map((bItem, index) => (
        <div key={bItem.type} className="business-item">
          <Typography.Title
            level={3}
            style={{ marginTop: index === 0 ? 0 : 16 }}
          >
            <DWICon iconName={bItem.iconName} style={{ marginRight: 8 }} />
            {t(`machine.${bItem.key}`)}
            {bItem.type === '涡轮增压器' && (
              <div>
                <Typography.Text>
                  🌀 ABB VTR0/1、VTR4/P.D.E、VTC4/P、TPS48-61、TPL61-90、A
                  {t(`base.type`)} {t(`base.series`)};
                </Typography.Text>
                <br />
                <Typography.Text>
                  🌀 MAN {t(`base.series`)}{' '}
                  NR12-NR29、NA34~NA70、TCA33~TCA88、TCR12~TCR22、MET18SRC-MET26SRC、MET33~MET83/SB,SC,SD,SE
                </Typography.Text>
                <br />
                <Typography.Text>
                  🌀 NAPIER {t(`base.and`)} MAK、KBB {t(`base.series`)}
                </Typography.Text>
              </div>
            )}
            {bItem.type === '调速器' && (
              <div>
                {/* <Typography.Text>
                  cc {t(`base.series`)}
                  、SG、PSG、UG8、UG40、PGA12-PGA58、PGA200-PGA500、RHD{' '}
                  {t(`base.series`)}、NZ {t(`base.series`)}、OBAMA
                  EUROPA、1102、1115、2231 {t(`base.series`)}
                </Typography.Text> */}
                <Text>
                  🎛️ WOODWARD
                  <br />
                  UG {t('base.series')}: UG5.7、UG8、UG10、UG15、UG25、UG40
                  <br />
                  {'   '}UG {t('base.series')}: UG8L、UG40L
                  <br />
                  {'   '}PGA {t('base.series')}
                  :PGA12、PGA16、PGA29、PGA58、PGA70、PGA200、PGA300、PGA500
                  <br />
                  🎛️ ZEXEL
                  <br />
                  RDH {t('base.series')}: RDH6、RDH10
                  <br />
                  🎛️ YANMAR
                  <br />
                  NZ {t('base.series')}: NZ50、NZ61
                  <br />
                  🎛️ Other Type
                  <br />
                  OBAMA EUROPA 2800{t('base.type')}、1102、1115、2231{' '}
                  {t('base.series')}
                </Text>
              </div>
            )}
            {bItem.type === '燃油泵' && (
              <div>
                <Typography.Text>⚙️ {t(`base.allType`)}</Typography.Text>
              </div>
            )}
            {bItem.type === '液压系统' && (
              <div>
                <Typography.Text>⚙️ {t(`base.allType`)}</Typography.Text>
              </div>
            )}
          </Typography.Title>
        </div>
      ))}
    </div>
  );
};

export default RepairPage;
