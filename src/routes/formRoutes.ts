import { Router } from "express";

import {
  createFormData,
  getAllFormData,
} from "../controllers/formDataController";

const router = Router();

router.get("/form", getAllFormData);
router.post("/form", createFormData);

export default router;