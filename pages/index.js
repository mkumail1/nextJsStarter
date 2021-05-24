import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pratice Next | Home</title>
        <meta name="keywords" content="practice" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          corporis! Accusamus impedit dolore nisi placeat aspernatur,
          necessitatibus illum cupiditate, voluptatibus, alias deserunt sequi
          laudantium doloribus officiis numquam architecto tenetur dignissimos!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          corporis! Accusamus impedit dolore nisi placeat aspernatur,
          necessitatibus illum cupiditate, voluptatibus, alias deserunt sequi
          laudantium doloribus officiis numquam architecto tenetur dignissimos!
        </p>
      </div>
    </>
  );
}
