import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messagelisting from "./messagelisting";
import createmessage from "./createmessage";

class chatdashboard extends Component {
    createmessage = (message) => {
        let message_item = {
            'username': this.props.user.username,
            'text': message
        };
        this.props.updateMessages(message_item);
    };

    render() {
        const { messages, user } = this.props;

        return (
            <div className="chat-window">
                <h2>React Chat APP</h2>
                <div className="name sender">{user.username}</div>
                <messagelisting messages={messages} user={user} />
                <createmessage messages={messages} createmessage={this.createmessage} />
            </div>
        );
    }
}

chatdashboard.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    updateMessages: PropTypes.func.isRequired,
};

export default chatdashboard;
