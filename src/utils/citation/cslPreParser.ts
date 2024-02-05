
const cslPreParser = ({ xml }: { xml: string }) => {

    let parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');


    const texts = [...xmlDoc.querySelectorAll('text[variable], date-part, date, names')]
    // const texts = [...xmlDoc.querySelectorAll('*')]
    // console.log(texts)
    texts.forEach(el => {
        const attr: { tag: string, prefix: string, suffix: string } = {
            tag: '',
            prefix: el.getAttribute('prefix') || '',
            suffix: el.getAttribute('suffix') || '',
        }
        const tagName = el.tagName;
        if (tagName == 'text' || tagName == 'date') {
            attr.tag = el.getAttribute('variable') || el.getAttribute('macro') || '';
        } else if (tagName == 'date-part') {
            console.log(el.getAttribute('name'));
            attr.tag = el.getAttribute('name') || '';
        } else if (tagName == 'names') {
            let variable = el.getAttribute('variable');
            console.log({ variable });
            el.querySelectorAll('name').forEach(nameEl => {
                nameEl
                nameEl.setAttribute('prefix', `‹r-${variable}›` + attr.prefix);
                nameEl.setAttribute('suffix', attr.suffix + `‹/r-${variable}›`);
            });
            attr.tag = variable + 's';
        }
        el.setAttribute('prefix', `‹r-${attr.tag}›` + attr.prefix);
        el.setAttribute('suffix', attr.suffix + `‹/r-${attr.tag}›`);
        console.log(el.tagName);
    });

    let xmlSerializer = new XMLSerializer();
    const finalXml = xmlSerializer.serializeToString(xmlDoc);
    return finalXml
}

export default cslPreParser