/*
 * @Author       : 魏威
 * @Date         : 2025-06-08 10:08
 * @LastEditTime : 2025-06-09 08:21
 * @LastEditors  : StarOne
 * @Description  :
 */

import type { Picture } from './work';

import pic1 from '@/assets/certification/certificate-dtc.jpg';
import pic2 from '@/assets/certification/certificate-wnk.jpg';
import pic3 from '@/assets/certification/MES.png';
import pic4 from '@/assets/certification/MET.png';
import pic5 from '@/assets/certification/woodward.png';
import pic6 from '@/assets/certification/ISO.jpeg';

export const certificatePictureList: Picture[] = [
  {
    key: 'c-iso',
    url: pic6
  },
  {
    key: 'c-balance-dtc',
    url: pic1
  },
  {
    key: 'c-balance-wnk',
    url: pic2
  },
  {
    key: 'c-mes',
    url: pic3
  },
  {
    key: 'c-met',
    url: pic4
  },
  {
    key: 'c-woodward',
    url: pic5
  }
];
