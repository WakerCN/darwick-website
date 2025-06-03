import { workPictureList } from '@/constant/work';
import { Col, Row, Image, Typography } from 'antd';

const WorkshopPage = () => {
  return (
    <Row className="workshop" gutter={[20, 20]}>
      {workPictureList.map((item) => {
        return (
          <Col span={8} xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
            <Image
              src={item.url}
              width={'100%'}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <Typography.Text className="desc">{item.title}</Typography.Text>
          </Col>
        );
      })}
    </Row>
  );
};

export default WorkshopPage;
