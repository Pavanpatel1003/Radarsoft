import Head from "next/head";
import Image from "next/image";
import cat_logo from "../../public/assets/media/cat_logo.png";
import nbajaj from "../../public/assets/media/nbajaj.png";
import nlandt from "../../public/assets/media/nlandt.png";
import ntodo from "../../public/assets/media/ntodo.png";
import nyan from "../../public/assets/media/nyan.png";
import nacad from "../../public/assets/media/nacad.png";
import nbig from "../../public/assets/media/nbig.png";
import nrazor from "../../public/assets/media/nrazor.png";
import RD_Process from "../../public/assets/gif/RapidDesign.gif";
import rapid_dev from "../../public/assets/gif/RapidDevelopment.gif";
import continious_iteration from "../../public/assets/gif/itrations.gif";
import mobileapp from "../../public/assets/media/mobile.webp";
import uiux from "../../public/assets/media/uiux.webp";
import frontend from "../../public/assets/media/frontend.png";
import backend from "../../public/assets/media/backend.png";
import soft from "../../public/assets/media/soft.png";
import vector1 from "../../public/assets/media/Vector.png";
import vector2 from "../../public/assets/media/Vector (1).png";
import realmock9 from "../../public/assets/media/Real Mocks 9.png";
import homeab from "../../public/assets/media/homeab.png";
import rectangle54 from "../../public/assets/media/office-image.webp";
import workLogo from "../../public/assets/media/work-logo.png";
import workLogo2 from "../../public/assets/media/work-logo2.png";
import workLogo3 from "../../public/assets/media/work-logo3.png";
import quality from "../../public/assets/gif/quality.gif";
import digitalTransformation from "../../public/assets/media/digitalTransformation.webp";
import staff from "../../public/assets/media/staff.webp";
import ajit from "../../public/assets/media/ajit.png";
import vice from "../../public/assets/media/vice.png";
import digitalmarketing from "../../public/assets/media/digital.png"

