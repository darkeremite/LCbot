import { BotBody } from "@classes";
import { ICommand } from "@interfaces";
import { AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";


export class Command implements ICommand {
   client: BotBody;
   name: string;
   description: string;
   options: object;
   default_member_permissions: bigint;
   dm_permission: boolean;
   cooldown: number;

   constructor(client: BotBody, body: Omit<ICommand, "client" | "Execute" | "AutoComplete">) {
      this.client = client
      this.name = body.name
      this.description = body.description
      this.options = body.options
      this.default_member_permissions = body.default_member_permissions
      this.dm_permission = body.dm_permission
      this.cooldown = body.cooldown
   }
   async Execute(interaction: ChatInputCommandInteraction): Promise<any> {
      
   }
   async AutoComplete(interaction: AutocompleteInteraction): Promise<any> {
      
   }
}