import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TeachersModule } from './teachers/teachers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "postgres",
      host : 'localhost',
      port : 5432,
      username : "postgres",
      password : "root",
      database : "nest-demo",
      entities : [`${__dirname}/../dist/**/*.entity.js`],
      synchronize : true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TeachersModule,
    SubjectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
