import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { ProjetoController } from '../controllers/projeto.controller';
import { createNewProjetoValidator } from './validators/projeto.validator';

export default function defineRoute(app: Application){ 
  const controller : ProjetoController= new ProjetoController(); 
  const router: Router = Router(); 
    // Create a new Projeto 
  router.post('/', [verifyAccess, changeTenant, ...createNewProjetoValidator, validateHeaders] ,controller.create);

    // Retrieve all projetos 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout projetos
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Projeto with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Projeto with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Projeto with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/projetos', router); 
  }; 
