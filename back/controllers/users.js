const addUser = (req, res, next) => {
    res.render('success', {
        data: JSON.stringify({
            username: req.body.username,
            password: req.body.password
        })
    });
};

module.exports = addUser;