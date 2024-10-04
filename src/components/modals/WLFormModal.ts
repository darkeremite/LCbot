import { BotBody, Modal } from "@classes";
import { IWhitelistForm } from "@interfaces";
import { ModalSubmitInteraction, TextInputBuilder, TextInputStyle } from "discord.js";

export default class WLFormModal extends Modal {
   constructor(client: BotBody) {
      const config:IWhitelistForm = require("@configs/whitelistform.json")
      const textInputs = new Array<TextInputBuilder>()
      let i:number = 1;
      config.questions.forEach(textInput => {
         const ti = new TextInputBuilder()
         .setCustomId(`WLFormModal${i}`)
         .setLabel(textInput.question)
         .setRequired(true)
         if (textInput.backText) ti.setPlaceholder(textInput.backText)
         if (textInput.minLength) ti.setMinLength(textInput.minLength)
         if (textInput.maxLength) ti.setMaxLength(textInput.maxLength)
         if (textInput.defaultanswer) ti.setValue(textInput.defaultanswer)
         if (textInput.multiline) {
            ti.setStyle(TextInputStyle.Paragraph)
         }
         else {
            ti.setStyle(TextInputStyle.Short)
         }

         textInputs.push(ti)
         i = i+1;
      })
      super(client, "WLFormModal", {
            title: "Заявка на LostCraft",
            components: textInputs
         }
      )

   }

   async Execute(interaction: ModalSubmitInteraction): Promise<any> {
      interaction.reply("Pong!")
   }
}