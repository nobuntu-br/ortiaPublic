import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartidaDoLancamento } from "app/modules/partida-do-lancamento/shared/partida-do-lancamento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class PartidaDoLancamentoService extends BaseResourceService<PartidaDoLancamento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/partida-do-lancamento"; 

    super(url, injector, PartidaDoLancamento.fromJson) 
  } 
}
