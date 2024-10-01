import { Command } from "@classes";
import { IConfig } from "@interfaces";
import { Collection } from "discord.js";

export interface IBotBody {
    config: IConfig;
    commands: Collection<string, Command>
    Init(): void;
}