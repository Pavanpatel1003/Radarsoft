import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Apply = ({ selectedJobTitle }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_URL;

  // Validation constants
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const SUPPORTED_FORMATS = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  // Validation schema
  const JobValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    currentCtc: Yup.number()
      .typeError("Current CTC must be numeric")
      .required("Current CTC is required"),
    expectedCtc: Yup.number()
      .typeError("Expected CTC must be numeric")
      .required("Expected CTC is required"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test(
        "fileSize",
        "File size must be less than 2MB",
        (value) => !value || (value && value.size <= MAX_FILE_SIZE)
      )
      .test(
        "fileType",
        "Unsupported file format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      currentCtc: "",
      expectedCtc: "",
      jobTitle: "Web developer",
      resume: null,
    },
    validationSchema: JobValidation,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const data = new FormData();
        Object.keys(values).forEach((key) => {
          if (values[key] !== null) {
            data.append(key, values[key]);
          }
        });

        const response = await axios.post(`${API_URL}/api/career`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 201) {
          toast.success("Your request submitted successfully.");
          resetForm();
          closeApplyModal();
          handleRemoveFile(); // Ensure file is removed
        }
      } catch (error) {
        toast.error("There was an error submitting your request.");
      } finally {
        setLoading(false);
      }
    },
  });

  // Handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        toast.error("Unsupported file format. Only PDF, DOC, and DOCX are allowed.");
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size must be less than 2MB.");
        return;
      }
      setSelectedFile(file);
      formik.setFieldValue("resume", file);
    }
  };

  // Remove file
  const handleRemoveFile = () => {
    setSelectedFile(null);
    formik.setFieldValue("resume", null);
    document.getElementById("fileInput").value = ""; // Clear file input
  };

  // Update job title when `selectedJobTitle` changes
  useEffect(() => {
    if (selectedJobTitle) {
      formik.setFieldValue("jobTitle", selectedJobTitle);
    }
  }, [selectedJobTitle]);

  // Reset form and file input when modal is closed
  useEffect(() => {
    const modalElement = document.getElementById("ApplyModal");

    const handleModalClose = () => {
      formik.resetForm();
      handleRemoveFile();
    };

    modalElement?.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modalElement?.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, [formik]);

  return (
    <>
      <div
        className="modal fade"
        id="ApplyModal"
        tabIndex="-1"
        aria-labelledby="ApplyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ApplyModalLabel">
                <span className="me-2">
                  <Link href="#">
                    <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </span>
                {selectedJobTitle ? selectedJobTitle : "web developer"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="contact-form">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name*"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <span className="formik-errors-text">
                        {formik.errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email address*"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <span className="formik-errors-text">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone*"
                      value={formik.values.phone}
                      maxLength="10"
                      onChange={(e) => {
                        if (/^\d*$/.test(e.target.value)) {
                          formik.handleChange(e);
                        }
                      }}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                      <span className="formik-errors-text">
                        {formik.errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="currentCtc">Current CTC</label>
                    <input
                      type="number"
                      className="form-control"
                      id="currentCtc"
                      name="currentCtc"
                      placeholder="Current CTC*"
                      value={formik.values.currentCtc}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.currentCtc &&
                      formik.touched.currentCtc && (
                        <span className="formik-errors-text">
                          {formik.errors.currentCtc}
                        </span>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="expectedCtc">Expected CTC</label>
                    <input
                      type="number"
                      className="form-control"
                      id="expectedCtc"
                      name="expectedCtc"
                      placeholder="Expected CTC*"
                      value={formik.values.expectedCtc}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.expectedCtc &&
                      formik.touched.expectedCtc && (
                        <span className="formik-errors-text">
                          {formik.errors.expectedCtc}
                        </span>
                      )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="file"
                        className="file-type"
                        name="resume"
                        id="fileInput"
                        onChange={handleFileChange}
                      />
                      {selectedFile && (
                        <div className="file-info" style={{ marginTop: "10px" }}>
                          <span>
                            {selectedFile.name} (
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                          <i
                            className="fa fa-times"
                            onClick={handleRemoveFile}
                            style={{
                              cursor: "pointer",
                              color: "red",
                              fontSize: "20px",
                              marginLeft: "10px",
                            }}
                            title="Remove file"
                          ></i>
                        </div>
                      )}
                    </div>
                    {formik.errors.resume && formik.touched.resume && (
                      <span className="formik-errors-text">
                        {formik.errors.resume}
                      </span>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="co-button"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {loading ? (
                        <ThreeDots
                          visible={true}
                          height="30"
                          width="30"
                          color="#FFFFFF"
                          radius="9"
                          ariaLabel="three-dots-loading"
                        />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
