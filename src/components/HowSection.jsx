import { Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const steps = [
  { num: '01', icon: 'bi-search-heart-fill', title: 'Tìm & chọn bác sĩ',  desc: 'Tìm kiếm theo chuyên khoa, bệnh viện hoặc tên bác sĩ. Xem hồ sơ, đánh giá và lịch trống.', mid: false },
  { num: '02', icon: 'bi-calendar2-week-fill', title: 'Chọn ngày & giờ',  desc: 'Xem lịch trống theo thời gian thực. Chọn khung giờ phù hợp và xác nhận thông tin.',         mid: true  },
  { num: '03', icon: 'bi-bell-fill',           title: 'Nhận xác nhận',     desc: 'Nhận SMS và email xác nhận ngay lập tức. Nhắc lịch tự động trước 24 giờ.',                   mid: false },
];

export default function HowSection() {
  return (
    <section className="how-section">
      <Container>
        <SectionHeader
          tag="Quy trình" tagIcon="bi-lightning-charge-fill"
          title="Đặt lịch chỉ trong" titleEm="3 bước"
        />
        <div className="row g-4 g-lg-5 align-items-center">
          {steps.map(({ num, icon, title, desc, mid }) => (
            <div key={num} className="col-md-4">
              <div className={`how-step${mid ? ' how-step-mid' : ''}`}>
                <div className="how-num">{num}</div>
                <div className="how-icon"><i className={`bi ${icon}`} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}