import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './db.providers';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            const dataSource = await databaseProviders[0].useFactory();
            return {
                type: process.env.DB_TYPE as 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            };
        },
    })],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}