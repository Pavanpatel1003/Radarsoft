import React from "react";
import Image from "next/image";
import Link from "next/link";
import crosspunk from "../../../../public/assets/media/case-details/crosspunk/CROSSPUNK.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import crosspunks from "../../../../public/assets/media/case-details/crosspunk/keyobject.svg";

import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import crosspunk1 from "../../../../public/assets/media/case-details/crosspunk/crosspunk1.svg";
import crosspunk2 from "../../../../public/assets/media/case-details/crosspunk/crosspunk2.svg";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import crossMacBook from "../../../../public/assets/media/case-details/crosspunk/crossMacBook.svg";

import tracoptimized1 from "../../../../public/assets/media/case-details/tracoptimized1.png";
import tracoptimized2 from "../../../../public/assets/media/case-details/tracoptimized2.png";
import tracoptimized3 from "../../../../public/assets/media/case-details/tracoptimized3.png";
import tracoptimized4 from "../../../../public/assets/media/case-details/tracoptimized4.png";

import case_d_flutter from "../../../../public/assets/media/case-details/allicon/flutter.svg";
import case_d_php from "../../../../public/assets/media/case-details/allicon/php.svg";
import case_d_html from "../../../../public/assets/media/case-details/allicon/html.svg";
import case_d_bootstrap from "../../../../public/assets/media/case-details/allicon/bootstrap.svg";
import case_d_fire from "../../../../public/assets/media/case-details/allicon/firebase.svg";
import case_d_aws1 from "../../../../public/assets/media/case-details/allicon/aws.svg";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
import { useRouter } from "next/router";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

