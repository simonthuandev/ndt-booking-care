import { Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";

const NEWS_SMALL = [
  { img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&q=80', cat: 'Dinh dưỡng', title: 'Chế độ ăn lành mạnh giúp tăng đề kháng mùa cúm 2025',           date: '12 tháng 3, 2025' },
  { img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=300&q=80', cat: 'Nhi khoa',   title: 'Lịch tiêm chủng cho trẻ em cập nhật mới nhất của Bộ Y tế',      date: '10 tháng 3, 2025' },
  { img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&q=80',    cat: 'Tâm lý',     title: 'Cách nhận biết và vượt qua hội chứng kiệt sức (burnout)',         date: '8 tháng 3, 2025'  },
];

export default function NewsSection() {
  return (
    <section className="section-pad news-section" id="news">
      <Container>
        <SectionHeader
          tag="Tin tức sức khỏe" tagIcon="bi-newspaper"
          title="Kiến thức" titleEm="y tế hữu ích"
          sub="Cập nhật thông tin sức khỏe mới nhất từ các chuyên gia hàng đầu"
        />
        <div className="row g-4">
          {/* Featured */}
          <div className="col-lg-6">
            <a href="#" className="news-card news-featured">
              <div className="news-img">
                <img
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=80"
                  alt="News"
                />
                <div className="news-cat">Tim mạch</div>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <i className="bi bi-calendar3 me-1" />15 tháng 3, 2025
                </div>
                <h3 className="news-title">
                  5 dấu hiệu cảnh báo bệnh tim mạch mà bạn không nên bỏ qua
                </h3>
                <p className="news-excerpt">
                  Bệnh tim mạch là nguyên nhân gây tử vong hàng đầu tại Việt Nam.
                  Nhận biết sớm các dấu hiệu cảnh báo có thể cứu sống bạn...
                </p>
                <span className="news-read">
                  Đọc tiếp <i className="bi bi-arrow-right" />
                </span>
              </div>
            </a>
          </div>

          {/* Small list */}
          <div className="col-lg-6 d-flex flex-column gap-3">
            {NEWS_SMALL.map(({ img, cat, title, date }) => (
              <a key={title} href="#" className="news-card news-small">
                <div className="news-img-sm">
                  <img src={img} alt={cat} />
                </div>
                <div className="news-body-sm">
                  <div className="news-cat-sm">{cat}</div>
                  <div className="news-title-sm">{title}</div>
                  <div className="news-date-sm">
                    <i className="bi bi-calendar3 me-1" />{date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn-outline-main">
            Xem tất cả bài viết <i className="bi bi-arrow-right ms-2" />
          </a>
        </div>
      </Container>
    </section>
  );
}
