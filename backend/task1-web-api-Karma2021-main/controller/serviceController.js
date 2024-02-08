const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

const addService = asyncHandler(async (req, res) => {
  try {
    const newservice = new Service(req.body);
    await newservice.save();
    res.status(200)
    res.send("Service added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

const getAllServices = asyncHandler(async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (error) {
    return res.status(400).json(error);
  }
});

const deleteAllServices = asyncHandler(async (req, res) => {
  try {
    await Service.deleteMany(); // Deletes all documents in the "Service" collection
    res.status(200)
    res.send("All services deleted successfully.");
  } catch (error) {
    return res.status(400).json(error);
  }
});

const editService = asyncHandler(async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.body._id });
    service.description = req.body.description;
    service.image = req.body.image;
    service.charge = req.body.charge;
    await service.save();

    res.send("Service details edited successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

const updateService = asyncHandler(async (req, res) => {
  try {
    const serviceid = req.params.id;
    const updates = req.body;
    const options = { new: true }; // Return the updated Services

    const updatedService = await Service.findByIdAndUpdate(serviceid, updates, options);

    if (!updatedService) {
      return res.status(404).send("Service not found");
    }

    res.send(updatedService);
  } catch (error) {
    return res.status(400).json(error);
  }
});

const deleteServiceById = asyncHandler(async (req, res) => {
  try {
    const serviceid = req.params.id;

    const deletedService = await Service.findByIdAndDelete(serviceid);

    if (!deletedService) {
      return res.status(404).send("Service not found");
    }

    res.send("Service deleted successfully.");
  } catch (error) {
    return res.status(400).json(error);
  }
});

const deleteService = asyncHandler(async (req, res) => {
  try {
    await Service.findOneAndDelete({ _id: req.body.serviceid });

    res.send("Service deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = {
  addService,
  getAllServices,
  deleteAllServices,
  editService,
  updateService,
  deleteServiceById,
  deleteService,
};
