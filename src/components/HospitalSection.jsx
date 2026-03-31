import { Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const HOSPITALS = [
  { img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&q=80', name: 'Bệnh viện Chợ Rẫy',  loc: 'Quận 5, TP. Hồ Chí Minh', type: 'public',  doctors: 320, rating: 4.8 },
  { img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=500&q=80', name: 'Bệnh viện Vinmec',   loc: 'Times City, Hà Nội',       type: 'private', doctors: 180, rating: 4.9 },
  { img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80', name: 'Bệnh viện Bạch Mai', loc: 'Đống Đa, Hà Nội',           type: 'public',  doctors: 410, rating: 4.7 },
];

export default function HospitalsSection() {
  return (
    <section className="hospital-section" id="hospitals">
      <Container>
        <SectionHeader
          tag="Bệnh viện & Phòng khám" tagIcon="bi-hospital-fill"
          title="Đối tác" titleEm="tin cậy"
          sub="Hơn 200 cơ sở y tế được thẩm định chất lượng"
        />
        <div className="row g-4">
          {HOSPITALS.map(({ img, name, loc, type, doctors, rating }) => (
            <div key={name} className="col-md-6 col-lg-4">
              <a href="#" className="hosp-card">
                <div className={`hosp-badge ${type}`}>
                  {type === 'public' ? 'Công lập' : 'Tư nhân'}
                </div>
                <div className="hosp-img">
                  <img src={img} alt={name} />
                </div>
                <div className="hosp-body">
                  <div className="hosp-name">{name}</div>
                  <div className="hosp-loc">
                    <i className="bi bi-geo-alt-fill me-1" />{loc}
                  </div>
                  <div className="hosp-meta">
                    <span><i className="bi bi-person-badge me-1" />{doctors} bác sĩ</span>
                    <span><i className="bi bi-star-fill me-1" />{rating}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="#" className="btn-outline-main">
            Xem tất cả bệnh viện <i className="bi bi-arrow-right ms-2" />
          </a>
        </div>
      </Container>
    </section>
  );
}
