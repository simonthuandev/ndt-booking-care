import { Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const services = [
  { icon: 'bi-camera-video-fill',       title: 'Khám từ xa (Telemedicine)',  desc: 'Tư vấn video call với bác sĩ chuyên khoa mà không cần đến bệnh viện.',          accent: false },
  { icon: 'bi-house-heart-fill',        title: 'Khám tại nhà',              desc: 'Đội ngũ bác sĩ đến tận nhà thăm khám, xét nghiệm tại chỗ tiện lợi.',            accent: true  },
  { icon: 'bi-file-earmark-medical-fill', title: 'Xét nghiệm & Chẩn đoán',  desc: 'Đặt lịch xét nghiệm máu, MRI, CT-Scan tại các phòng lab đối tác.',             accent: false },
  { icon: 'bi-shield-fill-plus',        title: 'Gói khám sức khỏe',         desc: 'Gói kiểm tra sức khỏe định kỳ toàn diện với mức giá ưu đãi.',                   accent: false },
];

export default function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services">
      <Container>
        <SectionHeader
          tag="Dịch vụ" tagIcon="bi-stars"
          title="Giải pháp y tế" titleEm="toàn diện"
        />
        <div className="row g-4">
          {services.map(({ icon, title, desc, accent }) => (
            <div key={title} className="col-md-6 col-lg-3">
              <div className={`svc-card${accent ? ' svc-card-accent' : ''}`}>
                <div className="svc-icon"><i className={`bi ${icon}`} /></div>
                <h5>{title}</h5>
                <p>{desc}</p>
                <a href="#" className="svc-link">
                  Tìm hiểu <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}