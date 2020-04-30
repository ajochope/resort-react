import {createClient} from 'contentful';
//import {REACT_APP_CONTENTFUL_SPACE_ID,REACT_APP_CONTENTFUL_ACCESS_TOKEN} from './env';

export default createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

/*
export default createClient({
    space: REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
});
*/