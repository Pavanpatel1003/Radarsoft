import { useRouter } from "next/router";
import Image from "next/image";
import case1 from "../../../public/assets/media/allcase/case1.png";
import case2 from "../../../public/assets/media/allcase/case2.png";
import case3 from "../../../public/assets/media/allcase/case3.png";
import case4 from "../../../public/assets/media/allcase/case4.png";
import case5 from "../../../public/assets/media/allcase/case5.png";
import case6 from "../../../public/assets/media/allcase/case6.png";
import case7 from "../../../public/assets/media/allcase/case7.png";
import case8 from "../../../public/assets/media/allcase/case8.png";
import case1small from "../../../public/assets/media/allcase/case1small.png";
import case2small from "../../../public/assets/media/allcase/case2small.png";
import case3small from "../../../public/assets/media/allcase/case3small.png";
import case4small from "../../../public/assets/media/allcase/case4small.png";
import case5small from "../../../public/assets/media/allcase/case5small.png";
import case6small from "../../../public/assets/media/allcase/case6small.png";
import case7small from "../../../public/assets/media/allcase/case7small.png";
import case8small from "../../../public/assets/media/allcase/case8small.png";
import casestudybanner from "../../../public/assets/media/case/casestudybanner.webp";
import Link from "next/link";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useState, useEffect } from "react";

const CaseStudy = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Our Software Development Projects & Case Studies - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Discover our portfolio showcasing successful projects in software development, mobile apps, web applications, and digital transformation across various industries."
        />
        <meta
          name="Keywords"
          content="Software development portfolio, successful projects, mobile apps, web applications, digital transformation, RadarSoft case studies."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="case-back-studies d-none">
        <div className="container">
          <div className="row">
            <div className="case-back-btn">
              <span className="me-2">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <Link href="/">Back to the homepage</Link>
            </div>
            <div className="case-studies-btn-main">
              <button className="case-studies-btn">Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy title section */}
      <section className="career-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Our Work</h2>
              <p>
                Discover how we've helped businesses overcome challenges and
                achieve their goals. Our case studies showcase the innovative
                solutions and tangible results we've delivered for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy banner section */}
      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={casestudybanner}
            alt="Career Banner"
          />
        </div>
      </section>

      <section className="case-studies-start common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="case-studies-flex">
              <div className="commom-heading">
                <h2>Case Studies</h2>
                <p>
                  Discover how we've helped businesses overcome challenges and
                  achieve
                  <br /> their goals. Our case studies showcase the innovative
                  solutions and
                  <br /> tangible results we've delivered for our clients.
                </p>
              </div>
              <div>
                <Link
                  className="common-project-button"
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Start a project with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-blog mb-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 case-pad">

            <div className="col" data-aos="fade-right" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case1.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head text-head">
                  <div className="mb-15">
                    <Image src={case1small.src}  alt="" />
                  </div>
                  <h4>
                    Abhyan - Hub for students & <br />professionals to learn new skills
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/abhyan">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-left" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case2.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Shopping
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case2small.src}  alt="" />
                  </div>
                  <h4>
                    Trac91 - is a a one-step solution for all <br />online shopping
                    order tracking
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/trac">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-right" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case3.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case3small.src}  alt="" />
                  </div>
                  <h4>
                    AcadSpace - Google Maps for Career Prep Empowering <br /> Students and Supporting Schools
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/acad">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case4.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    SME Support Platform
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Web
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case4small.src}  alt="" />
                  </div>
                  <h4>
                    OnlineKorp - Your Trusted Partner for Tailored Digital Solutions to Elevate Your Business
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/onlineKorp">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-right" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case5.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Business Analytics Platform
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Web
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case5small.src}  alt="" />
                  </div>
                  <h4>
                    Bajaj Allianz - Empowering Businesses with Performance Tracking and Goal Management
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/bajaj">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case6.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Fitness
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case6small.src}  alt="" />
                  </div>
                  <h4>
                    Endura Fitness - Transforming Fitness Journeys with Personalized Guidance and Community Support
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/endura">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-right" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case7.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Puzzle Gaming
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case7small.src}  alt="" />
                  </div>
                  <h4>
                    CrossPunk - A Deep Dive into Crafting a Puzzle Adventure That Challenges Minds and Ignites Creativity
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/crosspunk">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col" data-aos="fade-up" data-aos-delay="300">
              <div className="case-card">
                <div>
                  <Image src={case8.src}  alt="" className="w-100" />
                </div>
                <div className="case-btn-set d-none">
                  <Link className="case-edtech-btn" href="">
                    Pet Health Monitoring
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile
                  </Link>
                </div>
                <div className="case-card-head text-head">
                <div>
                    <Image src={case8small.src}  alt="" />
                  </div>
                  <h4>
                    Vacay Sitters - Your Trusted Partner in Providing Care for Your Pets and Home When Life Takes You Away
                  </h4>
                  <Link className="case-read-more read-text" href="/casestudy/vacaySitters">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
