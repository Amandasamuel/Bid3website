// About.tsx - Company information and team member profiles
import CEO from "../components/images/Tarfa.png";
import Tarfa from "../components/images/Tarfa1.png";
import Maureen from "../components/images/maureen.png";
import Sam from "../components/images/Sam.png";
import Innovation from "../components/images/innovation1.jpg";
import Integrity from "../components/images/integrity.jpg";
import Excellence from "../components/images/excellence.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh]">
  <img
    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    alt="Modern building"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
      <p className="text-xl max-w-2xl">
        Leading the way in luxury real estate for over two decades
      </p>
    </div>
  </div>
</div>

{/* Our Story Section */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="flex flex-col md:flex-row gap-12 items-stretch">
    {/* Write-up Section */}
    <div className="flex-1 flex flex-col justify-center">
      <h2 className="text-3xl font-semibold mb-6">CEO's Vision Statement</h2>
      <p className="text-gray-600 mb-6">
        Welcome to BID3REALTY Solutions, your premier partner in real estate. As Managing Director, I'm delighted to introduce you to our team of experts who share a passion for delivering exceptional service, expert knowledge, and innovative solutions.
      </p>

      <p className="text-gray-600 mb-6">
        At BID3REALTY Solutions, we believe that every property journey is unique. Whether you're buying, selling, renting, or investing, our goal is to provide personalized guidance, expert advice, and seamless execution that exceeds your expectations.
      </p>

      <p className="text-gray-600 mb-6">
        Our mission is to build long-term relationships founded on trust, integrity, and transparency. We're committed to empowering our clients to achieve their goals, and we're dedicated to making a positive impact in our communities.
      </p>

      <p className="text-gray-600 mb-6">
        Explore our website to discover how we can help you achieve your property aspirations. From property search to market insights, our expertise is at your fingertips.
      </p>

      <p className="text-gray-600 mb-6">
        At BID3REALTY Solutions, we're driven by three core values:
      </p>

      <ul className="list-disc list-inside text-gray-600 mb-6 pl-6">
        <li className="mb-2">Building relationships that last</li>
        <li className="mb-2">Innovating solutions that inspire</li>
        <li className="mb-2">Delivering excellence that exceeds</li>
      </ul>

      <p className="text-gray-600">
        Thank you for choosing BID3REALTY Solutions. We look forward to partnering with you on your property journey.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex items-stretch">
      <img
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        alt="Modern building"
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We believe in conducting business with the highest ethical standards.",
                image: Integrity,              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service.",
                image: Excellence,
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and methods to better serve our clients.",
                image: Innovation,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Engr. Ibrahim Madugu",
                role: "CEO & Founder",
                /*image: CEO,*/
              },
              {
                name: "Danjuma Tarfa Bitrus",
                role: "Head of administration",
                image: Tarfa
              },
              {
                name: "Maureen Ogee",
                role: "Head of Marketing",
                image: Maureen,
              },
              {
                name: "Engr. Samuel Markus ",
                role: "IT/Renewable Energy Engineer",
                image: Sam,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;