import React from "react";
import Navbar from "../../components/navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-whie-600 text-white min-h-screen">
      {/* Header Section */}
      <header className="py-12 text-center bg-blue-500">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We are HireHaven, a platform dedicated to connecting job seekers with
          companies. Our goal is to make the hiring process easier, faster, and
          more transparent.
        </p>
      </header>

      {/* Our Mission */}
      <section className="py-12 bg-blue-500" >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-lg">
            Our mission is to empower job seekers by providing a seamless platform to discover job opportunities and
            connect with top employers. We aim to bridge the gap between talent and opportunity in the tech industry.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="mt-2">
                We believe in transparency and honesty, ensuring that both job seekers and employers can trust the platform.
              </p>
            </div>
            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2">
                Constantly improving the platform and providing cutting-edge tools to enhance the job search and hiring experience.
              </p>
            </div>
            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="mt-2">
                We value teamwork and strive to create an environment where both job seekers and companies thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-blue-700">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p className="mt-4 text-lg">
            Have questions or want to know more? Reach out to us and we'll be happy to assist you.
          </p>
          <div className="mt-6">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-center py-4">
        <p>&copy; 2024 HireHaven. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default AboutUs;
