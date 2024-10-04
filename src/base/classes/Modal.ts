import { BotBody, Component } from "@classes";
import { IComponent, IModal } from "@interfaces";
import { ActionRowBuilder, ModalBuilder, ModalSubmitInteraction, TextInputBuilder } from "discord.js";

export class Modal extends Component implements IModal{
   title: string;
   components: TextInputBuilder[];

   constructor(client:BotBody, customId:string, body: Omit<IModal, keyof(IComponent)>){
      super(client, customId)
      this.title = body.title
      this.components = body.components
   }

   async Execute(interaction: ModalSubmitInteraction): Promise<any> {
      
   }

   builder(): ModalBuilder {
      const modal = new ModalBuilder()
      .setCustomId(this.customId)
      .setTitle(this.title)
      this.components.forEach(textInput => {
         modal.addComponents(
            new ActionRowBuilder<TextInputBuilder>()
            .addComponents(textInput)
         )
      })

      return modal
   }
}