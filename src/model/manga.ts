
const generateId = () =>{
    var result           = "";
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default interface IManga{
    id : string,
    title : string,
    category : string,
    synopsis : string,
    imageUrl : string,
    author : string,
    releaseDate : string,
    episodes : Episode[]
}

export interface Episode{
    id : string,
    number : number,
    title : string,
    cover : string,
    releaseDate : string
}

const episodesMock : Episode[]= [
    {
        id : generateId(), number : 4, title : "une nuit sanglante", releaseDate : "08/10/2021" , cover : "https://oybcomics.net/wp-content/uploads/2021/07/"
    },
    {
        id : generateId(), number : 4, title : "une nuit sanglante", releaseDate : "08/10/2021" , cover : "https://oybcomics.net/wp-content/uploads/2021/07/"
    },
    {
        id : generateId(), number : 4, title : "une nuit sanglante", releaseDate : "08/10/2021" , cover : "https://oybcomics.net/wp-content/uploads/2021/07/"
    },
    {
        id : generateId(), number : 4, title : "une nuit sanglante", releaseDate : "08/10/2021" , cover : "https://oybcomics.net/wp-content/uploads/2021/07/"
    },
    {
        id : generateId(), number : 4, title : "une nuit sanglante", releaseDate : "08/10/2021" , cover : "https://oybcomics.net/wp-content/uploads/2021/07/"
    },

]

export const MangasMock : IManga[] = [
    {id : generateId(), title : "Miye", category : "category1" , synopsis : "Lorem ipsum sit dolor amet consectetur adipisicing el", author : "author", releaseDate : "08/10/2021" , imageUrl : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-6-193x278.jpg", episodes : episodesMock},
    {id : generateId(), title : "Agano", category : "category 2" , synopsis : "Lorem ipsum sit dolor amet consectetur adipisicing el", author : "author", releaseDate : "08/10/2021" , imageUrl : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-5-193x278.jpg", episodes : episodesMock},
    {id : generateId(), title : "Chronos", category : "category 3" , synopsis : "Lorem ipsum sit dolor amet consectetur adipisicing el", author : "Ely kikuni", releaseDate : "08/10/2021" , imageUrl : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-3-193x278.jpg", episodes : episodesMock},
    {id : generateId(), title : "Paradis noir", category : "category 4" , synopsis : "Lorem ipsum sit dolor amet consectetur adipisicing el", author : "Elvis C. Bahati", releaseDate : "08/10/2021" , imageUrl : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-2-193x278.jpg", episodes : episodesMock},
    {id : generateId(), title : "Zairois", category : "category 5" , synopsis : "Lorem ipsum sit dolor amet consectetur adipisicing el", author : "Benny Nkonga", releaseDate : "08/10/2021" , imageUrl : "https://oybcomics.net/wp-content/uploads/2021/07/Page-1-quality20-4-193x278.jpg", episodes : episodesMock},
]