import { Router } from "express";

import { CreateExamController } from "@modules/orders/useCases/createExam/CreateExamController";
import { DeleteExamController } from "@modules/orders/useCases/deleteExam/DeleteExamController";
import { ListExamsController } from "@modules/orders/useCases/listExams/ListExamsController";
import { UpdateExamController } from "@modules/orders/useCases/updateExam/UpdateExamController";

const examsRoutes = Router();
const createExamController = new CreateExamController();
const listExamController = new ListExamsController();
const updateExamController = new UpdateExamController();
const deleteExamController = new DeleteExamController();

examsRoutes.get("/", listExamController.handle);
examsRoutes.post("/", createExamController.handle);
examsRoutes.put("/:id", updateExamController.handle);
examsRoutes.delete("/:id", deleteExamController.handle);

export { examsRoutes };
