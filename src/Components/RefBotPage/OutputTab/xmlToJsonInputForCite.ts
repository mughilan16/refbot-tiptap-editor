
import Cite from 'citation-js';
import { cslTemplated } from '../cslTemplates';
// require("citation-js/plugin-bibtex");
// require("citation-js/plugin-ris");


let config = Cite.plugins.config.get('@csl')
cslTemplated.map(template => config.templates.add(template.key, template.csl))



export const elementToJson = ({ el, template, type }: { el: HTMLElement | null, type: string, template: string }) => {
    // [...el.children].map(i => {
    //     console.log(i.tagName);
    // })
    if (!el) return;

    const res: Record<string, any> = {};

    const collectValue = ({ tagName, key }: { tagName: string, key: string }) => {
        const tag = el.querySelector(`r-${tagName}`);
        console.log(tag, tagName);
        if (tag) {
            res[key] = tag.innerHTML;
        }
    }

    [...el.querySelectorAll(`[tag="ref-bot"]`)].forEach(el => {
        res[el.tagName.toLocaleLowerCase().replace(`r-`, '')] = el.textContent;
    })


    collectValue({ key: 'DOI', tagName: 'doi' });
    collectValue({ key: 'URL', tagName: 'url' });
    collectValue({ key: 'publisher', tagName: 'publisher-name' });
    collectValue({ key: 'publisher-place', tagName: 'publisher-loc' });
    res["container-title"] = type;
    collectValue({ key: 'organizer', tagName: 'collab' });

    // const issued = el.querySelector(`q-issued`);
    let yearEl = el.querySelector(`r-year`) as HTMLElement;
    let dayEl = el.querySelector(`[data-name="date-in-citation"]`) as HTMLElement;
    let monthEl = el.querySelector(`[data-name="date-in-citation"]`) as HTMLElement;
    let day = 10
    let month = 10
    let year = 2000;
    if (yearEl != null) {
        year = +yearEl?.innerText.match(/[0-9]{4}/g)[0];
    }
    if (dayEl != null) {
        day = +dayEl?.innerText.match(/[0-9]/g)[0];
    }
    if (monthEl != null) {
        month = +monthEl?.innerText.match(/[0-9]/g)[0];
    }

    // issued: { "date-parts": [[1957, 1, 1]] },
    
    res['issued'] = {
        'date-parts': [[
            year,
            day,
            month,
        ]]
    }

    res['author'] = [];
    const authors = el.querySelectorAll(`r-author`);
    authors.forEach(author => {
        const given = author.querySelector('r-given')?.textContent ?? '';
        const family = author.querySelector('r-surname')?.textContent ?? '';
        res['author'].push({
            given,
            family,
        })
    })


    const citation = new Cite(res);
    const out = citation.format('bibliography', { format: 'html', template });
    // console.log('Formatted HTML:', out);
    console.log({ res, out });
    return { res, out };
}


const xmlToJsonInputForCite = ({ xml, template }: { xml: string, template: string }): { res: Record<string, any>, out: string }[] => {
    var parser = new DOMParser();
    var references = [...parser.parseFromString(xml, 'text/html').querySelectorAll('body p')] as HTMLElement[];
    // var modifiedHtmlString = new XMLSerializer().serializeToString(doc);
    const outs = references.map(reference => {
        return elementToJson({
            el: reference,
            template,
            type: reference.getAttribute('type') || 'Journal',
        });
    })

    return outs;

}

export default xmlToJsonInputForCite