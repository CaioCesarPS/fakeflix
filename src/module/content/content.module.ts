import { Module } from '@nestjs/common';
import { ContentManagementService } from './core/service/content-management.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { MediaPlayerController } from './http/rest/controller/media-player.controller';
import { VideoUploadController } from './http/rest/controller/video-upload.controller';
import { ConfigModule } from '../shared/module/config/config.module';
import { ExternalMovieClient } from './http/client/external-movie-rating.client';
import { HttpClient } from './infra/http/client/http.client';
import { PersistenceModule } from './persistence/persistence.module';
import { ContentRepository } from './persistence/repository/content.repository';
import { VideoRepository } from './persistence/repository/video.repository';

@Module({
  imports: [PersistenceModule.forRoot(), ConfigModule.forRoot()],
  controllers: [VideoUploadController, MediaPlayerController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
    ExternalMovieClient,
    HttpClient,
  ],
})
export class ContentModule {}
