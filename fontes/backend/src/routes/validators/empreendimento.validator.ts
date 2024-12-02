import { check, query } from 'express-validator';

export const createNewEmpreendimentoValidator = [
    check('nome').notEmpty().withMessage('nome is required'),
    check('nomeFantasia').notEmpty().withMessage('nomeFantasia is required'),
    check('tipoPessoa').notEmpty().withMessage('tipoPessoa is required'),
    check('cnpjcpf').notEmpty().withMessage('cnpjcpf is required'),
    check('moedaBase').notEmpty().withMessage('moedaBase is required'),
  ];

export const findAllEmpreendimentoValidator = [
  query('page').notEmpty().isNumeric().withMessage('Only digits allowed in title page'),
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit')
  ];