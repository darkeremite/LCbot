//@ts-ignore
import { Event, BotBody } from "@classes"
import { Events } from "discord.js"

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
   }
}