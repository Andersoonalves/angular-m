import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// detail stuff
import { ClientService } from './client.service';
import { ProductService } from './product.service';
import { AlunoService } from './aluno.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  entryComponents: []
})
export class DomainModule {

    static forRoot() {
        return {
            ngModule: DomainModule,
            providers: [ // singletons accross the whole app
              ClientService,
              ProductService,
              AlunoService
            ],
        };
    }
}
