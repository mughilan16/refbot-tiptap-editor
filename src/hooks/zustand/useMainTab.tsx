import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const tabs = ['Input', "Changes", "Output"] as const;

export type MainTabState = {
    currentTab: 'Input' | "Output" | "Changes"
    dispatch: (action: Action) => void,
    xmlData: string[],
    editor: {
        hoverElements: string[],
    }
}

type Action = {
    type: "ChangeTab",
    payload: {
        tab: MainTabState['currentTab'],
    }
} | {
    type: "SetXmlData",
    payload: {
        data: string[],
    }
}

const reducer = (state: MainTabState, aciton: Action) => {
    switch (aciton.type) {
        case "ChangeTab": {
            state.currentTab = aciton.payload.tab;
            break;
        }
        case "SetXmlData": {
            state.xmlData = aciton.payload.data;
            break;
        }
    }

}

export const useMainTab = create<MainTabState>()(
    immer((set) => ({
        currentTab: 'Input',
        dispatch: (action => set((state) => reducer(state, action))),
        xmlData: [],
        editor: {
            hoverElements: [],
        }
    })),
)