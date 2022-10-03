import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Message } from "./messages.model";

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message
  ) {}

  async createMessage(dto: CreateMessageDto) {
    try {
      const message = await this.messageRepository.create(dto);
      return message;
    } catch (error) {
      throw new HttpException(
        "Message was not created",
        HttpStatus.BAD_REQUEST
      );
    }
  }
  async updateMessage(id: number, dto: UpdateMessageDto) {
    try {
      const message = await this.messageRepository.update(dto, {
        where: { id },
      });
      return message;
    } catch (error) {
      throw new HttpException("Message was not found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteMessage(id: number) {
    try {
      await this.messageRepository.destroy({ where: { id } });
    } catch (error) {
      throw new HttpException("Message was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getMessageById(id: number) {
    try {
      const message = await this.messageRepository.findOne({ where: { id } });
      return message;
    } catch (error) {
      throw new HttpException("Message was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getAllMessages() {
    try {
      const messages = await this.messageRepository.findAll({
        include: { all: true },
      });
      return messages;
    } catch (error) {
      throw new HttpException("Messages were not found", HttpStatus.NOT_FOUND);
    }
  }
}
