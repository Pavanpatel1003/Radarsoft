import Image from "next/image";
import Link from "next/link";
import icon from "../../../../public/assets/logo/icon.png";

const Footer = () => {

  return (
    <>
      <footer className="footer footer-color">
        <section className="py-4 py-md-5 py-xl-8 border-top border-light">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xl-between">
              <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="widget">
                  <Link href="#!">
                    <Image
                      src={icon}
                      alt="BootstrapBrain Logo"
                      width="175"
                      height="57"
                    />
                  </Link>
                  <ul className="list-unstyled footer-bottom-style add_menu">
                    <li className="mb-4">
                      <Link
                        href="#!"
                        className="text-decoration-none footer-sub-title"
                      >
                        info@radarsoft.tech
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="#!"
                        className="text-decoration-none footer-sub-title"
                      >
                        +91 9545126030 +91 7028404033
                      </Link>
                    </li>
                    <li  >
                      <Link
                        href="#!"
                        className="text-decoration-none footer-sub-title"
                      >
                        <h6>Head Office</h6>
                        <p>
                          B-309, 3rd Floor, Nyati Empress, Viman Nagar, Pune,
                          Maharashtra 411014
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title title-color mb-4">Quick Links</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href="/" className="text-decoration-none sub-title">
                        Home
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/about"
                        className="text-decoration-none sub-title"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/careers"
                        className="text-decoration-none sub-title"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4 title-color">IT Services</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link
                        href="/services/web_development"
                        className="text-decoration-none sub-title"
                      >
                        Frontend Development
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/mobileapp_development"
                        className="text-decoration-none sub-title"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/backend_development"
                        className="text-decoration-none sub-title"
                      >
                        Backend App Development
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/ui_ux_design"
                        className="text-decoration-none sub-title"
                      >
                        UI/UX Design & Branding
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/software_testing"
                        className="text-decoration-none sub-title"
                      >
                        Software Testing
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/staff_agumentation"
                        className="text-decoration-none sub-title"
                      >
                        Staff Augmentation
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/services/digital_transformation"
                        className="text-decoration-none sub-title"
                      >
                        Digital Transformation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-2 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4 title-color">Support</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link
                        href="/contact"
                        className="text-decoration-none sub-title"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/sitemap"
                        className="text-decoration-none sub-title"
                      >
                        Site Map
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/privacy_policy"
                        className="text-decoration-none sub-title"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="/refund_policy"
                        className="text-decoration-none sub-title"
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link
                        href="terms_condition"
                        className="text-decoration-none sub-title"
                      >
                        Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                <div className="widget">
                  <h4 className="widget-title mb-4 title-color">
                    Our Offices{" "}
                  </h4>
                  <ul className="list-unstyled add_menu">
                    <li  >
                      <Link
                        href="#!"
                        className="text-decoration-none footer-sub-title"
                      >
                        <h6>Los Angeles</h6>
                        <p>
                          Novator Engineering Solutions LLC, 2524 S Marvin, Los
                          Angeles, CA 90016
                        </p>
                      </Link>
                    </li>
                    <li  >
                      <Link
                        href="#!"
                        className="text-decoration-none footer-sub-title"
                      >
                        <h6>Hyderabad</h6>
                        <p>
                          5th Floor, The Business Park by Pranava Group,
                          Kothaguda, Hyderabad, 500084
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright - Bootstrap Brain Component --> */}
        <div>
          <div className="container py-4 py-md-5 py-xl-4 overflow-hidden border-top border-top-color">
            <div className="row gy-4 gy-md-0 align-items-md-center">
              <div className="col-xs-12 col-md-7 order-1 order-md-0 left-footer-padding">
                <div className="copyright text-md-start footer-sub-title">
                  © 2024 RadarSoft Technologies. All Rights Reserved.
                </div>
              </div>

              <div className="col-xs-12 col-md-5 order-0 order-md-1 right-footer-padding">
                <div className="social-media-wrapper">
                  <div className="last-logo">
                    {/* <i className="fa-brands fa-whatsapp"></i> */}
                    {/* <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i> */}
                    <a
                      href="https://www.facebook.com/radarsofttechnologies/"
                      aria-label="Facebook"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook soical_icon"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/radarsofttech/"
                      aria-label="Instagram"
                      title="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram soical_icon"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/radar-soft-technologies/"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin soical_icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
