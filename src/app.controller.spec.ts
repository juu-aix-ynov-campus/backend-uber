import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('return 2 cats', () => {
      expect(appController.get().length).toBe(2);
    });

    it('return Papou cat', () => {
      expect(appController.getById('1').name).toBe('Papou');
    });

    it('add a new cat', () => {
      expect(
        appController.add({
          name: 'Papou3',
          age: 3,
          breed: 'Marseillais',
          id: '3',
        }).name,
      ).toBe('Papou3');

      expect(appController.delete('3', null).name).toBe('Papou3');
    });

    it('delete Papou3 cat', () => {
      expect(appController.delete('2', null).name).toBe('Papou2');
      expect(appController.delete('3', null)).toBeUndefined();
    });
  });
});
