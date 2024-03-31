import {HttpModule, HttpService} from "@nestjs/axios";
import {Tag, TagParam, TagResult} from "../models/tags";
import {firstValueFrom, map, tap} from "rxjs";
import {IReply} from "../models/IReply";
import configuration from "../configuration";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ImageService{
    constructor(private readonly httpService: HttpService) {}

    async getTags(param: TagParam){
        let model = new IReply<Tag[]>();
        try {
            const apikey: string = 'Basic ' + configuration().immagakey;
            const imageUrl = param.url;
            let max: number = param.max;

            if(!imageUrl)
                throw new Error('image url is required');
            if(!apikey)
                throw new Error('internal error library');
            if(!max)
                max = 5;

            const url = `https://api.imagga.com/v2/tags?image_url=${encodeURIComponent(imageUrl)}&limit=${max}`;
            const get$ = this.httpService.get<TagResult>(url, {headers: {'Authorization': apikey}});

            model.data = await firstValueFrom(
                get$.pipe(
                    tap(res => console.log(res)),
                    map(resp => resp.data.result)
                ));

            return model;
        }
        catch (e){
            model.error = true;
            model.message = e instanceof Error ? e.message : e;
            return model;
        }
    }
}
