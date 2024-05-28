import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus mt-5">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-3">
          <p className="text-justify mt-2">
            CreativeCrafted is more than just an e-commerce platform; it's a
            vibrant online marketplace dedicated to celebrating the creativity,
            craftsmanship, and passion of artisans, artists, and crafters
            worldwide. Our platform provides a curated space where creators can
            showcase their unique handmade treasures and connect with a
            community of like-minded individuals who appreciate the beauty of
            handcrafted art. At CreativeCrafted, we believe in empowering
            artisans to share their talents with the world while providing
            customers with access to a diverse array of one-of-a-kind products
            that tell stories and inspire. From intricately designed quilling
            artworks to mesmerizing mandala paintings, from stunning stone art
            to exquisite bottle creations, our platform offers a rich tapestry
            of creativity waiting to be explored.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
