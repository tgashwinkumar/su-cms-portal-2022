import { Router } from "express";
import Club from "../models/Club.js";

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).json({ club: club._id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find({});
    res.status(200).json(clubs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const club = await Club.findOne({ clubId: req.params.id });
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.status(200).json(club);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const club = await Club.findOneAndDelete({ _id: req.params.id });
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.status(200).json(club);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    const club = await Club.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.status(200).json(club);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
