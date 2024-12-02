import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanilhaDoOrcamento } from "app/modules/planilha-do-orcamento/shared/planilha-do-orcamento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PlanilhaDoOrcamentoService extends BaseResourceService<PlanilhaDoOrcamento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/planilha-de-orcamento"; 

    super(url, injector, PlanilhaDoOrcamento.fromJson) 
  } 
}
