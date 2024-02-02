import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { useMainTab } from '../../../hooks/zustand/useMainTab';

export const FeedBackCountPluginKey = new PluginKey('FeedBackCountPlugin');
const FeedBackCountPlugin = new Plugin({
    key: FeedBackCountPluginKey,
    state: {
        init: (_, state) => {
            return {
                None: 0, Like: 0, DisLike: 0, Total: 0
            };
        },
        apply: (tr, pluginState, _, newState) => {
            if (!tr.docChanged) return pluginState;
            const to = newState.doc.textContent.length;
            const count = {
                Like: 0,
                DisLike: 0,
                None: 0,
                Total: 0,
            };
            let no = 0;
            newState.doc.nodesBetween(0, to, (node) => {
                const likeStatus: "Like" | "DisLike" | "None" = node.attrs.likeStatus;
                if (likeStatus in count) {
                    count[likeStatus] += 1;
                    no++;
                }
            });
            count.Total = no;
            useMainTab.setState(state => {
                state.feedBack = count;
            });
            return count;
        },
    },
});

export const FeedBackCountExtension = Extension.create({
    name: `FeedBackCountExtension`,
    addProseMirrorPlugins() {
        return [
            FeedBackCountPlugin,
        ]
    },
});
