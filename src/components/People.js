import React, { Component } from "react";
import '../App.css';

export default class People extends Component {
    render() {
        return (
            <div class="container textDiv">
                <h1 class="font-weight-bold">People & culture</h1>
                <div class="card textCard">
                    <div class="row">
                        <div class="col-1">
                        <img
                        src="https://arteysociedad.blogs.uva.es/files/2015/10/information-icon.png"
                        height="20"
                        alt=""
                        />
                        </div>
                        <div class="col">
                            Here you'll find all the important information related to our internal
                            culture. You can read about our story, learn about our values, and get
                            the full overview of the tools we use.
                        </div>
                    </div>
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