import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DomainService } from './domain.service';
import { ClientService } from './client.service';
import { ProductService } from './product.service';
import { AlunoService } from './aluno.service';

// TODO move to a GUI Module
import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  entryComponents: [],
  providers: [
    DomainService,
    ClientService,
    ProductService,
    AlunoService
  ]
})
export class DomainModule {}
