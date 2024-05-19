export type textGeneratorInterface = {
    generateText: (prompt?: string) => Promise<string>;
};
