import { Body, Controller, Get, Options, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from '../../dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Options()
  async options(req: Request) {
    const res = new Response();

    res.headers.append(
      'Access-Control-Allow-Origin',
      req.headers.get('origin')!,
    );

    res.headers.append('Content-Type', 'application/json');
    res.headers.append('Allow', 'GET,POST,OPTIONS');
    res.headers.append('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.headers.append(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    );

    return res;
  }
}
