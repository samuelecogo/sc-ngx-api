import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import {ImageController} from "./controllers/image.controller";
import {ImageService} from "./services/image.service";
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";
import configuration from "./configuration";

@Module({
  imports: [HttpModule, ConfigModule.forRoot({load: [configuration]})],
  controllers: [AppController, ImageController],
  providers: [AppService, ImageService],
})
export class AppModule {}
