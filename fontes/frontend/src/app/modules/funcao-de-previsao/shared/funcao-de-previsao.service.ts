import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncaoDePrevisao } from "app/modules/funcao-de-previsao/shared/funcao-de-previsao.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FuncaoDePrevisaoService extends BaseResourceService<FuncaoDePrevisao> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/funcoes-de-previsao"; 

    super(url, injector, FuncaoDePrevisao.fromJson) 
  } 
}
