
const removeParentTags = ({ parentEl }: { parentEl: Element | null }): string => {
    let out = '';
    function loopParent(targetParent: NodeListOf<ChildNode>) {
        targetParent.forEach(element => {
            if (element instanceof HTMLElement && element.childElementCount) {
                loopParent(element.childNodes);
            } else {
                if(element instanceof HTMLElement && element.nodeType != 3){
                    out += element.outerHTML;
                }else{
                    out += element.textContent;
                }
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