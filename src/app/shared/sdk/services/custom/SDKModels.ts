/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Projeto } from '../../models/Projeto';
import { ProjetoCanvas } from '../../models/ProjetoCanvas';
import { ProjetoMySql } from '../../models/ProjetoMySql';
import { ProjetoCanvasMySql } from '../../models/ProjetoCanvasMySql';
import { MvpCanvasMySql } from '../../models/MvpCanvasMySql';
import { GanhoDorCanvasMySql } from '../../models/GanhoDorCanvasMySql';
import { PaginaValidacaoWeb } from '../../models/PaginaValidacaoWeb';
import { ItemValidacaoPagina } from '../../models/ItemValidacaoPagina';
import { RegistroInteresse } from '../../models/RegistroInteresse';
import { ProjetoExemplo } from '../../models/ProjetoExemplo';
import { Receita } from '../../models/Receita';
import { Container } from '../../models/Container';
import { Visitante } from '../../models/Visitante';
import { AnuncioAds } from '../../models/AnuncioAds';
import { CampanhaAds } from '../../models/CampanhaAds';
import { PalavraChaveAds } from '../../models/PalavraChaveAds';
import { Aplicacao } from '../../models/Aplicacao';
import { Atributo_entidade } from '../../models/Atributo_entidade';
import { Entidade } from '../../models/Entidade';
import { ModeloCampanhaAds } from '../../models/ModeloCampanhaAds';
import { Relacionamento_entidade } from '../../models/Relacionamento_entidade';
import { CampanhaAnuncioResultado } from '../../models/CampanhaAnuncioResultado';
import { CampanhaPalavraChaveResultado } from '../../models/CampanhaPalavraChaveResultado';
import { TelaWeb } from '../../models/TelaWeb';
import { TelaApp } from '../../models/TelaApp';
import { PalavraChaveRaiz } from '../../models/PalavraChaveRaiz';
import { PalavraChaveGoogle } from '../../models/PalavraChaveGoogle';
import { PalavraChaveEstatistica } from '../../models/PalavraChaveEstatistica';
import { PalavraGoogleProjeto } from '../../models/PalavraGoogleProjeto';
import { EtapaProjeto } from '../../models/EtapaProjeto';
import { MudancaEtapa } from '../../models/MudancaEtapa';
import { ProcessoNegocio } from '../../models/ProcessoNegocio';
import { ComponenteWeb } from '../../models/ComponenteWeb';
import { TelaComponenteWeb } from '../../models/TelaComponenteWeb';
import { TipoComponenteWeb } from '../../models/TipoComponenteWeb';
import { TipoExperiencia } from '../../models/TipoExperiencia';
import { IndicadorPerformanceProcesso } from '../../models/IndicadorPerformanceProcesso';
import { MedidaIndicadorProcesso } from '../../models/MedidaIndicadorProcesso';
import { RespostaMercado } from '../../models/RespostaMercado';
import { ConceitoProduto } from '../../models/ConceitoProduto';
import { ValorConceito } from '../../models/ValorConceito';
import { RecursoConceitoProduto } from '../../models/RecursoConceitoProduto';
import { Publico } from '../../models/Publico';
import { SetupCampanha } from '../../models/SetupCampanha';
import { EstatisticaMes } from '../../models/EstatisticaMes';
import { Semana } from '../../models/Semana';
import { TempoExecucao } from '../../models/TempoExecucao';
import { PlanoExecucao } from '../../models/PlanoExecucao';
import { DiaSemana } from '../../models/DiaSemana';
import { Contexto } from '../../models/Contexto';
import { ModeloTelaApp } from '../../models/ModeloTelaApp';
import { PaletaCor } from '../../models/PaletaCor';
import { PaletaAplicacao } from '../../models/PaletaAplicacao';
import { ComponenteApp } from '../../models/ComponenteApp';
import { ProcessoNegocioEtapaProjeto } from '../../models/ProcessoNegocioEtapaProjeto';
import { PaginaInstalacaoApp } from '../../models/PaginaInstalacaoApp';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Projeto: Projeto,
    ProjetoCanvas: ProjetoCanvas,
    ProjetoMySql: ProjetoMySql,
    ProjetoCanvasMySql: ProjetoCanvasMySql,
    MvpCanvasMySql: MvpCanvasMySql,
    GanhoDorCanvasMySql: GanhoDorCanvasMySql,
    PaginaValidacaoWeb: PaginaValidacaoWeb,
    ItemValidacaoPagina: ItemValidacaoPagina,
    RegistroInteresse: RegistroInteresse,
    ProjetoExemplo: ProjetoExemplo,
    Receita: Receita,
    Container: Container,
    Visitante: Visitante,
    AnuncioAds: AnuncioAds,
    CampanhaAds: CampanhaAds,
    PalavraChaveAds: PalavraChaveAds,
    Aplicacao: Aplicacao,
    Atributo_entidade: Atributo_entidade,
    Entidade: Entidade,
    ModeloCampanhaAds: ModeloCampanhaAds,
    Relacionamento_entidade: Relacionamento_entidade,
    CampanhaAnuncioResultado: CampanhaAnuncioResultado,
    CampanhaPalavraChaveResultado: CampanhaPalavraChaveResultado,
    TelaWeb: TelaWeb,
    TelaApp: TelaApp,
    PalavraChaveRaiz: PalavraChaveRaiz,
    PalavraChaveGoogle: PalavraChaveGoogle,
    PalavraChaveEstatistica: PalavraChaveEstatistica,
    PalavraGoogleProjeto: PalavraGoogleProjeto,
    EtapaProjeto: EtapaProjeto,
    MudancaEtapa: MudancaEtapa,
    ProcessoNegocio: ProcessoNegocio,
    ComponenteWeb: ComponenteWeb,
    TelaComponenteWeb: TelaComponenteWeb,
    TipoComponenteWeb: TipoComponenteWeb,
    TipoExperiencia: TipoExperiencia,
    IndicadorPerformanceProcesso: IndicadorPerformanceProcesso,
    MedidaIndicadorProcesso: MedidaIndicadorProcesso,
    RespostaMercado: RespostaMercado,
    ConceitoProduto: ConceitoProduto,
    ValorConceito: ValorConceito,
    RecursoConceitoProduto: RecursoConceitoProduto,
    Publico: Publico,
    SetupCampanha: SetupCampanha,
    EstatisticaMes: EstatisticaMes,
    Semana: Semana,
    TempoExecucao: TempoExecucao,
    PlanoExecucao: PlanoExecucao,
    DiaSemana: DiaSemana,
    Contexto: Contexto,
    ModeloTelaApp: ModeloTelaApp,
    PaletaCor: PaletaCor,
    PaletaAplicacao: PaletaAplicacao,
    ComponenteApp: ComponenteApp,
    ProcessoNegocioEtapaProjeto: ProcessoNegocioEtapaProjeto,
    PaginaInstalacaoApp: PaginaInstalacaoApp,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
