
const serverXmlResponseSanitize = (xml: string) => {
    xml = xml.replaceAll('source', 'r-source');
    let parser = new DOMParser();
    let data = parser.parseFromString(xml, 'text/html').querySelector('body') as HTMLBodyElement;
    data.querySelectorAll('author').forEach((author, index) => {
        author.setAttribute('index', `${index++}`);
        console.log(author, author.childElementCount);
    })
    
    data.querySelectorAll('ref').forEach((ref, index) => {
        ref.setAttribute('input', ref.textContent ?? '');
        ref.setAttribute('index', index + '');
    })
    // window.xml = data.innerHTML;
    console.log(data.innerHTML);
    return data.innerHTML;
}

export default serverXmlResponseSanitize