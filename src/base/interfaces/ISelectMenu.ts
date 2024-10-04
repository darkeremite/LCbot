import { IComponent } from "@interfaces";
import { StringSelectMenuBuilder, StringSelectMenuComponent, StringSelectMenuInteraction } from "discord.js";

export interface ISelectMenu extends IComponent{
   disabled: boolean;
   maxValues?: number;
   minValues?: number;
   placeholder?: string;
   options: StringSelectMenuComponent[] 

   Execute(interaction:StringSelectMenuInteraction): Promise<any>
   builder(): StringSelectMenuBuilder
}