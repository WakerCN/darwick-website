import { workPictureList } from '@/constant/work';
import { Col, Row, Image, Typography } from 'antd';

const WorkshopPage = () => {
  return (
    <Row className="workshop" gutter={[20, 20]}>
      {workPictureList.map((item) => {
        return (
          <Col span={8}>
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
