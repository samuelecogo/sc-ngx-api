import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ImageController} from "./image/image.controller";
import {ImageService} from "./image/image.service";
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";
import configuration from "./configuration";

@Module({
  imports: [HttpModule, ConfigModule.forRoot({load: [configuration]})],
  controllers: [AppController, ImageController],
  providers: [AppService, ImageService],
})
export class AppModule {}
