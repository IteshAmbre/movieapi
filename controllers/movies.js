const Todo = require("../models/Movies");

exports.readTodos = async (req, res) => {
  try {
    const Todos = await Todo.find();
    res.status(200).json(Todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createTodos = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
