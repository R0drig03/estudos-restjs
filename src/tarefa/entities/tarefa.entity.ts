import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
 

@Entity({ name: 'tarefas_n' })
export class Tarefa {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criado_em: Date; //PREENCHIDO AUTOMÁTICAMENTE

    @Column({ nullable: true })
    modificado_por: string;
    
    @Column({ nullable: false })
    expressao: string; 
    
    @Column({ nullable: false })
    comando: string;
    
    @Column({ nullable: false , default: () => '1'})
    status: number; //PREENCHIDO AUTOMÁTICAMENTE
}
