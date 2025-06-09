/*
 * @Author       : 魏威
 * @Date         : 2025-05-30 16:41
 * @LastEditTime : 2025-06-08 14:42
 * @LastEditors  : StarOne
 * @Description  :
 */
import pic2 from '@/assets/work/02-ash-grit-blasting.jpg';
import pic3 from '@/assets/work/03-balance-test.jpg';
import pic4 from '@/assets/work/04-measuring.jpg';
import pic5 from '@/assets/work/05-turbo-blade-repairs.jpg';
import pic6 from '@/assets/work/06-LaserWeldingForBlades.jpg';
import pic8 from '@/assets/work/08-LaserAidedReclamation.jpg';
import pic9 from '@/assets/work/09-governor-overhaul.jpg';
import pic10 from '@/assets/work/10-bench-test.jpg';
import pic11 from '@/assets/work/11-bench-test.jpg';
import pic12 from '@/assets/work/12-onboard.jpg';

export interface Picture {
  key: string;
  url: string;
}

export interface WrokPicture extends Picture {
  /** 渲染文字 */
  title: string;
}

export const workPictureList: Array<WrokPicture> = [
  {
    key: 'ash',
    title: '打砂',
    url: pic2
  },
  {
    key: 'balance-test',
    title: '平衡测试',
    url: pic3
  },
  {
    key: 'measuring',
    title: '测量',
    url: pic4
  },
  {
    key: 'turbo-blade-repairs',
    title: '叶轮修复',
    url: pic5
  },
  {
    key: 'laser-welding-for-blades',
    title: '叶轮焊接',
    url: pic6
  },
  {
    key: 'laser-aided-reclamation',
    title: '激光熔覆',
    url: pic8
  },
  {
    key: 'governor-overhaul',
    title: '调速器检修',
    url: pic9
  },
  {
    key: 'bench-test',
    title: '台架测试',
    url: pic10
  },
  {
    key: 'bench-test',
    title: '台架测试',
    url: pic11
  },
  {
    key: 'onboard',
    title: '船上作业',
    url: pic12
  }
];
