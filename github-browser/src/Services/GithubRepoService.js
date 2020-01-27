import Axios from "axios"

export class GithubRepoService {

    baseUrl = "https://api.github.com"

    async getRepoDetails(owner, repoName) {
        var result = await Axios.get(`${this.baseUrl}/repos/${owner}/${repoName}`)
        if (result.status !== 200) {
            return {}
        } else { 
            return result.data
        }
    }
}