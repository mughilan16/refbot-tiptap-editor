import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const tabs = ['Input', "Changes", "Output"] as const;

export type MainTabState = {
    refVisibility: {
        input: boolean,
        output: boolean,
        annotation: boolean,
    }
    dispatch: (action: Action) => void,
    xmlData: string[],
    editor: {
        hoverElements: string[],
    }
    inputDailogShow: boolean,
}

type Action = {
    type: "SetXmlData",
    payload: {
        data: string[],
    }
} | {
    type: "ChangeInputDailogVisibility",
    payload: {
        show: boolean,
    }
} | {
    type: "Functon",
    set: (state: MainTabState) => void
}

const reducer = (state: MainTabState, aciton: Action) => {
    switch (aciton.type) {
        case "SetXmlData": {
            state.xmlData = aciton.payload.data;
            break;
        }
        case "ChangeInputDailogVisibility": {
            state.inputDailogShow = aciton.payload.show;
            break;
        }
        case "Functon": {
            aciton.set(state);
        }
    }

}

export const useMainTab = create<MainTabState>()(
    immer((set) => ({
        dispatch: (action => set((state) => reducer(state, action))),
        refVisibility: {
            input: false,
            output: true,
            annotation: true,
        },
        xmlData: [],
        editor: {
            hoverElements: [],
        },
        inputDailogShow: false,
    })),
)