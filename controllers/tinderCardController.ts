import { Response, Request } from "express";
import Card from "../model/card";

const getCards = async (req: Request, res: Response): Promise<void> => {
  try {
    const cards = await Card.find();
    res.status(200).json({ cards });
  } catch (error) {
    throw error;
  }
};

const addCard = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const card = await Card.create({
      name: body.name,
      url: body.url,
    });

    const newCard = await card.save();
    const allCards = await Card.find();

    res
      .status(201)
      .json({ message: "Card added", card: newCard, cards: allCards });
  } catch (error) {
    throw error;
  }
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

export { getCards, addCard, updateCard, deleteCard };
