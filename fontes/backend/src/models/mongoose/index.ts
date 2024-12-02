import { Mongoose } from "mongoose"; 
import userModel from "./user.model";
import roleModel from "./role.model";
import orderModel from "./order.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
import userRoleModel from "./userRole.model";
import componentStructureModel from "./componentStructure.model";
import componentStructureRoleModel from "./componentStructureRole.model";

import empreendimentoModel from "./empreendimento.model"; 
import estabelecimentoModel from "./estabelecimento.model"; 
import areaDeNegocioModel from "./areaDeNegocio.model"; 
import planoDeContasModel from "./planoDeContas.model"; 
import centroDeCustoModel from "./centroDeCusto.model"; 
import projetoModel from "./projeto.model"; 
import historicoPadraoModel from "./historicoPadrao.model"; 
import planilhaDoOrcamentoModel from "./planilhaDoOrcamento.model"; 
import estruturaDoOrcamentoModel from "./estruturaDoOrcamento.model"; 
import funcaoDePrevisaoModel from "./funcaoDePrevisao.model"; 
import indicadorModel from "./indicador.model"; 
import registroDeIndicadorModel from "./registroDeIndicador.model"; 
import lancamentoContabilModel from "./lancamentoContabil.model"; 
import partidaDoLancamentoModel from "./partidaDoLancamento.model"; 
import usuarioDoEstabelecimentoModel from "./usuarioDoEstabelecimento.model"; 
import tabelaMoedaModel from "./tabelaMoeda.model"; 
import cotacaoMoedaModel from "./cotacaoMoeda.model"; 

export default async function setModels(mongooseConnection: Mongoose) { 

  const user = userModel(mongooseConnection); 
  const role = roleModel(mongooseConnection); 
  const userRole = userRoleModel(mongooseConnection); 
  const functionSystem = functionSystemModel(mongooseConnection); 
  const functionSystemRole = functionSystemRoleModel(mongooseConnection); 
  const componentStructure = componentStructureModel(mongooseConnection); 
  const componentStructureRole = componentStructureRoleModel(mongooseConnection); 


  const empreendimento = empreendimentoModel(mongooseConnection); 


  const estabelecimento = estabelecimentoModel(mongooseConnection); 


  const areaDeNegocio = areaDeNegocioModel(mongooseConnection); 


  const planoDeContas = planoDeContasModel(mongooseConnection); 


  const centroDeCusto = centroDeCustoModel(mongooseConnection); 


  const projeto = projetoModel(mongooseConnection); 


  const historicoPadrao = historicoPadraoModel(mongooseConnection); 


  const planilhaDoOrcamento = planilhaDoOrcamentoModel(mongooseConnection); 


  const estruturaDoOrcamento = estruturaDoOrcamentoModel(mongooseConnection); 


  const funcaoDePrevisao = funcaoDePrevisaoModel(mongooseConnection); 


  const indicador = indicadorModel(mongooseConnection); 


  const registroDeIndicador = registroDeIndicadorModel(mongooseConnection); 


  const lancamentoContabil = lancamentoContabilModel(mongooseConnection); 


  const partidaDoLancamento = partidaDoLancamentoModel(mongooseConnection); 


  const usuarioDoEstabelecimento = usuarioDoEstabelecimentoModel(mongooseConnection); 


  const tabelaMoeda = tabelaMoedaModel(mongooseConnection); 


  const cotacaoMoeda = cotacaoMoedaModel(mongooseConnection); 


  const models = { 
    user, 
    role, 
    userRole, 
    functionSystem, 
    functionSystemRole, 
    componentStructure, 
    componentStructureRole, 
    empreendimento,
    estabelecimento,
    areaDeNegocio,
    planoDeContas,
    centroDeCusto,
    projeto,
    historicoPadrao,
    planilhaDoOrcamento,
    estruturaDoOrcamento,
    funcaoDePrevisao,
    indicador,
    registroDeIndicador,
    lancamentoContabil,
    partidaDoLancamento,
    usuarioDoEstabelecimento,
    tabelaMoeda,
    cotacaoMoeda,
  } 


  return models; 
} 
