import React, { Component } from "react";

export interface GithubProps{

}

class GithubState{
    constructor(){

    }
}

export class Github extends Component<GithubProps, GithubState> {
    constructor(props: GithubProps){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="github-section">
            </div>
        )
    }
}