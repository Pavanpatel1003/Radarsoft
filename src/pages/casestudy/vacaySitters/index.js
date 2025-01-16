import React from "react";
import case_d from "../../../../public/assets/media/case-details/vacaysitters/key22.svg";
import case_ds from "../../../../public/assets/media/case-details/vacaysitters/keyobject.svg";
import case_d_flutter1 from "../../../../public/assets/media/case-details/allicon/flutter.svg";
import case_d_php1 from "../../../../public/assets/media/case-details/allicon/php.svg";
import yoco from "../../../../public/assets/media/case-details/allicon/yoco.svg";
import bootstrap from "../../../../public/assets/media/case-details/allicon/bootstrap.svg";
import aws from "../../../../public/assets/media/case-details/allicon/aws.svg";
import firebase from "../../../../public/assets/media/case-details/allicon/firebase.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
// import optimized1 from "../../../../public/assets/media/case-details/optimized1.png";
// import optimized2 from "../../../../public/assets/media/case-details/optimized2.png";
// import optimized3 from "../../../../public/assets/media/case-details/optimized3.png";
// import optimized4 from "../../../../public/assets/media/case-details/optimized4.png";

import optimized1 from "../../../../public/assets/media/case-details/vacaysitters/optimized1.svg";
import optimized2 from "../../../../public/assets/media/case-details/vacaysitters/optimized2.svg";
import optimized3 from "../../../../public/assets/media/case-details/vacaysitters/optimized3.svg";
import optimized4 from "../../../../public/assets/media/case-details/vacaysitters/optimized4.svg";


