
import Cite from 'citation-js';
import { cslTemplated } from '../cslTemplates';
// require("citation-js/plugin-bibtex");
// require("citation-js/plugin-ris");


const pareser = (xml: string) => {
    const parse = new DOMParser();
    xml = `
    <html lang="en">
    <body>
        ${xml}
    </body>
    </html>`
    const doc = parse.parseFromString(xml, 'text/html')
    const textEls = [...doc.body.querySelectorAll('text')]
    console.log(textEls);
    for (const textEl of textEls) {
        const prefix = textEl.getAttribute('prefix') || '';
        const suffix = textEl.getAttribute('suffix') || '';
        textEl.setAttribute('prefix', `surya${prefix}`);
        textEl.setAttribute('suffix', `${suffix}surya`);
        console.log(textEl.getAttribute('suffix'));
        
    }

}

let config = Cite.plugins.config.get('@csl')
cslTemplated.map(template => {
    config.templates.add(template.key, template.csl);
    // pareser(template.csl);
})


export const elementToJson = ({ el, template, type }: { el: HTMLElement | null, type: string, template: string }) => {
    // [...el.children].map(i => {
    //     console.log(i.tagName);
    // })
    if (!el) return;

    const res: ReferenceInput = {};
    res.type = type;

    const collectValue = ({ tagName, key }: { tagName: string, key: keyof Omit<ReferenceInput, 'author' | 'issued' | 'editor' | 'translator'> }) => {
        const tag = el.querySelector(`r-${tagName}`);
        if (tag) {
            res[key] = tag.innerHTML;
        }
    }

    // [...el.querySelectorAll(`[tag="ref-bot"]`)].forEach(el => {
    //     res[el.tagName.toLocaleLowerCase().replace(`r-`, '')] = el.textContent;
    // })


    collectValue({ key: 'DOI', tagName: 'doi' });
    collectValue({ key: 'URL', tagName: 'url' });
    collectValue({ key: 'publisher', tagName: 'publisher-name' });
    collectValue({ key: 'container-title', tagName: 'source' });
    collectValue({ key: 'publisher-place', tagName: 'publisher-loc' });
    // collectValue({ key: 'organizer', tagName: 'collab' });
    collectValue({ key: 'page', tagName: 'pages' });
    collectValue({ key: 'edition', tagName: 'edition' });

    // const issued = el.querySelector(`q-issued`);
    let yearEl = el.querySelector(`r-year`) as HTMLElement;
    let dayEl = el.querySelector(`[data-name="date-in-citation"]`) as HTMLElement;
    let monthEl = el.querySelector(`[data-name="date-in-citation"]`) as HTMLElement;
    let yearNum = yearEl?.innerText.match(/[0-9]{4}/g);
    let dayNum = dayEl?.innerText.match(/[0-9]/g);
    let monthNum = monthEl?.innerText.match(/[0-9]/g);
    let day = null
    let month = null
    let year = null
    if (yearNum?.length) {
        year = +yearNum[0];
    }
    if (dayNum?.length) {
        day = +dayNum[0];
    }
    if (monthNum?.length) {
        month = +monthNum[0];
    }

    // issued: { "date-parts": [[1957, 1, 1]] },

    res['issued'] = {
        'date-parts': [[
            year,
            // day ?? 10,
            // month ?? 10,
        ]]
    }
    // res['issued'] = {
    //     'date-parts': [[
    //         year,
    //         day || 1,
    //         month || 1,
    //     ]]
    // }

    res['author'] = [];
    const authors = el.querySelectorAll(`r-author`);
    authors.forEach(author => {
        const given = author.querySelector('r-given')?.textContent ?? '';
        const family = author.querySelector('r-surname')?.textContent ?? '';
        if (res['author'] != undefined) {
            res['author'].push({
                given,
                family,
            })
        }
    })

    // testing
    res['publisher-place'] = 'original-place';

    const citation = new Cite(res);
    const out = citation.format('bibliography', { format: 'text', template });
    console.log(res);
    return { res, out };
}


// const xmlToJsonInputForCite = ({ xml, template }: { xml: string, template: string }): { res: Record<string, any>, out: string }[] => {
//     var parser = new DOMParser();
//     var references = [...parser.parseFromString(xml, 'text/html').querySelectorAll('body p')] as HTMLElement[];
//     // var modifiedHtmlString = new XMLSerializer().serializeToString(doc);
//     const outs = references.map(reference => {
//         return elementToJson({
//             el: reference,
//             template,
//             type: reference.getAttribute('type') || 'article',
//         });
//     })

//     return outs;

// }

// export default xmlToJsonInputForCite