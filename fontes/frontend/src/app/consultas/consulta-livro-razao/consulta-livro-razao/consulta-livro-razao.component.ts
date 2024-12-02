import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ConsultaFactoryService } from 'app/shared/services/consulta-factory.service';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-consulta-livro-razao',
  templateUrl: './consulta-livro-razao.component.html',
  styleUrls: ['./consulta-livro-razao.component.scss']
})
export class ConsultaLivroRazaoComponent {

  JSONURL: string = environment.consultaLivroRazaoJSONPath;// Campo que é alterável, o nome do campo "variations"+"JSONPATH". 
  /** 
   * Subject responsável por remover os observadores que estão rodando na pagina no momento do componente ser deletado. 
   */ 
  private ngUnsubscribe = new Subject(); 

  @ViewChild('placeToRender', { read: ViewContainerRef }) target!: ViewContainerRef; 

  constructor( 
    private consultaFactory: ConsultaFactoryService,
  ) { } 

  ngAfterViewInit(): void { 
    this.consultaFactory.createList(this.target, this.JSONURL); 
  } 

  ngOnDestroy(): void { 
    this.ngUnsubscribe.next(null);

    this.ngUnsubscribe.complete(); 
  } 
}
