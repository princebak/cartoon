import IManga from "../../model/manga";

export default interface IScreenGlobalProps{
    navigation?: any;
    route? : any;
    header : string;
}

export interface IScreenMangaDetailsProps extends IScreenGlobalProps{
    manga : IManga
}