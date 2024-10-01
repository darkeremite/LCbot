import { IBotBody, IConfig, IHandler } from "@interfaces";
import { CommandHandler, EventHandler } from "@handlers";
import { Client, Collection } from "discord.js";
import { Command } from "@classes";

export class BotBody extends Client implements IBotBody {
    config: IConfig;
    commands: Collection<string, Command>;
    handlers: {
        EventHandler: IHandler;
        CommandHandler: IHandler;
    };

    constructor() {
        super({ 
            intents: [

            ]
        });

        this.config = require("@configs/discordbot.json");
        this.commands = new Collection<string, Command>();
        this.handlers = {
            EventHandler: new EventHandler(this), 
            CommandHandler: new CommandHandler(this)
        }
    }
    async Init(): Promise<any> {
        await this.LoadHandlers();
        this.login(this.config.discordToken)
    }

    async LoadHandlers(): Promise<any> {
        await this.handlers.EventHandler.Load()
        await this.handlers.CommandHandler.Load()
    }
}