import React, { Component } from 'react'

export default class DataTable extends Component {
    render() {
        return (

<tr>
    
            <td >{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.body}</td>
     </tr>   


        )
    }
}
