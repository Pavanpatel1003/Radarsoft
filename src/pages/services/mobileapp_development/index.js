import React from "react";
import Image from "next/image";
import servicedetails1 from "../../../../public/assets/media/service-details/servicedetails1.webp";
import android from "../../../../public/assets/media/service-details/android.png";
import php from "../../../../public/assets/media/service-details/php.png";
import aws from "../../../../public/assets/media/service-details/aws.png";
import swift from "../../../../public/assets/media/service-details/swift.png";
import xml from "../../../../public/assets/media/service-details/xml.png";
import kotlin from "../../../../public/assets/media/service-details/kotlin.png";
import flutter from "../../../../public/assets/media/service-details/flutter.png";
import java from "../../../../public/assets/media/service-details/java.png";
import jira from "../../../../public/assets/media/service-details/jira.png";
import heathcare from "../../../../public/assets/media/service-details/heathcare.webp";
import Retail from "../../../../public/assets/media/service-details/Retail.webp";
import Education from "../../../../public/assets/media/service-details/Education.webp";
import Realestate from "../../../../public/assets/media/service-details/Realestate.webp";
import Event from "../../../../public/assets/media/service-details/Event.webp";
import Finance from "../../../../public/assets/media/service-details/Finance.webp";
import Food from "../../../../public/assets/media/service-details/Food.webp";
import Media from "../../../../public/assets/media/service-details/Media.webp";
import mobileappbanner from "../../../../public/assets/media/service-details/mobileappbanner.webp";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';

const Mobileapp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      email,
      fullName,
      phoneNumber,
      subject,
    };
    try {
      const response = await axios.post(
        `https://radarsoft-black.vercel.app/api/hello`,
        form
      );
      if (response.status === 200) {
        console.log("response here", response);
        setEmail("");
        setFullName("");
        setPhoneNumber("");
        setSubject("");
        alert("Your Request Submitted successfully.");
      }
    } catch (error) {
      console.log("error in reques", error);
    }
    console.log("data here", form);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Mobile App Development Services for Android & iOS - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Build robust, user-friendly mobile applications for Android and iOS platforms. We use cutting-edge technologies like React Native and Flutter to deliver seamless mobile experiences."
        />
        <meta
          name="Keywords"
          content="Mobile app development, Android, iOS, React Native, Flutter, app solutions." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* service details title section */}
      <section className="career-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="career-banner-title">
            <div className="details-new">
              <span className="commom-heading marginbtm">
                <h2>
                  We build powerful apps
                  <br /> for iOS & Android{" "}
                </h2>
              </span>
              <span className="text-end">
                <Link
                  className="common-project-button getin"
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Get in touch
                </Link>
              </span>
            </div>
            <div className="commom-heading">
              <p>
                We craft custom mobile apps that deliver seamless user
                experiences on iOS and Android platforms. Our team combines
                innovative design with robust development to create intuitive
                and feature-rich apps that align with your business goals.
                Whether it's a startup idea or a complex enterprise solution, we
                build scalable and secure apps tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* service details banner section */}
      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={mobileappbanner}
            alt="Career Banner"
          />
        </div>
      </section>
      {/* START EXPERIENCE */}
      <section className="banner-area d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-left-side-area commom-heading">
                <h2>Experience Seamless Excellence: Our Software Testing</h2>
                <p>
                  We offer comprehensive software testing services to ensure
                  your applications meet the highest standards of quality and
                  performance. Our expert team conducts rigorous testing across
                  various levels, including functional, performance, and
                  security testing, to identify and resolve issues before they
                  impact users. Utilizing both automated and manual testing
                  techniques, we provide thorough validation and verification,
                  ensuring that your software is reliable, efficient, and free
                  of defects.
                </p>
                <div>
                  <Link
                    className="common-project-button"
                    href="/contact"
                    style={{ textDecoration: "none" }}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-right-side-area">
                <div className="banner-right-side-box">
                  <h3 className="banner-right-side-h3">Book an Appointment</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="FullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name*"
                      required
                    />
                    <input
                      type="text"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Id*"
                      required
                    />

                    <input
                      type="number"
                      placeholder="Phone No*"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Subject*"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <button className="banner-right-side-button" type="submit">
                      Enquire Now
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
      {/* END EXPERIENCE */}

      {/* START OUR TEAM */}
      <section className="service-contact common_margin_space mb_100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="commom-heading">
                  <h2>
                    Our Team brings together experts with diverse skillsets
                  </h2>
                  <p>
                    Our team is a blend of experts from various fields, each
                    bringing unique skills and perspectives. Together, we
                    combine our strengths in design, development, strategy, and
                    innovation to deliver comprehensive solutions. With a shared
                    passion for excellence, we collaborate closely to turn ideas
                    into reality, ensuring every project meets the highest
                    standards.
                  </p>
                  <div className="service_details_ours">
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-right" data-aos-delay="300">
              <div className="right-side-img">
                <Image
                  src={servicedetails1 }
                  alt="servicedetails"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR TEAM */}

      {/* START FOLLOWING */}
      <section className="service-d-following" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="service-d-following-head commom-heading">
              <h3>We use following</h3>
              <h2>Mobile App Development Technologies</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="grid-container">
                  <div className="grid-item">
                    <Image src={android }  alt="android" />
                  </div>
                  <div className="grid-item">
                    <Image src={php }  alt="PHP" />
                  </div>
                  <div className="grid-item">
                    <Image src={aws }  alt="AWS" />
                  </div>
                  <div className="grid-item">
                    <Image src={flutter }  alt="Flutter" />
                  </div>
                  <div className="grid-item">
                    <Image src={swift }  alt="swift" />
                  </div>
                  <div className="grid-item">
                    <Image src={xml }  alt="xml" />
                  </div>
                  <div className="grid-item">
                    <Image src={kotlin }  alt="kotlin.js" />
                  </div>
                  <div className="grid-item">
                    <Image src={java }  alt="java" />
                  </div>
                  <div className="grid-item">
                    <Image src={jira }  alt="Jira" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END FOLLOWING */}

      {/* START OUR INDUSTRIES */}
      <section className="service-d-industries">
        <div className="container">
          <div className="row">
            <div className="service-d-following-industries-set">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="commom-heading">
                    <h2>Our Industries</h2>
                    <p>
                      We're proud to work with a wide range of industries,
                      including healthcare, retail, e-commerce, education, and
                      real estate, providing expert services tailored to each
                      sector's unique needs
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 service_details_our">
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
            <div>
              <div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-4">
                  <div className="col">
                    <div>
                      <div>
                        <Image src={heathcare }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-blue">
                        <h3>Healthcare</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Retail }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-green">
                        <h3>Retail & Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Education }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-pink">
                        <h3>Education</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Realestate }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-yellow">
                        <h3>Real Estate</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Event }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-blue">
                        <h3>Events</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Finance }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-green">
                        <h3>Finance</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Food }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-pink">
                        <h3>Food & Restaurants</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <div>
                        <Image src={Media }  alt="Description of the image" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-yellow">
                        <h3>Media & Entertainment</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR INDUSTRIES */}
    </>
  );
};

export default Mobileapp;
