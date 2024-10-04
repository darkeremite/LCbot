import { BotBody } from "@classes"

export interface IComponent {
   client: BotBody,
   customId: string

   Execute(interaction:any): Promise<any>
   builder(): any
}