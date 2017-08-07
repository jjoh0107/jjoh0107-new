/**
 * Created by jihye on 2017-08-07.
 */
import React, { Component, PropTypes } from 'react';

class Content extends Component {
    changeContent(event){
        this.props.taskCallbacks.add.bind('LV');
    }

    render() {
        return(
            <div>
                <h2>{ this.props.title }</h2>
               <input type="checkbox" onChange={
                this.changeContent.bind(this)}/>
            </div>
        );
    }
}

Content.propTypes = {
    title : PropTypes.string.isRequired
};
export default Content;