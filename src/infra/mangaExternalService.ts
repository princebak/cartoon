import {MangasMock} from "../model/manga";

export default class MangaExternalService{

    static getMangas(title?: string){
        if(title){
            return MangasMock.filter(manga => manga.title.toLowerCase().indexOf(title.toLowerCase()) >= 0 );
        }
        else{
            return MangasMock;
        }
    }
}