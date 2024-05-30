import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";

/*
GET /contacts - Retrieve a list of all contacts
GET /contacts/
- Retrieve a specific contact by ID
POST /contacts - Create a new contact
PUT /contacts/
- Update an existing contact by ID
DELETE /contacts/
- Delete a contact by ID
*/

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({ createdBy: req.user.id });
  res.status(StatusCodes.OK).json({
    msg: `A total of ${contacts.length} contacts have been found.`,
    contacts,
  });
};
export const getSingleContacts = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Contact not found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: `Contact with ID: ${contact.id} has been found.`, contact });
};
export const createNewContact = async (req, res) => {
  req.body.createdBy = req.user.id;

  const contact = await Contact.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Contact created successfully.", contact });
};
export const updateContact = async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedContact) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Contact not found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: "Contact updated successfully.", contact: updatedContact });
};
export const deleteContact = async (req, res) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);

  if (!deletedContact) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Contact not found" });
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Contact deleted successfully.", contact: deletedContact });
};
