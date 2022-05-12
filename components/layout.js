import Footer from "./Footer";
import Navigation from "./Navigation";
import Head from "next/head"

function layout({ children }) {
  return (
    <div>
      <Head>
        <title>My First Web Page</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
