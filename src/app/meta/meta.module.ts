import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// parts module
import { SimpleModule }   from '../widgets/simple/simple.module';

// detail stuff
import { ForeachEntityTypeComponent } from './foreach.entity.type.component';
import { DynamicTypeBuilder } from './type.builder';
import { DynamicTemplateBuilder } from './template.builder';
import { MetadataService } from './metadata.service';

@NgModule({
  imports:      [ SimpleModule ],
  declarations: [ ForeachEntityTypeComponent ],
  exports:      [ ForeachEntityTypeComponent],
})
export class MetaModule {

    static forRoot() {
        return {
            ngModule: MetaModule,
            providers: [ // singletons accross the whole app
              DynamicTemplateBuilder,
              DynamicTypeBuilder,
              MetadataService
            ],
        };
    }
}
