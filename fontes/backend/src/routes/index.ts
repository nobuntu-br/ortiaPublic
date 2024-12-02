import { Application } from 'express';
import userRoutes from './user.route';
import tenantRoutes from './tenant.route';
import roleRoutes from './role.route';
import tenantCredentialRoutes from './tenantCredential.route';
import tenantDirectoryRoutes from './tenantDirectory.route' 
import applicationRoutes from './application.route'; 
import userDirectoryRoutes from './userDirectory.route' 
import consultaRoutes from './consulta.route' 
import empreendimentoRoutes from "./empreendimento.route"; 
import estabelecimentoRoutes from "./estabelecimento.route"; 
import areaDeNegocioRoutes from "./areaDeNegocio.route"; 
import planoDeContasRoutes from "./planoDeContas.route"; 
import centroDeCustoRoutes from "./centroDeCusto.route"; 
import projetoRoutes from "./projeto.route"; 
import historicoPadraoRoutes from "./historicoPadrao.route"; 
import planilhaDoOrcamentoRoutes from "./planilhaDoOrcamento.route"; 
import estruturaDoOrcamentoRoutes from "./estruturaDoOrcamento.route"; 
import funcaoDePrevisaoRoutes from "./funcaoDePrevisao.route"; 
import indicadorRoutes from "./indicador.route"; 
import registroDeIndicadorRoutes from "./registroDeIndicador.route"; 
import lancamentoContabilRoutes from "./lancamentoContabil.route"; 
import partidaDoLancamentoRoutes from "./partidaDoLancamento.route"; 
import usuarioDoEstabelecimentoRoutes from "./usuarioDoEstabelecimento.route"; 
import tabelaMoedaRoutes from "./tabelaMoeda.route"; 
import cotacaoMoedaRoutes from "./cotacaoMoeda.route"; 
/** 
 * Define as rotas da aplicação 
 * @param app Instância do aplicação Express 
 */ 
export function setRoutes(app: Application) { 

  roleRoutes(app); 
  userRoutes(app); 
  tenantCredentialRoutes(app); 
  tenantRoutes(app); 
  tenantDirectoryRoutes(app);
  userDirectoryRoutes(app);
  applicationRoutes(app); 
  consultaRoutes(app); 

  empreendimentoRoutes(app); 

  estabelecimentoRoutes(app); 

  areaDeNegocioRoutes(app); 

  planoDeContasRoutes(app); 

  centroDeCustoRoutes(app); 

  projetoRoutes(app); 

  historicoPadraoRoutes(app); 

  planilhaDoOrcamentoRoutes(app); 

  estruturaDoOrcamentoRoutes(app); 

  funcaoDePrevisaoRoutes(app); 

  indicadorRoutes(app); 

  registroDeIndicadorRoutes(app); 

  lancamentoContabilRoutes(app); 

  partidaDoLancamentoRoutes(app); 

  usuarioDoEstabelecimentoRoutes(app); 

  tabelaMoedaRoutes(app); 

  cotacaoMoedaRoutes(app); 

}
