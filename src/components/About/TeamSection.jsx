import { Container, Row, Col } from 'react-bootstrap';

const TEAM = [
  {
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Nguyễn Đức Thuận',
    role: 'CEO & Co-founder',
    bio: '15 năm kinh nghiệm trong lĩnh vực y tế số và quản lý bệnh viện.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/60.jpg',
    name: 'Thuận Đức Nguyễn',
    role: 'CTO & Co-founder',
    bio: 'Kỹ sư phần mềm với chuyên môn sâu về hệ thống y tế và bảo mật dữ liệu.',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
    name: 'Thuận Nguyễn Đức',
    role: 'Chief Medical Officer',
    bio: 'Bác sĩ chuyên khoa Tim mạch, cố vấn y tế và xây dựng tiêu chuẩn chất lượng.',
  },
];

export default function TeamSection() {
  return (
    <section className="about-team">
      <Container>
        <div className="about-sec-header">
          <div className="about-tag">
            <i className="bi bi-people-fill" />
            Đội ngũ sáng lập
          </div>
          <h2 className="about-title">
            Con người đằng sau<br />
            <em>NDTBookingCare</em>
          </h2>
        </div>

        <Row className="g-4 justify-content-center">
          {TEAM.map(({ img, name, role, bio }) => (
            <Col key={name} sm={6} lg={4}>
              <div className="team-card">
                <div className="team-card__img-wrap">
                  <img src={img} alt={name} />
                  <div className="team-card__overlay" />
                </div>
                <div className="team-card__body">
                  <div className="team-card__name">{name}</div>
                  <div className="team-card__role">{role}</div>
                  <p className="team-card__bio">{bio}</p>
                  <div className="team-card__socials">
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
                    <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}