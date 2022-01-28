interface Handler {
    setNext(handler: Handler): Handler;
    handle(fileName: string): void;
};

export type { Handler };