import { Entity, type IResult, ok } from "@ask-ell/core";
import { type INestApplication } from "@nestjs/common";
import {
  DocumentBuilder,
  type OpenAPIObject,
  SwaggerModule,
} from "@nestjs/swagger";

interface SwaggerConfigurationState {
  title: string;
}

export class SwaggerConfiguration<T> extends Entity<SwaggerConfigurationState> {
  checkStateValidity(_newState: SwaggerConfigurationState): IResult<void> {
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
