import { Container } from 'react-bootstrap';

export default function CtaSection() {
  return (
    <section className="about-cta">
      <Container>
        <div className="about-cta__inner">
          <div className="about-cta__deco-1" />
          <div className="about-cta__deco-2" />
          <div className="about-tag about-tag--light mx-auto mb-3">
            <i className="bi bi-calendar2-heart-fill" />
            Bắt đầu ngay hôm nay
          </div>
          <h2 className="about-cta__title">
            Đặt lịch khám ngay —<br />
            <em>nhanh, dễ, không lo</em>
          </h2>
          <p className="about-cta__desc">
            Hơn 3 triệu bệnh nhân đã tin tưởng NDTBookingCare. Hãy trở thành một phần
            của cộng đồng chăm sóc sức khỏe thông minh.
          </p>
          <div className="about-cta__btns">
            <a href="/" className="about-cta__btn-primary">
              <i className="bi bi-calendar-check-fill me-2" />
              Đặt lịch ngay
            </a>
            <a href="#" className="about-cta__btn-outline">
              Xem bác sĩ <i className="bi bi-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
