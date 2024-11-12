import React from 'react';
import './education.css';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
    <div id="education"></div>
      <motion.div
        variants={textVariant()}
        className="mt-12 ml-48"
      >
        <p className={styles.sectionSubText}>My Education so far</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px] ml-48 flex justify-between'
      >
        {/* Left column for B.Tech degree */}
        <div className='flex-1 pr-8 whitespace-nowrap'> {/* Added `whitespace-nowrap` */}
          <h3 className='text-white text-[20px] font-bold mb-2'>B.Tech Degree (2021-2025)</h3>
          <p>College - Pimpri Chinchwad College of Engineering, Akurdi, Pune.</p>
          <p>CGPA - 6.58 (62%)</p>
        </div>

        {/* Vertical line divider */}
        <div className='w-[2px] bg-white ml-2 mr-10 shadow-[5px_0_10px_rgba(255,255,255,0.5),-5px_0_10px_rgba(255,255,255,0.5)]'></div>


        {/* Right column for 12th and 10th details */}
        <div className='flex-1 pl-8 whitespace-nowrap'> {/* Added `whitespace-nowrap` */}
          <h3 className='text-white text-[20px] font-bold mb-2'>12th (2019-2021)</h3>
          <p>College - MT Balwadkar Jr College, Balewadi, Pune.</p>
          <p>Score - 72%</p>
          <br />
          <h3 className='text-white text-[20px] font-bold mb-2'>10th (2019)</h3>
          <p>School - St.Joseph High School, Pashan, Pune.</p>
          <p>Score - 71%</p>
        </div>
      </motion.div>
    </>
  );
};

export default Education;
