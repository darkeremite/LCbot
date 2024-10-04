import path from "path"
import { glob } from "glob"
import { BotBody, Button, Component } from "@classes"
import { IHandler } from "@interfaces";
import { ButtonBuilder } from "discord.js";

export class ComponentHandler implements IHandler{
   client: BotBody;
   constructor(client:BotBody) {
      this.client = client
   }

   async Load(): Promise<any> {
      const files = (await glob("build/components/**/*.js"))
      //@ts-ignore
      .map(filepath => path.resolve(filepath));
      
      files.map(async (file:string) => {
         const component:Component = new(await import(file)).default(this.client);

         this.client.components.set(component.customId, component as Component);
      })
   }
}