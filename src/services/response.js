const Response = require('../models/response');
const Poll = require('../models/poll');

const create = async (data)=>{
    try{
        const response = await Response.create({
            user:data.user,
            poll:data.poll,
            selectedOption:data.option
        });
        return response;
    }catch(err){
        console.log(err);
        return err;
    }
}


const getAllResponses = async (pollId)=>{
    try{
        const poll = await Response.findById(pollId);
        const response = await Response.find({poll:poll._id});
        return response
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    create,
    getAllResponses
}