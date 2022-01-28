import { AbstractHandler } from "../abstract-handler.class";

export class Mpg4Handler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.mpg4')) {
            console.log('I am running Video Player... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}