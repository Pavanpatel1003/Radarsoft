import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { toast } from "react-toastify";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Appointment = () => {
  const [loading, setLoading] = useState(false); // Initialize loading state
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_URL;

  // Define your Yup validation schema
  const BookingValidation = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      subject: "",
    },
    validationSchema: BookingValidation, // Link the validation schema
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Set loading state
      try {
        const response = await axios.post(`${API_URL}/api/appoinment`, values);
        console.log("Form Data", response);
        if (response.status === 201) {
          toast.success("Your request was submitted successfully.");
          resetForm(); // Reset form after successful submission
        }
      } catch (error) {
        console.log("Error in request", error);
        toast.error("There was an error submitting your request.");
      } finally {
        setLoading(false); // End loading state
      }
    },
  });

  return (
    <>
      <div
        className="modal fade"
        id="Appointment"
        tabIndex="-1" // Correct tabIndex case
        aria-labelledby="AppointmentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="banner-right-side-areas">
                  <div className="banner-right-side-boxs">
                    <h3 className="banner-right-side-h3">
                      Book an Appointment
                    </h3>
                    <form onSubmit={formik.handleSubmit}>
                      {/* Full Name Field */}
                      <input
                        type="text"
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} // Capture blur event for validation
                        placeholder="Full Name*"
                      />
                      <div className="mb-4">
                        {formik.touched.fullName && formik.errors.fullName && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Email Field */}
                      <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email Id*"
                      />
                      <div className="mb-4">
                        {formik.touched.email && formik.errors.email && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone Number Field */}
                      <input
                        type="tel" // Use "tel" for better mobile support
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={(e) => {
                          const onlyNumbers = e.target.value.replace(/\D/g, ""); // Remove non-numeric values
                          formik.setFieldValue("phoneNumber", onlyNumbers);
                        }}
                        onBlur={formik.handleBlur}
                        placeholder="Phone No*"
                        inputMode="numeric" // Helps mobile users get a numeric keyboard
                        pattern="[0-9]*" // Restricts input to numbers
                        onKeyDown={(e) => {
                          if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
                            e.preventDefault(); // Prevent invalid characters
                          }
                        }}
                        style={{ appearance: "textfield" }} // Removes number input arrows
                      />
                      <div className="mb-4">
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                          <span className="formik-errors-text" style={{ fontSize: "12px" }}>
                            {formik.errors.phoneNumber}
                          </span>
                        )}
                      </div>

                      {/* Subject Field */}
                      <input
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Subject*"
                      />
                      <div className="mb-4">
                        {formik.touched.subject && formik.errors.subject && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.subject}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        className="banner-right-side-button"
                        type="submit"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {loading ? (
                          <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#FFFFFF"
                            radius="9"
                            ariaLabel="three-dots-loading"
                          />
                        ) : (
                          "Enquire Now"
                        )}
                      </button>
                    </form>
                    <p className="banner-right-side-paragraph">
                      ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS to hide arrow/spinner in number input */}
      <style jsx>{`
        input[type="tel"]::-webkit-outer-spin-button,
        input[type="tel"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="tel"] {
          -moz-appearance: textfield; /* Firefox */
        }

        input:focus {
          outline: none;
          border-color: #007bff;
        }
      `}</style>
    </>
  );
};

export default Appointment;
