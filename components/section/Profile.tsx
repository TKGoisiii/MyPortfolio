import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AvatarIcon = () => (
  <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-white/30 overflow-hidden">
    <Image
      src="/profile.png"
      alt="Profile"
      width={96}
      height={96}
      className="object-cover"
    />
  </div>
);


const Profile = () => {
  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Profile
        </h2>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <AvatarIcon />
          <div className="flex gap-4 mb-6">
            <a 
              href="https://twitter.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="text-white/80">
            <p className="mb-4 text-lg">
              はじめまして。TKです。
              [簡単な自己紹介や職務経歴をここに記述します。]
            </p>
            <p className="text-lg">
              [趣味や興味、スキルセットなど、追加したい情報を記述します。]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
