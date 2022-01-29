import List from '../models/list.js';
import mongoose from 'mongoose';

// get List by user ID (change it when user is added)
export const getListsByUserID = async (req, res) => {
    try {
        const lists = await List.find().sort(
            { updatedAt: 'desc' }
        ).exec();
        res.status(200).json(lists);
    }
    catch (err) {
        res.status(404).json({ message: error.message });
    }
}


// get list by List ID

export const getListByID = async (req, res) => {
    const { id } = req.params;
    try {
        const list = await List.findById(id);
        res.status(200).json(list);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// add List
export const addList = async (req, res) => {
    const { userID, title, tasks } = req.body;
    const newList = new List({ userID, title, tasks });

    try {
        await newList.save();
        res.status(201).json(newList);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}


// updateList
export const updateList = async (req, res) => {
    const { id } = req.params;
    const { userID, title, tasks } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No list with Id - ${id}`);

    const updatedList = { userID, title, tasks, _id: id };

    await List.findByIdAndUpdate(id, updatedList, { new: true });
    res.json(updatedList);
}

// deleteList
export const deleteList = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No list with Id - ${id}`);

    await List.findByIdAndRemove(id);
    res.json({ message: "List deleted successfully" });
}