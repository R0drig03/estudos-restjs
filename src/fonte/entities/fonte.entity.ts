import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'fonte_test' })
export class Fonte {
    @PrimaryGeneratedColumn('increment')
    id: number;
}
