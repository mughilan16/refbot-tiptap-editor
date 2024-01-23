import { mergeAttributes } from "@tiptap/core";
import Paragraph from "@tiptap/extension-paragraph";
// import { removeEmptyAttributes } from "../Services/attributes";


export const CustomParagraph = Paragraph.extend({
    parseHTML() {
        return [
            {
                tag: 'p[name="w:p"]',
            },
            {
                tag: 'ref',
            }
        ];
    },
    addAttributes() {
        return {
            type: {
                default: 'Journal',
                parseHTML: (node) => {
                    return node.getAttribute('type');
                },
            },
        };
    },
    renderHTML({ node, HTMLAttributes }) {
        return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
})

// ref tyeps
// journel
// book
// online
// web
// thesis