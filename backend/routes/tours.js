import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCounts
} from "../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create a new tour

router.post("/",verifyAdmin, createTour);

// update a tour

router.put("/:id",verifyAdmin, updateTour);

// delete a tour

router.delete("/:id",verifyAdmin, deleteTour);

// get a single tour

router.get("/:id", getSingleTour);

// get all tours

router.get("/", getAllTour);

// get tour by search

router.get("/search/getTourBySearch", getTourBySearch);


// get featured tours

 router.get("/search/getFeaturedTours", getFeaturedTours);   
 
 // get tour counts

  router.get("/search/getTourCounts", getTourCounts);

export default router;
