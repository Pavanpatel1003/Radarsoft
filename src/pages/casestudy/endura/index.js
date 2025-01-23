import React from "react";
import Image from "next/image";
import case_ds from "../../../../public/assets/media/case-details/endura/key2.svg";
import case_d from "../../../../public/assets/media/case-details/endura/keyobject.svg";
import case_d_flutter1 from "../../../../public/assets/media/case-details/allicon/flutter.svg";
import case_d_php1 from "../../../../public/assets/media/case-details/allicon/php.svg";
import razorpay from "../../../../public/assets/media/case-details/allicon/razorpay.svg";
import bootstrap from "../../../../public/assets/media/case-details/allicon/bootstrap.svg";
import aws from "../../../../public/assets/media/case-details/allicon/aws.svg";
import firebase from "../../../../public/assets/media/case-details/allicon/firebase.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
// import optimized1 from "../../../../public/assets/media/case-details/optimized1.png";
// import optimized2 from "../../../../public/assets/media/case-details/optimized2.png";
// import optimized3 from "../../../../public/assets/media/case-details/optimized3.png";
// import optimized4 from "../../../../public/assets/media/case-details/optimized4.png";

import optimized1 from "../../../../public/assets/media/case-details/endura/opt1.svg";
import optimized2 from "../../../../public/assets/media/case-details/endura/opt2.svg";
import optimized3 from "../../../../public/assets/media/case-details/endura/opt3.svg";
import optimized4 from "../../../../public/assets/media/case-details/endura/opt4.svg";


