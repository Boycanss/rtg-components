import React, { Component } from 'react'
import { Desktop, Tablet, Mobile } from '../Responsive';


export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showed: true,
            btnStyle: {
                color: "white",
                fontSize: "2.7vh",
                display: "block",
                position: "relative",
                top: "1.65vh",
                left: "17px",
                transition:"0.3s"
            },
            sideStyle: {
                backgroundColor: "#333",
                transition: "width 0.4s,height 0.3s",
                zIndex: 1,
                width: 0,
                height: 0,
                position: "fixed",
                overflow: "hidden",
                boxShadow:"3px 2px 5px rgba(0,0,0,0.8)"
            },
            mobSideStyle: {
                backgroundColor: "#333",
                transition: "width 0.4s,height 0.3s",
                zIndex: 0,
                width: 0,
                height: 0,
                right: 0,
                bottom: 0,
                position: "fixed",
                overflow: "hidden",
                boxShadow:"3px 2px 5px rgba(0,0,0,0.8)"
            }
        }
        this.toggle = this.toggle.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }

    toggle() {
        this.setState({
            showed: !this.state.showed
        });
        console.log(this.state.showed);
        this.changeStyle();
    }

    changeStyle() {
        if (this.state.showed === true) {
            this.setState({
                sideStyle: {
                    ...this.state.sideStyle,
                    height: "100vh",
                    width: "300px",
                    top: 0,
                    left: 0
                },
                mobSideStyle: {
                    ...this.state.mobSideStyle,
                    height: "100vh",
                    width: "300px"
                },
                btnStyle: {
                    ...this.state.btnStyle,
                    left: "317px"
                }
            })
        } else {
            this.setState({
                sideStyle: {
                    ...this.state.sideStyle,
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                },
                mobSideStyle: {
                    ...this.state.mobSideStyle,
                    height: 0,
                    width: 0,
                    right: 0,
                    bottom: 0
                },
                btnStyle: {
                    ...this.state.btnStyle,
                    left: "17px"
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Desktop>
                    <div className="sideBar" style={this.state.sideStyle}>
                        <ul className="sideTitle" style={{ left: "75px" }}>
                            <li><h1>Title</h1></li>
                        </ul>
                    </div>
                    <div className="sideBtn" style={this.state.btnStyle}>
                        <i className="fa fa-bars" onClick={this.toggle}></i>
                    </div>
                </Desktop>

                <Tablet>
                    <div className="sideBar" style={this.state.sideStyle}>
                        <ul className="sideTitle" style={{ left: "75px" }}>
                            <li><h1>Title</h1></li>
                        </ul>
                    </div>
                    <div className="sideBtn" style={this.state.btnStyle}>
                        <i className="fa fa-bars" onClick={this.toggle}></i>
                    </div>
                </Tablet>

                <Mobile>
                    <div className="mobSideBar" style={this.state.mobSideStyle}>
                        <ul className="sideTitle" style={{ right: "22.5vw" }}>
                            <li><h1>Title</h1></li>
                        </ul>
                    </div>
                    <div className="sideBtn" style={{ ...this.state.btnStyle, top: "1.65vh", left: "-4vw" }}>
                        <i className="fa fa-bars" onClick={this.toggle}></i>
                    </div>
                </Mobile>
            </div>
        )
    }
}
