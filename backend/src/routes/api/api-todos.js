import { Router } from "express";
import {
  retrieveTodos,
  createTodo,
  updateCompleteStatus,
  deleteTodo
} from "../../data/todos-dao.js";

const router = Router();

router.get("/", async (req, res) => {
  return res.json(await retrieveTodos()); // convert to json then as response
});

router.post("/", async (req, res) => {
  const { description, dueDate } = req.body; //assume user has inputted desc & dueDate
  if (!description || !dueDate) {
    return res.sendStatus(422); // 422 means correct format but server could not process input
  }
  const todo = await createTodo(description, dueDate);
  return res
    .location(`/api/todos/${todo.id}`) //give user a location of new todo
    .status(201)
    .json(todo);
});

router.patch("/:id", async (req, res) => {
  // to update
  // turns input into variable id (path paramater)
  const id = req.params.id;
  const { isComplete } = req.body; // use {} to access body
  if (isComplete === undefined) {
    return res.sendStatus(422);
  }
  const success = updateCompleteStatus(id, isComplete);
  res.sendStatus(success ? 204 : 404); // ternary if else shortcut
});

router.delete("/:id", async (req, res) => {
  // turns input into variable id (path paramater)
  const id = req.params.id; // to check for valid id, must implement in deleteTodo()
  const success = deleteTodo(id);
  res.sendStatus(success ? 204 : 404);
});

export default router; // to use router() in other files
