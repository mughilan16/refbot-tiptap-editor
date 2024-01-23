import {
    Mark,
    markInputRule,
    markPasteRule,
    mergeAttributes,
} from '@tiptap/core'
import referenceElements from '../../../utils/faker/referenceElements'

export interface RefbotMarkOptions {
    HTMLAttributes: Record<string, any>,
}

// declare module '@tiptap/core' {
//     interface Commands<ReturnType> {
//         refbotMark: {
//             /**
//              * Set a refbotMark mark
//              */
//             setRefbotMark: (attributes?: { color: string }) => ReturnType,
//             /**
//              * Toggle a refbotMark mark
//              */
//             toggleRefbotMark: (attributes?: { color: string }) => ReturnType,
//             /**
//              * Unset a refbotMark mark
//              */
//             unsetRefbotMark: () => ReturnType,
//         }
//     }
// }

export const inputRegex = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/
export const pasteRegex = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g

export const RefbotMark = ({ name, tag, color }: { name: string, tag: string, color: string }) => Mark.create<RefbotMarkOptions>({
    name,

    addOptions() {
        return {
            HTMLAttributes: {},
        }
    },

    addAttributes() {
        return {
            color: {
                default: color,
                // parseHTML: element => element.getAttribute('data-color') || element.style.backgroundColor,
                renderHTML: attributes => {
                    const attrs: Record<string, any> = {};
                    if (name == 'author') {
                        attrs.key = Math.ceil(Math.random() * 100);
                    }
                    return {
                        style: `background-color: ${color}; color: inherit`,
                        tag: 'ref-bot',
                        ...attrs,
                    }
                },
            },
        }
    },

    parseHTML() {
        return [
            {
                tag,
            },
            {
                tag: `r-${tag}`,
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return [`r-${tag}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },

    // addCommands() {
    //     return {
    //         setRefbotMark: attributes => ({ commands }) => {
    //             return commands.setMark(this.name, attributes)
    //         },
    //         toggleRefbotMark: attributes => ({ commands }) => {
    //             return commands.toggleMark(this.name, attributes)
    //         },
    //         unsetRefbotMark: () => ({ commands }) => {
    //             return commands.unsetMark(this.name)
    //         },
    //     }
    // },

    // addKeyboardShortcuts() {
    //     return {
    //         'Mod-Shift-h': () => this.editor.commands.toggleRefbotMark(),
    //     }
    // },

    // addInputRules() {
    //     return [
    //         markInputRule({
    //             find: inputRegex,
    //             type: this.type,
    //         }),
    //     ]
    // },

    // addPasteRules() {
    //     return [
    //         markPasteRule({
    //             find: pasteRegex,
    //             type: this.type,
    //         }),
    //     ]
    // },
})


export const AllRefbotMarks = referenceElements.map((element) => {
    const { color, name } = element;
    return RefbotMark({
        color,
        name,
        tag: name,
    })
})