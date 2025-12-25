const Joi  = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object().required(),
    description : Joi.string().required(),
    title : Joi.string().required(),
    location : Joi.string().required(),
    price : Joi.number().required().min(0),
    image : Joi.string().allow("",null),
});
