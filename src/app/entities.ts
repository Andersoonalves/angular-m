import { et, AngularMService } from './angular.m.service';

export let describeDomain = (angularm: AngularMService) => {
    angularm.describeDomain(
        et('aluno', 'alunos', { id: 'nome' } )
            .pt('nome', 'string')
            .pt('matricula', 'number'),
        et('client', 'clients', { id: 'id' } )
            .pt('id', 'number')
            .pt('name', 'string')
    );
};
