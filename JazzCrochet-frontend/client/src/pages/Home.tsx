//main landing page
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Chocolate Rainbow Crochet
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A bold fusion of color, texture, and soul-woven with passion,
            stitched with stories
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
            Explore Our Creations
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            About Jasmine Liana Peña
          </h2>
          <p className="text-lg text-gray-600">
            Founder of Chocolate Rainbow Crochet, dedicated to healing through
            art and advocacy.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Custom crochet creations and healing through art.
          </p>
        </div>
      </section>

      <section id="blog" className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Blog</h2>
          <p className="text-lg text-gray-600">
            Stories, tips, and insights from our journey.
          </p>
        </div>
      </section>

      <section id="testimonials" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            What our community says about our work.
          </p>
        </div>
      </section>

      <section id="videos" className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Videos</h2>
          <p className="text-lg text-gray-600">
            Watch our creative process and tutorials.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Get in touch to discuss custom orders or collaborations.
          </p>
          <p className="text-lg text-gray-600">
            Email: C.RainbowCrochet@gmail.com
          </p>
          <p className="text-lg text-gray-600">Phone: (224) 633-0920</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
