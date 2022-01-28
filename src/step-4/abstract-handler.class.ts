import type { Handler } from "./../handler.interface";

export abstract class AbstractHandler implements Handler {
    private nextHandler!: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(fileName: string): void | null {
        if (this.nextHandler) {
            console.log(`I can not process ${fileName}. I pass it to the next ${Object.getPrototypeOf(this.nextHandler).constructor.name}`);
            return this.nextHandler.handle(fileName);
        }

        console.log(`No Handler for ${fileName}`);
        return null;
    }
}