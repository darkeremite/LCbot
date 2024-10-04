import { IComponent } from "@interfaces";
import { ChannelSelectMenuBuilder, ChannelSelectMenuInteraction, RoleSelectMenuBuilder, RoleSelectMenuInteraction, UserSelectMenuBuilder, UserSelectMenuInteraction } from "discord.js";

//Для меню выбора пользователей, ролей или каналов
export interface IStandartSelectMenu extends IComponent{
   disabled: boolean;
   maxValues?: number;
   minValues?: number;
   placeholder?: string;

   Execute(interaction:RoleSelectMenuInteraction|ChannelSelectMenuInteraction|UserSelectMenuInteraction): Promise<any>
   builder(): RoleSelectMenuBuilder|ChannelSelectMenuBuilder|UserSelectMenuBuilder
}