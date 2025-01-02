// Making a frontend to backend request using axios to book the tours on clicking the book tours
/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const Stripe = require("stripe");
const stripe = Stripe(
  "pk_test_51QcRhgDA6DpmoLWDcfJXHSoZk8rBvL4cfR8xiyKaeK89o7PSnApNObgoAn6Iyp0Swj8WdEmxpxmB8RsaHQOcexaj00ED1r1qg8"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    // This code will create a backend request to create a checkout session
    const session = await axios({
      method: "GET",
      // Frontend and backend are running ont the same origin, so the url is relative starting from /api/
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });

    // // 2) Create checkout form + charge credit card
    // // Now this code will redirect to the checkout page
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
  } catch (err) {
    showAlert("error", err);
  }
};
