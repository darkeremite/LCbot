import path from "path"
import { glob } from "glob"
import { Command, BotBody } from "@classes"
import { IHandler } from "@interfaces";

export class CommandHandler implements IHandler{
   client: BotBody;
   constructor(client:BotBody) {
      this.client = client
   }

   async Load(): Promise<any> {
      const files = (await glob("build/commands/*.js"))
      //@ts-ignore
      .map(filepath => path.resolve(filepath));
      
      files.map(async (file:string) => {
         const command:Command = new(await import(file)).default();

         this.client.commands.set(command.name, command as Command);
      })
   }
}