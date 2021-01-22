import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 10,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 를 조회할 때는 this.state 로 조회 한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick 을 통해 버튼이 클릭되었을 때 호출 할 함수를 지정한다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState 가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
