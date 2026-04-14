import { Container, Row, Col } from 'react-bootstrap';

export default function MissionSection() {
  return (
    <section className="about-mission">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            {/* Asymmetric image collage */}
            <div className="mission-collage">
              <div className="mc-img mc-img--main">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                  alt="Bác sĩ tư vấn bệnh nhân"
                />
              </div>
              <div className="mc-img mc-img--sm">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&q=80"
                  alt="Khám bệnh"
                />
              </div>
              <div className="mc-badge">
                <i className="bi bi-award-fill" />
                <span>#1 Nền tảng y tế Việt Nam</span>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="mission-content">
              <div className="about-tag">
                <i className="bi bi-bullseye" />
                Sứ mệnh
              </div>
              <h2 className="about-title">
                Chăm sóc sức khỏe<br />
                <em>không nên là đặc quyền</em>
              </h2>
              <p className="about-body">
                Hàng triệu người Việt Nam mỗi năm phải chờ đợi hàng giờ, di chuyển
                hàng chục kilomet chỉ để gặp bác sĩ trong vài phút. NDTBookingCare ra đời
                để thay đổi điều đó.
              </p>
              <p className="about-body">
                Chúng tôi xây dựng hệ sinh thái y tế số kết nối bệnh nhân với đúng
                bác sĩ, đúng thời điểm — dù họ ở thành phố hay vùng nông thôn.
              </p>

              <div className="mission-checks">
                {[
                  'Đặt lịch trực tuyến 24/7, không cần gọi điện',
                  'Xem hồ sơ, đánh giá bác sĩ trước khi đặt',
                  'Nhắc lịch tự động, hủy/đổi lịch dễ dàng',
                  'Lưu trữ hồ sơ sức khỏe cá nhân an toàn',
                ].map(item => (
                  <div key={item} className="mcheck">
                    <div className="mcheck__icon">
                      <i className="bi bi-check-lg" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}