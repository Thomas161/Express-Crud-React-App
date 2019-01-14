var mongoose = require('mongoose');

var GroceryItemSchema = {
    name: String,
    purchased: Boolean,
    id: String
};

//register the schema
var GroceryItem =mongoose.model('GroceryItem', GroceryItemSchema, "groceryItems");

module.exports = GroceryItem;