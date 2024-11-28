import React, { useState } from 'react'


const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web designs.",
      more:"We specialize in creating responsive designs that work seamlessly on all devices, ensuring a great user experience.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      more: "Our frontend development ensures your applications are not just functional but also aesthetically engaging and intuitive.",

    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases.",
      more: "We use modern frameworks and technologies to ensure your backend is scalable and secure.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description: "Combining both frontend and backend development skills.",
      more: "Our expertise bridges the gap between the frontend and backend, delivering cohesive applications.",
    },
    // {
    //   id: 5,
    //   title: "Content Writing",
    //   description: "Writing content for your business and companies.",
    //   more: "We provide SEO-friendly and compelling content to boost your business presence online.",
    // },
    // {
    //   id: 6,
    //   title: "Digital Marketing",
    //   description: "Promote your business with our digital marketing team.",
    //   more: "Our marketing strategies are data-driven, ensuring measurable growth and engagement.",
    // },
  ];
  const Service = () => {
    const [expandedService, setExpandedService]=useState(null);

    const handleReadMore = (id) =>{
        setExpandedService(expandedService === id? null : id);
    }
    return (
      <div className="bg-black text-white py-20" id="service">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
                >
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
                {expandedService === service.id && (
                <p className="mt-2 text-gray-400">{service.more}</p>
              )}
                <button
                onClick={() => handleReadMore(service.id)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500 focus:outline-none"
              >
                {expandedService === service.id ? "Read Less" : "Read More"}
              </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Service
