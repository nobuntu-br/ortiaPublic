import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { EmpreendimentoController } from '../controllers/empreendimento.controller';
import { createNewEmpreendimentoValidator } from './validators/empreendimento.validator';

export default function defineRoute(app: Application){ 
  const controller : EmpreendimentoController= new EmpreendimentoController(); 
  const router: Router = Router(); 
    // Create a new Empreendimento 
  router.post('/', [verifyAccess, changeTenant, ...createNewEmpreendimentoValidator, validateHeaders] ,controller.create);

    // Retrieve all empreendimento 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout empreendimento
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Empreendimento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Empreendimento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Empreendimento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 
    // Custom query
  router.post('/custom', [verifyAccess, changeTenant], controller.customQuery);

    app.use('/api/empreendimento', router); 
  }; 
