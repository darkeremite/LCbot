import { BotBody } from "@classes";
import { ICommand } from "@interfaces";
import { ApplicationCommandType, AutocompleteInteraction, ChatInputCommandInteraction, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";


export class Command implements ICommand {
   client: BotBody;
   name: string;
   type: ApplicationCommandType;
   description?: string;
   options?: object;
   default_member_permissions: bigint;
   dm_permission: boolean;
   cooldown: number;

   constructor(client: BotBody, body: Omit<ICommand, "client" | "Execute" | "AutoComplete">) {
      this.client = client
      this.name = body.name
      this.description = body.description
      this.type = body.type
      this.options = body.options
      this.default_member_permissions = body.default_member_permissions
      this.dm_permission = body.dm_permission
      this.cooldown = body.cooldown
   }
   async Execute(interaction: ChatInputCommandInteraction|MessageContextMenuCommandInteraction|UserContextMenuCommandInteraction): Promise<any> {
      
   }
   async AutoComplete(interaction: AutocompleteInteraction): Promise<any> {
      
   }
}