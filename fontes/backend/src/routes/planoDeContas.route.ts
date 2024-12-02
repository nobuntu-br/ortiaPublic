import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PlanoDeContasController } from '../controllers/planoDeContas.controller';
import { createNewPlanoDeContasValidator } from './validators/planoDeContas.validator';

export default function defineRoute(app: Application){ 
  const controller : PlanoDeContasController= new PlanoDeContasController(); 
  const router: Router = Router(); 
    // Create a new PlanoDeContas 
  router.post('/', [verifyAccess, changeTenant, ...createNewPlanoDeContasValidator, validateHeaders] ,controller.create);

    // Retrieve all planos_de_contas 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout planos_de_contas
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PlanoDeContas with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PlanoDeContas with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PlanoDeContas with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/plano-de-contas', router); 
  }; 
