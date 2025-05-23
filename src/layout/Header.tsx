import { Button } from 'antd';
import './index.scss';
import Logo from '@/assets/logo.jpg';

export function Header() {
  return (
    <div className="webHeader">
      <img className="websiteIcon" src={Logo} />
      <div className="header-operate">
        <Button className="opt-btn">服务</Button>
        <Button className="opt-btn">关于我们</Button>
        <Button className="opt-btn">联系方式</Button>
        <Button className="opt-btn">English</Button>
      </div>
    </div>
  );
}
