import { check, query } from 'express-validator'; 

export const createNewEstruturaDoOrcamentoValidator = [ 
  ]; 

export const findAllEstruturaDoOrcamentoValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
