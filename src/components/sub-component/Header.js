import { Link } from "react-router-dom";

export function BrandLogo() {
  return (
    <div className="brand-name">
      <h1 className="brand-logo">
        <Link className="home-nav text-decoration-none" to="/">
          SHADE
          <span className="big-x">X</span>
        </Link>
      </h1>
    </div>
  );
}

export function PrimaryNav() {
  return (
    <>
      <div>
        <nav className="d-none d-lg-block">
          <ul className="nav">
            <li className="list-item me-5">
              <a
                className="products-link text-decoration-none"
                href="#products"
              >
                Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="nav">
            <li className="list-item me-3">
              <Link className="primary-nav-link" to="/cart">
                <span className="cart-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.19 18.25H7.53999C6.54999 18.25 5.59999 17.83 4.92999 17.1C4.25999 16.37 3.92 15.39 4 14.4L4.83 4.44C4.86 4.13 4.74999 3.83001 4.53999 3.60001C4.32999 3.37001 4.04 3.25 3.73 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H3.74001C4.47001 1.75 5.15999 2.06 5.64999 2.59C5.91999 2.89 6.12 3.24 6.23 3.63H18.72C19.73 3.63 20.66 4.03 21.34 4.75C22.01 5.48 22.35 6.43 22.27 7.44L21.73 14.94C21.62 16.77 20.02 18.25 18.19 18.25ZM6.28 5.12L5.5 14.52C5.45 15.1 5.64 15.65 6.03 16.08C6.42 16.51 6.95999 16.74 7.53999 16.74H18.19C19.23 16.74 20.17 15.86 20.25 14.82L20.79 7.32001C20.83 6.73001 20.64 6.17001 20.25 5.76001C19.86 5.34001 19.32 5.10999 18.73 5.10999H6.28V5.12Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M16.25 23.25C15.15 23.25 14.25 22.35 14.25 21.25C14.25 20.15 15.15 19.25 16.25 19.25C17.35 19.25 18.25 20.15 18.25 21.25C18.25 22.35 17.35 23.25 16.25 23.25ZM16.25 20.75C15.97 20.75 15.75 20.97 15.75 21.25C15.75 21.53 15.97 21.75 16.25 21.75C16.53 21.75 16.75 21.53 16.75 21.25C16.75 20.97 16.53 20.75 16.25 20.75Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M8.25 23.25C7.15 23.25 6.25 22.35 6.25 21.25C6.25 20.15 7.15 19.25 8.25 19.25C9.35 19.25 10.25 20.15 10.25 21.25C10.25 22.35 9.35 23.25 8.25 23.25ZM8.25 20.75C7.97 20.75 7.75 20.97 7.75 21.25C7.75 21.53 7.97 21.75 8.25 21.75C8.53 21.75 8.75 21.53 8.75 21.25C8.75 20.97 8.53 20.75 8.25 20.75Z"
                      fill="#3A3A3A"
                    />
                    <path
                      d="M21 9.25H9C8.59 9.25 8.25 8.91 8.25 8.5C8.25 8.09 8.59 7.75 9 7.75H21C21.41 7.75 21.75 8.09 21.75 8.5C21.75 8.91 21.41 9.25 21 9.25Z"
                      fill="#3A3A3A"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li className="list-item d-sm-none">
              <span className="menu-icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8.25H3C2.59 8.25 2.25 7.91 2.25 7.5C2.25 7.09 2.59 6.75 3 6.75H21C21.41 6.75 21.75 7.09 21.75 7.5C21.75 7.91 21.41 8.25 21 8.25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M21 13.25H3C2.59 13.25 2.25 12.91 2.25 12.5C2.25 12.09 2.59 11.75 3 11.75H21C21.41 11.75 21.75 12.09 21.75 12.5C21.75 12.91 21.41 13.25 21 13.25Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M21 18.25H3C2.59 18.25 2.25 17.91 2.25 17.5C2.25 17.09 2.59 16.75 3 16.75H21C21.41 16.75 21.75 17.09 21.75 17.5C21.75 17.91 21.41 18.25 21 18.25Z"
                    fill="#3A3A3A"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-4 px-sm-5">
      <BrandLogo />
      <PrimaryNav />
    </header>
  );
}
