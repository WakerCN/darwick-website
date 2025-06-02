/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 16:03
 * @LastEditTime : 2025-05-27 21:38
 * @LastEditors  : StarOne
 * @Description  :
 */
import type { Brand } from '@/constant/supplier';
import './brand-wall.scss';

const BrandCard: React.FC<Brand> = ({ logo, title }) => {
  return (
    <div className="brand-card">
      <img src={logo} className="brand-logo" alt={title} />
    </div>
  );
};

const BrandWall: React.FC<{ brands: Array<Brand> }> = ({ brands }) => {
  return (
    <div className="brand-wall-container">
      <div className="brand-wall">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandWall;
