const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get Gig List
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//Add a Gig
router.get("/add", (req, res) => {
  const data = {
    title: "Looking for a React Developer",
    technologies: "React, Javascript, HTML, CSS",
    budget: "3000",
    description: "Some number of lines of description",
    contact_email: "user1@gmail.com",
  };

  let { title, technologies, budget, description, contact_email } = data;

  //insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email,
  })
    .then((gig) => res.redirect("/gigs"))
    .catch((err) => console.log(err));
});

module.exports = router;
