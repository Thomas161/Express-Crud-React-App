var React = require("react");
var createReactClass = require("create-react-class");
var action = require("./../actions/GroceryItemActionCreator.jsx");
module.exports = createReactClass({

    delete(e){
        e.preventDefault();
        action.delete(this.props.item);
    },
    togglePurchased(e){
e.preventDefault();
if(this.props.item.purchased){
    action.unbuy(this.props.item);
}else {
    action.buy(this.props.item);
}
    },
    render: function(){

        return <div className="grocery-item row">
            <div className="six-columns">
              <h4
                className={
                  this.props.item.purchased ? "strikethrough" : "red"
                }
              >
                {this.props.item.name}{" "}
              </h4>
            </div>
            {'          '}
            <form onSubmit={this.togglePurchased} >
              {/* Makes an x */}
               <button 
                className={
                  this.props.item.purchased ? " " : " button-primary"
                }
              >{'        '}
                {this.props.item.purchased ? " Unbuy" : "Buy"}
                {'          '}
              </button>
            </form>

            <form onSubmit={this.delete} style= {{padding: '12px 20px',
  margin: '8px 0'}}>
              {/* Makes an x */}
              <button>&times;</button>
            </form>
          </div>;
    }
})
