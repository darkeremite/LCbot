import { BotBody } from "@classes";
import { ApplicationCommandType, AutocompleteInteraction, ChatInputCommandInteraction, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";


export interface ICommand {
   client: BotBody;
   name: string;
   description?: string;
   type: ApplicationCommandType
   options?: object;
   default_member_permissions: bigint;
   dm_permission: boolean;
   cooldown:number;

   Execute(interaction: ChatInputCommandInteraction|MessageContextMenuCommandInteraction|UserContextMenuCommandInteraction): Promise<any>;
   AutoComplete(interaction: AutocompleteInteraction): Promise<any>;
}