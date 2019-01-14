
//browserify uses require()
var GroceryItemList = require('./components/GroceryItemList.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var groceryItemsStore = require('./stores/GroceryItemStore.jsx');

var initial = groceryItemsStore.getItems();

function render(){

ReactDOM.render(<GroceryItemList items={initial}/>, app);
}

groceryItemsStore.onChange(function(items){
initial = items;
render();
})

render();