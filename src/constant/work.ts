import pic2 from '@/assets/work/02-ash-grit-blasting.jpg';
import pic3 from '@/assets/work/03-balance-test.jpg';
import pic4 from '@/assets/work/04-measuring.jpg';
import pic5 from '@/assets/work/05-turbo-blade-repairs.jpg';
import pic6 from '@/assets/work/06-LaserWeldingForBlades.jpg';
import pic8 from '@/assets/work/08-LaserAidedReclamation.jpg';
import pic9 from '@/assets/work/09-governor-overhaul.jpg';

export interface WrokPicture {
  /** 渲染文字 */
  title: string;
  /** 图片地址 */
  url: string;
}

export const workPictureList = [
  {
    title: '打砂',
    url: pic2
  },
  {
    title: '平衡测试',
    url: pic3
  },
  {
    title: '测量',
    url: pic4
  },
  {
    title: '叶轮修复',
    url: pic5
  },
  {
    title: '叶轮焊接',
    url: pic6
  },
    {
    title: '激光熔覆',
    url: pic8
  },
  {
    title: '调速器检修',
    url: pic9
  }
];
