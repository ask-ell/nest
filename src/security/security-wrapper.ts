import { INestApplication } from "@nestjs/common";

import { configureCsurf } from "./csurf";

export class SecurityWrapper {
  static wrap(applicationInstance: INestApplication): void {
    configureCsurf(applicationInstance);
  }
}
