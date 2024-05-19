import { promptList } from './pompt-list';

export const promptTool = {
    prompts: promptList,
    getRandomPrompt: function (): string {
        return this.prompts[Math.floor(Math.random() * this.prompts.length)];
    }
};
