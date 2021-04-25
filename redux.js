function createStore(reducer) {
    // reducer 表示一个函数
    let currentState; //定义变量保存state
    let currentListeners = []; //保存监听器
    function getState() {
        //获取state值
        return currentState;
    }
    function dispatch(action) {
        //dispath函数
        currentState = reducer(currentState, action);
        currentListeners.forEach((listener) => listener()); //组件更新
    }

    function subscribe(listener) {
        //订阅函数
        currentListeners.push(listener);
        //返回一个函数，已方便取消订阅
        return () => {
            const index = currentListeners.indexOf(listener);
            currentListeners.splice(index, 1);
        };
    }
    dispatch({ type: "REDXXXXXXXX" }); //dispatch一下主要是使用默认值
    return {
        //返回这个对象
        getState,
        subscribe,
        dispatch,
    };
}
