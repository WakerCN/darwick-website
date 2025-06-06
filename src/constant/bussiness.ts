/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 14:07
 * @LastEditTime : 2025-06-03 10:40
 * @LastEditors  : StarOne
 * @Description  : 业务范围
 */

interface Business {
  key: string;
  type: string;
  iconName: string;
  pic?: string;
  desc?: string;
}

export const businessList: Array<Business> = [
  {
    key: 'tc',
    type: '涡轮增压器',
    iconName: 'turbocharger'
  },
  {
    key: 'gov',
    type: '调速器',
    iconName: 'governor'
  },
  {
    key: 'fp',
    type: '燃油泵',
    iconName: 'pump'
  },
  {
    key: 'hy',
    type: '液压系统',
    iconName: 'hydraulic-system'
  }
];
