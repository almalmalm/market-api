import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI)],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
