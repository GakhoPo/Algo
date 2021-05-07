export default function createStore(reducer, preloadedState, enhancer) {
    // 实现第二个形参选填
    // 只有当第二参数传入的是中间件才会执行下面的代码
    if (
        typeof preloadedState === "function" &&
        typeof enhancer === "undefined"
    ) {
        enhancer = preloadedState;
        preloadedState = undefined;
    }

    let currentReducer = reducer;
    let currentState = preloadedState; // 整个应用所有的 State 都存储在这个变量里
    let currentListeners = []; // 订阅传进来的的回调函数 <=>  Button.addEventListener('click', () => { ... })

    // 这是一个很重要的设计
    let nextListeners = currentListeners;

    function getState() {
        return currentState;
    }

    function subscribe(listener) {
        if (nextListeners === currentListeners) {
            // 浅复制
            // 实际上 nextListeners 就是 currentListeners，避免直接操作 currentListeners，因为
            // 其他地方会用到 currentListeners，从而造成数据不一致。
            nextListeners = [...currentListeners];
        }
        nextListeners.push(listener);

        return function unsubscribe() {
            if (nextListeners === currentListeners) {
                // 浅复制
                nextListeners = [...currentListeners];
            }

            const index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    }
    // Button.addEventListener('click', () => { ... })
    // Button.removeEventListener('click', () => { ... })

    function dispatch(action) {
        currentState = currentReducer(currentState, action); // 调用 reducer 来更新数据

        const listeners = (currentListeners = nextListeners); // 保证当前的 listeners 是最新的

        for (let i = 0; i < listeners.length; i++) {
            listeners[i](); // 依次执行回调函数
        }

        return action;
    }

    // 手动触发一次 dispatch，初始化
    dispatch({ type: "INIT" });

    return {
        getState,
        dispatch,
        subscribe,
    };
}
