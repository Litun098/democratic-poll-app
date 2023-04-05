const responseService = require('../services/response');

const create = async (req, res)=>{
    try{
        const response = await responseService.create(req.body);
        return res.status(500).json({
            success:true,
            message:"Data fetched successfully.",
            data : response
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const getAllResponses = async (req, res)=>{
    try{
        const responses = await responseService.getAllResponses(req.params.pollId);
        return res.status(500).json({
            success:true,
            message:"Data fetched successfully.",
            data : responses
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports = {
    create,
    getAllResponses
}