### JSX

JSX(JavaScript Xml)는 React.js에서 사용하는 UI 템플릿화를 좀 더 편하고 빠르게 도와주는 문법입니다. <br>

<br>

아래는 <b>JSX 문법</b>의 특징입니다.


1. 모든 태그는 꼭 닫혀있어야 합니다.

2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져있어야 합니다. <br> 꼭 두개이상의 엘리먼트를 사용해야한다면 최상단에 <Fragment> 태그로 감싸줍니다.

3. JSX 내부에서 자바스크립트를 사용할 때에는 {}를 사용합니다. 

``` 
  render() {
    const name = 'John Doe';
    return (
      <div>
        hello {name}! // hello John Doe!
      </div>
    );
  }   
``` 

<br>

4. JSX에서 조건부 렌더링을 할 때에는 삼항 연산자를 사용하거나 AND 연산자를 사용합니다. <br> 
반면 if 조건문은 사용할 수 없습니다. 사용하려면 IIFE를 사용해야 합니다. <br> 
복잡한 조건을 작성해야할 경우 JSX 외부에서 로직을 작성하는것을 권장합니다.

```
  render() {
    const name = 'John Doe';
    return (
      <Fragment>
        <div>
          { // 삼항 연산자 예시
            1 + 1 === 2
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
        <div>
          { // AND 연산자 예시
            1 + 1 === 2 && (<div>맞아요!</div>)
          }
        </div>
        <div>
          { // IIFE(즉시 실행 함수 표현) 예시
            (function() {
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
      </Fragment>
    );
  }    
```

<br>

5. JSX 내에서 style과 css 클래스를 설정할 때 아래와 같이 작성할 수 있습니다.

```
  render() {
    const styleData = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={styleData}>
        hi there
      </div>
    );
  }
```

<br>

6. JSX 내 엘리먼트의 class를 설정할 때 className을 사용합니다.

```
  <div class="hello"> (x)
  <div className="hello"> (o)
```

7. JSX 태그에 이벤트를 설정할 때 camelCase로 설정해 주어야 합니다. <br> 또한 이벤트에 전달해주는 값은 무조건 <b>함수</b>여야 합니다.

```
<button onclick={this.handleIncrease}>+</button> (x)
<button onClick={this.handleIncrease}>+</button> (o)


<button onClick={this.handleIncrease()}>+</button> (x) 
/*
이런식으로 하게되면 렌더링을 할 때 마다 해당 함수가 호출이 됩니다. 
그렇게되면 렌더링 -> 함수 호출 -> setState -> 렌더링 -> 함수 호출 -> setState -> 렌더링 ... 
위처럼 무한 반복이 되어버리기 때문에 항상 주의해야합니다.
*/

<button onClick={this.handleIncrease}>+</button> (o)
```