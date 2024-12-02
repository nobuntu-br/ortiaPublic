import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { HistoricoPadraoController } from '../controllers/historicoPadrao.controller';
import { createNewHistoricoPadraoValidator } from './validators/historicoPadrao.validator';

export default function defineRoute(app: Application){ 
  const controller : HistoricoPadraoController= new HistoricoPadraoController(); 
  const router: Router = Router(); 
    // Create a new HistoricoPadrao 
  router.post('/', [verifyAccess, changeTenant, ...createNewHistoricoPadraoValidator, validateHeaders] ,controller.create);

    // Retrieve all historicos_padrao 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout historicos_padrao
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single HistoricoPadrao with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a HistoricoPadrao with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a HistoricoPadrao with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/historicos-padrao', router); 
  }; 
