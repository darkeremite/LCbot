import { IComponent } from "@interfaces";
import { ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentEmojiResolvable } from "discord.js"

export interface IButton extends IComponent {
   label?: string;
   emoji?: ComponentEmojiResolvable;
   style: ButtonStyle;
   disabled: boolean;
   url?: string

   Execute(interaction:ButtonInteraction): Promise<any>
   builder(): ButtonBuilder
}