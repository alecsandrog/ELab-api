import { Router } from "express";

import { CreatePatientController } from "@modules/patients/useCases/createPatient/CreatePatientController";
import { CreatePatientPhoneController } from "@modules/patients/useCases/createPatientPhone/CreatePatientPhoneController";
import { DeletePatientController } from "@modules/patients/useCases/deletePatient/DeletePatientController";
import { ShowPatientController } from "@modules/patients/useCases/showPatient/ShowPatientController";
import { UpdatePatientController } from "@modules/patients/useCases/updatePatient/UpdatePatientController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const patientsRoutes = Router();
const createPatientController = new CreatePatientController();
const createPatientPhoneController = new CreatePatientPhoneController();
const showPatientPhoneController = new ShowPatientController();
const updatePatientController = new UpdatePatientController();
const deletePatientController = new DeletePatientController();

patientsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createPatientController.handle
);
patientsRoutes.get("/:id", showPatientPhoneController.handle);
patientsRoutes.post("/phones/:id", createPatientPhoneController.handle);
patientsRoutes.patch("/:id", updatePatientController.handle);
patientsRoutes.delete("/:id", deletePatientController.handle);

export { patientsRoutes };
