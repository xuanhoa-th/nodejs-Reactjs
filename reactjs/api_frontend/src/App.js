import React, { Component } from 'react';
import Header from './Header';
import DataTable from './DataTable';
import axios from 'axios';

const getData = () =>  axios.get('https://jsonplaceholder.typicode.com/posts') .then( (res) => res.data )


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  
  componentWillMount() {
    if(this.state.data === null){
      getData().then((res) => {
        this.setState({
          data:res
        });
      })
    }
  }
  
  printData = () => {
    if(this.state.data !== null ){
      return this.state.data.map((value,key) => {
        return (
          <DataTable
          id = {value.id}
          title = {value.title}
          body = {value.body}
          />
        )
       
      })
    }
  }
  render() {

  //  console.log(this.state.data);


    return (
      <div>

        <Header/>
        <div className="container">
    <table className="table">
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
        </tr>
        </thead>
        <tbody>
       
           {this.printData()}
          
      
        </tbody>
    </table>
</div>
       
        
      </div>
    )
  }
}
