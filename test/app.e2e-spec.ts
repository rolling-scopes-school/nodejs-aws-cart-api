import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// import { randomUUID } from 'crypto';
// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { JWT_CONFIG } from 'src/constants';
import * as jwt from 'jsonwebtoken';
import { JWT_CONFIG } from './../src/constants';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ GET', () => {
    return request(app.getHttpServer()).get('/').expect(200);
  });

  it('/ping GET', () => {
    return request(app.getHttpServer()).get('/ping').expect(200);
  });

  it.skip('/api/auth/login POST without body and auth token', () => {
    return request(app.getHttpServer()).post('/api/auth/login').expect(401);
  });

  it.skip('/api/auth/login POST with body and without auth token', () => {
    return request(app.getHttpServer())
      .post('/api/auth/login')
      .send({
        name: 'testUser',
        email: 'test@mail.com',
        password: 'secret_password',
      })
      .expect(401);
  });

  it.skip('/api/auth/login POST with auth token', () => {
    const token = jwt.sign({ username: 'test' }, JWT_CONFIG.secret, {
      expiresIn: parseInt(JWT_CONFIG.expiresIn) * 60 * 60,
    });

    return request(app.getHttpServer())
      .post('/api/auth/login')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it.skip('/api/profile GET', () => {
    return request(app.getHttpServer()).get('/api/auth/login').expect(200);
  });

  it('/api/auth/register POST', () => {
    return request(app.getHttpServer())
      .post('/api/auth/register')
      .expect(201)
      .then((res) => {
        expect(res.body).toHaveProperty('token_type');
        expect(res.body).toHaveProperty('access_token');
      });
  });
});
