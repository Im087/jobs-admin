import indexTpl from '../views/index.art';
const htmlIndex = indexTpl({});

import signinTpl from '../views/signin.art';
const htmlSignin = signinTpl({});

import usersTpl from '../views/users.art';

const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin); // render the page
        $('#signin').on('submit', submit(router)); // executed when form submitted
    };
};

const index = (router) => {
    return (req, res, next) => {
        res.render(htmlIndex); // render the page

        $('#content').html(usersTpl()); // render the #content part

        $('#add-user').on('click', addUser);
    };
};

const submit = (router) => {
    return (e) => {
        e.preventDefault();
        router.go('/index'); // route to index page
    }
};

const addUser = () => {
    console.log('add!');
    const data = $('#form-user').serialize();
    console.log(data);
    $.ajax({
        url: 'api/users/adduser',
        type: 'post',
        data: data,
        success(res) {
            console.log(res);
        }
    });
    $('#close-user').click();
};

export {signin, index};