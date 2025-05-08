import { Entity, type IResult, ok } from "@ask-ell/core";
import { type INestApplication } from "@nestjs/common";
import {
  DocumentBuilder,
  type OpenAPIObject,
  SwaggerModule,
} from "@nestjs/swagger";
import { ISwaggerConfigurationState } from "./swagger-configuration.state.inteface";
import { ISwaggerConfiguration } from "./swagger-configuration.inteface";

export class SwaggerConfiguration<T>
  extends Entity<ISwaggerConfigurationState>
  implements ISwaggerConfiguration<T>
{
  checkStateValidity(_newState: ISwaggerConfigurationState): IResult<void> {
    return ok();
  }

  apply(application: INestApplication<T>): void {
    const { title } = this.getSnapshot();
    const documentBuilder = new DocumentBuilder().setTitle(title).build();
    const documentFactory = (): OpenAPIObject =>
      SwaggerModule.createDocument(application, documentBuilder);
    SwaggerModule.setup("/swagger", application, documentFactory, {
      jsonDocumentUrl: "/swagger/json",
    });
  }
}
