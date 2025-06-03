/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 09:35
 * @LastEditTime : 2025-06-03 11:26
 * @LastEditors  : StarOne
 * @Description  :
 */
import React from 'react';
import './index.scss';
import { businessList } from '@/constant/bussiness';
import { DWICon } from '@/components/DWIcon';
import { Typography } from 'antd';

export const RepairPage: React.FC = () => {
  return (
    <div className="repair-page">
      {businessList.map((bItem, index) => (
        <div key={bItem.type} className="business-item">
          <Typography.Title
            level={3}
            style={{ marginTop: index === 0 ? 0 : 16 }}
          >
            <DWICon iconName={bItem.iconName} style={{ marginRight: 8 }} />
            {bItem.type}
            {bItem.type === '涡轮增压器' && (
              <div>
                <Typography.Text>
                  ⚙️ ABBVTR0/1、VTR4/P.D.E、VTC4/P、TPS48-61、TPL61-90、A型系列;
                </Typography.Text>
                <br />
                <Typography.Text>
                  ⚙️
                  MAN系列NR12-NR29、NA34~NA70、TCA33~TCA88、TCR12~TCR22、MET18SRC-MET26SRC、MET33~MET83/SB,SC,SD,SE
                </Typography.Text>
                <br />
                <Typography.Text>⚙️ NAPIER 和 MAK、KBB系列</Typography.Text>
              </div>
            )}
            {bItem.type === '调速器' && (
              <div>
                <Typography.Text>
                  ⚙️
                  WOODWARD系列、SG、PSG、UG8、UG40、PGA12-PGA58、PGA200-PGA500、RHD系列、NZ系列、OBAMA
                  EUROPA、1102、1115、2231系列
                </Typography.Text>
              </div>
            )}
            {bItem.type === '燃油泵' && (
              <div>
                <Typography.Text>⚙️ 所有类型</Typography.Text>
              </div>
            )}
            {bItem.type === '液压系统' && (
              <div>
                <Typography.Text>⚙️ 所有类型</Typography.Text>
              </div>
            )}
          </Typography.Title>
        </div>
      ))}
    </div>
  );
};

export default RepairPage;
