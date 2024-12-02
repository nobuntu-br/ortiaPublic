import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { PartidaDoLancamentoController } from '../controllers/partidaDoLancamento.controller';
import { createNewPartidaDoLancamentoValidator } from './validators/partidaDoLancamento.validator';

export default function defineRoute(app: Application){ 
  const controller : PartidaDoLancamentoController= new PartidaDoLancamentoController(); 
  const router: Router = Router(); 
    // Create a new PartidaDoLancamento 
  router.post('/', [verifyAccess, changeTenant, ...createNewPartidaDoLancamentoValidator, validateHeaders] ,controller.create);

    // Retrieve all partidas_dos_lancamentos 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout partidas_dos_lancamentos
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single PartidaDoLancamento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a PartidaDoLancamento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a PartidaDoLancamento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/partida-do-lancamento', router); 
  }; 
