import { Container } from "react-bootstrap";

export default function AppSection() {
  return (
    <section className="app-section">
      <Container>
        <div className="app-inner">
          <div className="app-deco-circle ac1" />
          <div className="app-deco-circle ac2" />
          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="app-tag">
                <i className="bi bi-phone-fill me-2" />Ứng dụng di động
              </div>
              <h2 className="app-title">
                Đặt lịch khám mọi lúc<br />
                mọi nơi cùng <em>NDTBookingCare</em>
              </h2>
              <p className="app-desc">
                Tải ứng dụng miễn phí – quản lý lịch khám, nhận nhắc nhở và lưu hồ sơ
                sức khỏe cá nhân ngay trong tầm tay.
              </p>
              <div className="app-btns d-flex flex-wrap gap-3">
                {[
                  { icon: 'bi-apple',      store: 'App Store'    },
                  { icon: 'bi-google-play', store: 'Google Play' },
                ].map(({ icon, store }) => (
                  <a key={store} href="#" className="app-store-btn">
                    <i className={`bi ${icon}`} />
                    <div>
                      <small>Tải về trên</small><br />
                      <strong>{store}</strong>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="ps-header">
                      <div className="ps-logo">
                        <i className="bi bi-heart-pulse-fill" /> NDTBookingCare
                      </div>
                      <div className="ps-notif"><i className="bi bi-bell-fill" /></div>
                    </div>
                    <div className="ps-card">
                      <div className="ps-avatar">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                      </div>
                      <div>
                        <div className="ps-dname">BS. Trần Minh Khoa</div>
                        <div className="ps-dspec">Tim mạch</div>
                      </div>
                    </div>
                    <div className="ps-title">Chọn ngày khám</div>
                    <div className="ps-cal">
                      {['Th2','Th3','Th4','Th5','Th6'].map((d, i) => (
                        <span key={d} className={`psd${i === 2 ? ' psd-active' : ''}`}>{d}</span>
                      ))}
                    </div>
                    <div className="ps-title">Khung giờ</div>
                    <div className="ps-slots">
                      {[
                        { t: '8:00',  cls: '' },
                        { t: '9:30',  cls: ' pss-active' },
                        { t: '11:00', cls: '' },
                        { t: '14:00', cls: ' taken' },
                      ].map(({ t, cls }) => (
                        <span key={t} className={`pss${cls}`}>{t}</span>
                      ))}
                    </div>
                    <button className="ps-btn">Xác nhận đặt lịch</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}