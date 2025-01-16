import Head from "next/head";
import { useRouter } from "next/router";
import "aos/dist/aos.css";

const RefundPolicy = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Refund Policy - RadarSoft Technologies LLP</title>
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

            <section className="about-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="about-banner-title">
                        <p className="about-heading">Refund Policy</p>
                    </div>
                    <hr />
                </div>
            </section>

            {/* Claim section */}
            <section className="claim-area mb-100" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="privacy-policy">
                            <ol>
                                <li>
                                    <h2>No Refund Policy</h2>
                                    <p>
                                        RadarSoft Technologies LLP does not offer refunds. Payments are made after the
                                        successful delivery of services, ensuring that clients are satisfied with the work
                                        before making the payment.
                                    </p>
                                </li>
                                <li>
                                    <h2>Dispute Resolution</h2>
                                    <p>
                                        In the event of any dissatisfaction with our services, clients are encouraged to
                                        contact us directly to resolve any issues. We are committed to addressing and
                                        resolving concerns promptly and effectively.
                                    </p>
                                </li>
                                <li>
                                    <h2>Sharing Your Information</h2>
                                    <p>
                                        We do not sell, trade, or otherwise transfer your personal information to outside
                                        parties except when required by law.
                                    </p>
                                </li>
                                <li>
                                    <h2>Contact Information</h2>
                                    <p>If you have any questions or concerns regarding our refund policy, feel free to contact us:</p>
                                    <address>
                                        <p className="span-link bold-text">RadarSoft Technologies LLP</p>
                                        <p className="span-link">B-309, 3rd Floor, Nyati Empress, Viman Nagar Road,</p>
                                        <p className="span-link">Opposite Phoenix Mall, Clover Park, Viman Nagar,</p>
                                        <p className="span-link">Pune, Maharashtra, 411014</p>
                                    </address>
                                    <ul className="desc-style">
                                        <li>
                                            Phone: <span className="span-num">+91 7028404033</span>
                                        </li>
                                        <li>
                                            Website: <a href="https://radarsoft.tech/" className="span-link-blue">https://radarsoft.tech/</a>
                                        </li>
                                        <li>
                                            Email: <a href="mailto:info@radarsoft.tech" className="span-link">info@radarsoft.tech</a>
                                        </li>
                                    </ul>
                                    <p>By using our services, you agree to the terms of this refund policy.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefundPolicy;
