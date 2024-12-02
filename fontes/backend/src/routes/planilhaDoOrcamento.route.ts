import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PlanilhaDoOrcamentoController } from '../controllers/planilhaDoOrcamento.controller';
import { createNewPlanilhaDoOrcamentoValidator } from './validators/planilhaDoOrcamento.validator';

export default function defineRoute(app: Application){ 
  const controller : PlanilhaDoOrcamentoController= new PlanilhaDoOrcamentoController(); 
  const router: Router = Router(); 
    // Create a new PlanilhaDoOrcamento 
  router.post('/', [verifyAccess, changeTenant, ...createNewPlanilhaDoOrcamentoValidator, validateHeaders] ,controller.create);

    // Retrieve all planilha_orcamento 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout planilha_orcamento
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PlanilhaDoOrcamento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PlanilhaDoOrcamento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PlanilhaDoOrcamento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/planilha-de-orcamento', router); 
  }; 
