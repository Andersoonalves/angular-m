import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TODO declare this dependency in just one file
import { SimpleModule }   from '../widgets/simple/simple.module';
import { PlainTextComponent }   from '../widgets/simple/plain';
import { BoldTextComponent }   from '../widgets/simple/bold';

// detail stuff
import { ForeachEntityTypeComponent } from './foreach.entity.type.component';
import { MetadataService } from './metadata.service';

@NgModule({
  imports:      [ SimpleModule ],
  declarations: [ ForeachEntityTypeComponent ],
  exports:      [ ForeachEntityTypeComponent],
  entryComponents: [
      PlainTextComponent,
      BoldTextComponent
  ]
})
export class MetaModule {

    static forRoot() {
        return {
            ngModule: MetaModule,
            providers: [ // singletons accross the whole app
              MetadataService
            ],
        };
    }
}