import user from "../../../../public/assets/media/case-details/endura/key1.svg";
import case_d_Empowering_real from "../../../../public/assets/media/case-details/endura/iPhoneendura.svg";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import work_ogo from "../../../../public/assets/media/case-details/endura/logo.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Case_endura = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <Head>
                <title>Endura - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="Endura - RadarSoft Technologies LLP"
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
                                    <Image className="work-logo" src={work_ogo} alt="Description of the image" />
                                </div>
                                <h1 className="work-area-lower-heading">
                                    Endura Fitness: Transforming
                                    <br />Fitness Journeys with Personalized
                                    <br />Guidance and Community Support
                                </h1>
                                <p className="work-area-lower-paragraph">
                                    Endura Fitness is your ultimate companion for a healthier lifestyle,
                                    <br /> combining personalized workout plans, expert nutrition guidance, and
                                    <br /> engaging features like pre-recorded sessions and quick workouts. With
                                    <br /> fresh content from top trainers and nutritionists, alongside unique
                                    <br /> offerings like "Creators Corner" and "Healthy Eats," Endura empowers
                                    <br /> you to achieve your fitness goals with ease and excitement.
                                </p>
                                <div className="work-area-log">
                                    <Link
                                        className="work-area-lower-anchor-blue"
                                        href="https://www.endurafitness.in/" target="_blank"
                                    >
                                        <Image src={planet} alt="Description of the image" /> www.endurafitness.in
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">30%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>Increase in active use <br />engagement</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">85%</span>
                                            <span>
                                                <i class="fa-solid fa-arrow-up uparrow_header"></i>
                                            </span>
                                            <hr />
                                            <p>feature adoption rate</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">92%</span>
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
                                            <span class="case-d-num">40%</span>
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
                                <Link className="common-project-button" href="/contact">
                                    Start a project with us
                                </Link>
                            </div>
                            <p>
                                Endura Fitness set out to solve common issues faced by fitness enthusiasts: lack of personalized guidance, limited access to expert advice, and difficulty maintaining consistency in fitness routines. Many users struggled to find a platform offering diverse workout options, reliable nutrition insights, and engaging content all in one place. Additionally, fostering user motivation and ensuring long-term engagement required a fresh approach to make fitness enjoyable, accessible, and sustainable for users of all fitness levels. Endura’s mission was to address these gaps and create a holistic fitness experience that empowers users to transform their lifestyles effectively.
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
                                    Endura Fitness aimed to revolutionize the fitness journey by focusing on three core goals: providing personalized workout plans and nutrition guidance, fostering long-term engagement with expert-driven content, and creating an intuitive platform for accessible and enjoyable fitness. By blending innovation with a user-centric approach, Endura sought to empower individuals to build sustainable fitness habits and achieve their wellness goals.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Personalized Fitness Plans</h6>
                                <p className="normal-desc">
                                    Customized workout and nutrition plans designed to align with each user's specific goals, ensuring a more effective fitness journey.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Expert-Driven Content</h6>
                                <p className="normal-desc">
                                    Access to high-quality, engaging content from top trainers and nutritionists, providing valuable insights and diverse workout options.
                                </p>
                            </div>
                            <div>
                                <h6 className="normal-heading">Seamless User Experience</h6>
                                <p className="normal-desc">
                                    An intuitive, easy-to-navigate platform that enhances user experience, making fitness enjoyable and accessible for people of all levels.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image className="case_d_right_img_dashboard" src={case_ds} alt="Description of the image" />
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
                                        <Image src={firebase} alt="marketing Icon" />
                                        <p>Marketing</p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="process-arrow">&#8594;</div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="process-step support">
                                        <Image src={aws} alt="support Icon" />
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
                            <h2>Endura Fitness The Ultimate Solution
                                <br /> for Fitness Enthusiasts and Trainers</h2>
                            <p>
                                Endura Fitness is a cutting-edge platform designed to bridge the gap between fitness enthusiasts and trainers, creating a seamless and engaging fitness journey. With personalized workout plans, expert nutrition guidance, and diverse content like quick workouts and healthy recipes, Endura caters to every fitness goal. Trainers can connect with users to offer tailored advice, while enthusiasts enjoy a supportive community, innovative features, and the convenience of achieving their goals anytime, anywhere. Endura is more than a platform—it’s a partner in your fitness transformation.
                            </p>
                        </div>
                    </div>
                    <div className="row emproving_secound">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <h4>Proven Success</h4>
                            <p>
                                Endura Fitness has quickly gained traction, showcasing its potential to transform the fitness landscape. Positive feedback and high engagement rates highlight the platform’s success in delivering value to users.
                            </p>
                            <div className="sub-text mt-60"></div>
                            <div className="sub-text mt-36 mb-60"></div>
                            <h4>Expanded Reach</h4>
                            <p>
                                Through effective Instagram marketing and word-of-mouth, Endura has reached a growing audience of fitness enthusiasts, trainers, and wellness seekers, building a loyal and engaged community.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mb-md-5 mb-sm-5 text-center">
                            <div className="img_set">
                                <Image
                                    src={case_d_Empowering_real} alt="Description of the image"
                                    className=" w-100 h-100"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
                            <div>
                                <h4>Industry Partnerships</h4>
                                <p>
                                    Strategic collaborations with top fitness experts and nutritionists have strengthened Endura’s offerings, providing users with expert-driven content and tailored guidance.
                                </p>
                                <div className="sub-text mt-60"></div>
                                <div className="sub-text mt-36 mb-60"></div>
                                <h4>Continuous Innovation</h4>
                                <p>
                                    Endura remains committed to evolving its platform with regular updates, new features, and fresh content to keep users motivated and ahead in their fitness journeys.
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
                            <Image src={user} alt="Description of the image" className="case_d_img" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>User-Friendly Design</h3>
                                    <div>
                                        <ul>
                                            <li>A clutter-free layout ensures a smooth and visually appealing user experience.</li>
                                            <li>
                                                Quick Access to the features like search bars and categorized content simplify exploration.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Streamlined Search & Exploration</h3>
                                    <div>
                                        <ul>
                                            <li>Quick Search to find trainers, recipes, or content instantly using the search bar.</li>
                                            <li>
                                                Organized Categories sections like "Expert Trainers" and "High Protein" to simplify navigation.
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
                                    <h3>Trainer Profile & Sessions</h3>
                                    <ul>
                                        <li>
                                            Users can find the right trainer based on expertise and choose sessions that align with their fitness needs, ensuring a personalized and effective workout experience.
                                        </li>
                                    </ul>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Session Breakdown & Navigation</h3>
                                    <ul>
                                        <li>
                                            Users can fully understand each session’s structure and goals, making it easier to stay on track and seamlessly connect with trainers for ongoing support.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image src={case_d} alt="Description of the image" className="case_d_right_img" />
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
                                        Healthy & fit lifestyle
                                    </h2>
                                </div>
                                <p>
                                    Endura Fitness is your ultimate companion for achieving lasting health and fitness. With personalized workouts, expert guidance, and nutrition tips, the app helps you build sustainable habits that fit into your daily routine, empowering you to reach your goals and thrive.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 case_d_opt">
                            <div>
                                <Link className="common-project-button" href="/contact">
                                    Start a project with us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mt-2 foursimage">
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized1} alt="Description of the image" />
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized2} alt="Description of the image" />
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized3} alt="Description of the image" />
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="p-3">
                                <Image src={optimized4} alt="Description of the image" />
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
                                    <br /> Endura Fitness Success
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
                                        <Image src={case_d_flutter1} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_php1} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={razorpay} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={bootstrap} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={firebase} alt="Description of the image" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={aws} alt="Description of the image" className="w-100" />
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
                                <span class="case-d-num">4.4</span>
                                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                                <hr />
                                <p>Ratings by user’s</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">28%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Overall Growth</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">30%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>
                                    Increase in active user
                                    <br /> engagement
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="case-d-result p-3">
                                <span class="case-d-num">85%</span>
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
                                <span class="case-d-num">40%</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>
                                    Improvement in user workout  <br />
                                    consistency
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

export default Case_endura;
