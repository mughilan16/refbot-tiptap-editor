import React, { useEffect } from 'react';
import Cite from 'citation-js';
import { Button } from '@mui/material';

const jsonData = {
    type: 'article',
    title: 'An Example Article',
    author: [
      { given: 'John', family: 'Doe' },
      { given: 'Jane', family: 'Smith' }
    ],
    containerTitle: 'Journal of Examples',
    issued: {
      'date-parts': [
        [2019, 1, 15]
      ]
    },
    page: '25-36',
    DOI: '10.1234/example-doi'
  };

const YourComponent = () => {
    useEffect(() => {

        const citation = new Cite(jsonData);
        const formattedHtml = citation.format('bibliography', { format: 'html', template: 'apa' });

        console.log('Formatted HTML:', formattedHtml);
    }, []);

    return (
        <Button>Hello</Button>
    );
};

export default YourComponent;
