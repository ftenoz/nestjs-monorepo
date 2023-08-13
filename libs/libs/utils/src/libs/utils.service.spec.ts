import { Test, TestingModule } from '@nestjs/testing';
import { Libs/utilsService } from './libs/utils.service';

describe('Libs/utilsService', () => {
  let service: Libs/utilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Libs/utilsService],
    }).compile();

    service = module.get<Libs/utilsService>(Libs/utilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
