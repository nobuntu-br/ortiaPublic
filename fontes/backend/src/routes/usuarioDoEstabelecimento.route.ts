import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { UsuarioDoEstabelecimentoController } from '../controllers/usuarioDoEstabelecimento.controller';
import { createNewUsuarioDoEstabelecimentoValidator } from './validators/usuarioDoEstabelecimento.validator';

export default function defineRoute(app: Application){ 
  const controller : UsuarioDoEstabelecimentoController= new UsuarioDoEstabelecimentoController(); 
  const router: Router = Router(); 
    // Create a new UsuarioDoEstabelecimento 
  router.post('/', [verifyAccess, changeTenant, ...createNewUsuarioDoEstabelecimentoValidator, validateHeaders] ,controller.create);

    // Retrieve all usuarios_do_estabelecimento 
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout usuarios_do_estabelecimento
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single UsuarioDoEstabelecimento with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a UsuarioDoEstabelecimento with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a UsuarioDoEstabelecimento with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/usuarios-do-estabelecimento', router); 
  }; 
