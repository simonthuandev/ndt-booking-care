import { Container } from "react-bootstrap";

export default function FooterSection() {
  return (
    <footer className="main-footer">
      <Container>
        <div className="row g-4 g-lg-5 footer-top">

          {/* Brand */}
          <div className="col-lg-4">
            <a href="#" className="footer-brand d-flex align-items-center gap-2 mb-3">
              <div className="brand-icon sm"><i className="bi bi-heart-pulse-fill" /></div>
              <span className="brand-text">NDT<span>BookingCare</span></span>
            </a>
            <p className="footer-desc">
              Nền tảng đặt lịch khám bệnh trực tuyến hàng đầu Việt Nam, kết nối bệnh
              nhân với bác sĩ và cơ sở y tế uy tín.
            </p>
            <div className="footer-social">
              {['bi-facebook','bi-youtube','bi-tiktok','bi-instagram'].map(ic => (
                <a key={ic} href="#"><i className={`bi ${ic}`} /></a>
              ))}
            </div>
            <div className="footer-cert mt-3">
              <div className="cert-badge">
                <i className="bi bi-patch-check-fill me-2" />Bộ Y Tế Cấp Phép
              </div>
              <div className="cert-badge">
                <i className="bi bi-lock-fill me-2" />SSL Bảo mật
              </div>
            </div>
          </div>

          {/* Services links */}
          <div className="col-6 col-lg-2">
            <div className="footer-col-title">Dịch vụ</div>
            <ul className="footer-links">
              {['Đặt khám bác sĩ','Khám từ xa','Khám tại nhà','Xét nghiệm','Gói khám sức khỏe'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div className="col-6 col-lg-2">
            <div className="footer-col-title">Thông tin</div>
            <ul className="footer-links">
              {['Về chúng tôi','Điều khoản dịch vụ','Chính sách bảo mật','Tuyển dụng','Tin tức'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <div className="footer-col-title">Liên hệ & Hỗ trợ</div>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-telephone-fill" />
                <div><strong>Đường dây hỗ trợ</strong><br />1800 1234 (Miễn phí, 24/7)</div>
              </li>
              <li>
                <i className="bi bi-envelope-fill" />
                <div><strong>Email</strong><br />support@NDTBookingCare.vn</div>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill" />
                <div><strong>Trụ sở HCM</strong><br />123 Nguyễn Huệ, Q.1, TP.HCM</div>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="fb-left">© 2025 NDTBookingCare Vietnam. Tất cả quyền được bảo lưu.</div>
          <div className="fb-right">
            {['Điều khoản','Bảo mật','Cookie'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}