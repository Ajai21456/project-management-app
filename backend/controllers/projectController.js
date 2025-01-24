const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = new Project({ name, description, createdBy: req.user.id });
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user.id });
    res.json(projects);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
