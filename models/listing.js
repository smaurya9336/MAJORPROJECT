const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1714235991874-91e98f0d3e80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1714235991874-91e98f0d3e80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
