import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";


const router = express.Router();

router.get(
    "/:restaurantId",
    param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("restaurantId string olmalı"),
    RestaurantController.getRestaurant
);

router.get(
    "/search/:city",
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City string olmalı."),
    RestaurantController.searchRestaurant,
);

export default router