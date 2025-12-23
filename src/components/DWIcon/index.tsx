import React from 'react';
import cn from 'classnames';
interface DWIconProps {
  iconName?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export const DWICon: React.FC<DWIconProps> = (props) => {
  const { iconName, className, style, color } = props;

  const mergedStyle: React.CSSProperties = {
    ...style,
    color: color || 'currentColor',
    fill: color || 'currentColor',
  };

  return (
    <svg className={cn('icon', className)} style={mergedStyle} aria-hidden="true">
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};
