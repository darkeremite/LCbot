export interface IDiscordConfig {
    discordToken: string;
    discordClientID: string;
}

export interface IWhitelistForm {
    webhook: string;
    questions: [
        {
            question: string;
            minLength?: number;
            maxLength?: number;
            backText?: string;
            multiline?: boolean;
            defaultanswer?: string;
        }
    ]
}