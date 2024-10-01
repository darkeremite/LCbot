import { BotBody, Command } from "@classes";
import { ChatInputCommandInteraction, PermissionsBitField } from "discord.js";

export default class Ping extends Command {
   constructor(client:BotBody) {
      super(
         client, {
            name: "ping",
            description: "get answer from bot",
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: true,
            cooldown: 0,
            options: []
         }
      )
   }

   async Execute(interaction: ChatInputCommandInteraction): Promise<any> {
      interaction.reply({
         content:"Bot active!",
         ephemeral:true
      })
   }
}