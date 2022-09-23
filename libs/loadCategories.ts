


const loadCategories: ()=> Promise<[Category]> = async() => {
    const res = await fetch('')
    const data = await res.json()

    return data;
}

export default loadCategories;