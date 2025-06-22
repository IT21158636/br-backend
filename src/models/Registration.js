const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    nicNo: String,
    fullName: String,
    nameWithInitial: String,
    dateOfBirth: Date,
    gender: String,
    address: String,
    emailAddress: String,
    province: String,
    district: String,
    city: String,
    postalCode: String,
    contactNumbers: String,
    shareOwnership: Number,
  },
  { _id: false }
);

const SecretarySchema = new mongoose.Schema(
  {
    nicNo: String,
    fullName: String,
    nameWithInitial: String,
    dateOfBirth: Date,
    gender: String,
    address: String,
    emailAddress: String,
    province: String,
    district: String,
    city: String,
    postalCode: String,
    contactNumbers: String,
  },
  { _id: false }
);

const RegistrationSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true },
    companyDetails: {
      address: String,
      emailAddress: String,
      phoneNumber: String,
      province: String,
      district: String,
      city: String,
      postalCode: String,
      businessNature: String,
    },
    directors: [PersonSchema],
    secretary: SecretarySchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", RegistrationSchema);
