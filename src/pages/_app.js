import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/responsive.css";
import "@/styles/development.css";
import "@/styles/myResponsive.css";
import "@/styles/pStyle.css";
import "@/styles/pResponsive.css";
import Head from "next/head";
import Layout from "@/components/layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title>RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="RadarSoft Technologies LLP: Expert software development and tech outsourcing services for startups and corporates. Specializing in innovative solutions with flexible project models and dedicated resources to accelerate your development. Contact us for scalable, reliable, and high-quality tech solutions."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer />
    </>
  );
}
