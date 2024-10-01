import { BotBody } from "@classes";
import { AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";


export interface ICommand {
   client: BotBody;
   name: string;
   description: string;
   options: object;
   default_member_permissions: bigint;
   dm_permission: boolean;
   cooldown:number;

   Execute(interaction: ChatInputCommandInteraction): Promise<any>;
   AutoComplete(interaction: AutocompleteInteraction): Promise<any>;
}