import { BotBody, Button } from "@classes";
import { ButtonInteraction, ButtonStyle } from "discord.js";

export default class javaClientButton extends Button {
   constructor(client: BotBody) {
      super(client, "javaClientButton", {
            disabled: false,
            style: ButtonStyle.Success,
            label: "Java (Компьютерное издание)",
         }
      )
   }

   async Execute(interaction: ButtonInteraction): Promise<any> {
      await interaction.showModal(this.client.components.get("WLFormModal")?.builder())
   }
}