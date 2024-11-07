import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
 

@Entity({ name: 'tarefas_n' }) //CONSIDERADA ESSA CLASSE UMA ENTIDADE
export class Tarefa {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @CreateDateColumn()
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

//OS DTOS SERVEM PARA INFORMAR QUAIS OS ATRIBUTOS REALMENTE DEVEM SER CONSIDARADOS NOS INPUT E OUTPUTS DE DADOS NOS ENDPOINTS
