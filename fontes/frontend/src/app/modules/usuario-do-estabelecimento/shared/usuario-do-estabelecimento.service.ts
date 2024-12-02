import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDoEstabelecimento } from "app/modules/usuario-do-estabelecimento/shared/usuario-do-estabelecimento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioDoEstabelecimentoService extends BaseResourceService<UsuarioDoEstabelecimento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/usuarios-do-estabelecimento"; 

    super(url, injector, UsuarioDoEstabelecimento.fromJson) 
  } 
}
