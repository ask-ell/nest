import { type ILogger } from '@ask-ell/core'
import { Logger } from '@nestjs/common'

export class NestLogger extends Logger implements ILogger {
  info(...data: any[]): void {
    for (const line of data) {
      this.log(line)
    }
  }
}
