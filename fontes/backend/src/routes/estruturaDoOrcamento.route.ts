import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { EstruturaDoOrcamentoController } from '../controllers/estruturaDoOrcamento.controller';
import { createNewEstruturaDoOrcamentoValidator } from './validators/estruturaDoOrcamento.validator';

export default function defineRoute(app: Application){ 
  const controller : EstruturaDoOrcamentoController= new EstruturaDoOrcamentoController(); 
  const router: Router = Router(); 
    // Create a new EstruturaDoOrcamento 
  router.post('/', [verifyAccess, changeTenant, ...createNewEstruturaDoOrcamentoValidator, validateHeaders] ,controller.create);

    // Retrieve all estrutura_orcamento 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout estrutura_orcamento
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single EstruturaDoOrcamento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a EstruturaDoOrcamento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a EstruturaDoOrcamento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/estrutura-orcamento', router); 
  }; 
