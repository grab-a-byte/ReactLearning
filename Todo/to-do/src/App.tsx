import React, { Component } from 'react';
import './App.css';
import { ToDoList } from './Components/ToDoList/ToDoList';
import { ToDoItemModel } from './Models/ToDoItemModel';
import { ToDoAdd } from './Components/ToDoAdd/ToDoAdd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from "axios"
import { Help } from "./Components/Help/Help"
import { GithubUser } from "./Interfaces/Github/GithubUser"

export interface AppProps { }
class AppState {
  constructor() {
    this.todoItems = Array<ToDoItemModel>(0)
  }
  todoItems: Array<ToDoItemModel>
  githubUser: GithubUser | undefined
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = new AppState();
  }

  addToDoItem(description: string) {
    const itemToAdd = new ToDoItemModel(description);
    const currentItems = this.state.todoItems.slice();
    this.setState({
      todoItems: currentItems.concat(itemToAdd)
    })
  }

  removeToDoItem(index: number) {
    const currentItems = this.state.todoItems.slice();
    currentItems.splice(index, 1)
    this.setState({
      todoItems: currentItems
    })
  }

  async getGithubStats() {
    const response = await Axios.get<GithubUser>("https://api.github.com/users/parkeradam");
    const responseData = response.data

    this.setState({
      githubUser: responseData
    })
  }

  componentDidMount() {
    this.getGithubStats();
  }

  render() {

    let githubUser;
    if (this.state.githubUser) {
      const username = this.state.githubUser.login;

      githubUser = <>
        <p>UserName: {username}</p>
        <a href={`https://github.com/${username}`} >Github Page</a>
      </>
    } else {
      githubUser = <p>No user found</p>
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/Github">
            {githubUser}
          </Route>
          <Route path="/">
            <div className="App">
              <header>
                <h1>To-Do</h1>
              </header>
              <ToDoList
                items={this.state.todoItems}
                removeItem={(index) => this.removeToDoItem(index)}
              />
              <ToDoAdd add={(x) => this.addToDoItem(x)} />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
