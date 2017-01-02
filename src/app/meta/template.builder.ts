import { Injectable } from '@angular/core';

import { EntityType } from './entity.type';

@Injectable()
export class DynamicTemplateBuilder {

    public prepareTemplate(entitytype: EntityType, useBold: boolean) {
      let tagName = useBold
        ? 'm-bold-text'
        : 'm-plain-text';

      return `<${tagName} [entitytype]="entitytype"></${tagName}><br>`;
    }
}
