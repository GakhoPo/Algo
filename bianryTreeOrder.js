var preOrder = (root) => {
    const res = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            res.push(root.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return res;
};

var inOrder = (root) => {
    const res = [];
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        res.push(current.val);
        current = current.right;
    }
    return res;
};

var postOrder = (root) => {
    const res = [];
    const stack = [];
    let current = root;
    let last = null;
    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.right;
        }
        current = stack[stack.length - 1];
        if (!current.right || current.right === last) {
            current = stack.pop();
            res.push(current.val);
            last = current;
            current = null;
        } else {
            current = current.right;
        }
    }
    return res;
};
