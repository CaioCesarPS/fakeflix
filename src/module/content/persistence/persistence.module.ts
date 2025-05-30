import { DynamicModule, Module } from '@nestjs/common';
import { ContentRepository } from './repository/content.repository';
import { MovieRepository } from './repository/movie.repository';
import { VideoRepository } from './repository/video.repository';
import { TypeOrmPersistenceModule } from '@contentModule/infra/module/typeorm/typeorm-persistence.module';
import { Content } from './entity/content.entity';
import { Movie } from './entity/movie.entity';
import { Thumbnail } from './entity/thumbnail';
import { Video } from './entity/video.entity';
import { TvShow } from './entity/tv-show.entity';
import { Episode } from './entity/episode.entity';

@Module({})
export class PersistenceModule {
  static forRoot(opts?: { migrations?: string[] }): DynamicModule {
    const { migrations } = opts || {};
    return {
      module: PersistenceModule,
      imports: [
        TypeOrmPersistenceModule.forRoot({
          migrations,
          entities: [Content, Movie, Thumbnail, Video, TvShow, Episode],
        }),
      ],
      providers: [ContentRepository, MovieRepository, VideoRepository],
      exports: [ContentRepository, MovieRepository, VideoRepository],
    };
  }
}
