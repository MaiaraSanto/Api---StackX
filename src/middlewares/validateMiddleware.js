const Joi = require('joi');

const entidadeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().required()
});

module.exports = (req, res, next) => {
  const { error } = entidadeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
