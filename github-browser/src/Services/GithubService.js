import Axios from "axios"

export class GithubService {
    baseUrl = "https://api.github.com";

    async searchUsers(userName) {
        const url = this.baseUrl + `/search/users?q=${userName}`
        var result = await Axios.get(url);
        if (result.status !== 200) {
            return [];
        } else {
            return result.data.items
        }
    }

    async searchRepos(repoName) {
        const url = this.baseUrl + `/search/repositories?q=${repoName}`
        var result = await Axios.get(url);
        if (result.status !== 200) {
            return [];
        } else {
            return result.data.items
        }
    }

    async getUserDetails(userLogin) {
        const url = this.baseUrl + `/users/${userLogin}`
        var result = await Axios.get(url);
        if (result.status !== 200) {
            return [];
        } else {
            return result.data
        }
    }
}