import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/projects', {
          headers: { 'x-auth-token': token },
        });
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-gray-600">No projects found.</p>
        ) : (
          projects.map((project) => (
            <Link
              to={`/projects/${project._id}`}
              key={project._id}
              className="block bg-white p-4 rounded shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectList;
