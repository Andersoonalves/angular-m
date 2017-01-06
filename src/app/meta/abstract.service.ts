import { EntityType } from './entity.type';

export abstract class AbstractService<T> {

    abstract listAll(): Promise<T[]>;
    abstract findUnique(id: number | string): Promise<T>;

    abstract describeEntityType(): EntityType;

}
