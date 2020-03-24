const Service = require('./Service');

exports.newUser = (req, res, next) => {
    const { body } = req;
    Service.newUser(body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
}

exports.getUserById = (req, res, next) => {
    const { params: { id } } = req;
    Service.getUserById(id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
}

exports.followUnFollowUser = (req, res, next) => {
    const { params: { id }, body } = req;
    Service.followUnFollowUser(id, body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send(error);
        })
}