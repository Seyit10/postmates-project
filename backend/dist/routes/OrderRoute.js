"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const router = express_1.default.Router();
router.post("/checkout/create-checkout-session", auth_1.jwtCheck, auth_1.jwtParse, OrderController_1.default.createCheckoutSession);
router.post("/checkout/webhook", OrderController_1.default.stripeWebhookHandler);
exports.default = router;
