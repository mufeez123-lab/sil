import React from 'react';

const FourCards = () => {
  // Static content for the card
  const content = {
    title: "",
    subtitle: "OUR COMMITMENT TO EXCELLENCE",
    description: "We are dedicated to pioneering engineering solutions that prioritize environmental responsibility while delivering superior structural performance. Our approach combines state-of-the-art technology with time-honored construction principles to create value that lasts.",
    imageSrc: "/images/e1.jpg", // Replaced with a placeholder image URL
    imageAlt: "Modern construction site at sunset",
  };

  const featureCards = [
  {
    title: "Expertise",
    description: "We boast a team of seasoned professionals with years of experience in the design and construction industry.",
    bgColor: "bg-orange-600",
    titleColor: "text-white",
    descColor: "text-white",
  },
  {
    title: "Customized Solutions",
    description: "We offer fully customized solutions tailored to your specific needs and preferences. Our team will work closely with you to bring your vision to life.",
    bgColor: "bg-white",
    titleColor: "text-orange-600",
    descColor: "text-gray-700",
  },
  {
    title: "Innovation",
    description: "We stay up-to-date with the latest trends and techniques in the industry to ensure that we are always at the forefront of innovation design.",
    bgColor: "bg-orange-600",
    titleColor: "text-white",
    descColor: "text-white",
  },
  {
    title: "Sustainability Approach",
    description: "At Onyx Creation Technical Services CO. LLC, sustainability isn't just a goal; it's a shared responsibility in every step of the way, ensuring a brighter, more sustainable future for generations to come.",
    bgColor: "bg-white",
    titleColor: "text-orange-600",
    descColor: "text-gray-700",
  },
];

  return (
    <section className="min-h-[550px] my-12 md:my-20 font-sans">
      <div className=" px-4 sm:px-6 lg:px-0">
      
        <div className="grid grid-cols-1 md:grid-cols-5  overflow-hidden shadow-2xl">
          
         
          <div className="md:col-span-3 bg-[#5c5c5c] p-8 sm:p-12 lg:p-16 flex flex-col ">
            

            
            <h2 className="text-4xl lg:text-[43px]  text-white mb-6 -mt-10 ml-28 leading-tight ">
        Transforming <span className='text-4xl lg:text-[43px] font-extrabold text-white  leading-tight'>Innovation,</span> <br />
<span className='text-4xl lg:text-[43px] font-extrabold text-white  leading-tight'>Exceeding</span> Spaces <br />
Choose <span className='text-4xl lg:text-[43px] font-extrabold text-white  leading-tight'>Excellence</span>
            </h2>
            


       
          </div> 
            {/* Absolute positioned container with exact dimensions and 4-column grid */}
      <div 
        className='absolute z-10 grid grid-cols-1 md:grid-cols-4 gap-0 mt-56 ml-44 mt-4
                   w-[1400px] h-[300px] overflow-hidden shadow-2xl rounded-[20px]'
      >
        {featureCards.map((card, index) => (
          <div 
            key={index} 
            // Apply background color and ensure no gap from outer grid
            className={`p-8 flex flex-col justify-start rounded-[20px] 
                        ${card.bgColor} ${card.titleColor} h-full`}
            
            // Add custom radius logic to the first and last card only
            style={{
              borderRadius: '20px',

            }}
          >
            {/* Title (large and bold) */}
            <h4 className={`text-2xl font-bold mb-3 leading-snug ${card.titleColor}`}>
              {card.title}
            </h4>
            
            {/* Description */}
            <p className={`text-sm leading-relaxed ${card.descColor} opacity-90`}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
          {/* Column 2: Image (40% width on desktop) */}
          <div className="md:col-span-2 relative h-64 md:h-auto">
            {/* FIX: Replaced next/image with standard HTML <img> tag */}
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default FourCards;