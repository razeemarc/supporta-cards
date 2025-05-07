import React from 'react';

const ProfileCardImage = () => {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <img 
        src="/profile-card.png" 
        alt="Profile Card Example" 
        className="rounded-xl shadow-lg"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ProfileCardImage;