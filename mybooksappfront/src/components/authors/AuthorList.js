import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

import AddAuthor from './AddAuthor';

class AuthorList  extends Component {
  
  state= {
    list: []
  }

  getAuthors = () => {
    axios.get('http://localhost:3000/api/authors')
      .then(response => {
        
        this.setState({list: response.data})
      })
      .catch(e => console.log(e))
  }

  componentDidMount(){
    this.getAuthors()
  }

  render(){
    return(
      <div>
        <div style={{width: "50%", float: "left" }}>
          {this.state.list.map((author, index) =>{
            return(
              <div key={author._id}>
                <Link to={`/api/authors/${author._id}`}>
                <h3>{author.name}</h3>
                </Link>
                <h4>{author.nationallity}</h4>
              </div>
            )

          })}
        </div>
        <div style={{width: "50%", float: "right"}}><AddAuthor 
        getData={()=> this.getAuthors}/></div>
      </div>
    )
  }
}

export default AuthorList;