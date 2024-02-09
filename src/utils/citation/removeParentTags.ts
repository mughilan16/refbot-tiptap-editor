
const removeParentTags = ({ parentEl }: { parentEl: Element | null }): string => {
    let out = '';
    function loopParent(targetParent: NodeListOf<ChildNode| HTMLElement>) {
        targetParent.forEach(element => {
            if (element.hasChildNodes()) {
                loopParent(element.childNodes);
            } else {
                if(element.nodeType == 3){
                    out += element.textContent;
                }else if(element instanceof HTMLElement){
                    out +=  element?.outerHTML;
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