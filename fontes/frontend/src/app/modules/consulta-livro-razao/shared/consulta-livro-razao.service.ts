import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaLivroRazao } from "app/modules/consulta-livro-razao/shared/consulta-livro-razao.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ConsultaLivroRazaoService extends BaseResourceService<ConsultaLivroRazao> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/consulta-livro-razao"; 

    super(url, injector, ConsultaLivroRazao.fromJson) 
  } 
}
