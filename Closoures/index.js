
const fun = () => {
    const fun1 = () => {
        console.log('hello world')
    };
    return fun1
};

const f = fun();
f(); // hello world
