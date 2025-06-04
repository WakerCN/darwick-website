/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-04 09:33
 * @LastEditors  : StarOne
 * @Description  :
 */
import { DWICon } from '@/components/DWIcon';
import './index.scss';

import Logo from '@/assets/company-logo.png';
import { HomeOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
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
      <div className="left">
        <img
          className="websiteIcon"
          src={Logo}
          onClick={() => handleClick('home')}
        />
        <span className="websiteName">大威船舶</span>
      </div>
      <div className="header-operate">
        <Tooltip title={'首页'}>
          <Button
            className="opt-btn"
            onClick={() => handleClick('home')}
            icon={<HomeOutlined />}
            size="large"
            shape="circle"
          />
        </Tooltip>

        <Button
          className="opt-btn"
          onClick={() => handleClick('service')}
          size="large"
          color="default"
          variant="filled"
        >
          服务
        </Button>
        <Button
          className="opt-btn"
          onClick={() => handleClick('about')}
          size="large"
          color="default"
          variant="filled"
        >
          关于我们
        </Button>
        <Button
          className="opt-btn"
          onClick={() => handleClick('contact')}
          size="large"
          color="default"
          variant="filled"
        >
          联系方式
        </Button>
        <Tooltip title={'中文/English'}>
          <Button
            className="opt-btn"
            size="large"
            color="default"
            variant="filled"
            icon={<DWICon iconName="language" />}
          />
        </Tooltip>
      </div>
    </div>
  );
}
