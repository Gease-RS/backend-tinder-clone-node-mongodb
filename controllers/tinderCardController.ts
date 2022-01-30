import { Response, Request } from "express";
import mongoose from "mongoose";
import Card from "../model/card";

const getCards = async (req: Request, res: Response): Promise<void> => {
  try {
    const cards = await Card.find();
    res.status(200).json({ cards });
  } catch (error) {
    throw error;
  }
};

const createCard = async (req: Request, res: Response) => {
  let body = req.body;
  const { cardname, urlavatar } = body;
  const newCard = new Card({
    _id: new mongoose.Types.ObjectId(),
    cardname,
    urlavatar,
  });

  return newCard
    .save()
    .then((result) => {
      return res.status(201).json({
        card: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const updateCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateCard = await Card.findByIdAndUpdate({ _id: id }, body);
    const allCards = await Card.find();
    res.status(200).json({
      message: "Card updated",
      card: updateCard,
      cards: allCards,
    });
  } catch (error) {
    throw error;
  }
};

const deleteCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCard = await Card.findByIdAndRemove(req.params.id);
    const allCards = await Card.find();
    res.status(200).json({
      message: "Card deleted",
      card: deletedCard,
      cards: allCards,
    });
  } catch (error) {
    throw error;
  }
};

export { getCards, createCard, updateCard, deleteCard };
