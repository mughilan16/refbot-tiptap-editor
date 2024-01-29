let data = {
    "id": "item1",                      // Unique identifier for the item
    "title": "Example Title",           // Title of the work
    "author": [                         // Array of authors
        { "family": "Doe", "given": "John" },
        { "family": "Smith", "given": "Jane" },
        // Add more authors as needed
    ],
    "editor": [                         // Array of editors (if applicable)
        { "family": "EditorLastName", "given": "EditorFirstName" },
        // Add more editors as needed
    ],
    "translator": [                     // Array of translators (if applicable)
        { "family": "TranslatorLastName", "given": "TranslatorFirstName" },
        // Add more translators as needed
    ],
    "issued": { "date-parts": [[2022, 1, 25]] },  // Date of publication
    "container-title": "Journal of Examples",  // Title of the journal or book series
    "page": "123-145",                   // Page range of the work
    "volume": "7",                       // Volume number
    "issue": "2",                        // Issue number
    "publisher": "Example Publisher",    // Name of the publisher
    "type": "article-journal",           // Type of the item (e.g., journal article)
    "ISBN": "1234567890",                // ISBN (for books)
    "URL": "https://example.com/article", // URL of the work (for online sources)
    "DOI": "https://doi.org/10.1234/example-doi", // Digital Object Identifier (DOI)
    "abstract": "This is the abstract of the work.", // Abstract of the work
    "language": "en",                    // Language of the work
    "note": "Additional notes about the work.", // Additional notes
}

type Name = {
    family: string,
    given: string,
}

type ReferenceInput = {
    id?: string,
    title?: string,
    author?: Name[],
    editor?: Name[],
    translator?: Name[],
    issued?: {
        "date-parts": [[number, number, number]]
    },
    "container-title"?: string,
    page?: string,
    volume?: string,
    issue?: string,
    publisher?: string,
    type?: string,
    ISBN?: string,
    URL?: string,
    DOI?: string,
    abstract?: string,
    language?: string,
    note?: string,
}

let a: ReferenceInput = {
    issued: {
        "date-parts": [[1234, 1234, 234]]
    },
}