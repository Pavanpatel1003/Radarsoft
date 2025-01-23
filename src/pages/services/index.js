import Image from "next/image";
import figma from "../../../public/assets/media/service/figma.png";
import ps from "../../../public/assets/media/service/ps.png";
import xd from "../../../public/assets/media/service/xd.png";
import ai from "../../../public/assets/media/service/ai.png";
import android from "../../../public/assets/media/service/android.png";
import ios from "../../../public/assets/media/service/ios.png";
import mobile3 from "../../../public/assets/media/service/mobile3.png";
import mobile4 from "../../../public/assets/media/service/mobile4.png";
import html from "../../../public/assets/media/service/Html.png";
import css from "../../../public/assets/media/service/css.png";
import javascript from "../../../public/assets/media/service/javascript.png";
import bootstrap from "../../../public/assets/media/service/bootstrap.png";
import react from "../../../public/assets/media/service/react.png";
import angular from "../../../public/assets/media/service/angular.png";
import mysql from "../../../public/assets/media/service/mysql.png";
import php from "../../../public/assets/media/service/php.png";
import red from "../../../public/assets/media/service/red.png";
import java from "../../../public/assets/media/service/java.png";
import js from "../../../public/assets/media/service/js.png";
import pen from "../../../public/assets/media/service/pen.png";
import cy from "../../../public/assets/media/service/cy.png";
import se from "../../../public/assets/media/service/se.png";
import redleg from "../../../public/assets/media/service/redleg.png";
import mongodb from "../../../public/assets/media/service/mongodb.png";
import digital1 from "../../../public/assets/media/service/digital1.png";
import digital2 from "../../../public/assets/media/service/digital2.png";
import github from "../../../public/assets/media/service/github.png";
import a from "../../../public/assets/media/service/a.png";
import aws from "../../../public/assets/media/service/aws.png";
import digital6 from "../../../public/assets/media/service/digital6.png";
import common_contact from "../../../public/assets/media/common/common-contact.webp";
import servicebanner from "../../../public/assets/media/service/servicebanner.webp";

import Link from "next/link";
import { handleServices } from "@/components/common/data";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Services - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Explore our full range of services including frontend and backend development, mobile app development, UI/UX design, and IT staff augmentation to meet your business needs."
        />
        <meta name="Keywords" content="Software services, mobile app development, frontend development, backend development, IT staff augmentation, UI/UX design." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* service title section */}
      <section className="career-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>We are the best at what we do</h2>
              <p>
                We swiftly transform your ideas into user-friendly designs
                aligned with your business goals. Our expertise spans UI/UX
                design, mobile and web development, backend application
                development, digital transformation, and software testing. By
                using agile methodologies and the latest technologies, we create
                functional, robust products. We prioritize continuous
                improvement through regular feedback and updates, ensuring
                reliable, high-quality solutions that perform seamlessly in
                real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* service banner section */}
      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={servicebanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* START OUR SERVICE */}
      <section className="service-cards common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="commom-heading">
            <h2>Our Services</h2>
          </div>
          <div className="row g-4">
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 4)}
            >
              <div className="service-card service-bottom">
                <h4>UX/UI Design & Branding</h4>
                <div className="normal-desc service-description">
                  <ul>
                    <li>
                      We create intuitive and visually appealing user interfaces.
                    </li>
                    <li>We design according to your brand and user needs.</li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <Image src={figma }  alt="Figma" />
                  </div>
                  <div className="col">
                    <Image src={ps }  alt="Photoshop" />
                  </div>
                  <div className="col">
                    <Image src={xd }  alt="Adobe XD" />
                  </div>
                  <div className="col">
                    <Image src={ai }  alt="Illustrator" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 2)}
            >
              <div className="service-card service-bottom">
                <h4>Mobile App Development</h4>
                <div className="service-description">
                  <ul>
                    <li>
                      We develop high-performance apps for iOS and Android.
                    </li>
                    <li>
                      Our apps ensure seamless user experiences across devices.
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <Image src={android }  alt="Figma" />
                  </div>
                  <div className="col">
                    <Image src={ios }  alt="Photoshop" />
                  </div>
                  <div className="col">
                    <Image src={mobile3 }  alt="Adobe XD" />
                  </div>
                  <div className="col">
                    <Image src={mobile4 }  alt="Illustrator" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 1)}
            >
              <div className="service-card service-top">
                <h4>Frontend Development</h4>
                <div className="service-description">
                  <ul>
                    <li>
                      We build responsive, user-friendly, and fast-loading websites.
                    </li>
                    <li>
                      Our websites are optimized for speed and performance.
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <Image src={html }  alt="html" />
                  </div>
                  <div className="col">
                    <Image src={css }  alt="css" />
                  </div>
                  <div className="col">
                    <Image src={javascript }  alt="javascript" />
                  </div>
                  <div className="col">
                    <Image src={bootstrap }  alt="bootstrap" />
                  </div>
                  <div className="col">
                    <Image src={react }  alt="react" />
                  </div>
                  <div className="col">
                    <Image src={angular }  alt="angular" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 3)}
            >
              <div className="service-card service-top">
                <h4>Backend App Development</h4>
                <div className="service-description">
                  <ul>
                    <li>We create robust and scalable backend systems.</li>
                    <li>
                      Our solutions ensure secure and efficient data handling.
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <div>
                      <Image src={mysql }  alt="mysql" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={php }  alt="php" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={red }  alt="red" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={java }  alt="java" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={js }  alt="js" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={mongodb }  alt="mongodb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 8)}
            >
              <div className="service-card service-top">
                <h4>Digital &nbsp; Transformation</h4>
                <div className="service-description">
                  <ul>
                    <li>
                      We modernize business processes with cutting-edge digital
                      solutions.
                    </li>
                    <li>
                      Our strategies drive efficiency, keeping you ahead of
                      competition.{" "}
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <div>
                      <Image src={digital1 }  alt="digital1" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={digital2 }  alt="digital2" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={github }  alt="github" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={a }  alt="a" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={aws }  alt="aws" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={digital6 }  alt="digital6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 5)}
            >
              <div className="service-card service-top">
                <h4>Software Testing</h4>
                <div className="service-description">
                  <ul>
                    <li>
                      We provide thorough testing for flawless software performance.
                    </li>
                    <li>We ensure top-quality standards before launch.</li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <div>
                      <Image src={se }  alt="se" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={cy }  alt="cy" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={pen }  alt="pen" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={redleg }  alt="redleg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
              style={{ cursor: "pointer" }}
              onClick={() => handleServices(router, 7)}
            >
              <div className="service-card service-top">
                <h4>Staff Augmentation</h4>
                <div className="service-description">
                  <ul>
                    <li>
                      We offer skilled professionals to boost your team’s
                      productivity.
                    </li>
                    <li>
                      Our flexible staffing solutions ensure you have the right
                      talent.
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-2 g-lg-3">
                  <div className="col">
                    <div>
                      <Image src={react }  alt="react" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={angular }  alt="angular" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={red }  alt="red" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={java }  alt="java" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={pen }  alt="js" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <Image src={mongodb }  alt="mongodb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR SERVICE */}

      {/* START COMMON CONTACT */}
      <section className="common-contact common_margin_space mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-right" data-aos-delay="300">
              <div className="case_d_con">
                <Image src={common_contact }  alt="Description of the image" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="sub-text-heading">
                  <h3>Want to know more! Get in touch with our team.</h3>
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

export default Services;
