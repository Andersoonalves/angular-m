import { Injectable } from '@angular/core';

import { AbstractService } from '../meta/abstract.service';
import { EntityType } from '../meta/entity.type';

export class Aluno {
  constructor(public id: number, public nome: string, public matricula: number) { }
}

let ALUNOS = [
  new Aluno(1, 'John', 123),
  new Aluno(2, 'Mary', 234),
  new Aluno(3, 'Bill', 345),
];

let alunosPromise = Promise.resolve(ALUNOS);

@Injectable() // TODO try moving this decorator to superclass
export class AlunoService extends AbstractService<Aluno> {

    listAll() {
        return alunosPromise;
    }

    findUnique(id: number | string) {
        return alunosPromise
            .then(alunos => alunos.find(aluno => aluno.id === +id));
    }

    describeEntityType(): EntityType {
        let entitytype = new EntityType('alunos', 'Alunos')
          .property('id', 'number')
          .property('nome', 'string')
          .property('matricula', 'number');
        return entitytype;
    }
}
