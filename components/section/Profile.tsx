'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AvatarIcon } from '../ui/AvaterIcon';


const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="profile" className="py-20" ref={ref}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Profile
        </h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          <AvatarIcon />
          <div className="flex gap-4 mb-6">
            <a 
              href="https://twitter.com/_sgmtppp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="https://github.com/TKGoisii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/%E7%A8%9C%E4%BD%91-%E9%AB%98%E5%8E%9F-9567252b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="text-white/80">
            <p className="mb-4 text-lg">
              はじめまして。TKです。最近は主にフロントエンドの言語をいじってます。
            </p>
            <p className="text-lg">
              趣味：旅行、音楽、ゲーム、サッカー
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
