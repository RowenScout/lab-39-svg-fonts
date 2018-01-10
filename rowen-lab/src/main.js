//import assets
import './style/main.scss';

//import npm packages
import React from 'react';
import ReactDOM from 'react-dom';

//write module
//nav html being rendered
class App extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="about">About</a>
            <ul>
              <li><a href="#">JS</a></li>
              <li><a href="#">React</a></li>
              <li><a href="#">Angular</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

// export module
ReactDOM.render(<App />, document.getElementById('root'))
