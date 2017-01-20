export const ENTITY_TYPE_CONFIGURATION: any[] =
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
