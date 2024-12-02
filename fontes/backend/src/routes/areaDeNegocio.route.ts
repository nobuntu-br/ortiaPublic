import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { AreaDeNegocioController } from '../controllers/areaDeNegocio.controller';
import { createNewAreaDeNegocioValidator } from './validators/areaDeNegocio.validator';

export default function defineRoute(app: Application){ 
  const controller : AreaDeNegocioController= new AreaDeNegocioController(); 
  const router: Router = Router(); 
    // Create a new AreaDeNegocio 
  router.post('/', [verifyAccess, changeTenant, ...createNewAreaDeNegocioValidator, validateHeaders] ,controller.create);

    // Retrieve all areas_de_negocio 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout areas_de_negocio
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single AreaDeNegocio with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a AreaDeNegocio with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a AreaDeNegocio with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/areas-de-negocio', router); 
  }; 
