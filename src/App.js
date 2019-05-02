import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            // prettier-ignore
            board: [
                //       1             2             3             4             5             6             7             8             9            10
                [
        /*1*/[1, 1, 0, 1], [1, 0, 0, 1], [1, 1, 0, 0], [1, 0, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1], [1, 0, 1, 0], [1, 0, 0, 0], [1, 0, 1, 0], [1, 1, 1, 0]
                ],
                [
        /*2*/[0, 0, 1, 1], [0, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 0], [0, 0, 0, 0], [0, 1, 1, 0], [1, 0, 1, 1], [0, 0, 1, 0], [1, 1, 1, 0], [1, 1, 0, 1]
                ],
                [
        /*3*/[1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 1, 0, 0]
                ],
                [
        /*4*/[0, 1, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 0, 1], [1, 0, 0, 1], [0, 0, 1, 0], [0, 0, 1, 0], [1, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 0]
                ],
                [
        /*5*/[0, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, 1], [0, 1, 1, 0], [0, 0, 1, 1], [1, 1, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0], [1, 1, 0, 0], [0, 1, 0, 1]
                ],
                [
        /*6*/[0, 1, 0, 1], [1, 0, 0, 1], [0, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0], [1, 1, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0], [0, 1, 1, 1], [0, 1, 0, 1]
                ],
                [
        /*7*/[0, 1, 1, 1], [0, 1, 0, 1], [1, 0, 1, 1], [1, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0], [1, 1, 0, 0], [1, 1, 0, 1], [0, 1, 0, 1]
                ],
                [
        /*8*/[1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1], [0, 1, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 0, 1], [0, 1, 0, 1]
                ],
                [
        /*9*/[0, 1, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1], [0, 1, 1, 0]
                ],
                [
        /*10*/[0, 0, 1, 1], [0, 1, 1, 0], [1, 0, 1, 1], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 1, 0], [0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 1, 0]
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

                let squareId = i + "_" + j;
                let bClass = "";
                let buttonsArray = [];
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

                    buttonsArray.push(<button className={bClass} />);

                    let player =
                        this.state.xPos === j
                            ? this.state.yPos === i
                                ? "player"
                                : "non-player"
                            : "non-player";

                    rowsArray.push(
                        <Square
                            squareClass={"box " + player}
                            key={squareId}
                            squareId={squareId}
                            x={j}
                            y={i}
                            state={this.state}
                        >
                            {buttonsArray}
                        </Square>
                    );
                }
            }
            return <div className="grid">{rowsArray}</div>;
        }
    }

    render() {
        return (
            <div>
                <Square />
            </div>
        );
    }
}

function Square(props) {
    return (
        <div className="wrapper">
            <div className="top" />
            <div className="right" />
            <div className="bottom" />
            <div className="left" />
        </div>
    );
}

export default App;
