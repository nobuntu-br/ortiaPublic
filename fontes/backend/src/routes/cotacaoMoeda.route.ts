import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { CotacaoMoedaController } from '../controllers/cotacaoMoeda.controller';
import { createNewCotacaoMoedaValidator } from './validators/cotacaoMoeda.validator';

export default function defineRoute(app: Application){ 
  const controller : CotacaoMoedaController= new CotacaoMoedaController(); 
  const router: Router = Router(); 
    // Create a new CotacaoMoeda 
  router.post('/', [verifyAccess, changeTenant, ...createNewCotacaoMoedaValidator, validateHeaders] ,controller.create);

    // Retrieve all cotacoes_moeda 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout cotacoes_moeda
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single CotacaoMoeda with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a CotacaoMoeda with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a CotacaoMoeda with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/cotacao-moeda', router); 
  }; 
