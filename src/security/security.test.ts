import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { INestApplication } from "@nestjs/common";
import { SecurityWrapper } from "./security-wrapper";

describe(SecurityWrapper.name, () => {
  it("Should security wrapper works", async (): Promise<void> => {
    const application: INestApplication = await NestFactory.create(
      class TestAppModule {}
    );
    SecurityWrapper.wrap(application);
  });
});
