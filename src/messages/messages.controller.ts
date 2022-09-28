import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { Message } from "./messages.model";
import { MessagesService } from "./messages.service";

@ApiTags("Messages")
@Controller(endpoints.messages.main)
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @ApiOperation({ summary: "Get all messages" })
  @ApiResponse({ status: 200, type: [Message] })
  @Get()
  getAll() {
    return this.messagesService.getAllMessages();
  }
}
