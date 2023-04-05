const Poll = require('../models/poll');

const create = async (data)=>{
    try{
        const poll = await new Poll(data).save();
        return poll;
    }catch(err){
        console.log(err);
        return err;
    }
}
const destroy = async (id)=>{
    try{
        const poll = await Poll.findByIdAndDelete(id);
        return poll;
    }catch(err){
        console.log(err);
        return err;
    }
}
const update = async (data)=>{
    try{
        const poll = await Poll.findByIdAndUpdate(data.id,{status:data.status},{new: true});
        return poll;
    }catch(err){
        console.log(err);
        return err;
    }
}
const getPoll = async (id)=>{
    try{
        const poll = await Poll.findById(id);
        return poll;
    }catch(err){
        console.log(err);
        return err;
    }
}
const getAllPoll = async ()=>{
    try{
        const poll = await Poll.find();
        return poll;
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    create,
    destroy,
    update,
    getPoll,
    getAllPoll
}