import React from "react";
import faker from 'faker'

const UserCard = props => {
    const {avatar_url, name, bio, url, login, followers, public_repos} = props.userInfo;
    const userImage = avatar_url || faker.image.avatar();
    return (
        <div className="ui link cards" style={{padding: '20px'}}>
            <div className="card">
                <div className="image">
                    <img class="ui medium circular image" src={userImage}/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href={url} target='_blank'>{login}</a>
                    </div>
                    <div className="description">
                        {bio}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                         Public Repos: {public_repos}
                    </span>
                    <span>
                    <i className="user icon"></i>
                        {followers}
                    </span>
                </div>
            </div>
        </div>


    );
}

export default UserCard