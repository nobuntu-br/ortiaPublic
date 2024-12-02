import { Application, Router } from 'express'; 
import changeTenant from '../middlewares/tenant.middleware'; 
import { ConsultaController } from '../controllers/consulta.controller'; 

export default function defineRoute(app: Application) { 
  const router: Router = Router(); 

  const consultaController: ConsultaController = new ConsultaController(); 

  router.get('/consulta-livro-razao', [changeTenant], consultaController.consultaLivroRazao); 

  app.use('/api/consulta', router);
};  
