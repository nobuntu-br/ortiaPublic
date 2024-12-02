import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { CentroDeCustoController } from '../controllers/centroDeCusto.controller';
import { createNewCentroDeCustoValidator } from './validators/centroDeCusto.validator';

export default function defineRoute(app: Application){ 
  const controller : CentroDeCustoController= new CentroDeCustoController(); 
  const router: Router = Router(); 
    // Create a new CentroDeCusto 
  router.post('/', [verifyAccess, changeTenant, ...createNewCentroDeCustoValidator, validateHeaders] ,controller.create);

    // Retrieve all centros_de_custos 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout centros_de_custos
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single CentroDeCusto with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a CentroDeCusto with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a CentroDeCusto with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/centros-de-custos', router); 
  }; 
