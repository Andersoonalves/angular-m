import { EntityType, Entity } from '../meta/entity.type';
import { InMemoryService } from '../meta/inmemory.service';

export class Aluno extends Entity {
  constructor(public id: number, public nome: string, public matricula: number) {
      super(id);
  }
}

export class AlunoService extends InMemoryService<Aluno> {

    constructor() {
        super();
        this.data.push(new Aluno(1, 'John', 123));
        this.data.push(new Aluno(2, 'Mary', 234));
        this.data.push(new Aluno(3, 'Bill', 345));
    }

    describeEntityType(): EntityType {
        let entitytype = new EntityType('aluno', 'alunos', 'Alunos')
//          .property('id', 'number')
          .property('Nome', 'string')
          .property('Matricula', 'number');
        return entitytype;
    }
}
