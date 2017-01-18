import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EntityComponent } from '../../meta/entity.component';
import { FlashMessageService } from '../flash.message.service';
import { DomainService } from '../../domain/domain.service';

import { TitleCase } from '../../pipes/titlecase.pipe';


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<div [mgForeachProperty]="'table_cell'" [entity]="entity"></div>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class EntityLineComponent extends EntityComponent {

    constructor(private router: Router, private flash: FlashMessageService,
            private domain: DomainService) {
        super();
    }

    show() {
        this.flash.clearMessage();
        this.router.navigate([this.entity.entityType.plural, this.entity.key]);
        return false;
    }

    edit() {
        this.flash.clearMessage();
        this.router.navigate([this.entity.entityType.plural, this.entity.key, 'edit']);
        return false;
    }

    destroy() {
        if (confirm('Are you sure?')) {
            this.domain.getService(this.entity.entityType.singular).delete(this.entity.key);
            let entityTypeName = TitleCase.toTitleCase(this.entity.entityType.singular);
            this.flash.changeMessage(`${entityTypeName} was successfully destroyed.`);
        }
        return false;
    }
}
