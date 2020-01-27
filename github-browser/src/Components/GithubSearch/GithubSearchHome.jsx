import React from "react"
import { GithubSearchResults } from './GithubSearchResults/SearchResults'
import { GithubSearch } from './GithubSearch';
import { GithubService } from '../../Services/GithubService';
import { SearchTerms } from "../../Constants/SearchConstants"


export class GithubSearchHome extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    async searchGithub(entityToSearch, searchTerm) {
        const githubService = new GithubService();
        if (entityToSearch === SearchTerms.USERS) {
            const users = await githubService.searchUsers(searchTerm)
            this.setState({
                foundUsers: users,
                foundRepos: []
            });
        } else if (entityToSearch === SearchTerms.REPOS) {
            const repos = await githubService.searchRepos(searchTerm)
            this.setState({
                foundUsers: [],
                foundRepos: repos
            });
        } else {
            // eslint-disable-next-line
            throw ("sakjdhsakjdhsa");
        }
    }

    render() {
        return (
            <>
                <GithubSearch handleSearch={(a, b) => this.searchGithub(a, b)} />
                <GithubSearchResults users={this.state.foundUsers} repos={this.state.foundRepos} />
            </>
        )
    }
}