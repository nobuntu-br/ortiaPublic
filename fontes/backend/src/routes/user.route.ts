import { Application, Router } from 'express';
import validateHeaders from './validators/index.validator';
import { UserController } from '../controllers/user.controller';
import { checkEmailExistValidator, createNewUserValidator, findAllUserValidator, findUserByUIDValidator } from './validators/user.validator';
import changeTenant, { getSecurityTenant } from '../middlewares/tenant.middleware';

/**
 * Irá definir as rotas da entidade
 * @param app Instância da aplicação express
 */
export default function defineRoute(app: Application) {
  const controller: UserController = new UserController();
  const router: Router = Router();


  // //Mandar o codigo de verificaocao
  // router.post('/send-verification-code', controller.sendVerificationCodeToEmail);
  //Create a new
  router.post('/', [getSecurityTenant, ...createNewUserValidator, validateHeaders], controller.create);
  //Find all
  router.get('/', [getSecurityTenant, ...findAllUserValidator, validateHeaders], controller.findAll);
  //Find count
  router.get('/count', controller.getCount);
  //Find one
  router.get('/uid/:UID', [getSecurityTenant, ...findUserByUIDValidator, validateHeaders], controller.findByUID)
  //Find by id
  router.get('/:id', controller.findById);
  //Update
  router.put('/:id', controller.update);
  //Delete all
  router.delete('/all', controller.deleteAll);
  //Delete
  router.delete('/:id', controller.delete);

  router.post('/check-email-exist', [...checkEmailExistValidator, validateHeaders], controller.checkEmailExist);

  router.post('/send-verification-email-code', [...findAllUserValidator, validateHeaders], controller.sendVerificationEmailCodeToEmail);

  router.post('/validate-vericiation-email-code', [...findAllUserValidator, validateHeaders], controller.validateVerificationEmailCode);
  //TODO adicionar rota de pegar item de forma paginada

  app.use('/api/user', router);
} 
