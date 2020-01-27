import { GithubService } from "../../Services/GithubService"
import React from "react"
import { GithubUserService } from "../../Services/GithubUserService";
import "./GithubUserDetails.css"

export class GithubUserDetails extends React.Component {
    constructor(props) {
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            login: params.login,
            user: {},
            userRepos: []
        }
    }

    componentDidMount() {
        this.getUserDetails();
    }

    async getUserDetails() {
        const service = new GithubService();
        const userService = new GithubUserService();
        const result = await service.getUserDetails(this.state.login);
        const userResult = await userService.getUserRepositories(this.state.login);

        this.setState({
            user: result,
            userRepos: userResult
        })
    }

    render() {
        let tableRows = this.state.userRepos.map((item) => {
            return (
                <tr key={item.id}>
                    <td> {item.name} </td>
                    <td> {item.created_at}</td>
                    <td> {item.updated_at}</td>
                    <td> {item.open_issues_count}</td>
                </tr>
            )
        })

        let userJoinDate = new Date(this.state.user.created_at);
        const monthStrings = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let joinDateDisplay = `
        ${userJoinDate.getDate()}
        -${monthStrings[userJoinDate.getMonth()]}
        -${userJoinDate.getFullYear()}`.trim();

        return (
            <div className="github-user-details">
                <div className="left-column">
                    <img src={this.state.user.avatar_url} alt="no-avatar" className='user-avatar' />
                    <h3>Joined Github:- {joinDateDisplay}</h3>
                </div>
                <div className='right-column'>                    
                    <h2> GithubName:- {this.state.user.login}</h2>
                    { this.state.user.name ? <h2> Name:- {this.state.user.name}</h2> : ""}
                    <table>
                        <thead>
                            <tr>
                                <th> Repo Name </th>
                                <th> Created At </th>
                                <th> Updated At </th>
                                <th> Open Issue Count </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}