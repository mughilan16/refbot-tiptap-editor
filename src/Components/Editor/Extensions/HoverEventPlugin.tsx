import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { useMainTab } from '../../../hooks/zustand/useMainTab';

export const HoverEventPluginKey = new PluginKey('hover');

export const HoverEventPlugin = Extension.create({
    name: 'hover',
    addProseMirrorPlugins() {
        let oldTag = '';

        const traverseRefbotTags = (el: HTMLElement, tags: string[]) => {
            const parentElement = el.parentElement;
            if (parentElement != null) {
                tags.unshift(parentElement.tagName)
                traverseRefbotTags(parentElement, tags);
                if (parentElement.tagName != 'P') {
                }
            }

        }

        return [
            new Plugin({
                key: HoverEventPluginKey,
                props: {
                    handleDOMEvents: {
                        mouseover(view, event) {
                            if (!event.target) return;
                            const el = event.target as HTMLElement;
                            // const state = HoverEventPluginKey.getState();
                            // console.log(this.getState());
                            let tags: string[] = [];
                            // if (el.tagName.startsWith('r-') || oldTag == el.tagName) return;
                            tags.unshift(el.tagName);
                            traverseRefbotTags(el, tags);
                            useMainTab.setState(state => {
                                // const newState = { ...state };
                                state.editor.hoverElements = tags;
                                // return {...state, e}
                                // return { ...newState };
                            });
                            oldTag = el.tagName;
                        },
                    },
                },
            }),
        ]
    },
})