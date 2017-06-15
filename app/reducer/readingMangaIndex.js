function readingMangaIndex(state={index:-1},action){
    switch(action.type){
        case 'setMangaReadingIndex':
            return {...state,index:action.index};
        default :return state;

    }

}
export default readingMangaIndex