import Image from "next/image";
import careerBanner from "../../../public/assets/media/career-banner.webp";
import { openApplyModal } from "@/components/common/data";
import { useEffect, useState } from "react";
import Apply from "@/components/model/Apply";
import axios from "axios";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [data, setData] = useState([]);
  const [expandedJobIndex, setExpandedJobIndex] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_URL;

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/job/list`);
        if (res.status === 200) {
          setData(res.data?.data);
        } else {
          console.error("Failed to fetch jobs: Unexpected status", res.status);
        }
      } catch (error) {
        console.error("Error fetching job list:", error.message);
      }
    };

    fetchJobList();
  }, [API_URL]);

  const handleOpenApplyModel = (title) => {
    setSelectedJobTitle(title);
    setTimeout(() => {
      openApplyModal();
    }, 100);
  };

  const toggleDescription = (index) => {
    setExpandedJobIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>Career - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Join our team at RadarSoft Technologies! We offer exciting career opportunities for developers, designers, and tech professionals to grow in a dynamic environment."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section
        className="career-banner common_margin_space"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Be a part of our team</h2>
              <p>
                At RadarSoft, we provide a dynamic environment where your career
                can flourish. Join our team to enhance your skills, work on
                innovative projects, and grow professionally with support and
                opportunities for advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="career_img">
          <img
            src={careerBanner}
            alt="Career Banner"
            className="w-100"
            priority
          />
        </div>
      </section>

      <section
        className="career-job-area common_margin_spaces"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container">
          <div className="commom-heading">
            <h2>Search jobs at RadarSoft Technologies</h2>
          </div>
          <div className="input-group career-job-input mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search jobs according to your expertise"
              aria-label="Search Jobs"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section
        className="career-job-list-area common_margin_space bottom-space"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container">
          <p className="career-job-list-title">
            {data.length} jobs found
          </p>
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            {data.length > 0 ? (
              data.map((job, index) => (
                <div className="col" key={index} data-aos="fade-up">
                  <div className="card-body">
                    <p className="text-uppercase loc mb-2">{job?.location}</p>
                    <h4 className="card-title mb-4">{job?.title}</h4>
                    <p className="mb-3">
                      <strong>Skills Required - </strong>
                      {expandedJobIndex === index
                        ? job?.description
                        : `${job?.description.split(" ").slice(0, 10).join(" ")}...`}
                      {job?.description.split(" ").length > 10 && (
                        <div>
                          <button
                            onClick={() => toggleDescription(index)}
                            className="btn btn-link p-0 readmore"
                          >
                            {expandedJobIndex === index ? "Read Less" : "Read More"}
                          </button>
                        </div>

                      )}
                    </p>
                    <p className="mb-4">
                      <strong>Experience Required - </strong>
                      {job?.experience} Years
                    </p>
                    <p className="mb-4">
                      <strong>Job Type - </strong>
                      {job?.Jobtype}
                    </p>
                    <button
                      className="carrerebutton"
                      onClick={() => handleOpenApplyModel(job?.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col text-center">
                <p>No jobs found at the moment. Please check later!</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Apply selectedJobTitle={selectedJobTitle} />
    </>
  );
};

export default Career;
