import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}</h1>
      <ProjectList />
    </div>
  );
};

export default Dashboard;
