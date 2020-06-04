import React, { Component } from "react";
import '../App.css';

export default class People extends Component {
    render() {
        return (
            <div class="container textDiv">
                <h1 class="font-weight-bold">People & culture</h1>
                <div class="card textCard">
                    Here you'll find all the important information related to our internal
                    culture. You can read about our story, learn about our values, and get
                    the full overview of the tools we use.
                </div>
                <ul>
                    <li>Our Culture</li>
                    <li>Values</li>
                    <li>Tips & tricks</li>
                </ul>
            </div>
        )
    }
}