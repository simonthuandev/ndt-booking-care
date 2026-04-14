import { useState } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-router";

export default function NavbarSection({ scrolled }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="mainNav"
      className={scrolled ? 'scrolled' : ''}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <div className="brand-icon">
            <i className="bi bi-heart-pulse-fill" />
          </div>
          <span className="brand-text">
            <span>NDT</span>
            <span>BookingCare</span>
          </span>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="navMenu" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="navMenu">
          <Nav className="mx-auto gap-lg-1">
            {[
              { href: '#specialties', label: 'Chuyên khoa' },
              { href: '#doctors',     label: 'Bác sĩ'      },
              { href: '#hospitals',   label: 'Bệnh viện'   },
              { href: '#services',    label: 'Dịch vụ'     },
              { href: '#news',        label: 'Tin tức'     },
            ].map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
            <Link key='about-us' to="/about-us" className="nav-link"
              onClick={() => {
                setExpanded(false);
                window.scrollTo(0, 0);
              }}
            >
              Về chúng tôi
            </Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <a href="#" className="nav-login">Đăng nhập</a>
            <a href="#" className="btn btn-book-nav">Đặt lịch ngay</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}