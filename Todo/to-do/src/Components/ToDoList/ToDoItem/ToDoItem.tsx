import './ToDoItem.css';
import React from "react";
import { Component } from "react";
import { ToDoItemModel } from '../../../Models/ToDoItemModel';

export interface ToDoItemProps { 
    item : ToDoItemModel
}

class ToDoItemState { }

export class ToDoItem extends Component<ToDoItemProps, ToDoItemState> {
    render() {
        return (
            <p>{ this.props.item.description }</p>
        )
    }
}