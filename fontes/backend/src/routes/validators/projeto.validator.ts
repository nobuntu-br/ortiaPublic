import { check, query } from 'express-validator'; 

export const createNewProjetoValidator = [ 
  ]; 

export const findAllProjetoValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
