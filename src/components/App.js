import React from "react";
import SearchBar from './SearchBar';
import UserCard from "./UserCard";
import fetch from 'node-fetch';

class App extends React.Component {
    state= {userInfo: null}

    onSearchSubmit = async userName => {
       const response = await fetch(`https://api.github.com/users/${userName}`).then(response => response.json())
        console.log(response);
        this.setState({userInfo: response});
    }

    renderContent() {
        if(this.state.userInfo){
            return <UserCard userInfo={this.state.userInfo}/>;
        } else {
            return <div><br/></div>
        }
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.renderContent()}
            </div>
        );
    }
}

export default App