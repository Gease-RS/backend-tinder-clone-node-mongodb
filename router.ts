import { Request, Response, Router } from "express";
import { tinderCardController } from "./controllers/tinderCardController";

const router: Router = Router();

router.get("/", tinderCardController.home);

export { router };
