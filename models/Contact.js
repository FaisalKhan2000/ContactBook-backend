import mongoose from "mongoose";
import joiContactSchema from "../validation/contactValidation.js";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please fill a valid phone number"],
    },
    email: {
      type: String,

      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    address: {
      type: String,
    },
    company: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    notes: {
      type: String,
    },
    group: {
      type: String,
    },
    alternatePhoneNumbers: {
      type: [String],

      match: [/^\+?[1-9]\d{1,14}$/, "Please fill a valid phone number"],
    },
    birthday: {
      type: Date,
      description: "Birthdate of the contact",
    },
    website: {
      type: String,

      match: [
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
        "Please fill a valid URL",
      ],
    },
    socialMedia: {
      twitter: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      facebook: {
        type: String,
      },
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to validate data using Joi before saving to the database
ContactSchema.pre("save", async function (next) {
  try {
    // Validate data against Joi schema

    // validateAsync is provided by joi to validate
    // this.toObject() is converting plain mongoose to javascript object
    await joiContactSchema.validateAsync(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model("Contact", ContactSchema);
