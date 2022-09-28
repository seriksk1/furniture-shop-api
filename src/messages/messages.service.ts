import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Message } from "./messages.model";

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message)
    private messageRepository: typeof Message
  ) {}

  async getAllMessages() {
    const messages = await this.messageRepository.findAll({
      include: { all: true },
    });

    return messages;
  }
}
