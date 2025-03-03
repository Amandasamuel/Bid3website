import { Button } from "@/components/ui/button";
import Video from "../components/images/video.mp4"; 
import { Link } from "react-router-dom";
import image1 from "../components/images/our3.jpg";
import image2 from "../components/images/Building.jpg";
import image3 from "../components/images/our4.jpg";
import Innovation from "../components/images/our3.jpg";
import integrity from "../components/images/Building.jpg";
import excellence from "../components/images/our4.jpg";
import Trends from "../components/images/Trends1.jpeg";
import Luxury from "../components/images/Luxuty.jpg";
import Consulting from "../components/images/Consulting.jpg";
import Property from "../components/images/Property.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselApi,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Building, HomeIcon, Users, Rocket, Store, Award, Calendar, Map, TrendingUp, Briefcase, Landmark, Hotel, Road } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    text: "Outstanding service! They helped me find my dream home within weeks.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    text: "Their market knowledge and professional guidance were invaluable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Michael Brown",
    role: "First-time Buyer",
    text: "Made the home buying process smooth and stress-free. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Emily Davis",
    role: "Luxury Property Owner",
    text: "Exceptional attention to detail and personalized service throughout.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Wilson",
    role: "Commercial Investor",
    text: "Their expertise in commercial real estate is unmatched. Great results!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={Video}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover exceptional properties in prime locations with our expert real
            estate services.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary"
          >
             <Link to="/projects"> View Properties</Link>
          </Button>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Cards */}
          {[
            {
              image: image1,
              title: "Modern Apartment",
              details: "3 beds • 2 baths • 1,800 sq ft",
              location: "Mabushi"
            },
           {
              image: image2,
              title: "Luxury Villa",
              details: "4 beds • 3 baths • 2,500 sq ft",
              location: "Lifecamp"
            },
            {
              image: image3,
              title: "Penthouse Suite",
              details: "3 beds • 2 baths • 2,000 sq ft",
              location: "Maitama"
            }
          ].map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.details}</p>
                <p className="text-primary font-semibold mt-2">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Services Section */}
<div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Management",
                description:
                  "Professional management services for your investment properties.",
                image: Property,
              },
              {
                title: "Real Estate Consulting",
                description:
                  "Expert advice on property investments and market analysis.",
                image: Consulting,
              },
              {
                title: "Luxury Properties",
                description:
                  "Access to exclusive high-end properties in prime locations.",
                image: Luxury,
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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
      
      {/* Market Trends Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
              <img 
                src={Trends} 
                alt="Real Estate Market Analysis" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Market Trends & Insights</h2>
              <p className="text-gray-600 mb-6">
                Stay ahead with our expert analysis of real estate market trends and investment opportunities.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Property Value Appreciation",
                    description: "Residential properties in our focus areas have shown consistent 7-12% annual appreciation over the last 5 years.",
                    icon: <TrendingUp className="text-primary" />
                  },
                  {
                    title: "Emerging Neighborhoods",
                    description: "Our research has identified 5 emerging neighborhoods with high growth potential for investors.",
                    icon: <Map className="text-primary" />
                  },
                  {
                    title: "Investment Planning",
                    description: "Our expert advisors help create customized investment strategies based on market analysis and your goals.",
                    icon: <Briefcase className="text-primary" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-primary hover:bg-primary/90">
                Get Market Report
              </Button>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Join us at our upcoming property viewings, investment seminars, and community events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Property Showcase",
                date: "June 15, 2025",
                time: "10:00 AM - 4:00 PM",
                location: "DUTUNCHI PLAZA",
                type: "Property Viewing"
              },
              {
                title: "Investment Strategies Seminar",
                date: "June 22, 2025",
                time: "2:00 PM - 5:00 PM",
                location: "DUTUNCHI PLAZA",
                type: "Educational"
              },
              {
                title: "Community Open House",
                date: "July 8, 2025",
                time: "12:00 PM - 6:00 PM",
                location: "DUTUNCHI PLAZA",
                type: "Open House"
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                        {event.type}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <p className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" /> 
                          {event.date} • {event.time}
                        </p>
                        <p className="flex items-center">
                          <Map className="h-4 w-4 mr-2" /> 
                          {event.location}
                        </p>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-3 text-primary">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognition Section */}
      {/*
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Awards & Recognition</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our commitment to excellence has been recognized by leading industry organizations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: "Best Luxury Development",
                year: "2023",
                organization: "Real Estate Excellence Awards"
              },
              {
                award: "Sustainable Builder of the Year",
                year: "2023",
                organization: "Green Building Council"
              },
              {
                award: "Customer Satisfaction Award",
                year: "2022",
                organization: "HomeOwners Association"
              },
              {
                award: "Urban Development Prize",
                year: "2021",
                organization: "City Planning Commission"
              }
            ].map((award, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{award.award}</h3>
                <p className="text-primary font-medium mb-1">{award.year}</p>
                <p className="text-gray-500 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}


      {/* Testimonials Section with Auto-sliding Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Client Testimonials
          </h2>
          <Carousel 
           className="w-full max-w-4xl mx-auto"
           setApi={setApi}
           opts={{
             align: "start",
             loop: true,
             skipSnaps: false,
             duration: 30,
             inViewThreshold: 0.7,
           }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-600 mb-4 text-lg italic">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
