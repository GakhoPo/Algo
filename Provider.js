import React from "react";
import PropTypes from "prop-types";

export default class Provider extends React.Component {
    // context 往所有子组件，孙组件里传递数据
    // props   父组件往子组件里传递数据
    // state   组件自身的数据

    // 声明一个 context 数据
    getChildContext() {
        return { store: this.store };
    }

    constructor(props, context) {
        super(props, context);
        this.store = props.store;
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

Provider.childContextTypes = {
    store: PropTypes.object,
};
