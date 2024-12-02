import { check, query } from 'express-validator'; 

export const createNewIndicadorValidator = [ 
  ]; 

export const findAllIndicadorValidator = [ 
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'), 
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit') 
  ]; 
