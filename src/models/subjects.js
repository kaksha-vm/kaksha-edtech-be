const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  title: String,
  description: String,
});

const SubjectsModel = mongoose.model("subjects", subjectSchema, "subjects");

SubjectsModel.getAllSubjects = async function (req, res) {
  try {
    const subjects = await SubjectsModel.find({});
    if (subjects) {
      res.send(subjects);
    } else {
      res.status(400).send({ error: "Error fetching subjects" });
    }
  } catch (error) {
    res.status(400).send({ error: error.errorResponse.errmsg });
  }
};

SubjectsModel.createSubject = async function (req, res) {
  const subject = req.body;

  try {
    const response = await SubjectsModel.create(subject);
    if (response) {
      res.send(response);
    } else {
      res.status(400).send({ error: "Error creating subject" });
    }
  } catch (error) {
    res.status(400).send({ error: error.errorResponse.errmsg });
  }
};

module.exports = SubjectsModel;
