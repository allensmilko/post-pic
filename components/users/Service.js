const connecToDB = require('../../config/db-connect');
const User = require('./Model').User;
const service = {};

service.newUser = async (data) => {
    const connection = await connecToDB();
    const model = connection.model('User', User);
    const userData = new model(data);
    return new Promise((resolve, reject) => userData
        .save((error, success) => error? reject(error): resolve(success)))
}

service.getUserById = async (_id) => {
    const connection = await connecToDB();
    const model = connection.model('User', User);
    const populate = {
        path: 'followers', 
        model: model, 
        select: '-_id'
    };
    return new Promise((resolve, reject) => model
        .findOne({_id})
        .populate({
            ...populate 
        })
        .exec((error, success) => error? reject(error): resolve(success)))
}

service.updateUser = async (_id,data) => {
    const connection = await connecToDB();
    const model = connection.model('User', User);
    return new Promise((resolve, reject) => model
        .findOneAndUpdate({_id}, data, { new: true } , (error, success) => error? reject(error): resolve(success)))
}

service.followUnFollowUser = async (_id, data) => {
    const { follow, user_id } = data;
    const dataForupdata = follow? { $push: { followers: user_id } }: { $pull: { followers: user_id } };
    return new Promise((resolve, reject) => {
        service.updateUser(_id, dataForupdata)
        .then(response => resolve(response))
        .catch(error => reject(error))
    }
    )
}

module.exports = service;