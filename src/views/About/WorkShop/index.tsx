import { workPictureList } from '@/constant/work';
import { Col, Row, Image, Typography } from 'antd';
import './index.scss';

const WorkshopPage = () => {
  return (
    <Row className="workshop" gutter={[20, 20]}>
      <Image.PreviewGroup>
        {workPictureList.map((item) => {
          return (
            <Col span={8} xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
              <Image
                src={item.url}
                width={'100%'}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="desc">
                <Typography.Text>{item.title}</Typography.Text>
              </div>
            </Col>
          );
        })}
      </Image.PreviewGroup>
    </Row>
  );
};

export default WorkshopPage;
