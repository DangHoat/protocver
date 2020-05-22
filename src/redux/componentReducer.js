import {
    LOAD_INIT_DATA,
    ADD_COMPONENT,
    UPDATE_COMPONENT,
    DELETE_COMPONENT,
    UPDATE_CHILDREN,
    REASSIGN_PARENT,
    SET_SELECTABLE_PARENTS,
    EXPORT_FILES,
    CREATE_APPLICATION,
    EXPORT_FILES_SUCCESS,
    EXPORT_FILES_ERROR,
    CREATE_APPLICATION_ERROR,
    HANDLE_CLOSE,
    HANDLE_TRANSFORM,
    TOGGLE_DRAGGING,
    MOVE_TO_BOTTOM,
    MOVE_TO_TOP,
    OPEN_EXPANSION_PANEL,
    DELETE_ALL_DATA,
    CHANGE_IMAGE_PATH,
    ADD_PROP,
    DELETE_PROP,
} from '../actions';

// import {
//     addComponent,
//     updateComponent,
//     deleteComponent,
//     updateChildren,
//     reassignParent,
//     setSelectableP,
//     exportFilesSuccess,
//     exportFilesError,
//     handleClose,
//     handleTransform,
//     toggleDragging,
//     moveToBottom,
//     moveToTop,
//     openExpansionPanel,
//     changeImagePath,
//     addProp,
//     deleteProp,
// } from '../utils/componentReducer.util';

const initialApplicationState = {
    totalComponents: 0,
    nextId: 1,
    imagePath: '',
    successOpen: false,
    errorOpen: false,
    focusComponent: {},
    components: [],
    appDir: '',
    loading: false,
};

const componentReducer = (state = initialApplicationState, action) => {
    switch (action.type) {
        // case LOAD_INIT_DATA:
        //     return {
        //         ...state,
        //         ...action.payload.data,
        //         loading: false,
        //         appDir: '',
        //         successOpen: false,
        //         errorOpen: false,
        //     };
        // case ADD_COMPONENT:
        //     return 0 ;
        // case UPDATE_COMPONENT:
        //     return ;
        // case DELETE_COMPONENT:
        //     return ;
        // case UPDATE_CHILDREN:
        //     return ;
        // case REASSIGN_PARENT:
        //     return ;
        // case SET_SELECTABLE_PARENTS:
        //     return ;
        // case CREATE_APPLICATION:
        // case EXPORT_FILES:
        //     return { ...state, loading: true };
        // case EXPORT_FILES_SUCCESS:
        //     return ;
        // case CREATE_APPLICATION_ERROR:
        // case EXPORT_FILES_ERROR:
        //     return ;
        // case HANDLE_CLOSE:
        //     return ;
        // case HANDLE_TRANSFORM:
        //     return;
        // case TOGGLE_DRAGGING:
        //     return;
        // case MOVE_TO_BOTTOM:
        //     return;
        // case MOVE_TO_TOP:
        //     return;
        // case OPEN_EXPANSION_PANEL:
        //     return;
        // case DELETE_ALL_DATA:
        //     return initialApplicationState;
        // case CHANGE_IMAGE_PATH:
        //     return ;
        // case ADD_PROP:
        //     return;
        // case DELETE_PROP:
        //     return ;
        default:
            return state;
    }
};

export default componentReducer;
