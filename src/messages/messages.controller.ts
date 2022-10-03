import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Message } from "./messages.model";
import { MessagesService } from "./messages.service";

@ApiTags("Messages")
@Controller(endpoints.messages.main)
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @ApiOperation({ summary: "Create message" })
  @ApiResponse({ status: 200, type: [Message] })
  @Post()
  create(@Body() dto: CreateMessageDto) {
    return this.messagesService.createMessage(dto);
  }

  @ApiOperation({ summary: "Update message" })
  @ApiResponse({ status: 200, type: [Message] })
  @Put(endpoints.messages.id)
  update(@Param("id") id: number, @Body() dto: UpdateMessageDto) {
    return this.messagesService.updateMessage(id, dto);
  }

  @ApiOperation({ summary: "Delete message" })
  @ApiResponse({ status: 200, type: [Message] })
  @Delete(endpoints.messages.id)
  delete(@Param("id") id: number) {
    return this.messagesService.deleteMessage(id);
  }

  @ApiOperation({ summary: "Get the message by id" })
  @ApiResponse({ status: 200, type: [Message] })
  @Get(endpoints.messages.id)
  getById(@Param("id") id: number) {
    return this.messagesService.getMessageById(id);
  }

  @ApiOperation({ summary: "Get all messages" })
  @ApiResponse({ status: 200, type: [Message] })
  @Get()
  getAll() {
    return this.messagesService.getAllMessages();
  }
}