import Link from "next/link";
import { useState, useEffect } from "react";
import { handleServices } from "@/components/common/data";
import Apply from "@/components/model/Apply";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import useValidationSchema from "@/components/validation/FormValidation";
import { toast } from "react-toastify";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "aos/dist/aos.css";
import AOS from 'aos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const router = useRouter();
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [backgroundClass, setBackgroundClass] = useState("unique-area-1");
  const { BookingValidation } = useValidationSchema();
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_URL;

  const handleAccordionClick = (accordionNumber) => {
    setTimeout(() => {
      setActiveAccordion(accordionNumber);
      switch (accordionNumber) {
        case 2:
          setBackgroundClass("unique-area-2");
          break;
        case 3:
          setBackgroundClass("unique-area-3");
          break;
        case 4:
          setBackgroundClass("unique-area-4");
          break;
        default:
          setBackgroundClass("unique-area-1");
          break;
      }
    }, 400);
  };

  const handleServiceRoute = () => {
    return router.push("/services");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      subject: "",
    },
    validationSchema: BookingValidation,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post(`${API_URL}/api/appoinment`, values);
        console.log("form data", response);
        if (response.status === 201) {
          console.log("response here", response);
          toast.success("Your request was submitted successfully.");
          resetForm();
        }
      } catch (error) {
        console.log("error in request", error);
        toast.error("There was an error submitting your request.");
      } finally {
        setLoading(false); // Set loading to false after submission completes
      }
    },
  });

  const serviceItems = [
    {
      id: 1,
      image: frontend,
      title: "Frontend Development",
      bgcolor: "service-boxe-1"
    },
    {
      id: 2,
      image: mobileapp,
      title: "Mobile App Development",
      bgcolor: "service-boxe-2"

    },
    {
      id: 3,
      image: backend,
      title: "Backend Development",
      bgcolor: "service-boxe-3"

    },
    {
      id: 4,
      image: uiux,
      title: "UI/UX Design & Branding",
      bgcolor: "service-boxe-4"

    },
    {
      id: 5,
      image: soft,
      title: "Software Testing",
      bgcolor: "service-boxe-1"

    },
    {
      id: 6,
      image: staff,
      title: "Staff Agumentation",
      bgcolor: "service-boxe-2"

    },
    {
      id: 7,
      image: digitalTransformation,
      title: "Digital Transformation",
      bgcolor: "service-boxe-3"

    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <button type="button" className="slick-prev mobile">Prev</button>,
    nextArrow: <button type="button" className="slick-next mobile">Next</button>,
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="RadarSoft Technologies LLP: Expert software development and tech outsourcing services for startups and corporates. Specializing in innovative solutions with flexible project models and dedicated resources to accelerate your development. Contact us for scalable, reliable, and high-quality tech solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`}>
        {/* <!--banner area started--> */}
        <section className="banner-area first_space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="banner-left-side-area">
                  <h1 className={`banner-heading`}>
                    Bringing Your Digital Vision to Life. <br />
                    We Design, Build, & Deliver !
                  </h1>
                  <p className="banner-paragraph">
                    At RadarSoft Technologies, we turn your ideas into real
                    solutions. Our skilled team designs easy-to-use interfaces,
                    builds smooth-running apps, and ensures projects are
                    completed on time. Combining creativity with the latest
                    technology, we bring your digital vision to life. From
                    designing unique looks to creating strong applications,
                    we're here to help you stand out in the digital space. Let
                    us guide you from start to finish, making your journey
                    simple and successful with our expert help.
                  </p>
                  <button
                    className="banner-button"
                    onClick={() => router.push("/contact")}
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="banner-right-side-area">
                  <div className="banner-right-side-box">
                    <h3 className="banner-right-side-h3">
                      Book an Appointment
                    </h3>
                    <form onSubmit={formik.handleSubmit}>
                                         {/* Full Name Field */}
                                         <input
                                           type="text"
                                           name="fullName"
                                           value={formik.values.fullName}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur} // Capture blur event for validation
                                           placeholder="Full Name*"
                                         />
                                         <div className="mb-4">
                                           {formik.touched.fullName && formik.errors.fullName && (
                                             <span
                                               className="formik-errors-text"
                                               style={{ fontSize: "12px" }}
                                             >
                                               {formik.errors.fullName}
                                             </span>
                                           )}
                                         </div>
                   
                                         {/* Email Field */}
                                         <input
                                           type="text"
                                           name="email"
                                           value={formik.values.email}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           placeholder="Email Id*"
                                         />
                                         <div className="mb-4">
                                           {formik.touched.email && formik.errors.email && (
                                             <span
                                               className="formik-errors-text"
                                               style={{ fontSize: "12px" }}
                                             >
                                               {formik.errors.email}
                                             </span>
                                           )}
                                         </div>
                   
                                         {/* Phone Number Field */}
                                         <input
                                           type="tel" // Use "tel" for better mobile support
                                           name="phoneNumber"
                                           value={formik.values.phoneNumber}
                                           onChange={(e) => {
                                             const onlyNumbers = e.target.value.replace(/\D/g, ""); // Remove non-numeric values
                                             formik.setFieldValue("phoneNumber", onlyNumbers);
                                           }}
                                           onBlur={formik.handleBlur}
                                           placeholder="Phone No*"
                                           inputMode="numeric" // Helps mobile users get a numeric keyboard
                                           pattern="[0-9]*" // Restricts input to numbers
                                           onKeyDown={(e) => {
                                             if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                                               e.preventDefault(); // Prevent invalid characters
                                             }
                                           }}
                                           style={{ appearance: "textfield" }} // Removes number input arrows
                                         />
                                         <div className="mb-4">
                                           {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                             <span className="formik-errors-text" style={{ fontSize: "12px" }}>
                                               {formik.errors.phoneNumber}
                                             </span>
                                           )}
                                         </div>
                   
                                         {/* Subject Field */}
                                         <input
                                           type="text"
                                           name="subject"
                                           value={formik.values.subject}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           placeholder="Subject*"
                                         />
                                         <div className="mb-4">
                                           {formik.touched.subject && formik.errors.subject && (
                                             <span
                                               className="formik-errors-text"
                                               style={{ fontSize: "12px" }}
                                             >
                                               {formik.errors.subject}
                                             </span>
                                           )}
                                         </div>
                   
                                         {/* Submit Button */}
                                         <button
                                           className="banner-right-side-button"
                                           type="submit"
                                           style={{
                                             display: "flex",
                                             justifyContent: "center",
                                             alignItems: "center",
                                           }}
                                         >
                                           {loading ? (
                                             <ThreeDots
                                               visible={true}
                                               height="80"
                                               width="80"
                                               color="#FFFFFF"
                                               radius="9"
                                               ariaLabel="three-dots-loading"
                                             />
                                           ) : (
                                             "Enquire Now"
                                           )}
                                         </button>
                                       </form>

                    <p className="banner-right-side-paragraph">
                      ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--banner area finished--> */}

        {/* <!--logo promtion --> */}
        <section className="logo-promtion common_margin_space common_margin_space" data-aos="fade-up" data-aos-delay="300" data-aos-duration="0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="logo-promotion-heading">
                  Companies we have worked with
                </h1>
                <div className="logo-promotion-images row row-col-1 row-col-lg-3 g-2 g-lg-5 mt-2">
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nbajaj} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nlandt} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={ntodo} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nrazor} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={cat_logo} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nyan} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nacad} alt="Description of the image" />
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={nbig} alt="Description of the image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--logo promtion finished--> */}

        {/* <!--unique area--> */}
        <section
          className={`unique-area common_margin_space col-md-12 ${backgroundClass}`}  
        >
          <div className="container">
            <div className="row">
              <div className="unique-area-label">
                <h1
                  className={`unique-area-heading col-lg-8 col-12 m-0 ${activeAccordion === 3 && "text-style"
                    }`}
                >
                  Discover how we work at
                  <br />
                  RadarSoft Technologies
                </h1>
                <div className="col-lg-4 mt-lg-0 mt-4 col-12">
                  <button
                    className={`${activeAccordion === 3 || activeAccordion === 4
                      ? "btn-style"
                      : "unique-area-button"
                      }`}
                    onClick={handleServiceRoute}
                  >
                    Discover how we work
                  </button>
                </div>
              </div>
              <hr
                style={
                  activeAccordion === 3
                    ? { border: "1px solid #ffffff", opacity: "1" }
                    : {}
                }
              />
              <div className="unique-area-details">
                <div className="row">
                  <div className="unique-area-left-side col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="0">
                    {activeAccordion === 1 && (
                      <Image
                        id="img-rapid-design"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={RD_Process}
                        alt="Rapid Design"
                      />
                    )}
                    {activeAccordion === 2 && (
                      <Image
                        id="img-rapid-development"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={rapid_dev}
                        alt="Rapid Development"
                      />
                    )}
                    {activeAccordion === 3 && (
                      <Image
                        id="img-continuous-iterations"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={continious_iteration}
                        alt="Continuous Iterations"
                      />
                    )}
                    {activeAccordion === 4 && (
                      <Image
                        id="img-continuous-iterations"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={quality}
                        alt="Continuous Iterations"
                      />
                    )}
                  </div>
                  <div
                    className="unique-area-accordion accordion col-lg-6 col-12"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingOne"
                      >
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-controls="collapseOne"
                          className={`accordion-button ${activeAccordion === 3 && "text-style"
                            } ${activeAccordion === 1
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          onClick={() => handleAccordionClick(1)}
                          aria-expanded={activeAccordion === 1}
                        >
                          Rapid Design
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 1 ? "show" : ""
                          }`}
                        id="collapseOne"
                        // class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          Our Rapid Design phase focuses on quickly translating
                          your vision into real world designs. We create
                          user-centric designs that align perfectly with our
                          client’s business goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingTwo"
                      >
                        <button
                          className={`accordion-button 
                            ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 2
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(2)}
                          aria-expanded={activeAccordion === 2}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-controls="collapseTwo"
                        >
                          Rapid Development
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 2 ? "show" : ""
                          }`}
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          In our Rapid Development stage, we leverage agile
                          methodologies and advanced technologies to smoothly
                          turn designs into functional products.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingThree"
                      >
                        <button
                          className={`accordion-button 
                                ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 3
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(3)}
                          aria-expanded={activeAccordion === 3}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-controls="collapseThree"
                        >
                          Continuous Iterations
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 3 ? "show" : ""
                          }`}
                        id="collapseThree"
                        // class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          We believe in constant improvement. Our Continuous
                          Iterations approach involves regular feedback loops
                          and incremental enhancements.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className={`accordion-header ${activeAccordion === 3 && "border-style"
                          }`}
                        id="headingFour"
                      >
                        <button
                          className={`accordion-button 
                                ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 4
                              ? "text-font-style"
                              : "collapsed"
                            }`}
                          type="button"
                          onClick={() => handleAccordionClick(4)}
                          aria-expanded={activeAccordion === 4}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-controls="collapseFour"
                        >
                          Quality Assurance
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 4 ? "show" : ""
                          }`}
                        id="collapseFour"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className={`accordion-body ${activeAccordion === 3 && "text-style"
                            }`}
                        >
                          Quality is at the core of everything we do. Our strict
                          Quality Assurance process involves comprehensive
                          testing at every stage, guaranteeing a robust,
                          bug-free solution that performs flawlessly in
                          real-world scenarios.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--unique area finished--> */}

        {/* <!--our service area started--> */}
        <section className="service-area col-md-12 common_margin_space" data-aos="fade-up" data-aos-delay="300" data-aos-duration="0">
          <div className="container">
            <div className="row">
              <div className="both_section">
                <h1 className="service-area-upper-side-heading m-0">
                  Our Services
                </h1>
                <span className="service-para">
                  <p className="service-area-upper-side-paragraph mt-3 mb-0">
                    Explore our comprehensive range of services designed to meet
                    your unique business needs. From cutting-
                    <br />
                    edge design and development to effective digital marketing,
                    we've got you covered.
                  </p>
                  {/* <p className="service-area-upper-paragraph m-0">
                    <u>View all</u>
                  </p> */}
                  <div className="col-lg-4 mt-lg-0 mt-4 col-12">
                    <button
                      className="unique-area-button"
                      onClick={handleServiceRoute}
                    >
                      Discover how we work
                    </button>
                  </div>
                </span>
              </div>

              <Slider {...sliderSettings}>
                {serviceItems.map((service) => (
                  <div
                  key={service.id}  
                    className="col-lg-3 col-md-6 my-lg-0 my-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleServices(router, service.id)}
                  >
                    <div className={`${service?.bgcolor}`}>
                      <Image
                        className="service img-fluid"
                        src={service.image}
                        alt={service.title}
                      />
                      <h6>{service.title}</h6>
                    </div>

                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        {/* <!--our service area closed--> */}

        {/* <!--our work area started--> */}
        <section className="work-area col-md-12 common_margin_space" data-aos="fade-up" data-aos-delay="300" data-aos-duration="0">
          <div className="container">
            <div className="row">
              <div className="work-para">
                <span>
                  <h1 className="work-area-upper-heading m-0">Our Work</h1>
                  <p className="work-area-upper-paragraph mt-3">
                    Discover our successful projects and see how we've helped
                    businesses to grow.
                  </p>
                </span>
                <span className="work-para mt-3">
                  {/* <p className="work-area-upper-paragraph m-0">
                    Discover our successful projects and see how we've helped
                    businesses to grow.
                  </p> */}
                  <p
                    className="work-area-upper-paragraph m-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/casestudy")}
                  >
                    <u> Read our all case studies</u>
                  </p>
                </span>
              </div>

              <div className="work-area-lower-side">
                <div className="work-lower-left col-md-6">
                  <div className="work-area-logo">
                    <Image className="work-logo" src={vector1} alt="1" />
                    <Image className="work-logo" src={vector2} alt="2" />
                  </div>
                  <h1 className="work-area-lower-heading">
                    Abhyan is an Indian e-learning <br /> platform offering
                    Courses in
                    <br />
                    Regional Languages
                  </h1>
                  <p className="work-area-lower-paragraph">
                    We worked on Abhyan to bridge the gap between technology and
                    education. Their courses provide essential job skills,
                    helping students, graduates, and professionals advance in
                    their careers.
                  </p>
                  <div className="work-area-log">
                    <button
                      className="work-area-lower-button"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/casestudy/abhyan")}
                    >
                      Read full case study <i className="bi bi-arrow-right"></i>
                    </button>
                    <Link className="work-area-lower-anchor" href="/casestudy">
                      <u> Read our all case studies</u>
                    </Link>
                  </div>
                </div>
                <div className="work-lower-right col-md-6">
                  <Image
                    className="work-picture-1 img-fluid mx-lg-4"
                    // src={realmock8}
                    src={homeab}
                    alt="3"
                  />
                  <Image
                    className="work-picture-2 img-fluid"
                    src={realmock9}
                    alt="3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our work area closed--> */}

        {/* <!--experience area started--> */}
        <section className="experience-area col-md-12 common_margin_space" data-aos="fade-up" data-aos-delay="300" data-aos-duration="0">
          <div className="container">
            <div className="row">
              <div>
                <h1 className="experience-area-heading">
                  Over 8+ years of hands-on experience, we bring a wealth of
                  knowledge and expertise to every project.
                </h1>
                <p className="experience-area-paragraph mt-4">
                  Our track record speaks for itself, delivering innovative
                  solutions across diverse industries and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="experience-lower">
            <div className="container">
              <div className="row">
                <div className="key-status col-lg-5 col-12">
                  <h2 className="experience-low-left-heading">Key Stats</h2>
                  <hr />
                  <p className="experience-low-left-paragraph">
                    At Radarsoft, we pride ourselves on our extensive experience
                    and proven results. Our team of skilled professionals has
                    successfully delivered cutting-edge solutions to a wide
                    range of clients across multiple sectors.
                  </p>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="exp-right-upper">
                    <span className="exp-span">
                      <h1 className="exp-low-heading">100+</h1>
                      <p className="exp-low-para">Satisfied Clients</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">20+</h1>
                      <p className="exp-low-para">Industries Served</p>
                    </span>
                  </div>
                  <hr className="exp-2" />
                  <div className="exp-right-low">
                    <span className="exp-span">
                      <h1 className="exp-low-heading">25</h1>
                      <p className="exp-low-para">Expert Team Members</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">120</h1>
                      <p className="exp-low-para">Projects Completed</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">5+</h1>
                      <p className="exp-low-para">Years of Excellence</p>
                    </span>
                    <span className="exp-span">
                      <h1 className="exp-low-heading">3k+</h1>
                      <p className="exp-low-para">
                        Lines of code commits per month
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--experience area closed--> */}

        {/* <!--about us started--> */}
        <section className="about-us-area col-md-12 mb-150 common_margin_space" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <div className="row justify-content-between">
              <div className="about-us-left-side col-lg-5 col-12" data-aos="fade-right" data-aos-delay="300" data-aos-duration="0">
                <h1 className="about-us-left-heading">About Us</h1>
                <p className="about-us-left-paragraph m-0">
                  At Radarsoft Technologies, we are passionate about
                  transforming digital visions into reality. With over 8 years
                  of industry experience, our team of dedicated professionals
                  specializes in delivering cutting-edge IT solutions tailored
                  to meet the unique needs of businesses across diverse sectors.
                  <br />
                  <br />
                  We pride ourselves on our innovative unique process, which
                  combines rapid design and development with rigorous quality
                  assurance to ensure superior results. At Radarsoft, we don't
                  just build software; we craft digital experiences that propel
                  businesses forward in the digital age.
                </p>
                <button
                  className="about-us-left-button"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/about")}
                >
                  Learn More About Us
                </button>
              </div>
              <div className="about-us-right-side col-lg-6 col-12" data-aos="fade-left" data-aos-delay="300" data-aos-duration="0">
                <Image
                  className="about-image img-fluid"
                  src={rectangle54}
                  alt="frr"
                />
                <div className="about-box">
                  <span className="mb-4">
                    <h6>Join our team</h6>
                    <p className="about-box-paragraph m-0">
                      If you want to grow and get better.
                    </p>
                  </span>
                  <div className="text-end about-box-button">
                    {/* <button
                      type="button"
                      onClick={handleApplyModel}
                      className="btn btn-primary"
                    >
                    </button> */}
                    <Link className="case-read-more home-apply" href="/careers">
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--about us closed--> */}

        {/* <!--stats area started--> */}
        <section className="stats-area col-md-12 d-none">
          <div className="container">
            <div className="row">
              <div className="text-center mb-lg-5 mb-0">
                <h1 className="stats-area-heading">Hear from our Clients</h1>
                <p className="stats-area-paragraph">
                  At Radarsoft, we take pride in our diverse portfolio of
                  successful projects across various industries. Each case study
                  represents our commitment to delivering customized,
                  high-quality solutions that drive real business value. From
                  startups to enterprise-level organizations, we've helped our
                  clients overcome challenges, streamline operations, and
                  achieve digital transformation.
                </p>
              </div>

              <div className="stats-images">
                <div className="row g-5">
                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div className="worklife-express abhyanbg">
                      {/* <div
                      className="worklife-express"
                      style={{ background: "#002758" }}
                    > */}
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo} alt="Description of the image" />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={vice} alt="Description of the image" />
                        <span>
                          <h6>Vikram Verma</h6>
                          <p style={{ fontSize: "14px" }}>
                            Vice President Abhyan
                          </p>
                        </span>
                      </user>
                      {/* </div> */}
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div className="worklife-express acadbg">
                      {/* <div
                      className="worklife-express"
                      style={{ background: "#002758" }}
                    > */}
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo2} alt="Description of the image" />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={ajit} alt="Description of the image" />
                        <span>
                          <h6>Ajit Agarkar</h6>
                          <p style={{ fontSize: "14px" }}>
                            Vice President AcadSpace
                          </p>
                        </span>
                      </user>
                      {/* </div> */}
                    </div>
                  </div>

                  <div className="col-lg-4 col-12 my-lg-0 my-3">
                    <div className="worklife-express makeupbg">
                      {/* <div
                        className="worklife-express"
                        style={{ background: "#FFFFFF", color: "#000000" }}
                      > */}
                      <div className="work-logo">
                        <Image className="img-fluid" src={workLogo3} alt="Description of the image" />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image className="img-fluid" src={vice} alt="Description of the image" />
                        <span>
                          <h6>Vikram Verma</h6>
                          <p style={{ fontSize: "14px" }}>
                            Product Manager Makeupcentral
                          </p>
                        </span>
                      </user>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--stats area finished--> */}
      </main>
      <Apply />
    </>
  );
}
