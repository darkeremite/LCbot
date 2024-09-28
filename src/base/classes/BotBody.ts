import { IBotBody, IConfig, IHandler } from "@interfaces";
import { EventHandler } from "@handlers";
import { Client } from "discord.js";

export class BotBody extends Client implements IBotBody {
    config: IConfig;
    handlers: IHandler[];

    constructor() {
        super({ 
            intents: [

            ]
        });

        this.config = require("@configs/discordbot.json");
        this.handlers = [
            new EventHandler(this)
        ]
    }
    async Init(): Promise<any> {
        await this.LoadHandlers();
        this.login(this.config.discordToken)
    }

    async LoadHandlers(): Promise<any> {
        await this.handlers[0].Load();
    }
}