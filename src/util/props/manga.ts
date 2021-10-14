import IManga from "../../model/manga";

export default interface IMangaCardProps{
    manga : IManga;
    pressEventHandler? : (manga : IManga) => void
}