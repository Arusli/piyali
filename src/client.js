import * as contentful from 'contentful';

const {REACT_APP_SPACE_ID, REACT_APP_CONTENTFUL_TOKEN} = process.env;

const client = contentful.createClient({
    space: REACT_APP_SPACE_ID,
    accessToken: REACT_APP_CONTENTFUL_TOKEN
});

export default client;