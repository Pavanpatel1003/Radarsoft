import { useRouter } from "next/router";
import Image from "next/image";
import case1 from "../../../public/assets/media/case/case1.webp";
import case3 from "../../../public/assets/media/case/case3.webp";
import case4 from "../../../public/assets/media/case/case4.webp";
import case2 from "../../../public/assets/media/case/onlineKrop.png";
import case5 from "../../../public/assets/media/case/bajaj.png";
import casestudybanner from "../../../public/assets/media/case/casestudybanner.webp";
import Link from "next/link";
import Head from "next/head";

const CaseStudy = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Our Software Development Projects & Case Studies - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Discover our portfolio showcasing successful projects in software development, mobile apps, web applications, and digital transformation across various industries."
        />
        <meta
          name="Keywords"
          content="Software development portfolio, successful projects, mobile apps, web applications, digital transformation, RadarSoft case studies."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="case-back-studies d-none">
        <div className="container">
          <div className="row">
            <div className="case-back-btn">
              <span className="me-2">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <Link href="/">Back to the homepage</Link>
            </div>
            <div className="case-studies-btn-main">
              <button className="case-studies-btn">Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy title section */}
      <section className="career-banner common_margin_space">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Our Work</h2>
              <p>
                Discover how we've helped businesses overcome challenges and
                achieve their goals. Our case studies showcase the innovative
                solutions and tangible results we've delivered for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy banner section */}
      <section className="common_margin_space">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={casestudybanner}
            alt="Career Banner"
          />
        </div>
      </section>

      <section className="case-studies-start common_margin_space">
        <div className="container">
          <div className="row">
            <div className="case-studies-flex">
              <div className="commom-heading">
                <h2>Case Studies</h2>
                <p>
                  Discover how we've helped businesses overcome challenges and
                  achieve
                  <br /> their goals. Our case studies showcase the innovative
                  solutions and
                  <br /> tangible results we've delivered for our clients.
                </p>
              </div>
              <div className="">
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
      </section>

      <section className="case-blog mb-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 case-pad">
            <div className="col">
              <div className="">
                <div>
                  <img src={case3.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Hub for students & professionals to learn new skills -
                    Abhyan
                  </h4>
                  <Link className="case-read-more" href="/casestudy/abhyan">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case4.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Shopping
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Trac91 is a a one-step solution for all online shopping
                    order tracking
                  </h4>
                  <Link className="case-read-more" href="/casestudy/trac">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case1.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Turn your dreams into reality with AcadSpace - Google Maps
                    for your career journey.
                  </h4>
                  <Link className="case-read-more" href="/casestudy/acad">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case2.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    SME Support Platform
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    OnlineKorp: Your Trusted Partner for Tailored Digital Solutions to Elevate Your Business
                  </h4>
                  <Link className="case-read-more" href="/casestudy/onlineKorp">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case5.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Business Analytics Platform
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Bajaj Allianz: Empowering Businesses with Performance Tracking and Goal Management
                  </h4>
                  <Link className="case-read-more" href="/casestudy/bajaj">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
