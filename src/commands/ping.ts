import { BotBody, Command } from "@classes";
import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, MessageContextMenuCommandInteraction, PermissionsBitField, TextChannel } from "discord.js";

export default class Ping extends Command {
   constructor(client:BotBody) {
      super(
         client, {
            name: "setWLform",
            type: ApplicationCommandType.Message,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: true,
            cooldown: 0,
         }
      )
   }

   async Execute(interaction: MessageContextMenuCommandInteraction): Promise<any> {
      const channel:TextChannel = interaction.targetMessage.channel as TextChannel
      await channel.send(
         {
            content: "123",
            components: [
               new ActionRowBuilder<ButtonBuilder>()
               .addComponents(this.client.components.get("javaClientButton")?.builder())
               .addComponents(this.client.components.get("bedrockClientButton")?.builder())
            ]
         }
      )
   }
}