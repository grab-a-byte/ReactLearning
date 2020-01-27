import Axios from 'axios'

export class GithubUserService{
    baseUrl = ""

    async getUserRepositories(userLogin){
        var result = await Axios.get(`https://api.github.com/users/${userLogin}/repos`);
        if (result.status !== 200){
            return []
        } else { 
            return result.data
        }
    }
}