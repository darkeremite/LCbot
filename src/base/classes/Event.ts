import { BotBody } from "@classes";
import { IEvent } from "@interfaces";
import { Events } from "discord.js";

export class Event implements IEvent {
    client: BotBody;
    name: Events;
    once: boolean;

    constructor(client: BotBody, name:Events, once:boolean=true) {
        this.client = client;
        this.name = name;
        this.once = once;
    }

    async Execute(...args: any): Promise<any> {}
}