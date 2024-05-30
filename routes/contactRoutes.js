import express from "express";
const router = express.Router();

import {
  getAllContacts,
  getSingleContacts,
  createNewContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

router.route("/").get(getAllContacts).post(createNewContact);
router
  .route("/:id")
  .get(getSingleContacts)
  .patch(updateContact)
  .delete(deleteContact);

export default router;
