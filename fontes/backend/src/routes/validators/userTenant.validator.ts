import { check, param, query } from 'express-validator';
/**
 * Validador de campos
 */
export const createNewUserTenantValidator = [
  //TODO serão gerados com base no mapa mental
  check('UID').notEmpty().withMessage('UID is required'),
  check('tenantId').notEmpty().withMessage('tenantId is required'),
  check('tenantCredentialId').notEmpty().withMessage('tenantCredentialId is required'),
]

export const findAllUserTenantValidator = [
  query('page').optional().isNumeric().withMessage('Only digits allowed in title page'),
  query('limit').optional().isNumeric().withMessage('Only digits allowed in title limit')
]