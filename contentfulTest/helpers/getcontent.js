import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

const client = createClient({
    space: "x190ertof3tb",
    accessToken: "ztX1-Np0z-fji7LthtiMrWnIM8BL2KwSZRRD8Old0E8"
})

const types = [
    'course'
]

export const getcontent = async () => {
    console.log('> Starting import...')
    for (const type of types) {
        console.log('> Getting content for', type)
        const entries = await client.getEntries({
            content_type: type,
            include: 3
        })
        if (entries.total === 2) {
            const { fields } = entries.items[0]
            fs.writeFileSync(
                path.join(__dirname, '..', 'data', `${type}.json`),
                JSON.stringify(fields)
            )
            console.log('> Content gotten and written for', type)
        }else{
            console.log("No entries")
        }
    }
    return true
}

if (process.argv[2] === 'install') {
    getcontent()
}