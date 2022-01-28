import { Request, Response } from "express";

class TinderCardController {
  public home(req: Request, res: Response) {
    res.json({
      message: "Tinder API",
    });
  }
}

export const tinderCardController = new TinderCardController();
