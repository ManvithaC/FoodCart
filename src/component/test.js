// import React, { Component } from 'react';
// //import logo from './logo.svg';
// import '../App.css';
// //import menu from './component/menu'
// import Content from './Content'
// class App extends Component {
//     constructor(){
//         super();
//         this.state={
//             order:[],
//             menu: [
//                 {
//                     id: 1,
//                     name: 'Pasta Carbanara',
//                     price: 1,
//                     currency: '$',
//                 },
//                 {
//                     id: 2,
//                     name: 'Margherita Pizza',
//                     price: 27,
//                     currency: '$',
//
//                 },
//                 {
//                     id: 3,
//                     name: 'Mushroom Risotto',
//                     price: 16,
//                     currency: '$',
//
//                 },
//                 {
//                     id: 4,
//                     name: 'panzenella',
//                     price: 10,
//                     currency: '$',
//
//                 },
//                 {
//                     id: 5,
//                     name: 'Bruschetta',
//                     price: 10,
//                     currency: '$',
//
//                 },
//                 {
//                     id: 6,
//                     name: 'Tiramisu',
//                     price: 6,
//                     currency: '$',
//
//                 }
//             ]
//
//         };
//
//     };
//
//
//
//     render() {
//
//
//         return (
//             <div>
//                 <div>
//                     <h2>MENU</h2>
//                     {this.state.menu.map((dynamicComponent, i) => <Content
//                         key = {i} componentData = {dynamicComponent}/>)}
//                 </div>
//                 <h2>Order</h2>
//             </div>
//         );
//     }
// }
//
// //
// // class Order extends React.Component{
// //     constructor()
// //     {
// //         super();
// //     }
// //
// //     render(){
// //         return(
// //           <div><hr/><h2> ORDER </h2></div>
// //         );
// //     }
// //
// // }
//
//
// export default App;
