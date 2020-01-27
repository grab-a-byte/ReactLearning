import React from "react"
import { Component } from "react"
import { Square } from "../Square/Square";
import "./Board.css"

export interface BoardProps{}

class BoardState{
  constructor(numSquares: number) {
    this.squares =  Array(numSquares).fill(null)
  }
  squares: Array<string>
  xIsNext: boolean = true;
}

class Board extends Component<BoardProps, BoardState>{

  constructor(props: BoardProps){
    super(props)
    this.state = new BoardState(9);
  }

  renderSquare(i: number) {
    return <Square 
      value={this.state.squares[i]} 
      onClick = {() => this.handleClick(i)}
      />
  }
  handleClick(i: number): void {

    if(this.calculateWinner())
      return;

    let newSquares = this.state.squares.slice();
    let xIsNext = this.state.xIsNext 
    newSquares[i] = xIsNext ? 'X' : 'O'
    this.setState({
      squares : newSquares,
      xIsNext : !xIsNext
    })
  }

  calculateWinner(): string {
    let squares = this.state.squares

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return "";
  }

  render() {
    let status
    var winner = this.calculateWinner()
    if (winner === "") {
      status = this.state.xIsNext ? 'Next player: X' : 'Next Player O'
    } else { 
      status = `winner is ${winner}`
    }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}
export default Board