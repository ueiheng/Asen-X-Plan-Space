# react-redux

## react-redux简介💡
- `React-Redux` 是一个为 React 应用提供可预测化状态容器的 JavaScript 库，它建立在 Redux 库之上，使得 Redux 中管理的状态更加轻松和高效地在 React 中进行使用。

- `React-Redux` 的主要作用是连接 React 组件和 Redux store，并提供访问 store 中 state 和 `dispatch` 函数的便捷方式，从而更加轻松地进行状态管理，提高应用程序的可维护性和扩展性。`React-Redux` 使用了 `connect` 高阶组件和 `Provider` 组件来实现这个功能。

- `connect` 函数接受两个参数：`mapStateToProps` 和 `mapDispatchToProps`。mapStateToProps 用于将 store 中的 state 映射到组件的 props 中，mapDispatchToProps 用于将 `action creator` 映射到组件的 props 中。当 Redux store 中的 `state` 或者 `dispatch` 发生变化时，`connect` 函数可以自动重新获取最新的 `state` 并将其传递给组件。

- `Provider` 是一个高阶组件，它接收一个 `Redux store` 对象作为参数，并将其传递给所有的子组件，从而使得所有的子组件都可以访问到 store 中的 state 和 dispatch 函数。这样，在 Redux store 中的 state 发生变化时，所有的子组件都会相应地更新。

**总结** 

React-Redux 可以帮助我们更加高效地在 React 应用中使用 Redux，它提供了一些便捷的方式来连接 React 组件和 `Redux store`，并在应用程序中保证了 Redux 的状态单一性、可预测性和可控性。

## react-redux基本原理💡
- 当一个 React 组件需要访问 Redux store 中的数据时，它通过 connect() 函数将自己与 Redux store 进行连接，并从 Redux store 中获取所需的状态信息。当组件发生变化时，例如用户对界面进行操作，组件会调用 dispatch() 函数发送一个 action，Redux store 会根据这个 action 更新相应的 state。更新后的 state 将会被传递给所有已连接的组件，组件也会相应地更新。

- `React-Redux` 的主要作用就是连接 React 组件和 Redux store，并提供访问 store 中 state 和 dispatch 函数的便捷方式。connect 函数实现了高阶组件模式，通过 mapStateToProps 和 mapDispatchToProps 将数据从 Redux store 中映射到 React 组件的 props 属性上，使得在组件内部可以方便地获取到 Redux 的状态和派发 Redux 的 action。同时，Provider 组件将 store 对象 Store 在整个应用中传递下去，保证了 Redux 的状态单一性、可预测性和可控性。

## 本文以计算器为简单示例，演示代码💡

1. 创建redux store:

```js no-run
import { createStore } from 'redux';

// 定义 reducer 函数，用于处理各种 action 并更新 state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// 创建 Redux store
const store = createStore(counterReducer);

export default store;
```

2. 创建一个counter组件，它会将 Redux store 中的 state 映射到组件的 props 属性中，并提供两个按钮，点击按钮可以派发对应的 action 以更新 state：

```js no-run
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
3. 最后，在主文件 App.js 中，将 Counter 组件嵌入到 Provider 组件中，Provider 会将 Redux store 对象传递给所有的子组件：
```js no-run
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```
