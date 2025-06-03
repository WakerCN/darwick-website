/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-03 14:06
 * @LastEditors  : StarOne
 * @Description  :
 */
import { Button } from 'antd';
import './index.scss';
import Logo from '@/assets/logo.jpg';
import { useNavigate } from 'react-router';
export function Header() {
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    switch (type) {
      case 'home':
        navigate('/');
        break;
      case 'service':
        navigate('/service/repair');
        break;
      case 'about':
        navigate('/about/workshop');
        break;
      case 'contact':
        navigate('/service/contact');
        break;
      default:
        break;
    }
  };

  return (
    <div className="webHeader">
      <img
        className="websiteIcon"
        src={Logo}
        onClick={() => handleClick('home')}
      />
      <div className="header-operate">
        <Button className="opt-btn" onClick={() => handleClick('service')}>
          服务
        </Button>
        <Button className="opt-btn" onClick={() => handleClick('about')}>
          关于我们
        </Button>
        <Button className="opt-btn" onClick={() => handleClick('contact')}>
          联系方式
        </Button>
        <Button className="opt-btn">English</Button>
      </div>
    </div>
  );
}
