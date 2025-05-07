import React from 'react';
import Image from 'next/image';

const ProfileCardImage = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <Image 
        src="/profile-card.png" 
        alt="Profile Card Example" 
        width={1024}
        height={1059}
        className="rounded-xl shadow-lg"
        style={{ maxWidth: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
};

export default ProfileCardImage;