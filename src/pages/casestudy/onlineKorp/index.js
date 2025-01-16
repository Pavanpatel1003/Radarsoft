import React from "react";
import Image from "next/image";
import Link from "next/link";
import acad from "../../../../public/assets/media/case-details/onlinekrop.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import onlineKrops from "../../../../public/assets/media/case-details/Onlinekorp/MacBookPro14.svg";

// import onlineKrops from "../../../../public/assets/media/case-details/onlineKrops.png";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
// import onlineKrop1 from "../../../../public/assets/media/case-details/onlineKrop1.png";
// import onlineKrop2 from "../../../../public/assets/media/case-details/onlineKrop2.png";
import onlineKrop2 from "../../../../public/assets/media/case-details/Onlinekorp/MacBookPro16-1.svg";
import onlineKrop1 from "../../../../public/assets/media/case-details/Onlinekorp/MacBookPro17.svg";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
// import MacBookpro from "../../../../public/assets/media/case-details/MacBookpro.png";
import MacBookpro from "../../../../public/assets/media/case-details/Onlinekorp/MacBookPro16.png";

import tracoptimized1 from "../../../../public/assets/media/case-details/tracoptimized1.png";
import tracoptimized2 from "../../../../public/assets/media/case-details/tracoptimized2.png";
import tracoptimized3 from "../../../../public/assets/media/case-details/tracoptimized3.png";
import tracoptimized4 from "../../../../public/assets/media/case-details/tracoptimized4.png";

