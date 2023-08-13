import { Test, TestingModule } from '@nestjs/testing';
import { Libs/authService } from './libs/auth.service';

describe('Libs/authService', () => {
  let service: Libs/authService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Libs/authService],
    }).compile();

    service = module.get<Libs/authService>(Libs/authService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
