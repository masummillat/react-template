import React from "react";
import { Helmet } from "react-helmet";

const ProfilePage: React.FC = () => {
  return (
    <main className="animate-fadeIn">
      <Helmet>
        <title>Profile - Cline</title>
      </Helmet>
      Profile
    </main>
  );
};

export default ProfilePage;
