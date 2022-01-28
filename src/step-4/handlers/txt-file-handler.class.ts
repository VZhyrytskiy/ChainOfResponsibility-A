import { AbstractHandler } from "../abstract-handler.class";

export class TxtHandler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.txt')) {
            console.log('I am running notepad... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}