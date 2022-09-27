import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { MessagesService } from "./messages.service";

@ApiTags("Messages")
@Controller(endpoints.messages.main)
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
}
