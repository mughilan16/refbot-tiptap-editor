import React from 'react'

const serverXmlResponseSanitize = (xml: string) => {
    xml = xml.replaceAll('source', 'r-source');
    let parser = new DOMParser();
    let data = parser.parseFromString(xml, 'text/html').querySelector('body') as HTMLBodyElement;
    let count = 0;
    data.querySelectorAll('author').forEach(author => {
        author.setAttribute('key', `${count++}`);
    })
    return data.innerHTML;
}

export default serverXmlResponseSanitize