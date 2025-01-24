const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, projectId } = req.body;
  try {
    const task = new Task({ title, description, project: projectId, assignedTo: req.user.id });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
