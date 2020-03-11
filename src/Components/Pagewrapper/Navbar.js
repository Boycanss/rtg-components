import React, { Component } from 'react'
import { Desktop, Tablet, Mobile } from '../Responsive';
import Sidebar from './Sidebar';


export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            NavStyle: {
                listStyleType: "none",
                margin: 0,
                padding: 0,
                overflow: "hidden",
                backgroundColor: "#333",
                position: "fixed",
                width: "100%",
                boxShadow: "3px 2px 5px rgba(0,0,0,0.8)"
            }
        }

    }

    render() {

        return (
            <div>
                <div className="Navb">
                    <Desktop>
                        <ul style={{ ...this.state.NavStyle, top: 0 }}>
                            <div className="leftNav">
                                <li className="sideB"><Sidebar /></li>
                                <li className="title"><a href="/">TITLE</a></li>
                            </div>
                            <div className="rightNav">
                                <li><a href="/work">MY WORK</a></li>
                                <li><a href="/">ABOUT ME</a></li>
                                <li><a href="/">CONTACT</a></li>
                            </div>
                        </ul>
                    </Desktop>
                    <Tablet>
                        <ul style={{ ...this.state.NavStyle, top: 0 }}>
                            <div className="leftNav">
                                <li className="sideB"><Sidebar /></li>
                                <li className="title"><a href="/">TITLE</a></li>
                            </div>
                            <div className="rightNav">
                                <li><a href="/work">MY WORK</a></li>
                                <li><a href="/">ABOUT ME</a></li>
                                <li><a href="/">CONTACT</a></li>
                            </div>
                        </ul>
                    </Tablet>
                    <Mobile>
                        <ul style={{ ...this.state.NavStyle, bottom: 0,zIndex:2,boxShadow: "3px -1px 5px rgba(0,0,0,0.8)" }}>
                            <div className="rightNav">
                                <li><Sidebar /></li>
                            </div>
                            <div className="leftNav">
                                <li><a href="/work">MY WORK</a></li>
                                <li><a href="/">ABOUT ME</a></li>
                                <li><a href="/">CONTACT</a></li>
                            </div>
                        </ul>
                    </Mobile>
                </div>
            </div>
        )
    }
}
