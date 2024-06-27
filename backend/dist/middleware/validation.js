"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMyRestaurantRequest = exports.validateMyUserRequest = void 0;
const express_validator_1 = require("express-validator");
const handleValidationErrors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
});
exports.validateMyUserRequest = [
    (0, express_validator_1.body)("name").isString().notEmpty().withMessage("Name must be a string"),
    (0, express_validator_1.body)("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("AddressLine1 must be a String"),
    (0, express_validator_1.body)("city").isString().notEmpty().withMessage("City must be a string"),
    (0, express_validator_1.body)("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,
];
exports.validateMyRestaurantRequest = [
    (0, express_validator_1.body)("restaurantName").notEmpty().withMessage("Bu alan zorunludur"),
    (0, express_validator_1.body)("city").notEmpty().withMessage("Bu alan zorunludur"),
    (0, express_validator_1.body)("country").notEmpty().withMessage("Bu alan zorunludur"),
    (0, express_validator_1.body)("deliveryPrice")
        .isFloat({ min: 0 })
        .withMessage("Teslimat fiyatı pozitif bir sayı olmalıdır"),
    (0, express_validator_1.body)("estimatedDeliveryTime")
        .isInt({ min: 0 })
        .withMessage("Varış zamanı pozitif tamsayı olmalıdır"),
    (0, express_validator_1.body)("cuisines")
        .isArray()
        .withMessage("Mutfaklar bir dizi olmalı")
        .not()
        .isEmpty()
        .withMessage("Mutfaklar dizisi boş olamaz"),
    (0, express_validator_1.body)("menuItems").isArray().withMessage("Menü bir dizi olmalı"),
    (0, express_validator_1.body)("menuItems.*.name").notEmpty().withMessage("Bu alan zorunludur"),
    (0, express_validator_1.body)("menuItems.*.price")
        .isFloat({ min: 0 })
        .withMessage("Bu alan zorunludur ve pozitif sayı olmalıdır"),
    handleValidationErrors,
];
