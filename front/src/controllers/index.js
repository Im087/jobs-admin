import indexTpl from '../views/index.art';
const htmlIndex = indexTpl({});

import signinTpl from '../views/signin.art';
const htmlSignin = signinTpl({});

const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin);

        $('#signin').on('submit', submit(router));
    };
};

const index = (router) => {
    return (req, res, next) => {
        res.render(htmlIndex);
    };
};

const submit = (router) => {
    return (e) => {
        e.preventDefault();
        router.go('/index');
    }
};

export {signin, index};