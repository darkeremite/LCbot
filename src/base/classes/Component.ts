import { BotBody } from "@classes";
import { IComponent } from "@interfaces";
import { AnyComponentBuilder, ButtonBuilder, ModalBuilder, StringSelectMenuBuilder } from "discord.js";

export class Component implements IComponent {
   client: BotBody;
   customId: string;
   constructor(client:BotBody, customId:string){
      this.client = client;
      this.customId = customId;
   }

   async Execute(interaction: any): Promise<any> {

   }

   builder(): any {
      
   }
}