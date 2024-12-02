import { ModelStatic, Sequelize } from "sequelize"; 
import userModel from "./user.model";
import roleModel from "./role.model";
import userRoleModel from "./userRole.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
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

export default async function setModels(sequelize: Sequelize) { 

  const user = userModel(sequelize); 
  const role = roleModel(sequelize); 
  const userRole = userRoleModel(sequelize); 
  const functionSystem = functionSystemModel(sequelize); 
  const functionSystemRole = functionSystemRoleModel(sequelize); 
  const componentStructure = componentStructureModel(sequelize); 
  const componentStructureRole = componentStructureRoleModel(sequelize); 

  //Relação de muitos pra muitos de User para Role 
  user.belongsToMany(role, {through: userRole}); 
  role.belongsToMany(user, {through: userRole}); 

  //Relação de muitos pra muitos entre Role e FunctionsSystem 
  role.belongsToMany(functionSystem, { through: functionSystemRole }); 
  functionSystem.belongsToMany(role, { through: functionSystemRole }); 
  //Relação de muitos para muitos entre ComponentStructure e Role 
  componentStructure.belongsToMany(role, {through: componentStructureRole}); 
  role.belongsToMany(componentStructure, {through: componentStructureRole}); 

  const empreendimento = empreendimentoModel(sequelize); 


  const estabelecimento = estabelecimentoModel(sequelize); 


  const areaDeNegocio = areaDeNegocioModel(sequelize); 


  const planoDeContas = planoDeContasModel(sequelize); 


  const centroDeCusto = centroDeCustoModel(sequelize); 


  const projeto = projetoModel(sequelize); 


  const historicoPadrao = historicoPadraoModel(sequelize); 


  const planilhaDoOrcamento = planilhaDoOrcamentoModel(sequelize); 


  const estruturaDoOrcamento = estruturaDoOrcamentoModel(sequelize); 


  const funcaoDePrevisao = funcaoDePrevisaoModel(sequelize); 


  const indicador = indicadorModel(sequelize); 


  const registroDeIndicador = registroDeIndicadorModel(sequelize); 


  const lancamentoContabil = lancamentoContabilModel(sequelize); 


  const partidaDoLancamento = partidaDoLancamentoModel(sequelize); 


  const usuarioDoEstabelecimento = usuarioDoEstabelecimentoModel(sequelize); 


  const tabelaMoeda = tabelaMoedaModel(sequelize); 


  const cotacaoMoeda = cotacaoMoedaModel(sequelize); 


  tabelaMoeda.hasOne(empreendimento, {foreignKey: "moedaBase", as: "ALIASmoedaBaseALIASempreendimento"}); 
  empreendimento.belongsTo(tabelaMoeda, {foreignKey: "moedaBase", as: "ALIASmoedaBaseALIASempreendimento"}); 

  empreendimento.hasMany(estabelecimento, {foreignKey: "Empreendimento", as: "ALIASEstabelecimentosALIASempreendimentoALIAS"}); 
  estabelecimento.belongsTo(empreendimento, {foreignKey: "Estabelecimentos", as: "ALIASEstabelecimentosALIASempreendimentoALIAS"}); 

  areaDeNegocio.hasOne(estabelecimento, {foreignKey: "areaDeNegocio", as: "ALIASareaDeNegocioALIASestabelecimento"}); 
  estabelecimento.belongsTo(areaDeNegocio, {foreignKey: "areaDeNegocio", as: "ALIASareaDeNegocioALIASestabelecimento"}); 

  empreendimento.hasOne(planoDeContas, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASplanoDeContas"}); 
  planoDeContas.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASplanoDeContas"}); 

  empreendimento.hasOne(centroDeCusto, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAScentroDeCusto"}); 
  centroDeCusto.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAScentroDeCusto"}); 

  empreendimento.hasOne(projeto, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASprojeto"}); 
  projeto.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASprojeto"}); 

  empreendimento.hasOne(historicoPadrao, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAShistoricoPadrao"}); 
  historicoPadrao.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAShistoricoPadrao"}); 

  planoDeContas.hasOne(historicoPadrao, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIAShistoricoPadrao"}); 
  historicoPadrao.belongsTo(planoDeContas, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIAShistoricoPadrao"}); 

  planoDeContas.hasOne(historicoPadrao, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIAShistoricoPadrao"}); 
  historicoPadrao.belongsTo(planoDeContas, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIAShistoricoPadrao"}); 

  estabelecimento.hasOne(planilhaDoOrcamento, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASplanilhaDoOrcamento"}); 
  planilhaDoOrcamento.belongsTo(estabelecimento, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASplanilhaDoOrcamento"}); 

  planilhaDoOrcamento.hasMany(estruturaDoOrcamento, {foreignKey: "PlanilhaDoOrcamento", as: "ALIASEstruturaDoOrcamentoALIASplanilhaDoOrcamentoALIAS"}); 
  estruturaDoOrcamento.belongsTo(planilhaDoOrcamento, {foreignKey: "EstruturaDoOrcamento", as: "ALIASEstruturaDoOrcamentoALIASplanilhaDoOrcamentoALIAS"}); 

  funcaoDePrevisao.hasOne(estruturaDoOrcamento, {foreignKey: "funcaoPrevisao", as: "ALIASfuncaoPrevisaoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(funcaoDePrevisao, {foreignKey: "funcaoPrevisao", as: "ALIASfuncaoPrevisaoALIASestruturaDoOrcamento"}); 

  planoDeContas.hasOne(estruturaDoOrcamento, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(planoDeContas, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIASestruturaDoOrcamento"}); 

  planoDeContas.hasOne(estruturaDoOrcamento, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(planoDeContas, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIASestruturaDoOrcamento"}); 

  historicoPadrao.hasOne(estruturaDoOrcamento, {foreignKey: "historicoPadrao", as: "ALIAShistoricoPadraoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(historicoPadrao, {foreignKey: "historicoPadrao", as: "ALIAShistoricoPadraoALIASestruturaDoOrcamento"}); 

  centroDeCusto.hasOne(estruturaDoOrcamento, {foreignKey: "centroDeCusto", as: "ALIAScentroDeCustoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(centroDeCusto, {foreignKey: "centroDeCusto", as: "ALIAScentroDeCustoALIASestruturaDoOrcamento"}); 

  projeto.hasOne(estruturaDoOrcamento, {foreignKey: "projeto", as: "ALIASprojetoALIASestruturaDoOrcamento"}); 
  estruturaDoOrcamento.belongsTo(projeto, {foreignKey: "projeto", as: "ALIASprojetoALIASestruturaDoOrcamento"}); 

  empreendimento.hasOne(funcaoDePrevisao, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASfuncaoDePrevisao"}); 
  funcaoDePrevisao.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASfuncaoDePrevisao"}); 

  empreendimento.hasOne(indicador, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASindicador"}); 
  indicador.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASindicador"}); 

  empreendimento.hasOne(registroDeIndicador, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASregistroDeIndicador"}); 
  registroDeIndicador.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIASregistroDeIndicador"}); 

  indicador.hasOne(registroDeIndicador, {foreignKey: "indicador", as: "ALIASindicadorALIASregistroDeIndicador"}); 
  registroDeIndicador.belongsTo(indicador, {foreignKey: "indicador", as: "ALIASindicadorALIASregistroDeIndicador"}); 

  estabelecimento.hasOne(lancamentoContabil, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASlancamentoContabil"}); 
  lancamentoContabil.belongsTo(estabelecimento, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASlancamentoContabil"}); 

  estruturaDoOrcamento.hasOne(lancamentoContabil, {foreignKey: "EstruturaDoOrcamento", as: "ALIASEstruturaDoOrcamentoALIASlancamentoContabil"}); 
  lancamentoContabil.belongsTo(estruturaDoOrcamento, {foreignKey: "EstruturaDoOrcamento", as: "ALIASEstruturaDoOrcamentoALIASlancamentoContabil"}); 

  lancamentoContabil.hasMany(partidaDoLancamento, {foreignKey: "LancamentoContabil", as: "ALIASPartidasdoLancamentoALIASlancamentoContabilALIAS"}); 
  partidaDoLancamento.belongsTo(lancamentoContabil, {foreignKey: "PartidasdoLancamento", as: "ALIASPartidasdoLancamentoALIASlancamentoContabilALIAS"}); 

  lancamentoContabil.hasOne(partidaDoLancamento, {foreignKey: "lancamentoContabil", as: "ALIASlancamentoContabilALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(lancamentoContabil, {foreignKey: "lancamentoContabil", as: "ALIASlancamentoContabilALIASpartidaDoLancamento"}); 

  historicoPadrao.hasOne(partidaDoLancamento, {foreignKey: "historicoPadrao", as: "ALIAShistoricoPadraoALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(historicoPadrao, {foreignKey: "historicoPadrao", as: "ALIAShistoricoPadraoALIASpartidaDoLancamento"}); 

  centroDeCusto.hasOne(partidaDoLancamento, {foreignKey: "centroDeCusto", as: "ALIAScentroDeCustoALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(centroDeCusto, {foreignKey: "centroDeCusto", as: "ALIAScentroDeCustoALIASpartidaDoLancamento"}); 

  projeto.hasOne(partidaDoLancamento, {foreignKey: "projeto", as: "ALIASprojetoALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(projeto, {foreignKey: "projeto", as: "ALIASprojetoALIASpartidaDoLancamento"}); 

  planoDeContas.hasOne(partidaDoLancamento, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(planoDeContas, {foreignKey: "contaDebito", as: "ALIAScontaDebitoALIASpartidaDoLancamento"}); 

  planoDeContas.hasOne(partidaDoLancamento, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(planoDeContas, {foreignKey: "contaCredito", as: "ALIAScontaCreditoALIASpartidaDoLancamento"}); 

  tabelaMoeda.hasOne(partidaDoLancamento, {foreignKey: "moedaIndexada", as: "ALIASmoedaIndexadaALIASpartidaDoLancamento"}); 
  partidaDoLancamento.belongsTo(tabelaMoeda, {foreignKey: "moedaIndexada", as: "ALIASmoedaIndexadaALIASpartidaDoLancamento"}); 

  estabelecimento.hasOne(usuarioDoEstabelecimento, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASusuarioDoEstabelecimento"}); 
  usuarioDoEstabelecimento.belongsTo(estabelecimento, {foreignKey: "estabelecimento", as: "ALIASestabelecimentoALIASusuarioDoEstabelecimento"}); 

  empreendimento.hasOne(cotacaoMoeda, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAScotacaoMoeda"}); 
  cotacaoMoeda.belongsTo(empreendimento, {foreignKey: "empreendimento", as: "ALIASempreendimentoALIAScotacaoMoeda"}); 

  tabelaMoeda.hasOne(cotacaoMoeda, {foreignKey: "moeda", as: "ALIASmoedaALIAScotacaoMoeda"}); 
  cotacaoMoeda.belongsTo(tabelaMoeda, {foreignKey: "moeda", as: "ALIASmoedaALIAScotacaoMoeda"}); 
  await sequelize.sync();

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
