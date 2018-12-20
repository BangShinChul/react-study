### Component

컴포넌트는 재사용이 가능한 DOM의 모듈이 되는 부분입니다. <br>

<br>

컴포넌트를 만드는 방법은 두가지가 있습니다. <br>

- 클래스를 통해서 만드는 방법
- 함수를 통하여 만드는 방법

<br>

<b>클래스를 통해서 컴포넌트를 만드는 방법</b>은 아래와 같습니다. <br>

```
// Welcome.js

import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <p>Hello React!</p>
            </div>
        );
    }
}

export default Welcome; // 해당 컴포넌트를 다른곳에서 불러와 사용할 수 있도록 내보내줍니다.
```

class형태로 만들어진 컴포넌트에는 꼭 render함수가 존재해야 합니다. <br>
그리고 그 내부에서는 JSX를 return 해주어야 합니다. <br>

<br>

이렇게 만든 컴포넌트를 사용하려면 <code>ReactDOM.render</code> 함수를 사용하거나, <br>
부모 컴포넌트에서 import 하여 사용합니다. <br>
<code>ReactDOM.render</code> 함수의 구조는 아래와 같습니다. <br>

```
// index.js

import Welcome from './Welcome'; // 위 예시에서 만든 컴포넌트를 import 합니다.

...

ReactDOM.render(<Welcome />, document.getElementById('root'));
// ReactDOM.render 함수의 첫번째 파라미터에는 렌더링할 컴포넌트를 넣어주고,
// 두번째 파라미터에는 컴포넌트를 어떤 DOM에 그려줄 지 정해줍니다.
```

<br><br>

두번째로 <b>함수를 통해서 컴포넌트를 만드는 방법</b>은 아래와 같습니다. <br>

```
function Welcome() {
    return <div><p>Hello React!</p></div>;
}
```

혹은 이렇게도 만들 수 있습니다.

```
import React from 'react';

const Welcome = () => {
    return (
        <div>
            <p>
                Hello React!
            </p>
        </div>
    );
};

export default Welcome;

```

class형태로 만들었던 컴포넌트와 동일하게 함수로 만든 컴포넌트에서도 JSX를 리턴해주어야 합니다. <br>
그리고 마찬가지로 이렇게 만든 컴포넌트의 사용법 또한 class형 컴포넌트와 동일합니다.

```
// index.js

ReactDOM.render(<Welcome />, document.getElementById('root'));
// ReactDOM.render 함수의 첫번째 파라미터에는 렌더링할 컴포넌트를 넣어주고,
// 두번째 파라미터에는 컴포넌트를 어떤 DOM에 그려줄 지 정해줍니다.
```

<br><br>

함수형 컴포넌트와 class형 컴포넌트의 주요 차이점은 함수형 컴포넌트에는 state와 LifeCycle이 빠져있다는 점입니다. <br>
그래서 함수형 컴포넌트 초기 마운트가 아주 미세하게 빠르고 메모리 자원을 덜 사용합니다. <br>
하지만 아주 미세한 차이이니, 컴포넌트를 무수히 많이 렌더링 해야하는 환경이 아니라면 성능적으로 큰 차이는 없습니다. <br>

<br><br>

### Component's LifeCycle

