import { BotBody } from "@classes";
import { Events } from "discord.js"

export interface IEvent {
    client: BotBody;
    name: Events;
    once: boolean;
    Execute(): Promise<any>;
}