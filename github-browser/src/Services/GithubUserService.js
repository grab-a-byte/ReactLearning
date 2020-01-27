import Axios from 'axios'

export class GithubUserService{
    baseUrl = "https://api.github.com"

    async getUserRepositories(userLogin){
        var result = await Axios.get(`${this.baseUrl}/users/${userLogin}/repos`);
        if (result.status !== 200){
            return []
        } else { 
            return result.data
        }
    }
}