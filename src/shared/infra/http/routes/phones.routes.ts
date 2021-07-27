import { Router } from "express";

import { CreatePhoneController } from "@modules/patients/useCases/createPhone/CreatePhoneController";

const phonesRoutes = Router();
const createPhoneController = new CreatePhoneController();

phonesRoutes.post("/", createPhoneController.handle);

export { phonesRoutes };
