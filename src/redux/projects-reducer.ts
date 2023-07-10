type InitialStateType  = typeof initialState

const initialState = [
    {
        id: 1,
        title: 'Social network',
        icon: 'https://i.imgur.com/8QeXll7.jpeg',
        description: 'My little social network',
        linkToTheProject: 'https://vadimlyutsko.github.io/The-Way-of-the-Samurai/'
    },
    {
        id: 2,
        title: 'Todolist',
        icon: 'https://camo.githubusercontent.com/16be8365c473ac26fefb5281597db1e66fce08a43c43e5bd4b67b115b44f82d4/68747470733a2f2f7777772e6c65616465727461736b2e72752f696d616765732f61396438623534383565343962626164373463303236666434656531353063302e6a7067',
        description: 'My big todolist ',
        linkToTheProject: 'https://vadimlyutsko.github.io/Great-Todolist/'
    },
    {
        id: 3,
        title: 'My homeworks',
        icon: 'https://oneclassblog.com/wp-content/uploads/2017/11/board-928381_1280.jpg',
        description: 'Some text about my homeworks ',
        linkToTheProject: 'https://vadimlyutsko.github.io/My-Homeworks/'
    },
    {
        id: 4, title: 'BloggerPlatform',
        icon: 'https://i.pinimg.com/originals/f0/2b/98/f02b984d8be0c58277b05a3287d48998.png',
        description: ' One of the training projects (in progress) ',
        linkToTheProject: 'https://vadimlyutsko.github.io/BloggerPlatform/'
    },
    {
        id: 5, title: 'MiniTodo',
        icon: 'https://pbs.twimg.com/media/EGCVYsYWoAA-jMC?format=jpg&name=4096x4096',
        description: ' Test assignment for hiring ',
        linkToTheProject: 'https://vadimlyutsko.github.io/ToDo_For_Mindbox/'
    },

] as const;


export const projectsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'successfully':
            return {...state}
        // case 'unsuccessful':
        //     return {some error can be here}
        default:
            return {...state}
    }
}

export const setProjectsAC = (projectsData: InitialStateType | null) => ({type: 'successfully', projectsData} as const)
// export const setProjectsErrorAC = (someError: InitialStateType) => ({type: 'unsuccessful', someError} as const)

type setProjectsActionType = ReturnType<typeof setProjectsAC>
// type setProjectsErrorAC = ReturnType<typeof setProjectsErrorAC>

type ActionsType =
    setProjectsActionType
// | setProjectsErrorAC