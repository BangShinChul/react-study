import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <b>{this.props.name}</b> 입니다. {/* 자신이 받아온 props값은 this. 키워드를 통하여 조회할 수 있습니다. */}
            </div>
        );
    }
}

export default MyName;