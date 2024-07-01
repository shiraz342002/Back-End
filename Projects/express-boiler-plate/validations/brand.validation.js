import Joi from "joi"
const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

const userid = {
  params: Joi.object().keys({
    user_id: Joi.string().required(),
  }),
}

const update = {
    body: Joi.object().keys({
    brandName: Joi.string(),
    brandDescription: Joi.string(),
    brandImage: Joi.number().allow(""),
    brandLogo: Joi.allow(""),
  }),
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

const add = {
  body: Joi.object().keys({
    brandName: Joi.string().required(),
    brandDescription: Joi.string().required(),
    brandImage: Joi.string().uri().optional(),
    brandLogo: Joi.string().uri().optional(),
  }),
}

export default {
  id,
  update,
  add,
  userid,
}
