# React-Redux Saga 入门

## 提要：
- React-Redux 是 React 应用程序中使用 Redux 管理全局状态的最佳实践之一。而 Saga 则是 Redux 中间件之一，用于管理 side-effect（如异步、延时、数据获取等），和 Redux-Thunk 相比，Saga 提供了更强大、灵活和可扩展的处理 side-effect 的方式。

在本文中，我们将介绍 `React-Redux Saga` 的基础知识，包括 Saga 的基础结构、基本概念、使用方法和常用操作等。

## 什么是 React-Redux Saga
React-Redux Saga 是 Redux 框架中的一个中间件，它提供了一种简单、可控、可测试的方式来处理副作用和异步操作。Saga 可以看作是 JavaScript 的 Generator 函数和 co 库的集大成者，通过 Saga 可以轻松管理应用程序中的 side-effect（副作用）。

## Saga 的一些基本概念
在使用 React-Redux Saga 前，我们需要了解以下几个基本概念：

1. Effect：是 Saga 中的操作，例如获取数据、延时操作、发起请求等。

2. Watcher：是监视器，负责观察 Redux Store 中某些 action，并执行相应的 effect。

3. Worker：是执行器，负责执行 effect 的具体操作，并将结果返回给 watcher。

4. Channel：是通道，用于在 Saga 和应用程序之间进行通信和消息传递。

## 简单的Saga示例

- 本示例用于用于实现异步获取数据的操作：
  
```js no-run
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api';

function getData(action) {
  try {
    const data = yield call(api.getData, action.payload);
    yield put(actions.getDataSuccess(data));
  } catch (e) {
    yield put(actions.getDataFailure(e));
  }
}

export default function watcher() {
  yield takeEvery(actions.getData, getData);
}
```

在本示例中定义了三个**generator**函数
1. 第一个是名为 getData 的 generator 函数，用于处理异步获取数据的逻辑。它使用 Redux-Saga 提供的 call 和 put 方法来调用异步函数和派发 actions。

2. 第二个是名为 watcher 的 generator 函数，用于监视类型为 actions.getData 的 action 并将其传递给 getData 函数进行处理。它使用 Redux-Saga 提供的 takeEvery 方法来监听 action，并在每次 action 发生时派发新的 getData 副本。

3. 第三个 generator 函数是默认导出的顶级 generator 函数，它实际上是 watcher 函数。在这里，我们使用 default 关键字将 watcher 函数作为默认导出，因此可以在其他文件中直接导入使用该函数。
## 示例讲解   
1. 本示例是一个监视 action 类型为 actions.getData 的 action，并将其传递给名为 getData 的 generator 函数来处理。

2. call 方法用于调用异步函数 api.getData，并传递 action.payload 作为参数。在 api.getData 返回结果之前，generator 函数会使用 yield 暂停执行，并等待该方法返回结果。

3. 如果 api.getData 执行成功，数据将被派发到 Redux Store 中，并且会触发名为 actions.getDataSuccess 的 action。如果 api.getData 执行失败，则错误信息会被派发到 Redux Store 中，并触发名为 actions.getDataFailure 的 action。

4. takeEvery 方法用于派发多个副本（forks）的 getData generator 函数来处理每个类型为 actions.getData 的 action，因此可以处理多个通过相同 action 触发的并发请求。

## Saga中常用的操作

- 除了上述的 call 和 put 操作之外，React-Redux Saga 还提供了以下常用操作：

1. take：等待一个特定的 action，并在该 action 执行之前暂停 generator。

2. select：从 Redux Store 获取状态。

3. fork：创建一个非阻塞的子进程，用于执行独立的操作。

4. join：等待所有 fork 子进程执行完毕。

5. cancel：取消 fork 子进程的执行。