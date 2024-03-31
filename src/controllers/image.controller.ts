import {Body, Controller, Post} from "@nestjs/common";
import {ImageService} from "../services/image.service";
import {TagParam} from "../models/tags";

@Controller('image')
export class ImageController {
    constructor(private  readonly service: ImageService) {}

    @Post('tag')
    getTags(@Body() params: TagParam){
        return this.service.getTags(params)
    }
}
