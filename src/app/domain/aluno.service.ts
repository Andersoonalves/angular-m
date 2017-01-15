import { EntityType, Entity } from '../meta/entity.type';
import { InMemoryService } from '../meta/inmemory.service';


let alunoEntityType =
    new EntityType('aluno', 'alunos', {id: 'nome'})
        .property('nome', 'string')
        .property('matricula', 'number');

export class Aluno extends Entity {
  constructor(public id: number, public nome: string, public matricula: number) {
      super(id, alunoEntityType);
  }
}

export class AlunoService extends InMemoryService {

    describeEntityType(): EntityType {
        return alunoEntityType;
    }
}
