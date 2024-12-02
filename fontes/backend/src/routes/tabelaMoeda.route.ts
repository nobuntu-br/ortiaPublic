import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { TabelaMoedaController } from '../controllers/tabelaMoeda.controller';
import { createNewTabelaMoedaValidator } from './validators/tabelaMoeda.validator';

export default function defineRoute(app: Application){ 
  const controller : TabelaMoedaController= new TabelaMoedaController(); 
  const router: Router = Router(); 
    // Create a new TabelaMoeda 
  router.post('/', [verifyAccess, changeTenant, ...createNewTabelaMoedaValidator, validateHeaders] ,controller.create);

    // Retrieve all tabela_moedas 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout tabela_moedas
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single TabelaMoeda with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a TabelaMoeda with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a TabelaMoeda with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/tabela-moedas', router); 
  }; 
