import { EntityType, Entity } from '../meta/entity.type';
import { InMemoryService } from '../meta/inmemory.service';


let alunoEntityType = 
    new EntityType('aluno', 'alunos', {id: "nome"})
        .property('nome', 'string')
        .property('matricula', 'number');

export class Aluno extends Entity {
  constructor(public id: number, public nome: string, public matricula: number) {
      super(id, alunoEntityType);
  }
}

export class AlunoService extends InMemoryService {

    constructor() {
        super();
        this.data.push(new Aluno(1, 'John', 123));
        this.data.push(new Aluno(2, 'Mary', 234));
        this.data.push(new Aluno(3, 'Bill', 345));
    }

    describeEntityType(): EntityType {
        return alunoEntityType;
    }
}
