import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { IndicadorController } from '../controllers/indicador.controller';
import { createNewIndicadorValidator } from './validators/indicador.validator';

export default function defineRoute(app: Application){ 
  const controller : IndicadorController= new IndicadorController(); 
  const router: Router = Router(); 
    // Create a new Indicador 
  router.post('/', [verifyAccess, changeTenant, ...createNewIndicadorValidator, validateHeaders] ,controller.create);

    // Retrieve all indicadores 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout indicadores
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Indicador with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Indicador with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Indicador with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/indicadores', router); 
  }; 
