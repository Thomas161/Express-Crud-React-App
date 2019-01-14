var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper');

function GroceryItemStore(){
// 

var items = [];

helper.get("api/items").then(function(data){
    items = data;
    triggerListeners();
})
var listeners = [];

//getter method returns items array
function getItems(){
    return items;
}
//add items by pushing them onto the array, appending new elements
function addGroceryItem(item){
    items.push(item);
    triggerListeners();
    helper.post("api/items",item);
}
function deleteGroceryItem(item){
    var index;
      items.filter(function(_item, _index){
          if(_item.name == item.name){
              index = _index;
          }

    });
    items.splice(index,1);
    triggerListeners();
    helper.del('api/items'+item._id);
}

function setGroceryItemBought(item, isBought){
    var _item = items.filter(function(a){
return a.name == item.name
    })
    [0];
    item.purchased = isBought || false;
    triggerListeners();

    helper.patch('api/items/'+item._id, item);
}

//listener function that pushes a listener onto array
function onChange(listener){
    listeners.push(listener);
}
//iterator function that goes over each listener
function triggerListeners(){
    listeners.forEach(function(listener)  {
        listener(items);
    });

}
//dispatcher.register using a switch to match a case to method
dispatcher.register(function(e){

    var split = e.type.split(':');
    if(split[0] == 'grocery-item'){
        switch (split[1]) {
          case "add":
            addGroceryItem(e.payload);
            break;
          case "delete":
            deleteGroceryItem(e.payload);
            break;
          case "buy":
            setGroceryItemBought(e.payload,true);
            break;
          case "unbuy":
            setGroceryItemBought(e.payload,false);
            break;
        }
    }
});
return {
    getItems:getItems,
    onChange:onChange
}
}
module.exports = new GroceryItemStore();