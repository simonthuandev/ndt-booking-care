import { Container } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
import StarRating from "./StarRating";

const DOCTORS = [
  { img: 'https://randomuser.me/api/portraits/men/32.jpg',   name: 'PGS.TS. Trần Minh Khoa',  spec: 'Tim mạch',     hospital: 'BV Chợ Rẫy, TP.HCM',    rating: 4.9, reviews: 512, price: '350.000đ', avail: true  },
  { img: 'https://randomuser.me/api/portraits/women/65.jpg', name: 'TS.BS. Lê Thu Hằng',      spec: 'Da liễu',     hospital: 'BV Da Liễu TW, HN',      rating: 4.8, reviews: 389, price: '300.000đ', avail: true  },
  { img: 'https://randomuser.me/api/portraits/men/54.jpg',   name: 'GS.TS. Nguyễn Đức Tuấn', spec: 'Nhi khoa',    hospital: 'BV Nhi Đồng 1, TP.HCM',  rating: 4.9, reviews: 621, price: '400.000đ', avail: false },
  { img: 'https://randomuser.me/api/portraits/women/29.jpg', name: 'ThS.BS. Phạm Bích Ngọc',  spec: 'Sản phụ khoa',hospital: 'BV Từ Dũ, TP.HCM',       rating: 4.7, reviews: 278, price: '280.000đ', avail: true  },
];

export default function DoctorsSection() {
  return (
    <section className="section-pad" id="doctors">
      <Container>
        <SectionHeader
          tag="Bác sĩ nổi bật" tagIcon="bi-person-heart"
          title="Đội ngũ" titleEm="chuyên gia hàng đầu"
          sub="Được lựa chọn kỹ càng từ các bệnh viện uy tín nhất cả nước"
        />
        <div className="row g-4">
          {DOCTORS.map(({ img, name, spec, hospital, rating, reviews, price, avail }) => (
            <div key={name} className="col-sm-6 col-lg-3">
              <div className="doc-card">
                <div className="doc-img-wrap">
                  <img src={img} alt={name} />
                  <div className={`doc-avail ${avail ? 'available' : 'busy'}`}>
                    {avail ? 'Còn lịch hôm nay' : 'Lịch gần nhất: mai'}
                  </div>
                </div>
                <div className="doc-body">
                  <div className="doc-name">{name}</div>
                  <div className="doc-spec">
                    <i className="bi bi-clipboard2-pulse me-1" />{spec}
                  </div>
                  <div className="doc-hospital">
                    <i className="bi bi-building-fill-cross me-1" />{hospital}
                  </div>
                  <div className="doc-rating">
                    <span className="rating-num">{rating}</span>
                    <div className="stars">
                      <StarRating rating={rating} half={!Number.isInteger(rating)} />
                    </div>
                    <span className="rating-cnt">{reviews} đánh giá</span>
                  </div>
                  <div className="doc-price-row">
                    <span className="doc-price">{price}</span>
                    <button className="btn-book-doc">Đặt lịch</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="#" className="btn-outline-main">
            Xem tất cả bác sĩ <i className="bi bi-arrow-right ms-2" />
          </a>
        </div>
      </Container>
    </section>
  );
}