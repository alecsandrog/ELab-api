import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { examsRoutes } from "./exams.routes";
import { patientsRoutes } from "./patients.routes";
import { phonesRoutes } from "./phones.routes";
import { typeExamsRoutes } from "./typeexams.routes";
import { typePhonesRoutes } from "./typephones.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/typephones", typePhonesRoutes);
router.use("/typeexams", typeExamsRoutes);
router.use("/patients", patientsRoutes);
router.use("/users", usersRoutes);
router.use("/phones", phonesRoutes);
router.use("/exams", examsRoutes);
router.use(authenticateRoutes);
export { router };
