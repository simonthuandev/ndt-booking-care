import { Container, Row, Col } from 'react-bootstrap';

const STATS = [
  { num: '2018',  label: 'Năm thành lập'        },
  { num: '5K+',   label: 'Bác sĩ đối tác'       },
  { num: '3M+',   label: 'Lượt đặt lịch'        },
  { num: '63',    label: 'Tỉnh thành phủ sóng'  },
];

export default function PageHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__bg-grid" />
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="about-hero__tag">
              <i className="bi bi-info-circle-fill" />
              Về chúng tôi
            </div>
            <h1 className="about-hero__title">
              Sứ mệnh kết nối<br />
              <em>sức khỏe Việt Nam</em>
            </h1>
            <p className="about-hero__desc">
              NDTBookingCare được xây dựng với một niềm tin đơn giản: <strong>mọi người
              đều xứng đáng được tiếp cận dịch vụ y tế chất lượng một cách dễ dàng.</strong>{' '}
              Chúng tôi xoá bỏ rào cản giữa bệnh nhân và bác sĩ, biến việc đặt
              lịch khám trở nên nhanh chóng và minh bạch.
            </p>
          </Col>

          <Col lg={5} className="d-none d-lg-flex justify-content-end">
            <div className="about-hero__visual">
              {/* Floating stat cards */}
              <div className="ahv-card ahv-card--main">
                <i className="bi bi-heart-pulse-fill ahv-card__icon" />
                <div>
                  <div className="ahv-card__num">3M+</div>
                  <div className="ahv-card__lbl">Lượt đặt lịch thành công</div>
                </div>
              </div>
              <div className="ahv-card ahv-card--sm ahv-card--top">
                <i className="bi bi-patch-check-fill" />
                <span>Được Bộ Y Tế cấp phép</span>
              </div>
              <div className="ahv-card ahv-card--sm ahv-card--bot">
                <i className="bi bi-star-fill" />
                <span>4.9 / 5 từ bệnh nhân</span>
              </div>
              {/* Deco */}
              <div className="ahv-ring ahv-ring--1" />
              <div className="ahv-ring ahv-ring--2" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Stats band */}
      <div className="about-stats">
        <Container>
          <Row className="g-0">
            {STATS.map(({ num, label }) => (
              <Col key={label} xs={6} md={3} className="about-stat">
                <div className="about-stat__num">{num}</div>
                <div className="about-stat__lbl">{label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}