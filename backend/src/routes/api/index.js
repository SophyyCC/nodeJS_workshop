import { Router } from "express";

const router = Router();

import todosRoute from "./api-todos.js";

router.use("/todos", todosRoute);

// TODO Add your todos API routes here - /api/todos

export default router;
