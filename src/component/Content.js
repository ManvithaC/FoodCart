import React from 'react';
let content=React.createClass({
    getInitialState: function() {
        return {
            order:[]

        }
    },
     selecteditem:function (item) {
      let order=this.state.order;
      console.log(this.state.order);
        order.push(this.props.details.itemname);
    this.setState({order : order});
     console.log(this.state.order);

     console.log(order[0]);

     },
         render: function () {
        return(
            <div>
                <div>
                    {this.props.details.itemname}
                    {this.props.details.cost}
                    <button onClick={this.selecteditem}>Add</button>

                </div>

            </div>

        );
    }
});

// Cart - Order
var Order = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },
  viewOrder: function() {
    this.setState({
      open: !this.state.open
    })
  },
  // open-Cart - viewOrder
  render: function() {
    return (
      <div className={"My Order " + (this.state.open ? "View-Order" : "")} onClick={this.viewOrder} >
        <p className="Menu">Cart</p>
        <div>
        {this.props.order.length > 0 ? this.props.order.map((item) => {
          return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
        </div>
      </div>
    );
  }
});

// Product - Disk
var Dish = React.createClass({
  addToCart: function() {
    this.props.addToCart(this.props.details);
  },
  render: function() {
    let item = this.props.details;
    return (
      <div className="Dish" onClick={this.addToCart}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  }
});
export default content;
