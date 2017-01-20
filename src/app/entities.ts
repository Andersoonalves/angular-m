import { et } from './meta/entity.type';


export const ENTITY_TYPE_CONFIGURATION: any[] =
[
    et('aluno', 'alunos', { id: 'nome' } )
        .pt('nome', 'string')
        .pt('matricula', 'number'),
    et('client', 'clients', { id: 'id' } )
        .pt('id', 'number')
        .pt('name', 'string')    
]

export const ENTITY_TYPE_CONFIGURATION2: any[] =
[
    {
        'singular': 'aluno',
        'plural': 'alunos',
        'tags': {
            'id': 'nome'
        },
        'properties': [
            {
                'name': 'nome',
                'type': 'string'
            },
            {
                'name': 'matricula',
                'type': 'number'
            }
        ]
    },
    {
        'singular': 'client',
        'plural': 'clients',
        'tags': {
            'id': 'id'
        },
        'properties': [
            {
                'name': 'id',
                'type': 'number'
            },
            {
                'name': 'name',
                'type': 'string'
            }
        ]
    }
]
