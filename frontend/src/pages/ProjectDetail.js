import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/projects/${projectId}`, {
          headers: { 'x-auth-token': token },
        });
        setProject(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch project details');
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Project Details</h1>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
      <TaskList />
    </div>
  );
};

export default ProjectDetail;
