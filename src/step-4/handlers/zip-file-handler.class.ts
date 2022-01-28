import { AbstractHandler } from "../abstract-handler.class";

export class ZipHandler extends AbstractHandler {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.zip')) {
            console.log('I am running WinZip... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}