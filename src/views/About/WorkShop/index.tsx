/*
 * @Author       : 魏威
 * @Date         : 2025-06-03 14:08
 * @LastEditTime : 2025-06-05 19:57
 * @LastEditors  : StarOne
 * @Description  :
 */
import { workPictureList } from '@/constant/work';
import { DWPicktureGroup } from '@/components/DWPictureGroup';

const WorkshopPage = () => {
  return <DWPicktureGroup items={workPictureList} />;
};

export default WorkshopPage;
