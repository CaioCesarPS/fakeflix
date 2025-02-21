import { Module } from '@nestjs/common';
import { PrismaService } from './persistence/prisma/prisma.service';
import { ContentController } from './http/rest/controller/content.controller';
import { ContentManagementService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { ContentRepository } from './persistence/repository/content.repository';
import { ConfigModule } from './infra/module/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [ContentController],
  providers: [
    PrismaService,
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
  ],
})
export class AppModule {}
