const { observable, autorun, runInAction, reaction } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

//바꾸고 싶은데로 바꾸면 하나하나가 전부 action이 되는것이다.
// state.compA = 'b';

//autorun : observable state가 바뀔때마다 callback 함수가 실행된다
autorun(() => {
  console.log('changed');
});

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log('reaction', state.compB);
  }
);

//3번을 실행되어도 하나의 액션으로 친다. 그래서 changed가 한번만 출력된다.
state.compA = 'c';
state.compB = 'c';
state.compC = 'c';
state.compC = 'd';
//맨위부터 여기까지가 하나의 runInAction

// 이제 changed가 2번 실행된다. 이거 하나의 그룹이 이제 액션하나야
runInAction(() => {
  state.compA = 'd';
});

runInAction(() => {
  state.compA = 'e';
});
