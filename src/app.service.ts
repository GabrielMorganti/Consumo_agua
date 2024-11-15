import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Gabriel Morganti Santelo Ferreira RA: 10441215!';
  }
}
