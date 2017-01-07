import { Component } from '@angular/core';

import { MetadataService } from './meta/metadata.service';
import { EntityTypeRouterComponent } from './widgets/router/entitytype.router';

import { ProductService } from './domain/product.service';
import { ClientService } from './domain/client.service';
import { AlunoService } from './domain/aluno.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Example Application';


  constructor(
      private metadata: MetadataService,
      private productService: ProductService,
      private clientService: ClientService,
      private alunoService: AlunoService
  ) {

    this.metadata.addService(productService);
    this.metadata.addService(clientService);
    this.metadata.addService(alunoService);

    this.defineRules();
  }

  defineRules() {
    this.metadata.addRule('entitytypes_menu', '*', EntityTypeRouterComponent);
  }

}
