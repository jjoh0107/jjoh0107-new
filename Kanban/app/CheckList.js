/**
 * Created by jihye on 2017-07-26.
 */
import React, { Component } from 'react';

class CheckList extends Component {
    render()    {
        let tasks = this.props.tasks.map((task) =>(
            <li className="checklist__task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default CheckList;   //다른 모듈에서도 사용할 수 있도록 export해줌