import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { type INestApplication } from '@nestjs/common'

import { SecurityWrapper } from './modules/security/security-wrapper'
import { SwaggerConfiguration } from './modules/swagger/swagger-configuration'
import { NestLogger } from './modules/logger/logger'

describe(SecurityWrapper.name, () => {
  let application: INestApplication

  beforeEach(async (): Promise<void> => {
    application = await NestFactory.create(class TestAppModule {})
  })

  it('Should logger works', () => {
    new NestLogger('Test').info('Hello world')
  })

  it('Should security wrapper works', async (): Promise<void> => {
    SecurityWrapper.wrap(application)
  })

  it('Should swagger configuration works', () => {
    new SwaggerConfiguration({
      title: 'My application'
    }).apply(application)
  })
})
