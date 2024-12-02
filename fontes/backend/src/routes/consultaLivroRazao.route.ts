import { Application, Router } from 'express';
import { verifyAccess } from '../middlewares/auth.middleware'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import validateHeaders from './validators/index.validator';
import { ConsultaLivroRazaoController } from '../controllers/consultaLivroRazao.controller';
import { createNewConsultaLivroRazaoValidator } from './validators/consultaLivroRazao.validator';

export default function defineRoute(app: Application){ 
  const controller : ConsultaLivroRazaoController= new ConsultaLivroRazaoController(); 
  const router: Router = Router(); 
    // Create a new ConsultaLivroRazao 
  router.post('/', [verifyAccess, changeTenant, ...createNewConsultaLivroRazaoValidator, validateHeaders] ,controller.create);

    // Retrieve all  
  router.get('/', [verifyAccess, changeTenant, validateHeaders], controller.findAll); 
    // Retrieve cout 
  router.get('/count', [verifyAccess, changeTenant], controller.getCount); 
    // Retrieve a single ConsultaLivroRazao with id 
  router.get('/:id', [verifyAccess, changeTenant], controller.findById); 
    // Update a ConsultaLivroRazao with id 
  router.put('/:id', [verifyAccess, changeTenant], controller.update); 
    // Delete a ConsultaLivroRazao with id 
  router.delete('/:id', [verifyAccess, changeTenant], controller.delete); 

    app.use('/api/consulta-livro-razao', router); 
  }; 
