import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sitemap = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS for animations
  }, []);

  const sitemapData = [
    {
      category: "Main",
      links: [
        { name: "Home", href: "/" },
        { name: "IT Services", href: "/services" },
        { name: "Case Studies", href: "/casestudy" },
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      category: "IT Services",
      links: [
        { name: "Frontend Development", href: "/services/web_development" },
        { name: "Mobile App Development", href: "/services/mobileapp_development" },
        { name: "Backend App Development", href: "/services/backend_development" },
        { name: "UI/UX Design & Branding", href: "/services/ui_ux_design" },
        { name: "Software Testing", href: "/services/software_testing" },
        { name: "Staff Augmentation", href: "/services/staff_agumentation" },
        { name: "Digital Transformation", href: "/services/digital_transformation" },
      ],
    },
    {
      category: "Case Studies",
      links: [
        { name: "Abhyan", href: "/casestudy/abhyan" },
        { name: "Trac91", href: "/casestudy/trac" },
        { name: "AcadSpace", href: "/casestudy/acad" },
        { name: "OnlineKorp", href: "/casestudy/onlineKorp" },
        { name: "Bajaj Allianz", href: "/casestudy/bajaj" },
        { name: "Endura Fitness", href: "/casestudy/endura" },
        { name: "CrossPunk", href: "/casestudy/crosspunk" },
        { name: "Vacay Sitters", href: "/casestudy/vacaySitters" },
      ],
    },
    {
      category: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Site Map", href: "/sitemap" },
        { name: "Privacy Policy", href: "/privacy_policy" },
        { name: "Refund Policy", href: "/refund_policy" },
        { name: "Terms & Conditions", href: "/terms_conditions" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Sitemap - RadarSoft Technologies LLP</title>
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

      {/* Banner Section */}
      <section className="about-banner common_margin_space" data-aos="fade-up">
        <div className="container">
          <div className="about-banner-title">
            <h1 className="about-heading">Sitemap</h1>
          </div>
          <hr />
        </div>
      </section>

      {/* Sitemap Section */}
      <section className="claim-area mb-100 common_margin_spacess" data-aos="fade-up">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {sitemapData.map((section, index) => (
              <div key={index} className="col">
                <div className="site_map">
                  <h3>{section.category}</h3>
                  <div className="site_map_wrap">
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} aria-label={link.name}>
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
