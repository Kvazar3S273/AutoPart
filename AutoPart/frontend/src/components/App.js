import React, {Component} from 'react';
import ArticleList from "./ArticleList";
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    reverted: false
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="display-3">
            Hello, Mars!
            <button className="btn" onClick = {this.revert}> Revert </button>
          </h1>
          <h2>Houston, we have a problem</h2>
        </div>
        <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
      </div>
    )
  }
  revert = () => this.setState({
    reverted: !this.state.reverted
  })
}
  export default App