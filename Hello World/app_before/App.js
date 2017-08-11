////import React from "react";
//import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import update from 'react-addons-update';
//import Content from './Content';
//import './../public/style.css';
//
//class App extends Component {
//    constructor() {
//        super(...arguments)
//        this.state = {
//            id : 1,
//            passengers: [
//                'Simmon, Robert A',
//                'Taylor, Kathleen R'
//            ],
//            ticket: {
//                company: 'Delta',
//                flightNo: '0990',
//                defarture: {
//                    airport: 'LAS',
//                    time: '2016-08-21',
//                },
//                arrival: {
//                    airport: 'LAS',
//                    time: '2017-08-04'
//                },
//                codeshare: [
//                    {company: 'GL', flightNo: '9840'},
//                    {company: 'TM', flightNo: '5010'}
//                ]
//            }
//        }
//    }
//
//    addTask(contents){
//
//        //let newState = update(this.state.ticket, {
//        //        arrival : {
//        //            airport : {$set: contents}
//        //        }
//        //    }
//        //
//        //);
//        //
//        //this.setState({ticket:newState});
//        console.log('contents : '+contents);
//        console.log('id : '+this.state.id);
//        this.setState({
//            id : contents
//        }
//        );
//
//        console.log('id2 : '+this.state.id);
//    }
//    deleteTask(){
//
//    }
//    toggleTask(){
//
//    }
//
//    render() {
//        let originalTicket = {
//            company: 'Delta',
//            flightNo: '0990',
//            defarture: {
//                airport: 'LAS',
//                time: '2016-08-21',
//            },
//            arrival: {
//                airport: 'MIA',
//                time: '2017-08-04'
//            },
//            codeshare: [
//                {company: 'GL', flightNo: '9840'},
//                {company: 'TM', flightNo: '5010'}
//            ]
//        }
//
//        var newTicket = Object.assign({}, originalTicket, {flightNo: '5690'});
//        //
//        //newTicket.arrival.airport = "ICH"
//        console.log("rendered: " + this.props.name);
//        return (
//            <div>
//                <li>{ this.state.ticket.arrival.airport}</li>
//                <li> {originalTicket.arrival.airport}</li>
//                <li>{ newTicket.arrival.airport}</li>
//                <Content title={ this.props.contentTitle } taskCallbacks={
//                {
//                toggle : this.toggleTask.bind(this),
//                delete : this.deleteTask.bind(this),
//                add : this.addTask.bind(this)
//                }
//                }/>
//
//                <a href="#" className="button"> hover </a>
//            </div>
//        );
//    }
//}
//App.defaultProps = {
//    contentTitle : 'Ticket - arrival airport change!'
//};
//
//ReactDOM.render( <App />, document.getElementById('app'));
////             ( 렌더링 할 JSX형태의 코드 , 렌더링 할 HTML 요소)

import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShoppingList extends Component {
    constructor(){
        super(...arguments);

        // Create an "items" state pre-populated with some shopping items
        this.state={
            items: [
                {id:1, name: 'Milk'},
                {id:2, name: 'Yogurt'},
                {id:3, name: 'Orange Juice'},
            ]
        }
    }

    // Called when the user changes the input field
    handleChange(evt) {
        if(evt.key === 'Enter'){
            console.log("rendered: " + this.state.items.name);

            // Create a new item and set the current time as it's id
            let newItem = {id:Date.now(), name:evt.target.value}
            // Create a new array with the previous items plus the value the user typed
            let newItems = this.state.items.concat(newItem);
            // Clear the text field
            evt.target.value='';
            // Set the new state
            this.setState({items: newItems});
        }

    }

    // Called when the user Clicks on a shopping item
    handleRemove(i) {
        // Create a new array without the clicked item
        var newItems = this.state.items;
        newItems.splice(i, 1);
        console.log("rendered: " + this.state.items.name);

        // Set the new state
        this.setState({items: newItems});
    }

    render(){
        let shoppingItems = this.state.items.map((item, i) => (
            <div key={item.id} className="item" onClick={this.handleRemove.bind(this, i)}>{item.name}</div>
        ));

        return(
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}
                                         transitionAppear={true}
                                         transitionAppearTimeout={300}>
                    {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
            </div>
        );
    }
};

render(<AnimatedShoppingList />, document.getElementById('app'));
