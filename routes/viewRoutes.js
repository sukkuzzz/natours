const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

// This middleware will pickupn all the alerts and set them to res.locals, from where our pug templates will use the alerts to display on the web page using html
// Rememmber everything set in res.locals can be used by pug templates to access
router.use(viewsController.alerts);

router.get(
  "/",
  // bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.get("/tour/:slug", authController.isLoggedIn, viewsController.getTour);

// The below route is for login page
router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);

router.get("/me", authController.protect, viewsController.getAccount);
router.get("/my-tours", authController.protect, viewsController.getMyTours);

module.exports = router;
