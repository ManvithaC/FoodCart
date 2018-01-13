import React from 'react';
//import content from '../../../bucky/src/content';
import Content from './Content';

var App=React.createClass({

    getItems: function() {

        return [
            { id:1,itemname:"Chicken Biryani",cost:13},
            {
                id:2,
                itemname:"Chettinad Biryani",
                cost:17
            },
            {
                id:3,
                itemname:"Masala Dosa",
                cost:13
            },
            {
                id:4,
                itemname:"Mineral Water Bottle",
                cost:5
            },
            {
                id:5,
                itemname:"Chai",
                cost:7
            },
            {
                id:6,
                itemname:"Boondhi Laddu",
                cost:6
            }
            ];
    },

    getInitialState: function() {
        return {

            menu: this.getItems(),
            order:[]
        }
    },
    addToCart: function(item) {
      var found = false;
      var updatedOrder = this.state.order.map((orderItem) => {
        if (orderItem.name == item.itemname) {
          found = true;
          orderItem.quantity++;

          return orderItem;
        } else {
          return orderItem;
        }
      });
      if (!found) { updatedOrder.push({id: item.id, name: item.itemname, cost: item.cost, quantity: 1}) }

   this.setState({
     order: updatedOrder
   });
 },
    render: function()
    {
        return(



            <div className="container-fluid">
                      <div className="row justify-content-md-center">
                              <div className="col-md-6">
                                <h1 className="text-center">Order My Food</h1>
                              </div>
                      </div>
                      <hr/>


                              <div className="row justify-content-md-center">
                                                     <div className="card col-md-5">
                                                     <h2 className="text-center">MENU</h2>
                                                     <div className="card-body">
                                                      <div className="Dishes">
                                                          {this.state.menu.map((item) => {
                                                              return (
                                                                <Dish key={item.name} details={item} addToCart={this.addToCart}/>

                                                              );
                                                          })}
                                                          </div>
                                                      </div>
                                                      </div>
                                            <div className="col-md-5">
                                            <div className="card">
                                            <Order order={this.state.order} />
                                            </div>
                                            </div>



                          </div>
      </div>

        );
    }
});



var Order = React.createClass({
  getInitialState: function() {
    return {
      open: false,
        order:[]
    }
  },
  viewOrder: function() {
    this.setState({
      open: !this.state.open
    })
  },

  removeItem: function(item) {
    var array=this.props.order;
    //alert(array);
    var index = array.indexOf(item.name);
    //alert(index);
    array.splice(index,1);
    this.setState({order: array});
  },



subTotal: function() {
    var items = this.props.order;
    var subTotal = 0;
    for (var x = 0; x < items.length; x ++) {
      subTotal += items[x].cost * items[x].quantity;
    }
    return subTotal;
  },

  render: function() {
    return (

<div className="row justify-content-md-center">

      <div>
        <h2 className="text-center">ORDER</h2>

        <div>
        {this.props.order.length > 0 ? this.props.order.map((item) => {
          return <div> <div className="pb-2"><div className="card col-md-12">
          <div className="card-body"><div className="row justify-content-md-center">
          <div className="col-md-4">{item.name}</div><div className="col-md-3">${item.cost}.00</div>
          <div className="col-md-2">{item.quantity >= 1 ? <p>Qty:{item.quantity}</p> : ''}</div>
          <div className="col-md-4"><button className="btn btn-danger btn-xs" onClick={this.removeItem}>Remove</button>
          </div></div></div></div></div></div> }) : <p>Empty</p>}
          <hr/><h3>Total : ${this.subTotal()}.00</h3>
        </div>



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



<div className="Dish" >

    <div className="pb-2">
    <div className="card col-md-12">
          <div className="card-body">
              <div className="row justify-content-md-center">



                                  <div className="col-md-4">
                                  {item.itemname}
                                        </div>
                                    <div className="col-md-3">
                                  ${item.cost}
                                  </div>

                                  <button className="btn btn-primary btn-sm-3" onClick={this.addToCart}>Add</button>


                    </div>
            </div>
        </div>
      </div>
      </div>


    );
  }
});

export default App;
//ReactDOM.render(<App />, document.getElementById('app'));
