const URL = 'http://localhost:4002/'

async function getMixes() {
    try {
        const data = await fetch(`${URL}mixes`)
        return data
    } catch (error) {
        console.ward(error)
    }

}

export const getMixesCategory = () => {
    return getMixes()
}


