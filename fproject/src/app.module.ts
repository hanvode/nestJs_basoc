import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
