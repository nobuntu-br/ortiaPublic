import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { EstabelecimentoController } from '../controllers/estabelecimento.controller';
import { createNewEstabelecimentoValidator } from './validators/estabelecimento.validator';

export default function defineRoute(app: Application){ 
  const controller : EstabelecimentoController= new EstabelecimentoController(); 
  const router: Router = Router(); 
    // Create a new Estabelecimento 
  router.post('/', [verifyAccess, changeTenant, ...createNewEstabelecimentoValidator, validateHeaders] ,controller.create);

    // Retrieve all estabelecimento 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout estabelecimento
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single Estabelecimento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a Estabelecimento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a Estabelecimento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/estabelecimentos', router); 
  }; 
