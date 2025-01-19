import React from "react";
import GroupList from "../components/User/GroupList";
import GroupUploadForm from "../components/User/GroupUploadForm";

const Homepage = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">WhatsApp Groups Directory</h1>
      </header>
      <main className="p-4">
        <GroupUploadForm />
        <GroupList />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2025 WhatsApp Groups
      </footer>
    </div>
  );
};

export default Homepage;
