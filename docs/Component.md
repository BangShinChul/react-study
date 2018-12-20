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

컴포넌트가 브라우저에 나타나기 전, 후에 호출되는 API들이 있습니다.
- constructor
    - 컴포넌트 생성자 함수입니다. 컴포넌트가 새로 만들어질 때마다 함수가 호출됩니다.
- componentWillMount
    - 컴포넌트가 화면에 나가기 직전에 호출되는 API입니다. 현재는 별로 사용되지 않습니다.
    - React.js v16.3에서는 해당 API가 deprecated 되었습니다.
- componentDidMount
    - 컴포넌트가 화면에 나타나게 되었을 때 호출되는 API 입니다.
    - 여기에선 주로 D3, masonry처럼 DOM을 사용해야하는 외부라이브러리 연동을 하거나, <br> 
    해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등의 라이브러리를 통하여 HTTP Request를 하거나, <br> 
    DOM의 속성을 읽거나 직접 변경하는 작업을 진행합니다.

<br>

컴포넌트의 업데이트는 props의 변화, state의 변화에 따라 결정됩니다.
업데이트가 되기 전, 후에 호출되는 API는 아래와 같습니다.
- componentWillReceiveProps
- static getDerivedStateFromProps()
- shouldComponentUpdate
- componentWillUpdate
- getSnapshotBeforeUpdate()
- componentDidUpdate

<br>

컴포넌트가 더이상 필요하지 않게 되면 단 하나의 API가 호출됩니다.
- componentWillUnmount

<br>