import user from "../../../../public/assets/media/case-details/vacaysitters/key1.svg";
import case_d_Empowering_real from "../../../../public/assets/media/case-details/vacaysitters/key2.svg";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import work_ogo from "../../../../public/assets/media/case-details/vacaysitters/vacacylogo.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Case_vacay = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <Head>
                <title>Vacay sitters - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="Vacay sitters - RadarSoft Technologies LLP"
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
                                    <Image className="work-logo" src={work_ogo.src} alt="" />
                                </div>
                                <h1 className="work-area-lower-heading">
                                    Vacay Sitters: Your Trusted Partner in
                                    <br />Providing Care for Your Pets and
                                    <br />Home When Life Takes You Away
                                </h1>
                                <p className="work-area-lower-paragraph">
                                    Vacay Sitters is your trusted partner for caring for your pets and home when you’re away. Our carefully vetted sitters provide personalized attention to keep your furry friends happy, healthy, and stress-free. At the same time, your home remains secure and well-maintained. With a focus on trust, quality, and convenience, we’re here to ensure your peace of mind, so you can travel confidently knowing everything you love is in safe hands.
                                </p>
                                <div className="work-area-log">
                                    <Link
                                        className="work-area-lower-anchor-blue"
                                        href="https://www.endurafitness.in/"
                                    >
                                        <Image src={planet.src} /> www.vacaysitters.co.za
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">28%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Increase in user <br />retention rate</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">50%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>feature adoption rate</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">85%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Positive feedback <br />
                                                rate</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">20%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>
                                                Improvement in user <br />
                                                workout consistency
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
                                To tackle the common challenges of trust, convenience, and personalized care in pet and house sitting, we created Vacay Sitters. We know that finding reliable and trustworthy sitters can be difficult, so we’ve implemented a rigorous vetting process, including ID verification and sitter training, to ensure security and reliability. Our easy-to-use booking system eliminates scheduling stress, while our pet-centric approach ensures your furry friends receive the personalized care they deserve, and your home stays secure while you're away.
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
                                    Vacay Sitters platform is designed to provide pet owners and homeowners with a comprehensive and reliable solution for their house sitting and pet sitting needs. By leveraging a network of verified, experienced, and trustworthy sitters, the platform aims to deliver personalized care for both homes and furry friends, ensuring peace of mind for owners while they are away.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Trusted Sitters</h6>
                                <p className="normal-desc">
                                    Customized workout and nutrition plans designed to align with each user's specific goals, ensuring a more effective fitness journey.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Seamless Bookings</h6>
                                <p className="normal-desc">
                                    The platform's intuitive booking system allows users to easily find and book the right sitter for their needs with convenience.
                                </p>
                            </div>
                            <div>
                                <h6 className="normal-heading">Comprehensive Care</h6>
                                <p className="normal-desc">
                                    Vacay Sitters provides a user centric approach to home and pet sitting, offering services that cater to the diverse needs of users, from daily visits to 24/7 care.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image className="case_d_right_img" src={case_ds.src} alt="" />
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
                                Our streamlined process ensures the highest quality and efficiency at every stage. From thorough research and innovative design to precise development, rigorous testing, strategic marketing, and ongoing support, we cover all bases to deliver exceptional results.
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
                                        <Image src={firebase.src} alt="marketing Icon" />
                                        <p>Marketing</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step support">
                                        <Image src={aws.src} alt="support Icon" />
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
                            <h2>Vacay Sitters: The Perfect Solution for
                                <br />Trusted Pet and Home Care</h2>
                            <p>
                                Vacay Sitters offers a reliable and trusted solution for both pet and home sitting. Our experienced sitters provide personalized care for your furry friends and ensure your home stays secure while you're away. With a thorough vetting process and an easy-to-use booking system, we give you peace of mind knowing your pets and home are in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="row emproving_secound">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <h4>Proven Success</h4>
                            <p>
                                Vacay Sitters has built a strong reputation for exceptional service, consistently earning high ratings and positive reviews. Users trust the platform for its reliable, personalized care, making Vacay Sitters a leading provider in the industry.
                            </p>
                            <div className="sub-text mt-60"></div>
                            <div className="sub-text mt-36 mb-60"></div>
                            <h4>Expanded Reach</h4>
                            <p>
                                With a growing network of verified sitters across multiple regions, Vacay Sitters is continuously expanding its reach to serve a wider customer base. The platform's commitment to geographic coverage allows users to access trusted sitting services regardless of their location.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-md-5 mb-sm-5 text-center">
                            <div className="img_set">
                                <Image
                                    src={case_d_Empowering_real.src}
                                    alt=""
                                    className=" w-100 h-100"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
                            <div>
                                <h4>Industry Partnerships</h4>
                                <p>
                                    Vacay Sitters has formed strong partnerships with key industry organizations, leveraging their expertise and resources to enhance its pet and home sitting services. These collaborations help the platform stay ahead of industry best practices and ensure its sitters receive top-tier training.
                                </p>
                                <div className="sub-text mt-60"></div>
                                <div className="sub-text mt-36 mb-60"></div>
                                <h4>Continuous Innovation</h4>
                                <p>
                                    Vacay Sitters is dedicated to staying at the forefront of the pet and home sitting industry. The platform regularly introduces new features and services to enhance the user experience, leveraging customer feedback and industry insights to drive continuous improvements and innovation.
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
                            <Image src={user.src} alt="" className="case_d_img" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Simplified Pet Management</h3>
                                    <div>
                                        <ul>
                                            <li>Allows users to easily add and manage details for multiple pets in one centralized location</li>
                                            <li>
                                                Ensures sitters have comprehensive information to provide personalized care for each furry friend.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Transparent Booking Process</h3>
                                    <div>
                                        <ul>
                                            <li>Provides users with clear and detailed booking information, including sitter profiles and requested dates.</li>
                                            <li>
                                                Builds trust and confidence in the platform through this level of transparency.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row key_sec_row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-right" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Comprehensive Sitter <br />Profiles</h3>
                                    <ul>
                                        <li>
                                            The sitter profiles display detailed information about the pet sitters, including their experience, skills, and ratings.
                                        </li>
                                        <li>
                                            This level of transparency allows users to make informed decisions when selecting the right sitter for their needs.
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Streamlined Booking<br /> Management</h3>
                                    <ul>
                                        <li>
                                            The platform provides a dedicated "Bookings" section, making it easy for users to view their upcoming and past bookings.
                                        </li>
                                        <li>
                                            This centralized booking overview simplifies the process of managing and monitoring pet sitting arrangements.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image src={case_d.src} alt="" className="case_d_right_img" />
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
                                        Vacay Sitters Optimized <br />
                                        for Comfort & Security
                                    </h2>
                                </div>
                                <p>
                                    Vacay Sitters prioritizes comfort and security with a rigorous vetting process, including ID verification and sitter training. Our easy booking system ensures convenience, while our pet-focused approach guarantees personalized care. Trust us to keep your pets happy and your home secure while you're away.
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
                                <Image src={optimized1.src}></img>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized2.src}></img>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized3.src}></img>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized4.src}></img>
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
                                    <br /> Vacay Sitters Success
                                </h2>
                                <div className="sub-text"></div>
                                <p>
                                    At RadarSoft Technologies, we use top tools to build great solutions. MongoDB for strong databases, PHP for web development, and React and Flutter for smooth web and mobile apps. Node.js powers our backend, AWS ensures secure cloud services, and JavaScript adds interactivity. Our tech stack helps us create reliable and innovative solutions for our clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="row row-cols-2 row-cols-lg-2 g-5 g-lg-5">
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_flutter1.src} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_php1.src} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={yoco.src} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={bootstrap.src} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={firebase.src} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={aws.src} alt="" className="w-100" />
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
                                <span class="case-d-num">3.8</span>
                                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                                <hr />
                                <p>Ratings by user’s</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">85%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Overall Growth</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">28%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>
                                    Increase in user
                                    <br /> rentention
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
                                    feature adoption rate
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">92%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Positive feedback <br /> rate</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">20%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>
                                    Increase in sitters earning
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
                                <Image src={common_contact.src} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading">
                                    <h3>Want to know more!
                                        <br /> Get in touch with our team.</h3>
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

export default Case_vacay;
