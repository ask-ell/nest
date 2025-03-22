import { INestApplication } from "@nestjs/common";
import cookieParser from "cookie-parser";
import csurf from "csurf";

export function configureCsurf(application: INestApplication): void {
  application.use(cookieParser());
  application.use(csurf({ cookie: true }));
}
