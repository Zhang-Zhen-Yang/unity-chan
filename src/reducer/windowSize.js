function counter(state={width:0,height:0},action){
    switch(action.type){
        case 'CHANGE_WINDOW_SIZE':
            return {...state,width:action.width,height:action.height};
        default :return state;

    }

}
export default counter