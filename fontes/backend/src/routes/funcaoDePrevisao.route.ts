import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { FuncaoDePrevisaoController } from '../controllers/funcaoDePrevisao.controller';
import { createNewFuncaoDePrevisaoValidator } from './validators/funcaoDePrevisao.validator';

export default function defineRoute(app: Application){ 
  const controller : FuncaoDePrevisaoController= new FuncaoDePrevisaoController(); 
  const router: Router = Router(); 
    // Create a new FuncaoDePrevisao 
  router.post('/', [verifyAccess, changeTenant, ...createNewFuncaoDePrevisaoValidator, validateHeaders] ,controller.create);

    // Retrieve all funcoes_de_previsao 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout funcoes_de_previsao
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single FuncaoDePrevisao with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a FuncaoDePrevisao with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a FuncaoDePrevisao with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/funcoes-de-previsao', router); 
  }; 
