import Task from "../models/Task.js";

// ➕ Create Task
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ msg: "Title is required" });
    }

    const task = await Task.create({
      title,
      userId: req.user.userId,
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// 📄 Get All Tasks (for logged-in user)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// ✏️ Update Task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user.userId },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// ❌ Delete Task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({
      _id: id,
      userId: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json({ msg: "Task deleted" });

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};