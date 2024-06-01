const express = require("express");
const router = express.Router();
const SubjectsModel = require("./../models/subjects");

router.get("/", (req, res) => {
  SubjectsModel.getAllSubjects(req, res);
});

router.post("/", (req, res) => {
  console.log("Router - create Object");
  SubjectsModel.createSubject(req, res);
});

module.exports = router;
