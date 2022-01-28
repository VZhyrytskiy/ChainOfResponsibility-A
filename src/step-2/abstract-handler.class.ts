import type { Handler } from './../handler.interface';

export abstract class AbstractHandler {
    protected nextHandler!: Handler;
}