import { CheckCircle } from 'lucide-react';
import React from 'react';
import Link from "next/link";




  const fontClass = "font-montserrat";

// Using a custom icon component for the arrow button
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transform transition duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Define a type for your service/product categories
type Category = {
  imageSrc: string; // Not used in the visual style of the image, but kept in data
  altText: string;
  title: string;
  description: string;
  linkHref: string;
};

// Data for the three categories - Using the Doors, Windows, Millwork data
const categories: Category[] = [
  {
    imageSrc: "/images/doors.webp",
    altText: "Premium wooden doors for a modern home",
    title: "Doors",
    description: "Discover a wide range of popular doors available, from timeless classics to modern designs, ensuring security and elegance.",
    linkHref: "/doors",
  },
  {
    imageSrc: "/images/windows.webp",
    altText: "Large sliding glass windows overlooking the ocean",
    title: "Windows",
    description: "Upgrade your space with energy-efficient windows by leading brands, offering superior insulation and beautiful views.",
    linkHref: "/windows",
  },
  {
    imageSrc: "/images/millwork.webp",
    altText: "Interior living room with detailed wall paneling",
    title: "Millwork",
    description: "Enhance your interiors with custom trim and mouldings that add a touch of elegance and style to any room.",
    linkHref: "/millwork",
  },
];

// Helper component to render an icon placeholder, as the exact icons aren't provided
// In a real application, you'd replace this with a relevant icon component (e.g., from Lucide or Heroicons)
const IconPlaceholder = ({ colorClass }: { colorClass: string }) => (
    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colorClass} text-white`}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);
const Process = () => {
  return (
    <div className="w-full h-[700px] bg-[#ed6a1f] relative overflow-hidden">
      {/* Image Section */}
      <div className="w-full relative">
        <div className="absolute flex gap-8 top-36 lg:top-10 ml-[400px] -translate-x-1/2 max-w-7xl w-[500px] h-[500px] px-4 sm:px-6 lg:px-8 z-10">
          <img
            className="md:rounded-tl-[50px] md:rounded-br-[50px]"
            src="/images/b2.jpg"
            alt=""
          />
          <img
            className="md:rounded-tr-[50px] md:rounded-bl-[50px]"
            src="/images/b2.jpg"
            alt=""
          />
        </div>
      </div>


      <div className="w-full h-[360px] bg-white absolute bottom-0 left-0 z-0"></div>

      {/* Content Section (Closer to Images) */}
      <div className="absolute top-36 right-[34vh] -mt-24 z-[1] w-[560px] text-white px-0">
        <p className="text-[16px] uppercase font-extrabold mb-4 text-white">Silver Entity Engineering Solutions</p>
        <h2 className="text-[43px] font-montserrat  font-light  text-white">Building Your Dreams</h2>
        <h2 className="text-[43px] font-montserrat  font-extrabold mb-4 text-white">With Quality</h2>
        <p className="text-base mb-8 leading-relaxed text-gray-200">
        Quality is the cornerstone of Silver Entity Engineering Works' approach to every project we undertake. From the materials we source to the skilled workforce we deploy, every aspect of our work reflects a commitment to excellence.
        </p>
     <ul className="space-y-3 text-gray-800">
  <li className="flex items-start gap-2">
    <CheckCircle fill='#ed6a1f' className="text-white w-5 h-5 mt-1" />
    <span>Understanding client requirements</span>
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle fill='#ed6a1f' className="text-white w-5 h-5 mt-1" />
    <span>Strategic planning and execution</span>
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle fill='#ed6a1f' className="text-white w-5 h-5 mt-1" />
    <span>Quality checks and timely delivery</span>
  </li>
</ul> 
<div className='w-32 px-4 py-4 mt-6 rounded-[6px] text-sm font-bold font-montserrat bg-[#ed6a1f]'>
  <button> 
  Know more
</button>
</div>

      </div>
   
    </div>
    

    
  );
};

export default Process;
