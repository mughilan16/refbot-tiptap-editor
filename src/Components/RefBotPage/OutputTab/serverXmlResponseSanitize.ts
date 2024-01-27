import React from 'react'

const serverXmlResponseSanitize = (xml: string) => {
    xml = xml.replaceAll('source', 'r-source');
    let parser = new DOMParser();
    let data = parser.parseFromString(xml, 'text/html').querySelector('body') as HTMLBodyElement;
    data.querySelectorAll('author').forEach((author, index) => {
        author.setAttribute('key', `${index++}`);
        console.log(author, author.childElementCount);
    })
    data.querySelectorAll('ref').forEach((ref, index) => {
        ref.setAttribute('input', ref.textContent ?? '');
        ref.setAttribute('key', index + '');
    })
    console.log(data.innerHTML);
    return data.innerHTML;
}

export default serverXmlResponseSanitize