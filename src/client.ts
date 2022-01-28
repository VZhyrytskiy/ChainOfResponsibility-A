import { Handler } from './handler.interface';
import * as Handlers from './step-1/handlers';
// import * as Handlers from './step-2/handlers';
// import * as Handlers from './step-3/handlers';
// import * as Handlers from './step-4/handlers';

export function runHandlersChain() {
    // файлы для обработки
    const files = ['file1.docx', 'file2.zip', 'file3.mp3', 'file4.avi'];

    // объект содержит всевозможные обработчики
    const handlers = {
        docx: new Handlers.DocxHandler(),
        jpg: new Handlers.JpgHandler(),
        mp3: new Handlers.Mp3Handler(),
        mpg4: new Handlers.Mpg4Handler(),
        txt: new Handlers.TxtHandler(),
        xlsx: new Handlers.XlsxHandler(),
        zip: new Handlers.ZipHandler()
    }

    // создать цепочку из всех обработчиков
    handlers.docx.setNext(handlers.jpg)
        .setNext(handlers.mp3)
        .setNext(handlers.mpg4)
        .setNext(handlers.txt)
        .setNext(handlers.xlsx)
        .setNext(handlers.zip);

    // запустить обработку файлов
    console.log('---Статическая цепочка---');
    files.forEach(file => handlers.docx.handle(file));



    // создать динамическую цепочку обработчиков на основании расширения файлов
    let handler: Handler;               // ссылка на первый обрабботчик в цепочке для старта
    let currentHandler: Handler;        // ссылка на текущий обрабботчик для построения цепочки обработчиков

    files.forEach((fileName, index) => {
        const [, ext] = fileName.split('.');

        if (index === 0) {
            handler = handlers[ext];
            currentHandler = handlers[ext];
        } else {
            currentHandler = currentHandler.setNext(handlers[ext]);
        }
    });

    // запустить обработку файлов
    console.log('---Динамическая цепочка---');
    files.forEach(file => handler.handle(file));
}