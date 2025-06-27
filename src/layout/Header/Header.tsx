/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-27 11:32
 * @LastEditors  : StarOne
 * @Description  :
 */
import { DWICon } from '@/components/DWIcon';
import './index.scss';

import Logo from '@/assets/company-logo.png';
import { BookFilled, HomeOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import pdfHerf from '@/assets/大威宣传册.pdf';

export function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="webHeader">
      <div className="left">
        <img
          className="websiteIcon"
          src={Logo}
          onClick={() => handleClick('home')}
        />
        <span className="websiteName">{t('home.company')}</span>
      </div>
      <div className="header-operate">
        <Tooltip title={t('menu.home')}>
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
          {t('menu.service')}
        </Button>
        <Button
          className="opt-btn"
          onClick={() => handleClick('about')}
          size="large"
          color="default"
          variant="filled"
        >
          {t('menu.about')}
        </Button>
        <Button
          className="opt-btn"
          onClick={() => handleClick('contact')}
          size="large"
          color="default"
          variant="filled"
        >
          {t('menu.contact')}
        </Button>
        <Tooltip title={t('menu.brochure')}>
          <Button
            className="opt-btn"
            size="large"
            color="default"
            variant="filled"
            icon={<BookFilled />}
            href={pdfHerf}
            download={'DARWICK Brochure.pdf'}
          />
        </Tooltip>
        <Tooltip title={'中文/English'}>
          <Button
            className="opt-btn"
            size="large"
            color="default"
            variant="filled"
            icon={<DWICon iconName="language" />}
            onClick={changeLanguage}
          />
        </Tooltip>
      </div>
    </div>
  );
}
