import { body, validationResult } from "express-validator";
import { Request,Response,NextFunction } from "express";

const handleValidationErrors = async (req:Request, res: Response, next: NextFunction) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    next();
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("AddressLine1 must be a String"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,

];

export const validateMyRestaurantRequest = [
    body("restaurantName").notEmpty().withMessage("Bu alan zorunludur"),
    body("city").notEmpty().withMessage("Bu alan zorunludur"),
    body("country").notEmpty().withMessage("Bu alan zorunludur"),
    body("deliveryPrice")
        .isFloat({ min:0 })
        .withMessage("Teslimat fiyatı pozitif bir sayı olmalıdır"),
    body("estimatedDeliveryTime")
        .isInt({ min:0 })
        .withMessage("Varış zamanı pozitif tamsayı olmalıdır"),
    body("cuisines")
        .isArray()
        .withMessage("Mutfaklar bir dizi olmalı")
        .not() 
        .isEmpty()
        .withMessage("Mutfaklar dizisi boş olamaz"),
    body("menuItems").isArray().withMessage("Menü bir dizi olmalı"),
    body("menuItems.*.name").notEmpty().withMessage("Bu alan zorunludur"),
    body("menuItems.*.price")
        .isFloat({ min:0 })
        .withMessage("Bu alan zorunludur ve pozitif sayı olmalıdır"),
    handleValidationErrors,

];


