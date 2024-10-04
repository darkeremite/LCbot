import { Event, BotBody, Command, Component } from "@classes";
import { ChatInputCommandInteraction, Events, Interaction, InteractionContextType, InteractionType, MessageContextMenuCommandInteraction } from "discord.js";

export default class InteractionCreate extends Event {
   constructor(client:BotBody) {
      super(
         client,
         Events.InteractionCreate,
         false
      )
   }

   async Execute(interaction:Interaction): Promise<any> {
      switch (true) {
         case (interaction.isChatInputCommand()):
         case (interaction.isMessageContextMenuCommand()):
         case (interaction.isUserContextMenuCommand()): {
            const command: Command = this.client.commands.get(interaction.commandName)!;
            await command.Execute(interaction)
            break;
         }
         case (interaction.isButton()):
         case (interaction.isModalSubmit()):
         case (interaction.isStringSelectMenu()): {
            const component: Component = this.client.components.get(interaction.customId)!
            await component.Execute(interaction)
            break;
         }
      }
   }
}