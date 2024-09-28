import { BotBody } from "@classes";

export interface IHandler {
   client:BotBody
   Load():Promise<any>
}