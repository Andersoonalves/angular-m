import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularMService } from '../../angular.m.service';
import { EntityComponent } from '../../meta/entity.component';
import { FlashMessageService } from '../router/flash.message.service';
import { TitleCase } from '../../pipes/titlecase.pipe';


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<div 
            *ngFor="let property of entity.mountProperties()" 
            [mgProperty]="'table_cell'" [property]="property"></div>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class EntityLineComponent extends EntityComponent {

    constructor(private router: Router, private flash: FlashMessageService, 
            private angularm: AngularMService) {
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
            this.angularm.delete(this.entity.entityType.singular, this.entity.key);
            let entityTypeName = TitleCase.toTitleCase(this.entity.entityType.singular);
            this.flash.changeMessage(`${entityTypeName} was successfully destroyed.`);
        }
        return false;
    }
}
