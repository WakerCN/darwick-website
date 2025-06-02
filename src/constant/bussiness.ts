/*
 * @Author       : 魏威
 * @Date         : 2025-05-28 14:07
 * @LastEditTime : 2025-05-28 14:07
 * @LastEditors  : StarOne
 * @Description  : 业务范围
 */

interface Business {
  type: string;
  pic?: string;
  desc?: string;
}

export const businessList: Array<Business> = [
  { type: '涡轮增压器' },
  { type: '调速器' },
  { type: '燃油泵' },
  { type: '液压系统' }
];
