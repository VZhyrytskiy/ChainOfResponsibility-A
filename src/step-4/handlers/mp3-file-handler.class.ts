import { AbstractHandler } from "../abstract-handler.class";

export class Mp3Handler extends AbstractHandler  {
    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.mp3')) {
            console.log('I am running Mp3 Player... I pass file to it.');
            return;
        }

        super.handle(fileName);
    }
}