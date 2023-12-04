import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: string,
    @Body() updateItemDto: CreateItemDto,
  ) {
    return this.itemsService.updateItem(id, updateItemDto);
  }
}
