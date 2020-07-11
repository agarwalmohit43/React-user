import React from "react";

class SearchBar extends React.Component {
    state = {userName: ''};

    onFormSubmit= event => {
        event.preventDefault();

        this.props.onSubmit(this.state.userName);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>User Search on GitHub</label>
                        <input
                            type="text"
                            value={this.state.userName}
                            onChange={e => this.setState({userName: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;