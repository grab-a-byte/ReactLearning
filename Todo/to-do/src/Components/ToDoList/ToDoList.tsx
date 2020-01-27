import React from "react"
import { Component } from "react"
import { ToDoItem } from "./ToDoItem/ToDoItem"
import { ToDoItemModel } from "../../Models/ToDoItemModel"

export interface ToDoListProps {
    items: Array<ToDoItemModel>
    removeItem: (index: number) => void
}

class ToDoListState {
}

export class ToDoList extends Component<ToDoListProps, ToDoListState>{
    constructor(props: ToDoListProps) {
        super(props)
        this.state = new ToDoListState();
    }

    render() {
        return (
            <div id="to-do-list">
                {this.props.items.map((item, index) => {
                    return (
                        <>
                            <ToDoItem key={index} item={item} />
                            <button value="Remove item"
                                onClick={() => this.props.removeItem(index)}></button>
                        </>
                    )
                })}
            </div>
        )
    }

}