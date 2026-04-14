import { Container, Row, Col } from 'react-bootstrap';

const MILESTONES = [
  { year: '2019', text: 'NDTBookingCare ra mắt phiên bản đầu tiên tại TP.HCM với 50 bác sĩ đối tác.' },
  { year: '2020', text: 'Mở rộng ra Hà Nội và Đà Nẵng, đạt 100.000 lượt đặt lịch.' },
  { year: '2023', text: 'Ra mắt tính năng Khám từ xa (Telemedicine) trong mùa dịch Covid-19.' },
  { year: '2025', text: 'Phủ sóng 63 tỉnh thành, vượt mốc 3 triệu lượt đặt lịch thành công.' },
  { year: '2026', text: 'Hợp tác chiến lược với Bộ Y tế, tích hợp hệ thống hồ sơ sức khỏe quốc gia.' },
];

export default function TimelineSection() {
  return (
    <section className="about-timeline">
      <Container>
        <Row className="align-items-start g-5">
          <Col lg={4}>
            <div className="tl-sticky">
              <div className="about-tag about-tag--light">
                <i className="bi bi-clock-history" />
                Hành trình
              </div>
              <h2 className="about-title about-title--light">
                7 năm xây dựng<br />
                <em>nền tảng y tế</em>
              </h2>
              <p className="about-body about-body--muted">
                Từ một startup nhỏ tại TP.HCM, NDTBookingCare đã trở thành nền tảng y tế
                số lớn nhất Việt Nam.
              </p>
            </div>
          </Col>

          <Col lg={8}>
            <div className="tl-list">
              {MILESTONES.map(({ year, text }, i) => (
                <div key={year} className="tl-item">
                  <div className="tl-item__year">{year}</div>
                  <div className="tl-item__line">
                    <div className="tl-item__dot" />
                    {i < MILESTONES.length - 1 && <div className="tl-item__connector" />}
                  </div>
                  <div className="tl-item__text">{text}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
