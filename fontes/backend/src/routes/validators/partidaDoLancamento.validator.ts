import { check, query } from 'express-validator'; 

export const createNewPartidaDoLancamentoValidator = [ 
  ]; 

export const findAllPartidaDoLancamentoValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
