import Head from "next/head";
import "aos/dist/aos.css";

const TermsCondition = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions - RadarSoft Technologies LLP</title>
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

            {/* Title Section */}
            <section className="about-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="about-banner-title">
                        <p className="about-heading">Terms and Conditions</p>
                    </div>
                    <hr />
                </div>
            </section>

            {/* Terms Section */}
            <section className="claim-area mb-100" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="privacy-policy">
                            <ol>
                                <li>
                                    <h2>Introduction</h2>
                                    <p>
                                        Welcome to RadarSoft Technologies LLP. These terms and conditions outline the rules and
                                        regulations for the use of our website and services. By accessing this website, you accept these terms and conditions in full.
                                    </p>
                                </li>
                                <li>
                                    <h2>Services</h2>
                                    <p>
                                        RadarSoft Technologies LLP provides various IT services including Mobile App Development,
                                        Web Development, ERP Solutions, E-commerce Development, Staff Augmentation, Product
                                        Development Consulting, and Digital Transformation.
                                    </p>
                                </li>
                                <li>
                                    <h2>Payment Terms</h2>
                                    <ul className="desc-style">
                                        <li>All payments are to be made via the payment gateway integrated on our website.</li>
                                        <li>Invoices will be generated and sent to clients upon the successful delivery of services.</li>
                                        <li>Clients are required to make payments within the specified period as mentioned in the invoice.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>User Obligations</h2>
                                    <ul className="desc-style">
                                        <li>Users must provide accurate information for the registration and payment process.</li>
                                        <li>Users agree to use our services only for lawful purposes.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>Limitation of Liability</h2>
                                    <p>
                                        RadarSoft Technologies LLP shall not be liable for any direct, indirect, incidental, or
                                        consequential damages arising out of the use or inability to use our services or website.
                                    </p>
                                </li>
                                <li>
                                    <h2>Governing Law</h2>
                                    <p>
                                        These terms and conditions are governed by and construed in accordance with the laws of
                                        India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.
                                    </p>
                                </li>
                                <li>
                                    <h2>Changes to Terms</h2>
                                    <p>
                                        RadarSoft Technologies LLP reserves the right to amend these terms and conditions at any time.
                                        Users are encouraged to review these terms periodically for any changes.
                                    </p>
                                </li>
                                <li>
                                    <h2>Contact Information</h2>
                                    <p>
                                        For further information, make contact with our experienced IT staff. We’re available for 8 hours
                                        a day to provide a detailed analysis and assessment of your plan. You can reach us through the
                                        following:
                                    </p>
                                    <address>
                                        <ul className="desc-style">
                                            <li>Phone: <span className="span-num">+91 7028404033</span></li>
                                            <li>
                                                Website:{" "}
                                                <a href="https://radarsoft.tech/" className="span-link-blue" target="_blank" rel="noopener noreferrer">
                                                    https://radarsoft.tech/
                                                </a>
                                            </li>
                                            <li>
                                                Email:{" "}
                                                <a href="mailto:info@radarsoft.tech" className="span-link">
                                                    info@radarsoft.tech
                                                </a>
                                            </li>
                                        </ul>
                                    </address>
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

export default TermsCondition;
