# redux

## 1.配置redux store
在Src目录下新建store文件夹     /src/store/index.js

```js
import { createStore } from "redux";

let initial = {
    supNum: 10,
    oppNum: 5,
};
const reducer = function reducer(state = initial, action) {
    // 浅拷贝，不直接修改容器中的状态,而是在return 时再修改
    state = { ...state };
    switch (action.type) {
        case "VOTE_SUP":
            state.supNum++;
            break;
        case "VOTE_OPP":
            state.oppNum++;
            break;
        default:break;
    }
    return state;
};
const store = createStore(reducer);

export default store;
```

2. 根目录创建上下文context文件    /src/ThemeContext.js
   
```js
import React from "react";
 const ThemeContext = React.createContext();
 export default ThemeContext
```

3. 在main.jsx中导入store

```js
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.less";

//加载redux
import store from "./store";
//添加上下文
import ThemeContext from "./ThemeContext";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
dayjs.locale("zh-cn");
ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={zhCN}>
    <ThemeContext.Provider value={{ store }}>
      <App />
    </ThemeContext.Provider>
  </ConfigProvider>
);
```

4. 在子组件中使用

```js
import { useContext, useState ,useEffect} from "react";
import ThemeContext from "../ThemeContext";
import { Button } from "antd";

const Home = function Home() {
  const { store } = useContext(ThemeContext);
  let { supNum, oppNum } = store.getState();

  //
  let [num, setNum] = useState(0);
  const update = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    let unsubcribe = store.subscribe(update);
    return () => {
        unsubcribe();
    };
  }, [num]);

  return (
    <div className="Home-box">
      <Button
        type="primary"
        onClick={() => {
          store.dispatch({
            type: "VOTE_SUP",
            step: 10,
          });
        }}
      >
        sup
      </Button>
      <Button
        type="primary"
        onClick={() => {
          store.dispatch({
            type: "VOTE_OPP",
            step: 10,
          });
        }}
      >
        opp
      </Button>
      Home {supNum + "-----" + oppNum}
    </div>
  );
};

export default Home;
```

