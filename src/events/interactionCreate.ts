import { Event, BotBody, Command } from "@classes";
import { ChatInputCommandInteraction, Events } from "discord.js";

export default class InteractionCreate extends Event {
   constructor(client:BotBody) {
      super(
         client,
         Events.InteractionCreate,
         false
      )
   }

   async Execute(interaction:ChatInputCommandInteraction): Promise<any> {
      if (interaction.isChatInputCommand()) {
         const command: Command = this.client.commands.get(interaction.commandName)!;

         await command.Execute(interaction);
      }
   }
}