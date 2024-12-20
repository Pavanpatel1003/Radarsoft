import Image from "next/image";
import navIcon from "../../../../public/assets/logo/nav-icon.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Appointment from "@/components/model/appointment";
import { openAppointmentModal } from "@/components/common/data";

const handleopenAppointmentModal = () => {
  openAppointmentModal();
};

const Header = () => {
  const navbarRef = useRef(null);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOne, setAccordionOne] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbarCollapse = document.querySelector("#navbarCollapse");
      if (navbarCollapse && !navbarCollapse.contains(event.target)) {
        if (event.target.className !== "navbar-toggler-icon") {
          navbarCollapse.classList.remove("show");
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
    setAccordionOne(false);
  };

  const handleLinkClick = (path) => {
    const navbarCollapse = document.querySelector("#navbarCollapse");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
      setTimeout(() => {
        router.push(path);
        return;
      }, 200);
    }
  };

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light nav-bg py-3"
          ref={navbarRef}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <Link
              href="#"
              className="navbar-brand"
              onMouseDown={() => handleLinkClick("/")}
            >
              <Image
                src={navIcon}
                alt="BootstrapBrain Logo"
                width="175"
                height="57"
              />
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              // onClick={toggleAccordion}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav nav-center-width d-flex justify-content-between align-items-baseline">
                <p
                  // href="#"
                  onMouseDown={() => handleLinkClick("/")}
                  style={{
                    cursor: "pointer",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                  className={`nav-item nav-link list-style ${
                    router.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </p>
                {/* <!-- mobile view --> */}
                <div
                  className="nav-mobile-accordion-area accordion accordion-flush d-lg-none"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button nav-item nav-link collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        // onClick={() => setAccordionOne(!accordionOne)}
                        // aria-expanded={accordionOne ? 'true' : 'false'}
                      >
                        Services
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {/* <!-- Nested Accordion --> */}
                        <div className="accordion" id="nestedAccordion">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="nested-headingOne"
                            >
                              <button
                                className="accordion-button nav-item nav-link collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#nested-collapseOne"
                                aria-expanded="false"
                                aria-controls="nested-collapseOne"
                              >
                                Our Services
                              </button>
                            </h2>
                            <div
                              id="nested-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="nested-headingOne"
                              data-bs-parent="#nestedAccordion"
                            >
                              <div className="accordion-body">
                                <ul className="list-unstyled mobile-custom-list px-2">
                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/web_development"
                                      )
                                    }
                                  >
                                    Frontend Development
                                  </li>

                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/mobileapp_development"
                                      )
                                    }
                                  >
                                    Mobile App Development
                                  </li>

                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/backend_development"
                                      )
                                    }
                                  >
                                    Backend App Development
                                  </li>
                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick("/services/ui_ux_design")
                                    }
                                  >
                                    UI/UX Design & Branding
                                  </li>
                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/software_testing"
                                      )
                                    }
                                  >
                                    Software Testing
                                  </li>
                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/staff_agumentation"
                                      )
                                    }
                                  >
                                    Staff Augmentation
                                  </li>
                                  <li
                                    className="text-decoration-none nav-right-sub-heading"
                                    onMouseDown={() =>
                                      handleLinkClick(
                                        "/services/digital_transformation"
                                      )
                                    }
                                  >
                                    Digital Transformation
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="nested-headingTwo"
                            >
                              <button
                                className="accordion-button nav-item nav-link collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#nested-collapseTwo"
                                aria-expanded="false"
                                aria-controls="nested-collapseTwo"
                              >
                                Expertise in Technologies
                              </button>
                            </h2>
                            <div
                              id="nested-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="nested-headingTwo"
                              data-bs-parent="#nestedAccordion"
                            >
                              <div className="accordion-body">
                                {/* <!-- Second Level Nested Accordion --> */}
                                <div
                                  className="accordion"
                                  id="secondLevelNestedAccordion"
                                >
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="second-level-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#second-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="second-level-collapseOne"
                                      >
                                        CMS
                                      </button>
                                    </h2>
                                    <div
                                      id="second-level-collapseOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="second-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            WordPress
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Joomla
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Webflow
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="second-level-headingTwo"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#second-level-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="second-level-collapseTwo"
                                      >
                                        eCommerce
                                      </button>
                                    </h2>
                                    <div
                                      id="second-level-collapseTwo"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="second-level-headingTwo"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-heading nav-right-sub-heading">
                                            WooCommerce
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Shopify
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Magento
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="third-level-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#third-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="third-level-collapseOne"
                                      >
                                        Backend
                                      </button>
                                    </h2>
                                    <div
                                      id="third-level-collapseOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="third-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            PHP
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Laravel
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Node.js
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            CodeIgniter
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Symfony
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Python
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="fourth-level-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#fourth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="fourth-level-collapseOne"
                                      >
                                        Frontend
                                      </button>
                                    </h2>
                                    <div
                                      id="fourth-level-collapseOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="fourth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            HTML
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            CSS3
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            JavaScript
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            React
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Vue.js
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Angular
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="fifth-level-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#fifth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="fifth-level-collapseOne"
                                      >
                                        Mobile App
                                      </button>
                                    </h2>
                                    <div
                                      id="fifth-level-collapseOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="fifth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Android
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            iOS
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            React Native
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Flutter
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2
                                      className="accordion-header"
                                      id="sixth-level-headingOne"
                                    >
                                      <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#sixth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="sixth-level-collapseOne"
                                      >
                                        Other
                                      </button>
                                    </h2>
                                    <div
                                      id="sixth-level-collapseOne"
                                      className="accordion-collapse collapse"
                                      aria-labelledby="sixth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div className="accordion-body">
                                        <ul className="list-unstyled mobile-custom-list px-3">
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Database
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Cloud & AWS
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Testing QA
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Website Maintenance
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            Digital Marketing
                                          </li>
                                          <li className="text-decoration-none nav-right-sub-heading">
                                            PPC
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- End Second Level Nested Accordion --> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- desktop view --> */}
                <div className="nav-item dropdown d-lg-block">
                  <p
                    // href="#"
                    style={{
                      cursor: "pointer",
                      marginTop: "10px",
                      marginBottom: "0px",
                    }}
                    className={`nav-link dropdown-toggle list-style ${
                      router.pathname === "/services" ? "active" : ""
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </p>

                  <div className="dropdown-menu px-2">
                    <div className="row justify-content-xl-between px-2">
                      <div className="col-lg-3 col-xl-3 border-bottom nav-title-first text-decoration-none main-title">
                        Our Services
                      </div>
                      <div className="col-lg-9 col-xl-9 border-bottom nav-title-second text-decoration-none main-title">
                        Expertise in Technologies
                      </div>
                    </div>
                    <div className="row justify-content-xl-between px-2">
                      <div className="col-lg-3 col-xl-3 nav-list-left">
                        <ul className="list-unstyled mt-3 px-2">
                          <li className="mb-3">
                            <Link
                              href="/services/web_development"
                              className="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Frontend Development
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/mobileapp_development"
                              className="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Mobile App Development
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/backend_development"
                              className="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Backend App Development
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/ui_ux_design"
                              className="mb-4 text-decoration-none nav-right-sub-heading"
                            >
                              UI/UX Design & Branding
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/software_testing"
                              className="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Software Testing
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/staff_agumentation"
                              className="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Staff Augmentation
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              href="/services/digital_transformation"
                              className="mb-4 text-decoration-none nav-right-sub-heading"
                            >
                              Digital Transformation
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-9 col-xl-9 nav-list-right">
                        <div className="row">
                          <div className="col-lg-2 col-xl-2 nav-list-col-1">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                CMS
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                WordPress
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Joomla
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Webflow
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-2 col-xl-2 nav-list-col-2">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                eCommerce
                              </li>

                              <li className="text-decoration-none nav-right-heading nav-right-sub-heading">
                                WooCommerce
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Shopify
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Magento
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-2 col-xl-2 nav-list-col-3">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                Backend
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                PHP
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Laravel
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Node.js
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                CodeIgniter
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Symfony
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Python
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-2 col-xl-2 nav-list-col-4">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                Frontend
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                HTML
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                CSS3
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                JavaScript
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                React
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Vue.js
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Angular
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-2 col-xl-2 nav-list-col-5">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                Mobile App
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Android
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                iOS
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                React Native
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Flutter
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-2 col-xl-2 nav-list-col-6">
                            <ul className="list-unstyled custom-list mt-3">
                              <li className="mb-2 text-decoration-none nav-right-heading">
                                Other
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Database
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Cloud & AWS
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Testing QA
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Website Maintenance
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                Digital Marketing
                              </li>
                              <li className="text-decoration-none nav-right-sub-heading">
                                PPC
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  // href="#"
                  style={{
                    cursor: "pointer",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                  onMouseDown={() => handleLinkClick("/casestudy")}
                  className={`nav-item nav-link list-style ${
                    router.pathname === "/casestudy" ? "active" : ""
                  }`}
                >
                  Case studies
                </p>
                <p
                  // href="#"
                  style={{
                    cursor: "pointer",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                  className={`nav-item nav-link list-style ${
                    router.pathname === "/about" ? "active" : ""
                  }`}
                  onMouseDown={() => handleLinkClick("/about")}
                  tabIndex="-1"
                >
                  About us
                </p>
                <p
                  style={{
                    cursor: "pointer",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                  // href="#"
                  className={`nav-item nav-link list-style ${
                    router.pathname === "/careers" ? "active" : ""
                  }`}
                  onMouseDown={() => handleLinkClick("/careers")}
                  tabIndex="-1"
                >
                  Careers
                </p>
              </div>
              <div className="navbar-nav">
                <button
                  type="button"
                  className="btn btn-color py-2 px-4"
                  onClick={handleopenAppointmentModal}
                >
                  Book an appointment
                </button>

                {/* <Link className="case-read-more home-apply" href="/contact">
                  Book an appointment
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Appointment />
    </>
  );
};

export default Header;
