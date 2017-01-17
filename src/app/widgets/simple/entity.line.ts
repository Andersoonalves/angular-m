import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EntityComponent } from '../../meta/entity.component';
import { FlashMessageService } from '../flash.message.service';

@Component({
    selector: 'tr [mgEntityTr]',
    template:
        `<div [mgForeachProperty]="'table_cell'" [entity]="entity"></div>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class EntityLineComponent extends EntityComponent {

    constructor(private router: Router, private flash: FlashMessageService) {
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
        return false;
    }
}
