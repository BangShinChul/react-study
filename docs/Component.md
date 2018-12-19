### Component

컴포넌트는 재사용이 가능한 DOM의 모듈이 되는 부분입니다. <br>

컴포넌트를 만드는 방법은 두가지가 있습니다. <br>

- 클래스를 통해서 만드는 방법
- 함수를 통하여 만드는 방법

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

이렇게 만든 컴포넌트를 사용하려면 <code>ReactDOM.render</code> 함수를 사용해야합니다. <br>
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

class형태로 만들었던 컴포넌트와 동일하게 함수로 만든 컴포넌트에서도 JSX를 리턴해주어야 합니다. <br>
그리고 마찬가지로 이렇게 만든 컴포넌트를 사용하려면 <code>ReactDOM.render</code> 함수를 사용하여 렌더링해주어야 합니다. <br>

```
// index.js

ReactDOM.render(<Welcome />, document.getElementById('root'));
// ReactDOM.render 함수의 첫번째 파라미터에는 렌더링할 컴포넌트를 넣어주고,
// 두번째 파라미터에는 컴포넌트를 어떤 DOM에 그려줄 지 정해줍니다.
```