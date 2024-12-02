import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { LancamentoContabilController } from '../controllers/lancamentoContabil.controller';
import { createNewLancamentoContabilValidator } from './validators/lancamentoContabil.validator';

export default function defineRoute(app: Application){ 
  const controller : LancamentoContabilController= new LancamentoContabilController(); 
  const router: Router = Router(); 
    // Create a new LancamentoContabil 
  router.post('/', [verifyAccess, changeTenant, ...createNewLancamentoContabilValidator, validateHeaders] ,controller.create);

    // Retrieve all lancamentos_contabeis 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout lancamentos_contabeis
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single LancamentoContabil with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a LancamentoContabil with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a LancamentoContabil with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/lancamentos-contabeis', router); 
  }; 
