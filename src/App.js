import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* 이것은 주석입니다. */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyName name="React"/> {/* MyName 컴포넌트에 name이라는 변수명으로 "React"를 props로 전달 */}
          <Counter />
          <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// 위에서 작성한 컴포넌트를 다른곳에서 불러와 사용할 수 있도록 내보내기를 해줍니다.
export default App; 
