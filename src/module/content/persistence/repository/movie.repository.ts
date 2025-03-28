import { Inject, Injectable } from '@nestjs/common';
import { Movie } from '@contentModule/persistence/entity/movie.entity';
import { DataSource } from 'typeorm';
import { DefaultTypeOrmRepository } from '@contentModule/infra/module/typeorm/repository/default-typeorm.repository';

@Injectable()
export class MovieRepository extends DefaultTypeOrmRepository<Movie> {
  constructor(@Inject(DataSource) readonly dataSource: DataSource) {
    super(Movie, dataSource);
  }
}
