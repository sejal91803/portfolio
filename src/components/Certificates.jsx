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
    link: "https://drive.google.com/file/d/1OrhP7qtSIO3FMWGpQmJw4CipYiJJ4JTy/view?usp=sharing",
  },
  {
    id: 2,
    name: "UI/UX for Beginners",
    link: "https://drive.google.com/file/d/1yaqcMutTO4tFu3CiWFqzaibyeVu5vwKo/view?usp=sharing",
  },
  {
    id: 3,
    name: "AI Tools",
    link: "https://drive.google.com/file/d/1aTV8DBz4bQRIwNwdVma1nJn0opI168GB/view?usp=sharing",
  },
  {
    id: 4,
    name: "Introduction to C plus plus",
    link: "https://drive.google.com/file/d/1GvMgu65P8k8vBllLu6o0pkaz2gjuRFeF/view?usp=sharing",
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

            {/* Removed image section */}
            
            {/* View button below the image */}
            <div className='mt-4 flex justify-center'>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200'
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
