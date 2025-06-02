/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 21:07
 * @LastEditTime : 2025-05-28 08:03
 * @LastEditors  : StarOne
 * @Description  :
 */

import ABBLogo from '@/assets/supply/ABB-logo.svg';
import METLogo from '@/assets/supply/MET-logo.svg';
import MitLogo from '@/assets/supply/MitSUI-logo.svg';
import KBBLogo from '@/assets/supply/kbb-logo.svg';
import NapierLogo from '@/assets/supply/Napier-logo.svg';
import MANLogo from '@/assets/supply/MAN_logo.png';
import WOODWARDLogo from '@/assets/supply/Woodward-logo.png';

export interface Brand {
  logo: string;
  title?: string;
}

export const brandList: Array<Brand> = [
  { logo: ABBLogo, title: 'ABB' },
  { logo: METLogo, title: 'MET' },
  { logo: MitLogo, title: 'MitSUI' },
  { logo: KBBLogo, title: 'KBB' },
  { logo: NapierLogo, title: 'Napier' },
  { logo: MANLogo, title: 'Man' },
  { logo: WOODWARDLogo, title: 'WOODWARD' },
  { logo: MitLogo, title: 'MitSUI' },
  { logo: ABBLogo, title: 'ABB' },
  { logo: METLogo, title: 'MET' },
  { logo: MitLogo, title: 'MitSUI' },
  { logo: KBBLogo, title: 'KBB' }
];
