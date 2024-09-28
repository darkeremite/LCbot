import { IConfig } from "@interfaces";

export interface IBotBody {
    config: IConfig;
    Init(): void;
}