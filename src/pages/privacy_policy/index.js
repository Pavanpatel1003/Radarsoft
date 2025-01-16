import Head from "next/head";
import { useRouter } from "next/router";
import "aos/dist/aos.css";

const Privacy_Policy = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Privacy Policy - RadarSoft Technologies LLP</title>
                <meta
                    name="description"
                    content="Learn more about RadarSoft Technologies, a leading software development company offering innovative solutions in mobile apps, web development, UI/UX design, and digital transformation services."
                />
                <meta
                    name="keywords"
                    content="RadarSoft Technologies, software development, mobile apps, web development, UI/UX design, digital transformation, tech solutions."
                />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section
                className="about-banner common_margin_space"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="container">
                    <div className="about-banner-title">
                        <div>
                            <p className="about-heading">Privacy Policy</p>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>
            </section>

            {/* Claim Section */}
            <section className="claim-area mb-100" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="privacy-policy">
                            <ol>
                                <li>
                                    <h2>Introduction</h2>
                                    <p>
                                        RadarSoft Technologies LLP is committed to protecting your
                                        privacy. This privacy policy explains how we collect, use, and
                                        protect your information.
                                    </p>
                                </li>
                                <li>
                                    <h2>Information We Collect</h2>
                                    <ul className="desc-style">
                                        <li>
                                            <strong>Personal Information:</strong> Name, email address,
                                            phone number, and payment details.
                                        </li>
                                        <li>
                                            <strong>Non-Personal Information:</strong> Browser type, IP
                                            address, and browsing history on our website.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>How We Use Your Information</h2>
                                    <ul className="desc-style">
                                        <li>To provide and manage our services.</li>
                                        <li>To process payments and send invoices.</li>
                                        <li>
                                            To communicate with you regarding our services and updates.
                                        </li>
                                        <li>
                                            To improve our website and services based on user feedback.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>Data Protection</h2>
                                    <p>
                                        We implement a variety of security measures to maintain the
                                        safety of your personal information. All sensitive information
                                        is transmitted via Secure Socket Layer (SSL) technology and
                                        encrypted into our payment gateway provider's database.
                                    </p>
                                </li>
                                <li>
                                    <h2>Sharing Your Information</h2>
                                    <p>
                                        We do not sell, trade, or otherwise transfer your personal
                                        information to outside parties except when required by law.
                                    </p>
                                </li>
                                <li>
                                    <h2>Your Consent</h2>
                                    <p>By using our website, you consent to our privacy policy.</p>
                                </li>
                                <li>
                                    <h2>Changes to Our Privacy Policy</h2>
                                    <p>
                                        RadarSoft Technologies LLP reserves the right to modify this
                                        privacy policy at any time. Any changes will be posted on this
                                        page.
                                    </p>
                                </li>
                                <li>
                                    <h2>Contact Details for Further Information</h2>
                                    <p>
                                        For further information, contact our experienced IT staff.
                                        We’re available for 8 hours a day to provide a detailed
                                        analysis and assessment of your plan. You can reach us through
                                        the following:
                                    </p>
                                    <ul className="desc-style">
                                        <li>
                                            <strong>Phone:</strong>{" "}
                                            <span className="span-num">+91 7028404033</span>
                                        </li>
                                        <li>
                                            <strong>Website:</strong>{" "}
                                            <a
                                                href="https://radarsoft.tech/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="span-link-blue"
                                            >
                                                https://radarsoft.tech/
                                            </a>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>{" "}
                                            <a
                                                href="mailto:info@radarsoft.tech"
                                                className="span-link"
                                            >
                                                info@radarsoft.tech
                                            </a>
                                        </li>
                                    </ul>
                                    <p>Feel free to call or email us, or visit our website for more details!</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Privacy_Policy;
