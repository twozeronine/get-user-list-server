const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ text: "Hello React x Express" });
});
module.exports = router;
