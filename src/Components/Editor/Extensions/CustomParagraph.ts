import { mergeAttributes } from "@tiptap/core";
import Paragraph from "@tiptap/extension-paragraph";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ReferenceView from "./ReferenceView";
import { generateRandomNumber } from "../../../utils/generateRandomNumber";
// import { removeEmptyAttributes } from "../Services/attributes";



export const CustomParagraph = Paragraph.extend({
    parseHTML() {
        return [
            {
                tag: 'p[name="w:p"]',
            },
            {
                tag: 'ref',
            },
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
            input: {
                default: '',
            },
            output: {
                default: '',
            },
            index: {
                default: generateRandomNumber(1, 1000),
            },
        };
    },
    renderHTML({ node, HTMLAttributes }) {
        return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },

    addNodeView() {
        return ReactNodeViewRenderer(ReferenceView)
    },

})

// ref tyeps
// journel
// book
// online
// web
// thesis