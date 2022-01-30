import { Router } from "express";
import {
  createCard,
  deleteCard,
  getCards,
  updateCard,
} from "./controllers/tinderCardController";

const router: Router = Router();

router.get("/cards", getCards);

router.post("/novo-card", createCard);

router.put("/edit-card/:id", updateCard);

router.delete("/delete-card/:id", deleteCard);

export default router;
