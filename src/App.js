import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import chatdashboard from "./chatdashboard";


class App extends Component {
    state = {
        messages: [
            {username: 'reet', text: 'Hi, ujjwal!'},
            {username: 'reet', text: 'How are you?'},
            {username: 'ujjwal', text: 'Hi, reet! Good, you?'},
        ],
        users: [{username: 'reet'}, {username: 'ujjwal'}]
    };

    updatemessagelisting = (message) => {
        let update_messages_list = this.state.messages
        update_messages_list.push(message)

        this.setState({
            messages: update_messages_list,
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Messenger</h1>
                </header>
                <div className="container">
                    {
                        this.state.users.map(user => (
                            <chatdashboard
                                key={user.username}
                                user={user}
                                updateMessages={this.updatemessagelisting}
                                messages={this.state.messages}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;

