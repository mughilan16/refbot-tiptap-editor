
const removeParentTags = ({ parentEl }: { parentEl: Element | null }): string => {
    let out = '';
    function loopParent(targetParent: NodeList) {
        targetParent.forEach(element => {
            if (element.childElementCount) {
                loopParent(element.childNodes);
            } else {
                out += element.nodeType == 3 ? element.textContent : element.outerHTML;
                console.log(element.nodeType, element);
            }
        });
    }
    if (parentEl) {
        loopParent(parentEl.childNodes);
    }
    console.log(out);
    return out;
}

export default removeParentTags