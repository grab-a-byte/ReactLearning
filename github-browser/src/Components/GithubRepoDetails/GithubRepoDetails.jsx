import './GithubRepoDetails.css'
import React from 'react'
import { GithubRepoService } from '../../Services/GithubRepoService'    

export class GithubRepoDetails extends React.Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        this.state = {
            userId: params.owner,
            repoId: params.repo,
            repoDetails: {}
        }
    }

    async componentDidMount(){
        const service = new GithubRepoService();
        var result = await service.getRepoDetails(this.state.userId, this.state.repoId);
        console.log(result)
        this.setState({
            repoDetails: result
        })
    }
    
    render() {
        return (
            <div className="github-repo-details">
                {JSON.stringify(this.state.repoDetails)}
            </div>
        )    
    }
}