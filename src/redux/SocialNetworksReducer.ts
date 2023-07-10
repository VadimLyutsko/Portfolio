type InitialStateType = {
    id: number
    icon: string
    linkToContact: string
}

const initialState = [
    {
        id: 1,
        icon: 'https://www.svgrepo.com/show/242473/vk-vk.svg',
        linkToContact: 'https://vk.com/oosoby'
    },
    {
        id: 2,
        icon: 'https://www.svgrepo.com/show/242486/instagram.svg',
        linkToContact: 'https://www.instagram.com/lycko.x_x'
    },
    {
        id: 3,
        icon: 'https://www.svgrepo.com/show/242474/linkedin.svg',
        linkToContact: 'https://www.linkedin.com/in/lyutsko/'
    },
    {
        id: 4,
        icon: 'https://www.svgrepo.com/show/242481/telegram.svg',
        linkToContact: 'https://t.me/Vadimgreens'
    },
];


export const socialNetworksReducer = (state: InitialStateType[]  = initialState, action: ActionsType): InitialStateType[] => {
    switch (action.type) {
        case 'CORRECT_DATA':
            return [...state]
        default:
            return [...state]
    }
}

const mySocialNetworksDataAC = (projectsData: InitialStateType ) => {
    return {
        type: 'CORRECT_DATA',
        projectsData
    }
}

type mySocialNetworksDataActionType = ReturnType<typeof mySocialNetworksDataAC>

type ActionsType =
    mySocialNetworksDataActionType
