const express = require("express");
const router = express.Router();
const {
  createRegistration,
  getRegistration,
  getAllRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registrationController");

router.post("/", createRegistration);
router.get("/", getAllRegistration);
router.get("/:id", getRegistration);
router.put("/:id", updateRegistration);
router.delete("/:id", deleteRegistration);

module.exports = router;
