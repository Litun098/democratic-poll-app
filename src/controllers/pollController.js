const pollService = require('../services/poll');

const create = async (req,res)=>{
    try{
        const response = await pollService.create(req.body);
        return res.status(200).send({
            message:"New poll created successfully",
            success:true,
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"Something went wrong",
            success:false
        })
    }
}
const destroy = async (req,res)=>{
    try{
        const response = await pollService.destroy(req.params.id);
        return res.status(200).send({
            message:"Deleted successfully",
            success:true,
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"Something went wrong",
            success:false
        })
    }
}
const update = async (req,res)=>{
    try{
        const response = await pollService.update(req.body);
        return res.status(200).send({
            message:"Updated all polls successfully",
            success:true,
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"Something went wrong",
            success:false
        })
    }
}
const getPoll = async (req,res)=>{
    try{
        const response = await pollService.getPoll(req.params.id);
        return res.status(200).send({
            message:"Poll fetched successfully",
            success:true,
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"Something went wrong",
            success:false
        })
    }
}
const getAllPolls = async (req,res)=>{
    try{
        const response = await pollService.getAllPoll();
        return res.status(200).send({
            message:"Data fetched successfully",
            success:true,
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:"Something went wrong",
            success:false
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    getAllPolls,
    getPoll
}