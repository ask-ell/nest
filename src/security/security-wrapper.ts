import { INestApplication } from "@nestjs/common";

import { configureCsurf } from "./csurf";

export class SecurityWrapper {
  static wrap(application: INestApplication): void {
    configureCsurf(application);
  }
}
