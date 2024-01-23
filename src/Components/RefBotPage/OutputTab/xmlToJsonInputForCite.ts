
import Cite from 'citation-js';


const elementToJson = (el: HTMLElement, type: string) => {
    // [...el.children].map(i => {
    //     console.log(i.tagName);
    // })
    const res: Record<string, any> = {};

    const collectValue = ({ tagName, key }: { tagName: string, key: string }) => {
        const tag = el.querySelector(`r-${tagName}`);
        if (tag) {
            res[key] = tag.innerHTML;
        }
    }

    collectValue({ key: 'doi', tagName: 'doi' });
    collectValue({ key: 'URL', tagName: 'url' });
    collectValue({ key: 'publisher', tagName: 'publisher-name' });
    collectValue({ key: 'publisher-place', tagName: 'publisher-loc' });
    res["container-title"] = type;
    collectValue({ key: 'organizer', tagName: 'collab' });

    const issued = document.querySelector(`q-issued`);
    if (issued) {
        let year = issued.querySelector(`[data-name="year"]`)?.innerText.match(/[0-9]{4}/g)[0];
        let day = issued.querySelector(`[data-name="date-in-citation"]`)?.innerText.match(/[0-9]/g)[0];
        let month = issued.querySelector(`[data-name="date-in-citation"]`)?.innerText.match(/[0-9]/g)[0];
        res['issued'] = {
            'date-parts': [{
                year,
                day,
                month,
            }]
        }
    }

    const citation = new Cite(res);
    const out = citation.format('bibliography', { format: 'html', template: 'apa' });
    // console.log('Formatted HTML:', out);
    return { res, out };
}


const xmlToJsonInputForCite = ({ xml }: { xml: string }): string[] => {
    var parser = new DOMParser();
    var references = [...parser.parseFromString(xml, 'text/html').querySelectorAll('body p')] as HTMLElement[];
    // var modifiedHtmlString = new XMLSerializer().serializeToString(doc);
    const outs = references.map(reference => {
        return elementToJson(reference, reference.getAttribute('type') || 'Journal');
    })

    return outs.map(i => i.out);
    console.log();

}

export default xmlToJsonInputForCite