![react-js-life-cycle](https://user-images.githubusercontent.com/26675063/50258850-e7843800-0444-11e9-83ba-a7d973606120.jpeg)

<br>

컴포넌트가 브라우저에 나타나기 전, 후에 호출되는 API들이 있습니다.

<br>

```
constructor(props) {
    super(props);
}
```
- constructor
    - 컴포넌트 생성자 함수입니다. 컴포넌트가 새로 만들어질 때마다 함수가 호출됩니다.

<br>

```
componentWillMount() {
    
}
```
- componentWillMount
    - 컴포넌트가 화면에 나가기 직전에 호출되는 API입니다. 현재는 별로 사용되지 않습니다.
    - <b>React.js v16.3 이후 해당 API가 deprecated 되었습니다.</b>

<br>

```
componentDidMount() {
    // 외부 라이브러리 연동 : D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청 : Ajax, Axios, fetch, GraphQL, etc
    // DOM에 관련된 작업 : 스크롤 설정, 크기 읽어오기 등
}
```
- componentDidMount
    - 컴포넌트가 화면에 나타나게 되었을 때 호출되는 API 입니다.
    - 여기에선 주로 D3, masonry처럼 DOM을 사용해야하는 외부라이브러리 연동을 하거나, <br> 
    해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등의 라이브러리를 통하여 HTTP Request를 하거나, <br> 
    DOM의 속성을 읽거나 직접 변경하는 작업을 진행합니다.

<br>
<br>

컴포넌트의 업데이트는 props의 변화, state의 변화에 따라 결정됩니다.
업데이트가 되기 전, 후에 호출되는 API는 아래와 같습니다.

<br>

```
componentWillReceiveProps(nextProps) {
    // this.props는 아직 바뀌지 않은 상태
}
```
- componentWillReceiveProps
    - 컴포넌트가 새로운 props를 받게 되었을 때 호출되는 API 입니다.
    - 주로 state가 props에 따라 변해야하는 로직을 작성합니다.
    - 새로 받게될 props는 nextProps로 조회할 수 있습니다.
    - 이 때 nextProps가 아닌 this.props를 조회하면 업데이트 되기 전의 props를 조회합니다.
    - <b>React.js v16.3 이후 해당 API가 deprecated 되었습니다.</b>
    - React.js v16.3 이후부터는 <code>UNSAFE_componentWillReceiveProps()</code>라는 이름으로 사용됩니다.

<br>

```
static getDerivedStateFromProps(nextProps, prevState) {
    /*
        여기서는 setState를 하는 것이 아니라 
        특정 props가 바뀔 때 설정하고 싶은 state값을 리턴하는 형태로 사용됩니다.

        예:
        if(nextProps.value !== prevState.value) {
            return {value: nextProps.value};
        }
        return null; // null을 리턴하면 따로 업데이트 할것은 없다는 의미입니다.
    */
}
```
- static getDerivedStateFromProps()
    - React.js v16.3 이후에 만들어진 새로운 라이프사이클 API 입니다.
    - 이 API는 props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우에 사용합니다.

<br>

 ```
shouldComponentUpdate(nextProps, nextState) {
    // return false 를 하면 업데이트를 안합니다.
    // return this.props.checked !== nextProps.checked
    return true;
}   
 ```
- shouldComponentUpdate
    - 이 API는 컴포넌트의 re-render 여부를 결정합니다.
    - state가 변경되거나 부모 컴포넌트로부터 새로운 props를 전달받을 때 실행됩니다.
    - 기본적으로 <code>return true</code>를 반환합니다.
    - 불필요한 re-render를 방지하여 비용을 최소화할때 유용합니다. <br> 하지만 잘못 설정하면 애플리케이션에 문제가 발생할 수 있습니다.
    - <code>shouldComponentUpdate</code>에서 계산을 실행하는 것은 성능과 노력면에서 비용이 많이들 수 있으므로 그만한 가치가 있는지 확인해야합니다. <br>
    <a target="_blank" href="https://reactjs.org/docs/perf.html">React‘s Performance Tools</a>를 사용하여 <code>shouldComponentUpdate</code> 사용 전후에 낭비되는 사이클 수를 확인하는 것이 좋습니다. 아주 간단한 사용법이 있습니다.

<br>

```
componentWillUpdate(nextProps, nextState) {

}
```
- componentWillUpdate
    - 이 API는 <code>shouldComponentUpdate</code>에서 true를 반환했을 때에만 호출됩니다.
    - 여기에선 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 합니다.
    - 이 함수가 호출되고난 다음에는 <code>render()</code>가 호출됩니다.
    - <b>React.js v16.3 이후 해당 API가 deprecated 되었습니다.</b>

<br>

```
getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
      return {
        scrollTop, scrollHeight
      };
    }
}

componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```   
- getSnapshotBeforeUpdate()
    - <code>componentWillUpdate</code>가 deprecated되고 새롭게 대체되는 API 입니다.
    - 이 API가 동작하는 시점은 다음과 같습니다.
        - <code>render()</code>
        - 실제 DOM에 변화 발생
        - <code>componnentDidUpdate</code>
    - 이 API를 통해서 DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, <br> 여기서 리턴하는 값은 <code>componentDidUpdate</code>에서 3번째 파라미터로 받아올 수 있게 됩니다.

<br>

```
componentDidUpdate(prevProps, prevState, snapshot) {

}
```
- componentDidUpdate
    - 이 API는 컴포넌트에서 <code>render()</code>를 호출하고 난 다음에 실행됩니다.
    - 이 시점에서는 this.props와 this.state가 바뀌어 있습니다.
    - 파라미터를 통해 이전의 값인 prevProps, prevState를 조회할 수 있습니다.
    - <code>getSnapshotBeforeUpdate</code>에서 반환한 snapshot 값은 세번째 파라미터로 받아옵니다.

<br><br>

컴포넌트가 더이상 필요하지 않게 되면 단 하나의 API가 호출됩니다.

```
componentWillUnmount() {
  // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
```
- componentWillUnmount
    - 이 API는 등록했던 이벤트를 제거하고 만약에 setTimeout을 걸은 것이 있다면 clearTimeout을 통해 제거합니다.
    - 외부 라이브러리를 사용한것이 있고 해당 라이브러리에 dispose 기능이 있다면 여기서 호출해주면 됩니다.

<br>

아래는 전체적인 컴포넌트의 Life Cycle을 테스트 해볼 수 있는 테스트 코드입니다.

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```