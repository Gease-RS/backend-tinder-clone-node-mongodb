import { Response, Request } from "express";
import mongoose from "mongoose";
import People from "../model/people";

const getPeoples = async (req: Request, res: Response): Promise<void> => {
  try {
    const peoples = await People.find();
    res.status(200).json({ peoples });
  } catch (error) {
    throw error;
  }
};

const createPeople = async (req: Request, res: Response) => {
  let body = req.body;
  const { name, url } = body;
  const newPeople = new People({
    _id: new mongoose.Types.ObjectId(),
    name,
    url,
  });

  return newPeople
    .save()
    .then((result) => {
      return res.status(201).json({
        people: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const updatePeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatePeople = await People.findByIdAndUpdate({ _id: id }, body);
    const allPeoples = await People.find();
    res.status(200).json({
      message: "People updated",
      people: updatePeople,
      peoples: allPeoples,
    });
  } catch (error) {
    throw error;
  }
};

const deletePeople = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPeople = await People.findByIdAndRemove(req.params.id);
    const allPeoples = await People.find();
    res.status(200).json({
      message: "People deleted",
      people: deletedPeople,
      peoples: allPeoples,
    });
  } catch (error) {
    throw error;
  }
};

export { getPeoples, createPeople, updatePeople, deletePeople };
