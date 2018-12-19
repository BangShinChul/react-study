import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
브라우저상에 작성한 React 컴포넌트를 보여주기 위해 ReactDOM.render 함수를 사용합니다.
첫번째 파라미터는 렌더링할 결과물이고,
두번째 파라미터는 컴포넌트를 어떤 DOM에 render할지 결정해줍니다.

예:
```
ReactDOM.render(<App />, document.getElementById('root'));
```

위의 코드에서는 id가 root 인 DOM을 찾아서 App 컴포넌트를 그려주도록 코딩되어있습니다.

앱이 오프라인에서 작동하고 더 빠르게 로드되기를 원하면 
unregister()를 register()로 변경할 수 있습니다. 
여기에는 몇 가지 함정이 있습니다. (모든 정적인 자원들을 client-side에서 백업해놓아야한다는거... feat.PWA)
service workers에 대해 자세히 알아보십시오. http://bit.ly/CRA-PWA
*/
serviceWorker.unregister();
