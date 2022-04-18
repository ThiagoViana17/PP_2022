import { TypeOrmModule } from "@nestjs/typeorm";

const config = (pathOfFile:any):TypeOrmModule => {
    return(
        {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [pathOfFile + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }
    )
}

export default config;