const Registration = require("../models/Registration");

// POST /api/business-registration
exports.createRegistration = async (req, res) => {
  try {
    const reg = new Registration(req.body);
    const saved = await reg.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/business-registration/:id
exports.getRegistration = async (req, res) => {
  try {
    const reg = await Registration.findById(req.params.id);
    if (!reg) return res.status(404).json({ message: "Not found" });
    res.json(reg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/business-registration
exports.getAllRegistration = async (req, res) => {
  try {
    const reg = await Registration.find();
    res.json(reg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/business-registration/:id
exports.updateRegistration = async (req, res) => {
  try {
    const reg = await Registration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!reg)
      return res.status(404).json({ message: "Registration not found" });
    res.json(reg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/business-registration/:id
exports.deleteRegistration = async (req, res) => {
  try {
    const reg = await Registration.findByIdAndDelete(req.params.id);
    if (!reg)
      return res.status(404).json({ message: "Registration not found" });
    res.json({ message: "Registration deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
