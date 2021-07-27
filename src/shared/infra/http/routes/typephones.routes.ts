import { Router } from "express";
import multer from "multer";

import { CreateTypePhoneController } from "@modules/patients/useCases/createTypePhone/CreateTypePhoneController";
import { DeleteTypePhoneController } from "@modules/patients/useCases/deleteTypePhone/DeleteTypePhoneController";
import { ImportTypePhoneController } from "@modules/patients/useCases/importTypePhone/ImportTypePhoneController";
import { ListTypePhonesController } from "@modules/patients/useCases/listTypePhones/ListTypePhonesController";
import { UpdateTypePhoneController } from "@modules/patients/useCases/updateTypePhone/UpdateTypePhoneController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const upload = multer({
  dest: "./tmp",
});

const listTypePhoneController = new ListTypePhonesController();
const createTypePhoneController = new CreateTypePhoneController();
const importTypePhoneController = new ImportTypePhoneController();
const updateTypePhoneController = new UpdateTypePhoneController();
const deleteTypePhoneController = new DeleteTypePhoneController();

const typePhonesRoutes = Router();

// typePhonesRoutes.use(ensureAuthenticated);
typePhonesRoutes.post("/", createTypePhoneController.handle);
typePhonesRoutes.get("/", listTypePhoneController.handle);
typePhonesRoutes.put("/:id", updateTypePhoneController.handle);
typePhonesRoutes.delete("/:id", deleteTypePhoneController.handle);

typePhonesRoutes.post(
  "/import",
  upload.single("file"),
  importTypePhoneController.handle
);

export { typePhonesRoutes };
