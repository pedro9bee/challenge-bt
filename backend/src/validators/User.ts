import {body} from 'express-validator'
export const userStoreValidate = [
  body("firstName").
      escape().
      not().
      isEmpty().
      withMessage("Nome Obrigatório"),
  body("lastName").
      escape().
      not().
      isEmpty().
      withMessage("Último' Obrigatório"),
    body("email").
      escape().
      not().
      isEmpty().
      isEmail().
      withMessage("Email Obrigatório"),
    body("password").
      escape().
      not().
      isEmpty().
      withMessage("Senha Obrigatória"),         
]