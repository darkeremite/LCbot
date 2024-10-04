import { Event, BotBody, Command } from "@classes"
import { ApplicationCommandType, Collection, ContextMenuCommandBuilder, Events, REST, Routes } from "discord.js"

export default class Ready extends Event {
   constructor(client:BotBody) {
      super(
         client,
         Events.ClientReady,
         true,
      )
   }

   async Execute() {
      console.log(`Bot is ready`)
      const rest = new REST({version:'9'}).setToken(this.client.config.discordToken);

      const setCommands:any = await rest.put(Routes.applicationCommands(this.client.config.discordClientID), {
         body: this.GetJson(this.client.commands)
      })

      console.log(setCommands.length)
   }

   private GetJson(commands: Collection<string, Command>): object[] {
      const data: object[] = [];

      commands.forEach(command => {
         if (command.type == 1) {
            data.push({
               name: command.name,
               description: command.description,
               type: command.type,
               options: command.options,
               default_member_permissions: command.default_member_permissions.toString(),
               dm_permission: command.dm_permission
            })
         }
         else {
            data.push({
               name: command.name,
               type: command.type,
               options: command.options,
               default_member_permissions: command.default_member_permissions.toString(),
               dm_permission: command.dm_permission
            })
         }
      })

      return data
   }
}