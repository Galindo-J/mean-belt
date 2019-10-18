const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, "Products must contain a Name."] },
    qty: { type: Number, required: true, minlengthL: [1, "Products must contain a Qty."] },
    price: { type: String, required: true, minlength: [1, "Products must contain a Price."] }

}, { timestamps: true });


var Product = mongoose.model('ProductSchema', ProductSchema);

