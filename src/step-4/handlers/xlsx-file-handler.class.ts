import { AbstractHandler } from "../abstract-handler.class";

export class XlsxHandler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.xlsx')) {
            console.log('I am running MS Excel... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}