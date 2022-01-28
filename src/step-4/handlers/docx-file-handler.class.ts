import { AbstractHandler } from "../abstract-handler.class";

export class DocxHandler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.docx')) {
            console.log('I am running MS Word... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }


}