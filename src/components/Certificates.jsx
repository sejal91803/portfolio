import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Sample data for certifications
const certifications = [
  {
    id: 1,
    name: "Naukri Campus Young Turks",
    image: "path/to/your/image2.jpg",
    link: "https://example.com/certification-link",
  },
  {
    id: 2,
    name: "UI/UX for Beginners",
    image: "path/to/your/image1.jpg", // Replace with actual image paths or imports
    link: "https://pdf.ac/12jRnU",
  },
  {
    id: 3,
    name: "AI Tools",
    image: "path/to/your/image2.jpg",
    link: "https://example.com/certification-link",
  },
  {
    id: 4,
    name: " Introduction to C plus plus",
    image: "path/to/your/image2.jpg",
    link: "https://example.com/certification-link",
  },
  
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <div id="certificates"> {/* Added id for linking */}
      <motion.div
        variants={textVariant()}
        className="mt-12 ml-48"
      >
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px] ml-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'
      >
        {/* Certification cards */}
        {certifications.map((cert, index) => (
          <Tilt key={cert.id} className='bg-tertiary p-5 rounded-2xl'>
            {/* Title above the image */}
            <h3 className='text-white font-bold text-[20px] mb-3'>{cert.name}</h3>
            
            <div className='relative w-full h-[230px]'>
              <img
                src={cert.image}
                alt={`${cert.name} image`}
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>

            {/* View button below the image */}
            <div className='mt-4 flex justify-center'>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-200'
              >
                View Certificate
              </a>
            </div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
