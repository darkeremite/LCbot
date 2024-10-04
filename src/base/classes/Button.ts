import { BotBody, Component } from "@classes";
import { IButton, IComponent } from "@interfaces";
import { ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentEmojiResolvable } from "discord.js";

export class Button extends Component implements IButton{
   style: ButtonStyle;
   disabled: boolean;
   label?: string | undefined;
   emoji?: ComponentEmojiResolvable | undefined;
   url?: string | undefined;

   constructor(client:BotBody, customId:string, body: Omit<IButton, keyof(IComponent)>){
      super(client, customId)
      this.style = body.style
      this.disabled = body.disabled
      this.label = body.label
      this.emoji = body.emoji
      this.url = body.url
      if (typeof(body.label) == "undefined" && typeof(body.emoji) == "undefined") {
         throw new Error("Button component must have label or Emoji.")
      }
   }

   async Execute(interaction: ButtonInteraction): Promise<any> {
      
   }

   builder(): ButtonBuilder {
      const button = new ButtonBuilder()
      .setCustomId(this.customId)
      .setDisabled(this.disabled)
      .setStyle(this.style)
      if (this.label) button.setLabel(this.label)
      if (this.emoji) button.setEmoji(this.emoji!)
      if (this.url) button.setURL(this.url!)

      return button
   }
}