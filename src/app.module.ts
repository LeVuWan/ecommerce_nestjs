import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://QuangVuLe:GWSeiS49VtOBzPPR@cluster0.ck8qg.mongodb.net/'),
  ConfigModule.forRoot({
    isGlobal: true
  }),
  UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
