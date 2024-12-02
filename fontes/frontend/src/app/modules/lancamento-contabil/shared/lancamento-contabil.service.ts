import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LancamentoContabil } from "app/modules/lancamento-contabil/shared/lancamento-contabil.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class LancamentoContabilService extends BaseResourceService<LancamentoContabil> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/lancamentos-contabeis"; 

    super(url, injector, LancamentoContabil.fromJson) 
  } 
}
