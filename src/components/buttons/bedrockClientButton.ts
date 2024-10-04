import { BotBody, Button } from "@classes";
import { ButtonInteraction, ButtonStyle } from "discord.js";

export default class bedrockClientButton extends Button {
   constructor(client: BotBody) {
      super(client, "bedrockClientButton", {
            disabled: false,
            style: ButtonStyle.Secondary,
            label: "Bedrock (Мобильное издание)",
         }
      )
   }

   async Execute(interaction: ButtonInteraction): Promise<any> {
      await interaction.showModal(this.client.components.get("WLFormModal")?.builder())
   }
}