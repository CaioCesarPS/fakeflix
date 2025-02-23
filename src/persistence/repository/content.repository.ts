import { Inject, Injectable } from "@nestjs/common";
import { Content } from "../entity/content.entity";
import { DataSource } from "typeorm";
import { DefaultTypeOrmRepository } from "@src/infra/module/typeorm/repository/default-typeorm.repository";

@Injectable()
export class ContentRepository extends DefaultTypeOrmRepository<Content> {
  constructor(@Inject(DataSource) readonly dataSource: DataSource) {
    super(Content, dataSource)
  }
}