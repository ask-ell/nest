import { IEntity } from "@ask-ell/core";
import { INestApplication } from "@nestjs/common";

import { ISwaggerConfigurationState } from "./swagger-configuration.state.inteface";

export interface ISwaggerConfiguration<T>
  extends IEntity<ISwaggerConfigurationState> {
  apply(application: INestApplication<T>): void;
}
