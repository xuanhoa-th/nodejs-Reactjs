import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
        <div className="jumbotron text-center">
                <h1 className="display-3">Danh sach</h1>
                <p className="lead">su dung react js</p>
                <hr className="my-2" />
                <p>More info</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
        </div>

        )
    }
}
