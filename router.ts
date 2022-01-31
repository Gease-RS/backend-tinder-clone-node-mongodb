import { Router } from "express";
import {
  createPeople,
  deletePeople,
  getPeoples,
  updatePeople,
} from "./controllers/tinderCardController";

const router: Router = Router();

router.get("/peoples", getPeoples);

router.post("/novo-people", createPeople);

router.put("/edit-people/:id", updatePeople);

router.delete("/delete-people/:id", deletePeople);

export default router;