import case_d_mongo1 from "../../../../public/assets/media/case-details/allicon/mongo.svg";
import case_d_ex from "../../../../public/assets/media/case-details/allicon/ex.svg";
import case_d_node1 from "../../../../public/assets/media/case-details/allicon/node.svg";
import case_d_html1 from "../../../../public/assets/media/case-details/allicon/html.svg";
import case_d_js1 from "../../../../public/assets/media/case-details/allicon/js.svg";
import case_d_aws1 from "../../../../public/assets/media/case-details/allicon/aws.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Case_onlineKorp = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <Head>
                <title>OnlineKorp - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="OnlineKorp - RadarSoft Technologies LLP"
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
                                    <Image className="work-logo" src={acad} alt="" />
                                </div>
                                <h1 className="work-area-lower-heading">
                                    OnlineKorp Your Digital <br />Corporate Service Provider
                                </h1>
                                <p className="work-area-lower-paragraph">
                                    OnlineKorp is your all-in-one digital platform for entrepreneurs,
                                    <br /> businesses, and startups. Whether you're launching a new venture
                                    <br />or expanding an existing one, we provide the tools and services you
                                    <br /> need, including visa assistance and business account opening, to
                                    <br /> get started quickly. With step-by-step tutorials and an extensive
                                    <br />FAQ section, we support you throughout the entire process.
                                </p>
                                <div className="work-area-log">
                                    <Link className="work-area-lower-anchor-blue" href="www.OnlineKorp.com">
                                        <Image src={planet} /> www.OnlineKorp.com
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">32%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Overall Growth</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">80%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Improvement in System <br />Efficiency</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">90%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Improvement in<br /> User Retention Rate.</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">94%</span>
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
                                Starting a business or expanding a company can be a complex and time-consuming process, especially for entrepreneurs, startups, and small businesses navigating legal
                                <br />requirements, business formation, and financial services. Entrepreneurs often face difficulties accessing the right tools and guidance, dealing with regulatory complexities,
                                <br /> and managing the various steps involved in establishing their business.
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
                                    At OnlineKorp, our mission is to simplify the process of starting and growing a business
                                    <br /> by offering a digital platform that brings together essential services for entrepreneurs,
                                    <br /> startups, and small businesses. We are focused on providing practical, easy-to-use
                                    <br />solutions that make business formation and management more accessible,
                                    <br /> transparent, and efficient.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Simplifying Business Formation</h6>
                                <p className="normal-desc">
                                    We simplify company registration, account opening, and access to legal and
                                    <br /> financial services, helping entrepreneurs get their business started quickly.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">
                                    Clear, Transparent Services
                                </h6>
                                <p className="normal-desc">
                                    With clear pricing and service details, we ensure entrepreneurs know exactly
                                    <br /> what they’re getting, with no hidden fees.
                                </p>
                            </div>
                            <div>
                                <h6 className="normal-heading">Support Every Step of the Way</h6>
                                <p className="normal-desc">
                                    Our easy-to-follow tutorials and FAQs guide users through the process,
                                    <br />offering continuous support to help them succeed.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image className="case_d_right_img_dashboard" src={onlineKrops} alt="" />
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
                                design to precise development, rigorous testing,
                                <br /> strategic
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
                                Effortless Digital Solutions for Your
                                <br /> Business with OnlineKorp
                            </h2>
                            <p>
                                OnlineKorp is a digital platform that makes starting and growing a business easy. We offer services like business registration, visa assistance, and account opening,
                                <br />all in one place. With clear pricing, user-friendly features, and step-by-step guidance, OnlineKorp helps entrepreneurs and startups navigate the complexities of
                                <br />business formation, ensuring a smooth and hassle-free experience.
                            </p>
                        </div>
                    </div>
                    <div className="row emproving_secound">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-none">
                            <h4>Proven Success</h4>
                            <p>
                                With over 50,000 users, OnlineKorp has successfully
                                <br />helped entrepreneurs and startups simplify business
                                <br /> registration, account setup, and access to essential
                                <br />services. Our platform’s ease of use, clear pricing, and
                                <br />reliable support have made it a trusted choice for
                                <br />businesses looking to grow and succeed.
                            </p>
                            <div className="sub-text mt-60"></div>
                            <div className="sub-text mt-36 mb-60"></div>
                            <h4>Expanded Reach</h4>
                            <p>
                                OnlineKorp is committed to constant improvement,
                                <br /> regularly updating our platform with new features based
                                <br /> on user feedback and market trends. This ensures we
                                <br /> stay aligned with the evolving needs of entrepreneurs
                                <br /> and startups
                            </p>
                        </div>
                        <div className="col-12 col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center mt-md-5 mb-md-5 mb-sm-5 text-center">
                            {/* <div className="img_set"> */}
                            <Image src={MacBookpro} alt="" className=" w-100 h-100" />
                            {/* </div> */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
                            <div>
                                <h4>Proven Success</h4>
                                <p>
                                    With over 50,000 users, OnlineKorp has successfully
                                    helped entrepreneurs and startups simplify business
                                    registration, account setup, and access to essential
                                    services. Our platform’s ease of use, clear pricing, and
                                    reliable support have made it a trusted choice for
                                    businesses looking to grow and succeed.
                                </p>
                                <div className="sub-text mt-60"></div>
                                <div className="sub-text mt-36 mb-60"></div>
                                <h4>Continuous Innovation</h4>
                                <p>
                                    OnlineKorp is committed to constant improvement,
                                    regularly updating our platform with new features based
                                    on user feedback and market trends. This ensures we
                                    stay aligned with the evolving needs of entrepreneurs
                                    and startups
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
                            <Image src={onlineKrop1} alt="" className="case_d_img" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Empowered 50,000+ Entrepreneurs</h3>
                                    <div>
                                        <ul>
                                            <li>Simplified business registration and setup for startups.</li>
                                            <li>
                                                Helped users access essential services like visa assistance and account opening.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Better Decision-Making</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                Clear Basic and Premium plans tailored to business needs.
                                            </li>
                                            <li>
                                                No hidden fees, ensuring full transparency in costs.
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
                                    <h3>Simplified<br /> Application Process</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                Quick, guided steps for easy document submission and error-free filing.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading sub-text">
                                    <h3>Comprehensive Compliance Support</h3>
                                    <ul>
                                        <li>
                                            Improvement in feature Adoption.
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Real-Time Progress <br />Tracking</h3>
                                    <ul>
                                        <li>
                                            Instant updates to track your application’s status from start to finish.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image src={onlineKrop2} alt="" className="case_d_right_img_dashboard" />
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
                                <Image src={tracoptimized1.src} /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized2.src} /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized3.src} /> 
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={tracoptimized4.src} /> 
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
                                    <br /> OnlineKorp’s Success
                                </h2>
                                <div className="sub-text"></div>
                                <p>
                                    At RadarSoft Technologies, we use top tools to build great solutions. MongoDB for strong databases, PHP for web development, and React and Flutter for smooth web and mobile apps. Node.js powers our backend, AWS ensures secure cloud services, and JavaScript adds interactivity. Our tech stack helps us create reliable and innovative solutions for our clients.
                                </p>
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
                                        <Image src={case_d_node1} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_ex} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_aws1} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_html1} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_js1} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_mongo1} alt="" className="w-100" />
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
                                <span class="case-d-num">40%</span>
                                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                                <hr />
                                <p>Increase in User Engagement</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">32%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Overall Growth</p>
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
                                    Improvement in System
                                    <br /> Efficiency
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">86%</span>
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
                                <span class="case-d-num">46,000+</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Total companies <br />formed</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">90%</span>
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
                                <Image src={common_contact} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading">
                                    <h3>Want to know more!
                                        <br />Get in touch with our team.</h3>
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

export default Case_onlineKorp;
