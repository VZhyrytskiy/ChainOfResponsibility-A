import { AbstractHandler } from "../abstract-handler.class";
import { Handler } from "./../../handler.interface";

export class Mpg4Handler extends AbstractHandler implements Handler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.mpg4')) {
            console.log('I am running Video Player... I pass file to it.');
        } else if (this.nextHandler) {
            console.log(`I can not process ${fileName}. I pass it to the next ${Object.getPrototypeOf(this.nextHandler).constructor.name}`);
            this.nextHandler.handle(fileName);
        } else {
            console.log(`No Handler for ${fileName}`);
        }
    }
}