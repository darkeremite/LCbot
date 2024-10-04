import { IComponent } from "@interfaces";
import { ModalBuilder, ModalSubmitInteraction, TextInputBuilder } from "discord.js";

export interface IModal extends IComponent{
   title: string;
   components: TextInputBuilder[]

   Execute(interaction:ModalSubmitInteraction): Promise<any>
   builder(): ModalBuilder
}