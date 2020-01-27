import React from "react";
import './SearchResults.css';

export class GithubSearchResults extends React.Component {
    render() {
        let users = <></>;
        if (Array.isArray(this.props.users) && this.props.users.length) {
            users = this.props.users.map(item => {
                return (
                    <div key={item.login}>
                        <p>{item.login}</p>
                        <a href={`/users/${item.login}`} >
                            <img className="userImage" src={item.avatar_url} alt="" />
                        </a>
                    </div>
                )
            })
        }
        let repos = <></>;
        if (Array.isArray(this.props.repos) && this.props.repos.length) {
            repos = this.props.repos.map(item => {              
                return (
                    <div className="repo" key={item.id}>
                        <p>{item.owner.login}/{item.name}</p>
                        <a href={`/repos/${item.owner.login}/${item.name}`} >
                            <img className="userImage" src={item.owner.avatar_url} alt="" />
                        </a>
                        <img className="language-logo" src={`/images/${item.language}.png`} alt={item.language ?? "Undefined Lang"} />
                    </div>
                )
            })
        }

        return (
            <div className="search-results">
                {users}
                {repos}
            </div>
        )
    }
}