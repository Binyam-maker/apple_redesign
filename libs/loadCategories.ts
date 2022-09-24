import {groq} from 'next-sanity'
import sanityClient from '../client'


const loadCategories: ()=> Promise<[Category]> = async() => {

    const query = groq`*[_type == 'category']`

    const category = await sanityClient.fetch(query)  

    return category;
}

export default loadCategories;