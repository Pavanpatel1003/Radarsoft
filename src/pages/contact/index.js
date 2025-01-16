import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import useValidationSchema from "@/components/validation/FormValidation";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Head from "next/head";

import "aos/dist/aos.css";
import AOS from 'aos';

const Contact = () => {
  const { ContactValidation } = useValidationSchema();
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_URL;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
    validationSchema: ContactValidation,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await axios.post(`${API_URL}/api/contact`, values);
        console.log("form data", response);
        if (response.status === 201) {
          console.log("response here", response);
          toast.success("Your Request Submitted successfully.");
          resetForm();
        }
      } catch (error) {
        console.log("error in request", error);
        toast.error("There was an error submitting your request.");
      } finally {
        setLoading(false); // Set loading to false after submission completes
      }
    },
  });

    useEffect(() => {
      AOS.init({ once: true });
    }, []);

  return (
    <>
      <Head>
        <title>Contact - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Contact RadarSoft Technologies for expert software development, mobile app solutions, and digital services. Let's discuss how we can help transform your business."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="inner-head common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="inner-head-wrap">
              <div className="commom-heading">
                <h2>Contact us</h2>
                <p>
                  To know more about our services to discover how we can
                  <br /> elevate your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START REACH */}
      <section className="common_margin_space mb-100" data-aos="fade-up" data-aos-delay="300">
        <div className="container bgcontent">
          <div className="commom-heading">
            <h2>Reach out</h2>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-2 g-lg-3">
            <div className="col">
              <div className="info-boxs">
                <div className="commom-heading">
                  <p>
                    Our innovative solutions deliver tangible results. Whether
                    you need to streamline operations, enhance customer
                    experience, or develop cutting-edge software, we've got the
                    expertise. Reach out to learn more about how we can help
                    your business thrive.
                  </p>
                </div>
                <div className="info-box-set">
                  <div className="info-box me-5">
                    <div className="info_box_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <p>
                      <Link href="tel:+917028404033" className="info-box_link">
                        +91 7028404033
                      </Link>
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="info_box_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p>
                      <Link
                        href="mailto:info@radarsoft.tech"
                        className="info-box_link"
                      >
                        info@radarsoft.tech
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="bottom-border"></div>

                <div className="info-add d-flex mt-4">
                  <div>
                    <div className="info_box_icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="add-text">
                    <h4>Head Office Location</h4>
                    <p>
                      B-309, Nyati Empress, Viman Nagar,
                      <br /> Pune, Maharashtra-411014
                    </p>
                  </div>
                </div>

                <div className="info-add d-flex mt-4">
                  <div>
                    <div className="info_box_icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="add-text">
                    <h4>Los Angeles</h4>
                    <p>
                      Novator Engineering Solutions LLC, 2524
                      <br /> S Marvin, Los Angeles, CA 90016
                    </p>
                  </div>
                </div>

                <div className="info-add d-flex mt-4">
                  <div>
                    <div className="info_box_icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="add-text">
                    <h4>Hyderabad</h4>
                    <p>
                      5th Floor, The Business Park by Pranava Group,
                      <br /> Kothaguda, Hyderabad, 500084
                    </p>
                  </div>
                </div>

                <div className="center-set">
                  <div className="time-box">
                    <h5>
                      We are available from
                      <br />
                      Mon - Fri 10AM TO 7PM ⚡
                    </h5>
                    <p>We are here to help you!</p>
                    <div className="text-lg-end">
                      <button className="contact-btn">
                        <Link href="" style={{ textDecoration: "none" }}>
                          Contact us
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-form">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label for="name">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    <div>
                      {formik.errors.name && formik.touched.name && (
                        <span className="formik-errors-text">
                          {formik.errors.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">Email address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <div>
                      {formik.errors.email && formik.touched.email && (
                        <span className="formik-errors-text">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone number*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    <div>
                      {formik.errors.phone && formik.touched.phone && (
                        <span className="formik-errors-text">
                          {formik.errors.phone}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="country">Country*</label>
                    <div className="custom-select-wrapper">
                      <select
                        className="form-control"
                        id="country"
                        name="country"
                        // aria-placeholder="Country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select your country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                      </select>
                      <div>
                        {formik.errors.country && formik.touched.country && (
                          <span className="formik-errors-text">
                            {formik.errors.country}
                          </span>
                        )}
                      </div>
                      <span className="custom-select-icon">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="message">Please write a message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      placeholder="Please write description about timing and other details related to visit."
                      rows="4"
                    />{" "}
                    <div>
                      {formik.errors.message && formik.touched.message && (
                        <span className="formik-errors-text">
                          {formik.errors.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <button
                      className="common-project-button"
                      type="submit"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {loading ? (
                        <ThreeDots
                          visible={true}
                          height="25"
                          width="25"
                          color="#FFFFFF"
                          radius="9"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      ) : (
                        " Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END REACH */}
    </>
  );
};

export default Contact;
