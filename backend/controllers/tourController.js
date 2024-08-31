import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created a new tour",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
};

export const getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }
    res.status(200).json({
      success: true,
      message: "Successfully retrieved tour",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved all tours",
      data: tours,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve tours" });
  }
};

// get tour by search

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city: city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved all tours",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// get featured tours

export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved all tours",
      data: tours,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve tours" });
  }
};

// get tours counts

export const getTourCounts = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};
