import Joi from "joi";

// Define custom error messages
const customMessages = {
  "string.uri": "{{#label}} must be a valid URL",
};

const joiContactSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  phoneNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required(),
  email: Joi.string().email(),
  address: Joi.string(),
  company: Joi.string(),
  jobTitle: Joi.string(),
  notes: Joi.string(),
  group: Joi.string(),
  alternatePhoneNumbers: Joi.array().items(
    Joi.string().pattern(/^\+?[1-9]\d{1,14}$/)
  ),
  birthday: Joi.date(),
  website: Joi.string().uri().messages(customMessages), // Customize error message for URI validation
  socialMedia: Joi.object({
    twitter: Joi.string().uri().messages(customMessages),
    linkedin: Joi.string().uri().messages(customMessages),
    facebook: Joi.string().uri().messages(customMessages),
  }),
}).options({ stripUnknown: true }); // Ignore unknown fields;

export default joiContactSchema;