const Crosspunk = () => {
    const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

    return (
        <>
            <Head>
                <title>CrossPunk - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="CrossPunk - RadarSoft Technologies LLP"
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
                                    <Image className="work-logo" src={crosspunk} alt="" />
                                </div>
                                <h1 className="work-area-lower-heading">
                                    CrossPunk: A Deep Dive into Crafting a
                                    <br />Puzzle Adventure That Challenges Minds
                                    and Ignites Creativity
                                </h1>
                                <p className="work-area-lower-paragraph">
                                    CrossPunk is an interactive puzzle adventure that challenges your mind and sparks your creativity. Dive into a world of vibrant color themes, thrilling music, and ever-changing levels, offering a fresh experience every day. Designed with passion and innovation, CrossPunk combines strategy, fun, and style to create a game that’s as captivating as it is challenging. Compete with friends, share your scores, and keep your streak alive as you unlock new possibilities in this immersive puzzle journey.
                                </p>
                                <div className="work-area-log">
                                    <Link className="work-area-lower-anchor-blue" href="www.OnlineKorp.com">
                                        <Image src={planet} /> www.crosspunk.com
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
                                            <p>Improvement in System Efficiency</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="case-d-result text-white p-3">
                                            <span class="case-d-num">84%</span>
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
                                One of the key challenges we faced during the development of CrossPunk was creating a system that could deliver fresh, dynamic levels every day without compromising gameplay quality or fairness. Initially, our early designs struggled to balance variety with consistency, leading to some levels feeling repetitive or too unpredictable. To solve this, we developed an advanced level-generation algorithm that combines curated design elements with procedural techniques. This approach ensured each level felt unique, engaging, and appropriately challenging, allowing players to enjoy a consistently rewarding experience every day.
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
                                    CrossPunk is a vibrant puzzle game that challenges players' minds while immersing them in a world of color and rhythm. With fresh daily levels, social features for sharing and competing, and a visually stunning interface paired with dynamic music, it offers an engaging and immersive experience. Optimized for all devices, CrossPunk is more than a game it’s a daily dose of fun and creativity.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">Engaging Puzzle Experience</h6>
                                <p className="normal-desc">
                                    Provide players with daily challenges that are both fun and mentally stimulating, ensuring consistent engagement.
                                </p>
                            </div>
                            <div className="sub-text">
                                <h6 className="normal-heading">
                                    Dynamic Level Generation
                                </h6>
                                <p className="normal-desc">
                                    Deliver unique, high-quality levels every day using an advanced level-generation algorithm to maintain freshness and excitement.
                                </p>
                            </div>
                            <div>
                                <h6 className="normal-heading">Immersive Design and Themes</h6>
                                <p className="normal-desc">
                                    Offer vibrant color themes and engaging soundtracks that enhance the overall player experience and make gameplay immersive.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <Image className="case_d_right_img_dashboard" src={crosspunks} alt="" />
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
                                CrossPunk: The Ultimate Puzzle Gaming Experience
                            </h2>
                            <p>
                                The CrossPunk platform is built with a clear vision to deliver daily challenges, vibrant designs, and engaging gameplay that captivates players. Its core goals are to provide fresh levels daily, enhance social connections through score-sharing and leaderboards, and create a seamless gaming experience across all devices. These objectives aim to keep players engaged, foster friendly competition, and offer a creative outlet for puzzle enthusiasts worldwide.
                            </p>
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
                            <Image src={crossMacBook} alt="" className=" w-100 h-100" />
                            {/* </div> */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
                            <div>
                                <h4>Proven Success</h4>
                                <p>
                                    CrossPunk has captivated thousands of players with its dynamic daily challenges and engaging features. The platform allows players to track progress, compete with friends, and maintain streaks, fostering a loyal and competitive community, which leads to increased retention and excitement.
                                </p>
                                <div className="sub-text mt-60"></div>
                                <div className="sub-text mt-36 mb-60"></div>
                                <h4>Continuous Innovation</h4>
                                <p>
                                    CrossPunk evolves by regularly introducing new features, color themes, and music to keep the gameplay fresh. By listening to player feedback, it ensures a dynamic experience that meets users' expectations and sets the standard in puzzle gaming.
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
                            <Image src={crosspunk1} alt="" className="case_d_img" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading sub-text">
                                    <h3>User Engagement</h3>
                                    <div>
                                        <ul>
                                            <li>Increased daily active players by 24%, driven by engaging daily challenges and social features.</li>
                                            <li>
                                                Achieved an 84% improvement in player retention through dynamic levels and streak-tracking features.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Better Decision-Making</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                30% of players reported improved focus and problem-solving skills after consistent gameplay.
                                            </li>
                                            <li>
                                                15% increase in players maintaining long-term streaks, fostering strategic thinking and consistency.
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
                                    <h3>Leaderboard Management</h3>
                                    <div>
                                        <ul>
                                            <li>
                                                Players can easily view and track their leaderboard rankings, encouraging friendly competition and driving repeat engagement.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sub-text-heading">
                                    <h3>Theme Customization <br />Tracking</h3>
                                    <ul>
                                        <li>
                                            The platform allows users to personalize their experience with multiple color themes on the basis of level, ensuring a tailored and enjoyable gaming journey for all preferences.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 right_img" data-aos="fade-left" data-aos-delay="300">
                            <Image src={crosspunk2} alt="" className="case_d_right_img_dashboard" />
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
                                    <br /> Crosspunk’s Success
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
                                        <Image src={case_d_flutter} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_php} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_html} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_bootstrap} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_fire} alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="img-shadow">
                                        <Image src={case_d_aws1} alt="" className="w-100" />
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
                                <span class="case-d-num">60%</span>
                                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                                <hr />
                                <p>Improvement user’s creativity</p>
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
                                <span class="case-d-num">68%</span>
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
                                <span class="case-d-num">80%</span>
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
                                <span class="case-d-num">10,000+</span>
                                <span>
                                    <i class="fa-solid fa-arrow-up uparrow"></i>
                                </span>
                                <hr />
                                <p>Players around the world</p>
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
                                Improvement in Incentive and<br />
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
                                <Image src={common_contact} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
                            <div>
                                <div className="sub-text-heading">
                                    <h3>Want to know more!
                                        <br/> Get in touch with our team.</h3>
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

export default Crosspunk;
