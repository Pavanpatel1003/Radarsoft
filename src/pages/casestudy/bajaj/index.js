import React from "react";
import Image from "next/image";
import Link from "next/link";
import bajaj from "../../../../public/assets/media/case-details/bajajlogo.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import bajajs from "../../../../public/assets/media/case-details/bajaj/mc1.svg";

import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import bajaj1 from "../../../../public/assets/media/case-details/bajaj/MacBookPro3.svg";
import bajaj2 from "../../../../public/assets/media/case-details/bajaj/MacBookPro4.svg";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import MacBookbajaj from "../../../../public/assets/media/case-details/bajaj/customer360.svg";

import tracoptimized1 from "../../../../public/assets/media/case-details/tracoptimized1.png";
import tracoptimized2 from "../../../../public/assets/media/case-details/tracoptimized2.png";
import tracoptimized3 from "../../../../public/assets/media/case-details/tracoptimized3.png";
import tracoptimized4 from "../../../../public/assets/media/case-details/tracoptimized4.png";

import case_d_angular from "../../../../public/assets/media/case-details/allicon/angular.svg";
import case_d_html1 from "../../../../public/assets/media/case-details/allicon/html.svg";
import case_d_js1 from "../../../../public/assets/media/case-details/allicon/js.svg";
import case_d_java from "../../../../public/assets/media/case-details/allicon/java.svg";
import case_d_bootstrap from "../../../../public/assets/media/case-details/allicon/bootstrap.svg";
import case_d_aws1 from "../../../../public/assets/media/case-details/allicon/aws.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Case_bajaj = () => {
    const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

    return (
        <>
            <Head>
                <title>Bajaj - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="Bajaj - RadarSoft Technologies LLP"
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
                                    <Image className="work-logo" src={bajaj} alt="Description of the image" />
                                </div>
                                <h1 className="work-area-lower-heading">
                                    Bajaj Allianz The Key to <br/>Unmatched Business <br/>Performance
                                </h1>
                                <p className="work-area-lower-paragraph">
                                    The Bajaj Allianz platform is designed to empower 
                                    <br/>businesses and individuals with comprehensive insights,
                                    <br/> streamlined performance tracking, and goal management 
                                    <br/>tools. This platform provides a centralized hub where users
                                    <br/> can access essential metrics, set targets, and monitor their
                                    <br/> progress with ease.   </p>
                                <div className="work-area-log">
                                    <Link className="work-area-lower-anchor-blue" href="www.OnlineKorp.com">
                                        <Image src={planet} alt="Description of the image" /> www.employee720.com
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
                                            <span class="case-d-num">64%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Improvement in System
                                            <br/> Efficiency</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">84%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Improvement in
                                            <br/> User Retention Rate.</p>
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
                                Bajaj Allianz needed a solution to help agents and partners access critical performance data, set and track goals, and make informed decisions all in one platform. Previously, scattered information and limited transparency hindered growth and alignment with business objectives. The challenge was to create a unified, user-friendly hub that empowered users with real-time insights and streamlined progress tracking to drive continuous improvement and accountability. </p>
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
                                    To address these challenges, the Bajaj Allianz platform was designed with clear objectives in mind: to simplify access to performance data, support goal alignment, and foster accountability across all levels. By focusing on these goals, the platform aims to empower users to track progress efficiently and make data-driven decisions that drive growth.</p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Centralized Performance Tracking</h6>
                                <p className="normal-desc">
                                    Create a unified platform where users can easily access and monitor essential performance metrics, reducing time spent searching for information.</p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">
                                    Goal Alignment and Achievement
                                </h6>
                                <p className="normal-desc">
                                    Provide tools for setting, tracking, and achieving individual and team goals, ensuring alignment with organizational objectives and promoting personal growth. </p>
                            </div>
                            <div>
                                <h6 className="normal-heading">Enhanced Decision-Making through Data Insights</h6>
                                <p className="normal-desc">
                                    Enable data-driven decisions with real-time insights, allowing users to adjust their strategies, improve performance, and maximize potential.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image className="case_d_right_img_dashboard" src={bajajs} alt="Description of the image" />
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
                                <Image src={research} alt="Research Icon" />
                                <p>Research</p>
                            </div>
                            <div class="process-arrow">&#8594;</div>
                            <div class="process-step design">
                                <Image src={design} alt="Design Icon" />
                                <p>Design</p>
                            </div>
                            <div class="process-arrow">&#8594;</div>
                            <div class="process-step development">
                                <Image src={development} alt="Development Icon" />
                                <p>Development</p>
                            </div>
                            <div class="process-arrow">&#8594;</div>
                            <div class="process-step testing">
                                <Image src={testing} alt="Testing Icon" />
                                <p>Testing</p>
                            </div>
                            <div class="process-arrow">&#8594;</div>
                            <div class="process-step marketing">
                                <Image src={marketing} alt="Testing Icon" />
                                <p>Marketing</p>
                            </div>
                            <div class="process-arrow">&#8594;</div>
                            <div class="process-step support">
                                <Image src={suppport} alt="Testing Icon" />
                                <p>Support</p>
                            </div>
                        </div>
                        <div class="container mt-5 d-none">
                            <div class="row text-center">
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step research">
                                        <Image src={research} alt="Research Icon" />
                                        <p>Research</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step design">
                                        <Image src={design} alt="Design Icon" />
                                        <p>Design</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step development">
                                        <Image src={development} alt="Development Icon" />
                                        <p>Development</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step testing">
                                        <Image src={testing} alt="Testing Icon" />
                                        <p>Testing</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step marketing">
                                        <Image src={marketing} alt="marketing Icon" />
                                        <p>Marketing</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step support">
                                        <Image src={suppport} alt="support Icon" />
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
                            <h2>
                                Bajaj Allianz The Key to Unmatched
                                <br/> Business Performance
                            </h2>
                            <p>
                                The Bajaj Allianz platform is built with clear, actionable objectives to address key challenges and enhance user experience. Its core goals are to simplify access to performance data, ensure alignment between personal and organizational goals, and foster accountability through data-driven insights. These objectives are designed to empower users, streamline operations, and enable better decision-making at all levels of the organization.</p>
                        </div>
                    </div>
                    <div className="row emproving_secound">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-none">
                            <h4>Proven Success</h4>
                            <p>
                                Since launch, AcadSpace has helped over 18,000 learners in
                                India. Our vernacular courses boast a 40% higher completion rate
                                than English-only options, highlighting the effectiveness of
                                mother tongue education.
                            </p>
                            <div className="sub-text mt-60"></div>
                            <div className="sub-text mt-36 mb-60"></div>
                            <h4>Expanded Reach</h4>
                            <p>
                                AcadSpace is broadening its impact by bringing accessible career
                                guidance and skill development to more communities. We aim to
                                bridge educational gaps, ensuring every student has the tools to
                                succeed, regardless of location.
                            </p>
                        </div>
                        <div className="col-12 col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center mt-md-5 mb-md-5 mb-sm-5 text-center">
                            {/* <div className="img_set"> */}
                            <Image src={MacBookbajaj} alt="Description of the image" className=" w-100 h-100" />
                            {/* </div> */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
                            <div>
                                <h4>Proven Success</h4>
                                <p>
                                    Bajaj Allianz has empowered over 36,000 users to improve performance and achieve their goals. The platform makes it easy to track progress, stay aligned with company objectives, and make data-driven decisions. This has led to better collaboration, increased accountability, and stronger results across the organization.
                                </p>
                                <div className="sub-text mt-60"></div>
                                <div className="sub-text mt-36 mb-60"></div>
                                <h4>Continuous Innovation</h4>
                                <p>
                                    Bajaj Allianz is dedicated to continuous innovation, regularly updating the platform to meet user needs and industry trends. By staying responsive to feedback, the platform evolves to provide better tools, ensuring ongoing growth and enhanced user experience.
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

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 keybg" data-aos="fade-right" data-aos-delay="300">
                            <Image src={bajaj1} alt="Description of the image" className="case_d_img" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>User Engagement</h3>
                                    <div>
                                        <ul>
                                            <li>Increased daily active users by 28%.</li>
                                            <li>
                                                Achieved overall 84% improvement in user’s retention.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Better Decision-Making</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                20% of learners reported career advancement.
                                            </li>
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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-right" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Lead Management</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                Users can easily add and track leads, streamlining the sales process and improving lead conversion rates.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Weighted Premium Tracking</h3>
                                    <ul>
                                        <li>
                                            The platform allows users to track weighted premiums efficiently, ensuring accurate calculation of earnings and commissions.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 right_img" data-aos="fade-left" data-aos-delay="300">
                            <Image src={bajaj2} alt="Description of the image" className="case_d_right_img_dashboard" />
                        </div>
                    </div>
                </div>
            </section>
            {/* END KEY ACCOMPLISHEMENTS */}

            {/* START OPTIMIZED  */}
            <section className="Optimized-sec common_margin_space d-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="commom-heading">
                                <div className="common-flex ">
                                    <h2>
                                        Optimized for <br />
                                        Easy Tracking
                                    </h2>
                                </div>
                                <p>
                                    Trac91 is designed for easy tracking, making it simple to
                                    follow all your online orders in one place. Our app combines
                                    updates from different stores into a single, easy-to-use
                                    interface. With real-time notifications and a clear layout,
                                    you always know where your package is and when it will arrive,
                                    making tracking hassle-free and straightforward.
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
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mt-2">
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized1.src} alt="Description of the image" /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized2.src} alt="Description of the image" /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized3.src} alt="Description of the image" /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized4.src} alt="Description of the image" /> 
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
                                    Our Tech Stack in Bajaj
                                    <br /> Allianz’s Success
                                </h2>
                                <div className="sub-text"></div>
                                <p>
                                    At RadarSoft Technologies, we use top tools to build great solutions. MongoDB for strong databases, PHP for web development, and React and Flutter for smooth web and mobile apps. Node.js powers our backend, AWS ensures secure cloud services, and JavaScript adds interactivity. Our tech stack helps us create reliable and innovative solutions for our clients. </p>
                                <div className="w-50">
                                    <Link className="common-project-button" href="">
                                        Start a project with us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="row row-cols-2 row-cols-lg-2 g-5 g-lg-5">
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_angular} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_bootstrap} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_aws1} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_html1} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_js1} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_java} alt="Description of the image" className="w-100" />
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
                                <span class="case-d-num">12%</span>
                                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                                <hr />
                                <p>Progress tracking</p>
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
                                <span class="case-d-num">64%</span>
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
                                <span class="case-d-num">84%</span>
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
                                <span class="case-d-num">36,000+</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Total users</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">56%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>
                                Improvement in Incentive and  <br />
                                Earnings Tracking.
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
                                <Image src={common_contact} alt="Description of the image" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading">
                                    <h3>Want to know more! 
                                        <br/>Get in touch with our team.</h3>
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

export default Case_bajaj;
