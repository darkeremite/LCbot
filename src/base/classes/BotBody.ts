import { IBotBody, IDiscordConfig, IHandler } from "@interfaces";
import { CommandHandler, ComponentHandler, EventHandler } from "@handlers";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { Command, Component } from "@classes";

export class BotBody extends Client implements IBotBody {
    config: IDiscordConfig;
    commands: Collection<string, Command>;
    components: Collection<string, Component>;
    handlers: {
        EventHandler: IHandler;
        CommandHandler: IHandler;
        ComponentHandler: IHandler;
    };

    constructor() {
        super({ 
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildWebhooks
            ]
        });

        this.config = require("@configs/discordbot.json");
        this.commands = new Collection<string, Command>();
        this.components = new Collection<string, Component>();
        this.handlers = {
            EventHandler: new EventHandler(this), 
            CommandHandler: new CommandHandler(this),
            ComponentHandler: new ComponentHandler(this)
        }
    }
    async Init(): Promise<any> {
        await this.LoadHandlers();
        this.login(this.config.discordToken)
    }

    async LoadHandlers(): Promise<any> {
        await this.handlers.EventHandler.Load()
        await this.handlers.CommandHandler.Load()
        await this.handlers.ComponentHandler.Load()
    }
}