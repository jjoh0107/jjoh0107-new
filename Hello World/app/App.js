//import React from "react";
import React, {Component} from 'react';
import Content from './Content';
import update from 'react-addons-update';

class App extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            passengers: [
                'Simmon, Robert A',
                'Taylor, Kathleen R'
            ],
            ticket: {
                company: 'Delta',
                flightNo: '0990',
                defarture: {
                    airport: 'LAS',
                    time: '2016-08-21',
                },
                arrival: {
                    airport: 'LAS',
                    time: '2017-08-04'
                },
                codeshare: [
                    {company: 'GL', flightNo: '9840'},
                    {company: 'TM', flightNo: '5010'}
                ]
            }
        }
    }

    addTask(contents){

        let newState = update(this.state.ticket, {
                arrival : {
                    airport : {$set: [contents]}
                }
            }

        );

        this.setState({ticket:newState});
    }
    deleteTask(){

    }
    toggleTask(){

    }

    render() {
        let originalTicket = {
            company: 'Delta',
            flightNo: '0990',
            defarture: {
                airport: 'LAS',
                time: '2016-08-21',
            },
            arrival: {
                airport: 'MIA',
                time: '2017-08-04'
            },
            codeshare: [
                {company: 'GL', flightNo: '9840'},
                {company: 'TM', flightNo: '5010'}
            ]
        }

        var newTicket = Object.assign({}, originalTicket, {flightNo: '5690'});
        //
        //newTicket.arrival.airport = "ICH"

        return (
            <div>
                <li>{ this.state.ticket.arrival.airport}</li>
                <li> {originalTicket.arrival.airport}</li>
                <li>{ newTicket.arrival.airport}</li>
                <Content title={ this.props.contentTitle } taskCallbacks={
                {
                toggle : this.toggleTask.bind(this),
                delete : this.deleteTask.bind(this),
                add : this.addTask.bind(this)
                }
                }/>
            </div>
        );
    }
}
App.defaultProps = {
    contentTitle : 11111
};

export default App;