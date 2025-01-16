import React from "react";
import Image from 'next/image';
import case_d from "../../../../public/assets/media/case-details/case_d.png";
import case_d_mongo1 from "../../../../public/assets/media/case-details/allicon/mongo.svg";
import case_d_aws1 from "../../../../public/assets/media/case-details/allicon/aws.svg";
import case_d_flutter1 from "../../../../public/assets/media/case-details/allicon/flutter.svg";
import case_d_html1 from "../../../../public/assets/media/case-details/allicon/html.svg";
import case_d_php1 from "../../../../public/assets/media/case-details/allicon/php.svg";
import case_d_js1 from "../../../../public/assets/media/case-details/allicon/js.svg";
import case_d_react1 from "../../../../public/assets/media/case-details/allicon/react.svg";
import case_d_node1 from "../../../../public/assets/media/case-details/allicon/node.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";

import optimized1 from "../../../../public/assets/media/case-details/Abhyan/Courses.svg";
import optimized2 from "../../../../public/assets/media/case-details/Abhyan/Question.svg";
import optimized3 from "../../../../public/assets/media/case-details/Abhyan/Anandmishra.svg";
import optimized4 from "../../../../public/assets/media/case-details/Abhyan/DigitalMarketingbundle.svg";


import user from "../../../../public/assets/media/case-details/Abhyan/keyaccomplishments.webp";
import case_d_Empowering_real from "../../../../public/assets/media/case-details/Real_Mocks_22.png";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import work_ogo from "../../../../public/assets/media/case-details/work_ogo.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Case_details = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Abhyan - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Abhyan - RadarSoft Technologies LLP"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300" style={{ marginTop: "0px" }}>
        <div className="container-fluid work-area-lower-sides">
          <div className="container">
            <div
              className="case-studies-btn-main"
              style={{ marginTop: "25px", marginBottom: "20px" }}
            >
              <button
                className="case-studies-btn"
                onClick={() => router.push("/casestudy")}
              >
                {" "}
                <i class="fa-solid fa-chevron-left"></i> Case Studies
              </button>
            </div>
            <div className="row work-area-lower-sides">
              {/* <div className="work-area-lower-side"> */}
              <div className="work-lower-left col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-right" data-aos-delay="300">
                <div className="work-area-logo">
                  <Image className="work-logo" src={work_ogo.src} alt="Description of the image" />
                </div>
                <h1 className="work-area-lower-heading">
                  Abhyan is an Indian e-learning <br />
                  platform offering Courses in<br />
                  Regional Languages
                </h1>
                <p className="work-area-lower-paragraph">
                  Abhyan offers affordable, industry-relevant courses in
                  regional languages, breaking down barriers to quality
                  education for students, graduates, and professionals. By
                  focusing on skill development, Abhyan equips learners with
                  essential job skills, helping them advance in their careers.
                </p>
                <div className="work-area-log">
                  <Link
                    className="work-area-lower-anchor-blue"
                    href="https://abhyan.in/"
                  >
                    <Image src={planet.src} alt="Description of the image" /> www.abhyan.in
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">24%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Overall Growth</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">50%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in System Efficiency</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">50%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in User Retention Rate.</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">80%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>
                        Improvement in feature <br />
                        Adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* START THE CHALLENGE */}
      <section className="chalange-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <div className="common-flex ">
                <h2>The Challenge</h2>
                <Link className="common-project-button" href="">
                  Start a project with us
                </Link>
              </div>
              <p>
                Abhyan faced significant hurdles in democratizing access to
                quality education in India. The primary challenges included
                breaking the language barrier for non-English speakers, offering
                affordable courses to make education accessible to a broader
                audience, and reaching learners in remote areas with limited
                internet access. Additionally, ensuring learner engagement and
                maintaining the relevance of course content to meet current
                industry standards were critical issues that needed to be
                addressed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END THE CHALLENGE */}

      {/* START KEY OBJECTIVE */}
      <section className="key-object common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <div className="commom-heading">
                <h2>Key Objectives</h2>
                <p>
                  Our goal is to make quality education accessible by offering
                  modules in regional languages like Telugu, Hindi, and Bengali.
                  We focus on enhancing comprehension through visually enriched
                  content and personalized programs to meet diverse learner
                  needs. Our curriculum is regularly updated to align with job
                  market demands, ensuring learners gain relevant skills for
                  today’s competitive landscape.
                </p>
              </div>
              <div className="sub-text">
                <h6 className="normal-heading">Regional Learning</h6>
                <p className="normal-desc">
                  Provide educational modules in regional languages like Telugu,
                  Hindi, and Bengali to enhance accessibility and understanding.
                </p>
              </div>
              <div className="sub-text">
                <h6 className="normal-heading">Custom Learning</h6>
                <p className="normal-desc">
                  Tailor programs to meet diverse learner needs, ensuring
                  personalized educational experiences.
                </p>
              </div>
              <div>
                <h6 className="normal-heading">Market-Driven Curriculum</h6>
                <p className="normal-desc">
                  Regularly update the curriculum to align with current job
                  market demands.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <Image className="case_d_right_img" src={case_d.src} alt="Description of the image" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY OBJECTIVE */}

      {/* START OUR PROCESS */}
      <section className="our-process common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Our Process</h2>
              <p>
                Our streamlined process ensures the highest quality and
                efficiency at every stage. From thorough research and innovative
                design to precise development, rigorous testing, strategic
                marketing, and ongoing support, we cover all bases to deliver
                exceptional results.
              </p>
            </div>
            <div class="process-container">
              <div class="process-step research">
                <Image src={research.src} alt="Research Icon" />
                <p>Research</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step design">
                <Image src={design.src} alt="Design Icon" />
                <p>Design</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step development">
                <Image src={development.src} alt="Development Icon" />
                <p>Development</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step testing">
                <Image src={testing.src} alt="Testing Icon" />
                <p>Testing</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step marketing">
                <Image src={marketing.src} alt="Testing Icon" />
                <p>Marketing</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step support">
                <Image src={suppport.src} alt="Testing Icon" />
                <p>Support</p>
              </div>
            </div>
            <div class="container mt-5 d-none">
              <div class="row text-center">
                <div class="col-md-2 col-sm-12">
                  <div class="process-step research">
                    <Image src={research.src} alt="Research Icon" />
                    <p>Research</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step design">
                    <Image src={design.src} alt="Design Icon" />
                    <p>Design</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step development">
                    <Image src={development.src} alt="Development Icon" />
                    <p>Development</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step testing">
                    <Image src={testing.src} alt="Testing Icon" />
                    <p>Testing</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step marketing">
                    <Image src={marketing.src} alt="marketing Icon" />
                    <p>Marketing</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step support">
                    <Image src={suppport.src} alt="support Icon" />
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR PROCESS */}

      {/* START IMPOWERING */}
      <section className="Empowering-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Empowering India Through Vernacular <br />E-Learning</h2>
              <p>
                Abhyan bridges the language gap in education, offering
                industry-relevant courses in regional Indian languages. Our
                affordable, high-quality skill development programs empower
                students, graduates, and professionals to excel in their
                careers. By combining cutting-edge technology with accessible
                pedagogy, we're transforming the e-learning landscape and
                unlocking opportunities across India.
              </p>
            </div>
          </div>
          <div className="row emproving_secound">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <h4>Proven Success</h4>
              <p>
                Since launch, Abhyan has empowered over 100,000 learners in
                India. Our vernacular courses boast a 40% higher completion rate
                than English-only options, highlighting the effectiveness of
                mother tongue education.
              </p>
              <div className="sub-text mt-60"></div>
              <div className="sub-text mt-36 mb-60"></div>
              <h4>Expanded Reach</h4>
              <p>
                We now offer courses in 8 major Indian languages Hindi, Telugu,
                Tamil, Bengali, Marathi, Gujarati, Kannada, and Malayalam
                enabling us to reach learners in 22 states and provide quality
                education to previously underserved regions.
              </p>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mt-md-5 mb-md-5 mb-sm-5 text-center">
              <div className="img_set">
                <Image
                  src={case_d_Empowering_real.src} alt="Description of the image" className=" w-100 h-100"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
              <div>
                <h4>Industry Partnerships</h4>
                <p>
                  Abhyan has partnered with over 50 leading companies, ensuring
                  our curriculum stays cutting-edge and aligned with industry
                  needs, which enhances job placement rates for our graduates.
                </p>
                <div className="sub-text mt-60"></div>
                <div className="sub-text mt-36 mb-60"></div>
                <h4>Continuous Innovation</h4>
                <p>
                  Our adaptive learning technology, introduced last year, has
                  personalized the learning experience for each user. This
                  AI-driven approach has reduced average course completion time
                  by 25% while improving knowledge retention by 35%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END IMPOWERING */}

      {/* START KEY ACCOMPLISHEMENTS */}
      <section className="key-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Key Accomplishments</h2>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-right" data-aos-delay="300">
              <Image src={user.src} alt="Description of the image" className="case_d_img" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300" >
              <div>
                <div className="sub-text-heading sub-text">
                  <h3>User Engagement</h3>
                  <div>
                    <ul>
                      <li>Increased daily active users by 20%.</li>
                      <li>
                        Achieved overall 12% improvement in course completion
                        rates.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading">
                  <h3>Learning Outcomes</h3>
                  <div>
                    <ul>
                      <li>20% of learners reported career advancement.</li>
                      <li>
                        10% increase in job placement rates for graduates.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row key_sec_row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="sub-text-heading sub-text">
                  <h3>Interactive Quizzes</h3>
                  <div>
                    <ul>
                      <li>
                        Our enhanced interactive quiz system has significantly
                        improved user engagement and learning outcomes.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading sub-text">
                  <h3>Progress Tracking</h3>
                  <ul>
                    <li>
                      Users like Shikha can now view their course completion
                      status, with clear metrics on courses started, completed,
                      and hours studied.
                    </li>
                  </ul>
                </div>
                <div className="sub-text-heading">
                  <h3>Gamification Elements</h3>
                  <ul>
                    <li>
                      We've introduced a points system, as confirmed by the "44
                      points" displayed in the image , motivating users to
                      participate more actively in quizzes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <Image src={case_d.src} alt="Description of the image" className="case_d_right_img" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY ACCOMPLISHEMENTS */}

      {/* START OPTIMIZED  */}
      <section className="Optimized-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
              <div className="commom-heading">
                <div className="common-flex ">
                  <h2>
                    Optimized for <br />
                    interactive learning
                  </h2>
                </div>
                <p>
                  Abhyan is designed for engaging interactive learning, offering
                  dynamic and immersive educational experiences. Our platform
                  integrates interactive elements like quizzes, simulations, and
                  real-time feedback to enhance understanding and retention,
                  making the learning process more engaging and effective.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 case_d_opt">
              <div>
                <Link className="common-project-button" href="">
                  Start a project with us
                </Link>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mt-2 foursimage">
            <div class="col text-center">
              <div class="p-3">
                <Image src={optimized1.src} alt="Description of the image"  />
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <Image src={optimized2.src} alt="Description of the image"  />
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <Image src={optimized3.src} alt="Description of the image"  />
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <Image src={optimized4.src} alt="Description of the image"  />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OPTIMIZED  */}

      {/* START OUR TECH */}
      <section className="our-tech-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-11 col-lg-5" data-aos="fade-right" data-aos-delay="300">
              <div className="commom-heading">
                <h2>
                  Our Tech Stack in
                  <br /> Abhyan's Success
                </h2>
                <div className="sub-text"></div>
                <p>
                  At RadarSoft Technologies, we use top tools to build great
                  solutions. MongoDB for strong databases, PHP for web
                  development, and React and Flutter for smooth web and mobile
                  apps. Node.js powers our backend, AWS ensures secure cloud
                  services, and JavaScript adds interactivity. Our tech stack
                  helps us create reliable and innovative solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="row row-cols-2 row-cols-lg-2 g-5 g-lg-5">
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_mongo1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_php1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_html1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_aws1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_react1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>



                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_node1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_flutter1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_js1.src} alt="Description of the image" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR TECH */}

      {/* START THE RESULT */}
      <section class="result-sec common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div class="container case-d-main-result">
          <div className="commom-heading">
            <h2>The results</h2>
          </div>

          <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-3 g-2 g-lg-3">
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">4.5</span>
                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                <hr />
                <p>Ratings by students</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">24%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>Overall Growth</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">50%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in System
                  <br /> Efficiency
                </p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">50%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in
                  <br /> User Retention Rate.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">20,000+</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>Students Enrolled</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">80%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in feature <br />
                  Adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END THE RESULT */}

      {/* START COMMON CONTACT */}
      <section className="common-contact common_margin_space mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-right" data-aos-delay="300">
              <div className="case_d_con">
                <Image src={common_contact.src} alt="Description of the image" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="sub-text-heading">
                  <h3>Want to know more! <br />Get in touch with our team.</h3>
                  <p className="normal-desc">
                    Chat with us now to get personalized guidance and ensure all
                    your concerns are addressed promptly and accurately.
                  </p>
                  <div className="common-contact-button">
                    <Link className="common-link" href="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COMMON CONTACT */}
    </>
  );
};

export default Case_details;
