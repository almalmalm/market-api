import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from '../../dto/create-item.dto';
import { Model } from 'mongoose';
import { Item } from '../schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async delete(id: string): Promise<any> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }

  async updateItem(
    id: string,
    updateItemDto: CreateItemDto,
  ): Promise<Item | null> {
    try {
      console.log(updateItemDto);
      const updatedItem = await this.itemModel
        .findByIdAndUpdate(id, updateItemDto, { new: true })
        .exec();
      console.log(updatedItem);
      return updatedItem;
    } catch (error) {
      return null;
    }
  }
}
