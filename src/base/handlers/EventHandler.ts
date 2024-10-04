import path from "path"
import { glob } from "glob"
import { Event, BotBody } from "@classes"
import { IHandler } from "@interfaces";

export class EventHandler implements IHandler{
   client: BotBody;
   constructor(client:BotBody) {
      this.client = client
   }

   async Load(): Promise<any> {
      const files = (await glob("build/events/*.js"))
      .map(filepath => path.resolve(filepath));
      
      files.map(async (file:string) => {
         const event:Event = new(await import(file)).default(this.client);

         /* if (!event.name) {
            return delete require.cache[require.resolve(file)]
         } */

         const execute = (...args:any) => event.Execute(...args);
         if (event.once) {
            //@ts-ignore
            this.client.once(event.name, execute)
         }
         else {
            //@ts-ignore
            this.client.on(event.name, execute)
         }

      })
   }
}