import React, { ChangeEvent } from "react"
import { Component } from "react"

export interface ToDoAddProps {
    add: (desription: string) => void
}

class ToDoAddState {
    constructor() {
        this.inputValue = "";
    }
    inputValue: string
}

export class ToDoAdd extends Component<ToDoAddProps, ToDoAddState> {

    constructor(props: ToDoAddProps) {
        super(props)
        this.state = new ToDoAddState();
    }

    handleInputUpdate(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        this.props.add(this.state.inputValue)
        this.setState({
            inputValue: ""
        });
    }

    render() {
        return (
            <div className="to-do-add">
                <input placeholder="Type description here to add" value={this.state.inputValue} onChange={(evt) => this.handleInputUpdate(evt)} />
                <button value="Add" onClick={(evt) => this.handleSubmit(evt)} />
            </div>
        )
    }
}