### props와 state

리엑트 컴포넌트에서 다루는 데이터는 props와 state 두개로 나뉩니다. <br>

- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다. <br> 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 직접 수정할 수 없습니다.
- state : 컴포넌트 내부에서 선언하여 사용하는 값이며, 내부에서 값을 변경할 수 있습니다.

아래는 props의 예시입니다.

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
...

// MyName 컴포넌트에 name이라는 변수명의 데이터를 props형태로 전달해줍니다.
ReactDOM.render(<MyName name="John Doe"/>, document.getElementById('root')); 
```

<br>

함수형으로 작성한 컴포넌트에도 동일하게 props 형태로 데이터를 전달해 줄 수 있습니다. <br>
다만 조금 다른 부분은 컴포넌트 함수의 매개변수로 props 객체를 던져주고, 그 안에서 props 데이터를 찾는 부분입니다. <br>

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
