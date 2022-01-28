import { AbstractHandler } from "../abstract-handler.class";

export class JpgHandler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.jpg')) {
            console.log('I am running Paint... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}