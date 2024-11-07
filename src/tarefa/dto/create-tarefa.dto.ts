import { ApiProperty } from "@nestjs/swagger"

export class CreateTarefaDto {
    @ApiProperty()
    modificado_por: string

    @ApiProperty()
    expressao: string

    @ApiProperty()
    comando: string
}
