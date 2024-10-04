import { Command } from "@classes";
import { IDiscordConfig } from "@interfaces";
import { Collection } from "discord.js";

export interface IBotBody {
    config: IDiscordConfig;
    commands: Collection<string, Command>
    Init(): void;
}