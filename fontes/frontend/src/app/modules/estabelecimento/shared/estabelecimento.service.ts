import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimento } from "app/modules/estabelecimento/shared/estabelecimento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService extends BaseResourceService<Estabelecimento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/estabelecimentos"; 

    super(url, injector, Estabelecimento.fromJson) 
  } 
}
