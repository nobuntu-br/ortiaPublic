import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class EmpreendimentoService extends BaseResourceService<Empreendimento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/empreendimento"; 

    super(url, injector, Empreendimento.fromJson) 
  } 
}
