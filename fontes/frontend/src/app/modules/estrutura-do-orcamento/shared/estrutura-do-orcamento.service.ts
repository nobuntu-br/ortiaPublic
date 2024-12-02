import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstruturaDoOrcamento } from "app/modules/estrutura-do-orcamento/shared/estrutura-do-orcamento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class EstruturaDoOrcamentoService extends BaseResourceService<EstruturaDoOrcamento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/estrutura-orcamento"; 

    super(url, injector, EstruturaDoOrcamento.fromJson) 
  } 
}
