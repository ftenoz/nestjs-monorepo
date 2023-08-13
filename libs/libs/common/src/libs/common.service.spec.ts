import { Test, TestingModule } from '@nestjs/testing';
import { Libs/commonService } from './libs/common.service';

describe('Libs/commonService', () => {
  let service: Libs/commonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Libs/commonService],
    }).compile();

    service = module.get<Libs/commonService>(Libs/commonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
