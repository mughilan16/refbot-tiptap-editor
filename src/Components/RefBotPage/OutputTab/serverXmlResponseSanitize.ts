import React from 'react'

const serverXmlResponseSanitize = (xml: string) => {
    xml = xml.replaceAll('source', 'r-source');
    let parser = new DOMParser();
    let data = parser.parseFromString(xml, 'text/html').querySelector('body') as HTMLBodyElement;
    data.querySelectorAll('author').forEach((author, index) => {
        author.setAttribute('key', `${index++}`);
    })
    data.querySelectorAll('ref').forEach((author, index) => {
        author.setAttribute('input', author.textContent ?? '');
        author.setAttribute('key', index + '');
    })
    console.log(data.innerHTML);
    return data.innerHTML;
}

export default serverXmlResponseSanitize