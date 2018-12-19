### props와 state

리엑트 컴포넌트에서 다루는 데이터는 props와 state 두개로 나뉩니다. <br>

- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다. <br> 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 직접 수정할 수 없습니다.
- state : 컴포넌트 내부에서 선언하여 사용하는 값이며, 내부에서 값을 변경할 수 있습니다.

<br>

아래는 <b>props</b>의 예시입니다.

```
import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다. {/* 안녕하세요. 제 이름은 John Doe 입니다. */}
                {/* 자신이 받아온 props값은 this. 키워드를 통하여 조회할 수 있습니다. */}
            </div>
        );
    }
}

export default MyName;
```

```
import React, { Component } from 'react';
import MyName from './MyName'; // 위에서 만든 MyName 컴포넌트를 import 합니다.

class App extends Component {
    render() {
        return (
            <MyName name="John Doe" />  {/* MyName 컴포넌트에 name이라는 변수명으로 "John Doe"라는 문자열을 props 형태로 전달합니다. */}
        );
    }
}

export default App;
```

위와 같이 부모 컴포넌트에서 자식 컴포넌트에게 props 형태로 데이터를 전달해 줄 수 있습니다. <br>


<br>

<b>함수형</b>으로 작성한 컴포넌트에도 동일하게 props 형태로 데이터를 전달해 줄 수 있습니다. <br>
다만 조금 다른 부분은 컴포넌트 함수의 <b>매개변수</b>로 props 객체를 던져주고, 그 안에서 props 데이터를 찾는 부분입니다. <br>

```
function MyName(props) {
    return <div>안녕하세요. 제 이름은 <b>{props.name}</b> 입니다.</div>; // 안녕하세요. 제 이름은 John Doe 입니다.
}
```

```
...

// MyName 컴포넌트에 name이라는 변수명의 데이터를 props형태로 전달해줍니다.
ReactDOM.render(<MyName name="John Doe"/>, document.getElementById('root')); 
```

<br>

위처럼 부모컴포넌트에게서 자식컴포넌트가 데이터를 props를 통해 전달받을 수도 있지만, <br>
전달받지 못할 경우를 대비하여 기본값 설정이 필요한 경우 defaultProps를 사용하여 props 기본값을 설정할 수 있습니다. <br>

<br>

아래는 defaultProps 설정의 예시입니다. <br>

```
import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본 이름'
    }
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다. {/* 안녕하세요. 제 이름은 기본 이름 입니다. */}
            </div>
        );
    }
}

export default MyName;
```

아래와 같은 방식으로도 설정할 수 있습니다.

```
import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다. {/* 안녕하세요. 제 이름은 기본 이름 입니다. */}
            </div>
        );
    }
}

MyName.defaultProps = {
    name: 기본 이름
};

export default MyName;
```

```
import React, { Component } from 'react';
import MyName from './MyName'; // 위에서 만든 MyName 컴포넌트를 import 합니다.

class App extends Component {
    render() {
        return (
            <MyName />  {/* MyName 컴포넌트에 props 데이터를 전송하지 않았습니다. */}
        );
    }
}

export default App;
```

<br><br>

아래는 <b>state</b>의 예시입니다. <br>

```
import React, { Component } from 'react';

class Counter extends Component {
    // state 변수 선언
    state = { 
        number: 0
    }

    // this.setState 함수를 사용하여 state 변수 +1 하는 메서드 선언
    // setState 메서드는 위에서 선언한 것 처럼 state라는 이름으로 선언된 객체의 변수만 접근하여 수정할 수 있습니다.
    // React.js에서는 setState 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계되어 있습니다.
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
        /*
        위의 setState 함수를 아래와 같이 작성할 수도 있습니다.

        this.setState(
            (state) => ({
                number: state.number + 1
            })
        );

        혹은 아래처럼 '비구조화 할당' 문법으로 작성할 수도 있습니다.

        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );

        혹은 

        const { number } = this.state;
        this.setState({
            numnber: number + 1
        });
        */
    }

    // this.setState 함수를 사용하여 state 변수 -1 하는 메서드 선언
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div> {/* this.state 를 이용하여 state 값을 조회할 수 있습니다.  */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
```