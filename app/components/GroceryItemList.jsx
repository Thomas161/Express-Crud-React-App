var React = require('react');
var createReactClass = require("create-react-class");
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports =createReactClass({

    render:function(){
        return (
<React.Fragment>
            <div>
                <h1 style={{color: 'green'}}>Grocery Listify</h1>
                {' '} {' '}
                <br/>
                <div> 
                    {
                        this.props.items.map(function(item,index){
                            return (
<GroceryItem item={item} key={"item"+index}/>
                            );
                        })
                    }
                    </div>
                    <GroceryListAddItem />
                </div>
                </React.Fragment>
        );
    }
})
