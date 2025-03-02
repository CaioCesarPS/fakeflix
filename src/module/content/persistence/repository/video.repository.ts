import { Inject, Injectable } from '@nestjs/common';
import { Video } from '@contentModule/persistence/entity/video.entity';
import { DataSource } from 'typeorm';
import { DefaultTypeOrmRepository } from '@contentModule/infra/module/typeorm/repository/default-typeorm.repository';

@Injectable()
export class VideoRepository extends DefaultTypeOrmRepository<Video> {
  constructor(@Inject(DataSource) readonly dataSource: DataSource) {
    super(Video, dataSource);
  }
}
