import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super();

        this.buildBoard = this.buildBoard.bind(this);
        this.arrayClone = this.arrayClone.bind(this);
        this.wallClickHandler = this.wallClickHandler.bind(this);
        this.move = this.move.bind(this);

        this.state = {
            iPos: 0,
            jPos: 0,
            // prettier-ignore
            board: [
                //       1             2             3             4             5             6             7             8             9            10
                [
        /*1*/[true, true, false, true], [true, false, false, true], [true, true, false, false], [true, false, true, true], [true, true, false, false], [true, false, false, true], [true, false, true, false], [true, false, false, false], [true, false, true, false], [true, true, true, false]
                ],
                [
        /*2*/[false, false, true, true], [false, true, false, false], [false, false, true, true], [true, false, true, false], [false, false, false, false], [false, true, true, false], [true, false, true, true], [false, false, true, false], [true, true, true, false], [true, true, false, true]
                ],
                [
        /*3*/[true, false, false, true], [false, true, true, false], [true, false, false, true], [true, true, false, false], [false, false, true, true], [true, true, false, false], [true, false, false, true], [true, false, true, false], [true, false, true, false], [false, true, false, false]
                ],
                [
        /*4*/[false, true, false, true], [true, false, false, true], [false, true, true, false], [false, true, false, true], [true, false, false, true], [false, false, true, false], [false, false, true, false], [true, true, false, false], [true, false, true, true], [false, true, false, false]
                ],
                [
        /*5*/[false, false, false, true], [false, true, true, false], [true, false, false, true], [false, true, true, false], [false, false, true, true], [true, true, true, false], [true, false, false, true], [false, false, true, false], [true, true, false, false], [false, true, false, true]
                ],
                [
        /*6*/[false, true, false, true], [true, false, false, true], [false, false, true, false], [true, false, true, false], [true, true, true, false], [true, true, false, true], [false, false, true, true], [true, true, true, false], [false, true, true, true], [false, true, false, true]
                ],
                [
        /*7*/[false, true, true, true], [false, true, false, true], [true, false, true, true], [true, false, true, false], [true, false, false, false], [false, false, false, false], [true, false, true, false], [true, true, false, false], [true, true, false, true], [false, true, false, true]
                ],
                [
        /*8*/[true, false, false, true], [false, true, true, false], [true, false, false, true], [true, true, false, false], [false, true, true, true], [false, true, false, true], [true, false, false, true], [false, true, true, false], [false, true, false, true], [false, true, false, true]
                ],
                [
        /*9*/[false, true, false, true], [true, false, false, true], [false, true, true, false], [false, false, false, true], [true, false, false, false], [false, true, true, false], [false, false, true, true], [true, true, false, false], [false, false, true, true], [false, true, true, false]
                ],
                [
        /*10*/[false, false, true, true], [false, true, true, false], [true, false, true, true], [false, true, true, false], [false, false, true, true], [true, false, true, false], [true, true, true, false], [false, false, true, true], [true, false, true, false], [true, true, true, false]
                ]
            ]
        };
    }

    buildBoard(props) {
        let rowsArray = [];

        for (let i = 0; i < 10; i++) {
            console.log(i + "i");
            for (let j = 0; j < 10; j++) {
                console.log(j + "j");

                let player = "";
                let squareId = i + "_" + j;
                if (this.state.iPos === i && this.state.jPos === j) {
                    player = "player";
                }

                rowsArray.push(
                    <Square
                        player={player}
                        key={squareId}
                        squareId={squareId}
                        j={j}
                        i={i}
                        state={this.state}
                        wallClickHandler={this.wallClickHandler}
                    />
                );
            }
        }
        return <div className="grid">{rowsArray}</div>;
    }

    componentDidMount() {
        document.addEventListener("keydown", this.move);
    }

    arrayClone(array) {
        let clone = [...array];
        return clone;

        // return JSON.parse(JSON.stringify(array));
    }

    wallClickHandler(i, j, k) {
        let returnArray = this.arrayClone(this.state.board);

        switch (k) {
            case 0:
                if (i !== 0) {
                    returnArray[i - 1][j][k + 2] = !this.state.board[i - 1][j][
                        k + 2
                    ];
                    returnArray[i][j][k] = !this.state.board[i][j][k];
                }
                break;
            case 1:
                if (j !== 9) {
                    returnArray[i][j + 1][k + 2] = !this.state.board[i][j + 1][
                        k + 2
                    ];
                    returnArray[i][j][k] = !this.state.board[i][j][k];
                }
                break;
            case 2:
                if (i !== 9) {
                    returnArray[i + 1][j][k - 2] = !this.state.board[i + 1][j][
                        k - 2
                    ];
                    returnArray[i][j][k] = !this.state.board[i][j][k];
                }
                break;
            case 3:
                if (j !== 0) {
                    returnArray[i][j - 1][k - 2] = !this.state.board[i][j - 1][
                        k - 2
                    ];
                    returnArray[i][j][k] = !this.state.board[i][j][k];
                }
                break;
            default:
                break;
        }

        this.setState({
            board: returnArray
        });
    }

    move(e) {
        switch (e.keyCode) {
            case 38: //up
                if (
                    this.state.board[this.state.iPos][this.state.jPos][0] ===
                    false
                ) {
                    this.setState(previousState => {
                        return {
                            iPos: previousState.iPos - 1
                        };
                    });
                }

                break;
            case 39: //right
                if (
                    this.state.board[this.state.iPos][this.state.jPos][1] ===
                    false
                ) {
                    this.setState(previousState => {
                        return {
                            jPos: previousState.jPos + 1
                        };
                    });
                }
                break;
            case 40: //down
                if (
                    this.state.board[this.state.iPos][this.state.jPos][2] ===
                    false
                ) {
                    this.setState(previousState => {
                        return {
                            iPos: previousState.iPos + 1
                        };
                    });
                }
                break;
            case 37: //left
                if (
                    this.state.board[this.state.iPos][this.state.jPos][3] ===
                    false
                ) {
                    this.setState(previousState => {
                        return {
                            jPos: previousState.jPos - 1
                        };
                    });
                }
                break;
            default:
                break;
        }
    }

    render() {
        return <div>{this.buildBoard()}</div>;
    }
}

function Square(props) {
    let bClass = "";
    let wallClass = "";
    let buttonsArray = [
        <div class="fill1" />,
        <div class="fill2" />,
        <div class="fill3" />,
        <div class="fill4" />
    ];
    for (let k = 0; k < 4; k++) {
        switch (k) {
            case 0:
                bClass = "top";
                break;
            case 1:
                bClass = "right";
                break;
            case 2:
                bClass = "bottom";
                break;
            case 3:
                bClass = "left";
                break;
            default:
                break;
        }
        wallClass =
            props.state.board[props.i][props.j][k] === true ? "true" : "false";

        buttonsArray.push(
            <div className={bClass}>
                <button
                    className={wallClass}
                    onClick={() => props.wallClickHandler(props.i, props.j, k)}
                />
            </div>
        );
    }
    return (
        <div className="wrapper-outer">
            <div className={"wrapper-inner " + props.player}>
                {buttonsArray}
            </div>
        </div>
    );
}

export default App;
