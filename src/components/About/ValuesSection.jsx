import { Container, Row, Col } from 'react-bootstrap';

const VALUES = [
  {
    icon: 'bi-shield-heart-fill',
    title: 'Tin cậy',
    desc: 'Mọi bác sĩ và cơ sở y tế đều được thẩm định chặt chẽ trước khi lên nền tảng.',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Nhanh chóng',
    desc: 'Đặt lịch trong 60 giây, xác nhận tức thì — không chờ đợi, không gọi điện.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Tận tâm',
    desc: 'Đội ngũ hỗ trợ 24/7, luôn sẵn sàng giải quyết mọi vấn đề của bệnh nhân.',
  },
  {
    icon: 'bi-lock-fill',
    title: 'Bảo mật',
    desc: 'Dữ liệu sức khỏe được mã hoá và bảo vệ theo tiêu chuẩn quốc tế.',
  },
];

export default function ValuesSection() {
  return (
    <section className="about-values">
      <Container>
        <div className="about-sec-header">
          <div className="about-tag">
            <i className="bi bi-gem" />
            Giá trị cốt lõi
          </div>
          <h2 className="about-title">
            Những gì chúng tôi<br />
            <em>tin tưởng & thực hành</em>
          </h2>
        </div>

        <Row className="g-4">
          {VALUES.map(({ icon, title, desc }) => (
            <Col key={title} sm={6} lg={3}>
              <div className="value-card">
                <div className="value-card__icon">
                  <i className={`bi ${icon}`} />
                </div>
                <h5 className="value-card__title">{title}</h5>
                <p className="value-card__desc">{desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}