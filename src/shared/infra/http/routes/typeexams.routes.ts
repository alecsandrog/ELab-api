import { Router } from "express";

import { CreateTypeExamController } from "@modules/orders/useCases/createTypeExam/CreateTypeExamController";
import { DeleteTypeExamController } from "@modules/orders/useCases/deleteTypeExam/DeleteTypeExamController";
import { ListTypeExamsController } from "@modules/orders/useCases/listTypeExam/ListTypeExamsController";
import { UpdateTypeExamController } from "@modules/orders/useCases/updateTypeExam/UpdateTypeExamController";

const createTypeExamController = new CreateTypeExamController();
const updateTypeExamControlle = new UpdateTypeExamController();
const listTypeExamController = new ListTypeExamsController();
const deleteTypeExamController = new DeleteTypeExamController();

const typeExamsRoutes = Router();
typeExamsRoutes.get("/", listTypeExamController.handle);
typeExamsRoutes.post("/", createTypeExamController.handle);
typeExamsRoutes.put("/:id", updateTypeExamControlle.handle);
typeExamsRoutes.delete("/:id", deleteTypeExamController.handle);

export { typeExamsRoutes };
