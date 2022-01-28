import type { Handler } from "./../handler.interface";

export abstract class AbstractHandler {
    protected nextHandler!: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
}