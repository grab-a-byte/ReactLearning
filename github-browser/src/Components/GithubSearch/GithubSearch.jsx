import React from "react";
import { SearchTerms } from "../../Constants/SearchConstants"

export class GithubSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilter : "users",
            filterValue: ""
        }
    }

    handleClick(e){
        e.preventDefault();
        this.props.handleSearch(this.state.selectedFilter, this.state.filterValue)
    }

    mapSearchConstants() {
        let enumMembers = Object.keys(SearchTerms).map(key => {
            return {
                id: key,
                value: SearchTerms[key]
            }
        });
        return enumMembers.map((item) => {
            return (
                <option key={item.id}>
                    {item.value}
                </option>
            )
        })
    }

    render() {
        let options = this.mapSearchConstants()
        return (
            <div className="github-search">
                <input 
                    type="text" placeholder="search" 
                    value={this.state.filterValue}
                    onChange={(e) => this.setState({filterValue: e.target.value})}/>
                <select
                    value={this.state.selectedFilter}
                    onChange={(e) => this.setState({selectedFilter: e.target.value})}>
                    {options}
                </select>
                <button type="submit" onClick={(e) => this.handleClick(e)}> Search</button>
            </div>
        )
    }
}