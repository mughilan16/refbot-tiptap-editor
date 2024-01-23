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
                if (!['P', "DIV"].includes(parentElement.tagName)) {
                    traverseRefbotTags(parentElement, tags);
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
                            let tags: string[] = [];
                            tags.unshift(el.tagName);
                            traverseRefbotTags(el, tags);
                            useMainTab.setState(state => {
                                state.editor.hoverElements = tags;
                                // .map(i => i.replace('R-', ''));
                            });
                            oldTag = el.tagName;
                        },
                    },
                },
            }),
        ]
    },
})