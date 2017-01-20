import { et, AngularMService } from './angular.m.service';
import { mem } from './domain/inmemory.dao';

export let describeDomain = (angularm: AngularMService) => {
    angularm.setupDomain(
        mem(et('aluno', 'alunos', { id: 'nome' } )
            .pt('nome', 'string')
            .pt('matricula', 'number')),
        mem(et('client', 'clients', { id: 'id' } )
            .pt('id', 'number')
            .pt('name', 'string'))
    );
};
