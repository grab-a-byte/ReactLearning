import React from "react"
import { Component } from "react"
import "./Square.css"

export interface SquareProps {
    value: string
    onClick: () => void
}

class SquareState {
}

class Square extends Component<SquareProps, SquareState> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export { Square }
