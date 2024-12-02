import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { RegistroDeIndicadorController } from '../controllers/registroDeIndicador.controller';
import { createNewRegistroDeIndicadorValidator } from './validators/registroDeIndicador.validator';

export default function defineRoute(app: Application){ 
  const controller : RegistroDeIndicadorController= new RegistroDeIndicadorController(); 
  const router: Router = Router(); 
    // Create a new RegistroDeIndicador 
  router.post('/', [verifyAccess, changeTenant, ...createNewRegistroDeIndicadorValidator, validateHeaders] ,controller.create);

    // Retrieve all registros_de_indicadores 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout registros_de_indicadores
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single RegistroDeIndicador with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a RegistroDeIndicador with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a RegistroDeIndicador with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/registros-de-indicadores', router); 
  }; 
