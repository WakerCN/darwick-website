import { DWPicktureGroup } from '@/components/DWPictureGroup';
import { certificatePictureList } from '@/constant/certificate';
import React from 'react';

export const CertificatePage: React.FC = () => {
  return <DWPicktureGroup items={certificatePictureList} />;
};

export default CertificatePage;
