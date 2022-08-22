const Joi = require("joi");

// schema description and validation

export const loginSchema = Joi.object({

  Email: Joi.string().email({minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] }}).required(),

  Password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(8).required(),

  repeat_password: Joi.ref("password"),

});

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }),
});

export const SignupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

});


export const resetPasswordSchema =Joi.object({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

});

export const forgotPasswordSchema =Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }),

});

// contact-us form --email validation--
export const contactSchema =Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }),

});

