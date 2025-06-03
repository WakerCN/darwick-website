import React from 'react';
import cn from 'classnames';
interface DWIconProps {
  iconName?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DWICon: React.FC<DWIconProps> = (props) => {
  const { iconName, className, style } = props;

  return (
    <svg className={cn('icon', className)} style={style} aria-hidden="true">
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};
