import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    getData() {
        return 'hello world'
    }
}
