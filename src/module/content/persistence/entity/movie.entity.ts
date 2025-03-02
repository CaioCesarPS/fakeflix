import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Content } from './content.entity';
import { Video } from './video.entity';
import { Thumbnail } from './thumbnail';
import { DefaultEntity } from '@contentModule/infra/module/typeorm/entity/default.entity';

@Entity({ name: 'Movie' })
export class Movie extends DefaultEntity<Movie> {
  @OneToOne(() => Video, (video) => video.movie, {
    cascade: true,
  })
  video: Video;

  @OneToOne(() => Content, (content) => content.movie)
  @JoinColumn()
  content: Content;

  @Column({ type: 'float', nullable: true })
  externalRating: number | null;

  @OneToOne(() => Thumbnail, {
    cascade: true,
  })
  @JoinColumn()
  thumbnail: Thumbnail;
}