import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanoDeContas } from "app/modules/plano-de-contas/shared/plano-de-contas.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PlanoDeContasService extends BaseResourceService<PlanoDeContas> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/plano-de-contas"; 

    super(url, injector, PlanoDeContas.fromJson) 
  } 
}
