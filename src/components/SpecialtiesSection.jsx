import {Container} from 'react-bootstrap';
import SectionHeader from './SectionHeader';

const SPECIALTIES = [
  { icon: 'bi-heart-pulse-fill', name: 'Tim mạch',    count: '142 bác sĩ', bg: '#E8F4FD', color: '#2196F3' },
  { icon: 'bi-eye-fill',         name: 'Mắt',         count: '98 bác sĩ',  bg: '#FFF3E0', color: '#FF9800' },
  { icon: 'bi-lungs-fill',       name: 'Nội tổng quát',count:'210 bác sĩ', bg: '#E8F5E9', color: '#4CAF50' },
  { icon: 'bi-baby-fill',        name: 'Nhi khoa',    count: '185 bác sĩ', bg: '#F3E5F5', color: '#9C27B0' },
  { icon: 'bi-bandaid-fill',     name: 'Da liễu',     count: '120 bác sĩ', bg: '#FCE4EC', color: '#E91E63' },
  { icon: 'bi-capsule-pill',     name: 'Nha khoa',    count: '95 bác sĩ',  bg: '#E3F2FD', color: '#1565C0' },
  { icon: 'bi-brain',            name: 'Thần kinh',   count: '88 bác sĩ',  bg: '#E8EAF6', color: '#3F51B5' },
  { icon: 'bi-grid-fill',        name: 'Xem tất cả',  count: '40+ chuyên khoa', bg: '#F5F5F5', color: '#607D8B', more: true },
];

export default function SpecialtiesSection() {

  return (
    <section className="section-pad" id="specialties">
      <Container>
        <SectionHeader
          tag="Chuyên khoa" tagIcon="bi-grid-3x3-gap-fill"
          title="Đặt khám theo" titleEm="chuyên khoa"
          sub="Chọn đúng chuyên khoa – gặp đúng bác sĩ – nhận đúng kết quả"
        />
        <div className="row g-3 g-md-4 specialty-grid">
          {SPECIALTIES.map(({ icon, name, count, bg, color, more }) => (
            <div key={name} className="col-6 col-md-4 col-lg-3">
              <a href="#" className={`sp-card${more ? ' sp-card-more' : ''}`}>
                <div
                  className="sp-icon"
                  style={{ '--ic': bg, '--icc': color }}
                >
                  <i className={`bi ${icon}`} />
                </div>
                <div className="sp-name">{name}</div>
                <div className="sp-count">{count}</div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}