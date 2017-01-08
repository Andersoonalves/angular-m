import { Injectable } from '@angular/core';

import { MetadataService } from '../meta/metadata.service';
import { EntityType } from '../meta/entity.type';
import { AbstractService } from '../meta/abstract.service';

import { ClientService } from './client.service';
import { ProductService } from './product.service';
import { AlunoService } from './aluno.service';

// TODO move to a GUI Module
import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';

@Injectable()
export class DomainService {

    private entityTypes: { [name: string]: EntityType; } = {};
    private services: { [entitytype: string]: AbstractService<any>; } = {};

    constructor(
        private metadata: MetadataService,
        private productService: ProductService,
        private clientService: ClientService,
        private alunoService: AlunoService
    ) {
        this.addService(productService);
        this.addService(clientService);
        this.addService(alunoService);

        this.metadata.addRule('entitytypes_menu', '*', EntityTypeRouterComponent);

    }

    findEntityType(name: string): Promise<EntityType> {
        let entityType = this.entityTypes[name];
        if (entityType) {
            return Promise.resolve(entityType);
        }
        throw `EntityType not found for name ${name}`;
    }

    listEntityTypes(): EntityType[] {
        return Object.keys(this.entityTypes).map(key => this.entityTypes[key]);
    }

    addService(service: AbstractService<any>) {
        let entityType = service.describeEntityType();
        this.addEntityType(entityType);
        this.services[entityType.name] = service;
    }

    addEntityType(entityType: EntityType) {
        this.entityTypes[entityType.name] = entityType;
    }

    getService(entitytype: string): AbstractService<any> {
        return this.services[entitytype];
    }
}
