import csv from "csvtojson"
import { writeFile } from "fs/promises"
const inputFileName = "notes.csv"

try {
    const parsed = await csv().fromFile(`./resources/${inputFileName}`)
    const grouped = groupByListName(parsed)
    const entries = Object.entries(grouped)
    const files = await writeFilesForEntries(entries)
} catch (err) {
    console.error(err);
}

function groupByListName(ungrouped) {
    const groups = {}
    ungrouped.forEach(item => {

        const check = groups[item.listName]
        if (check) {
            check.push(item.cardName)
        } else {
            groups[item.listName] = [item.cardName]
        }
    })
    return groups
}

async function writeFilesForEntries(entries) {
    return entries.map(async ([sessionName, sessionNotes]) => {
        let content = ""
        console.log(sessionName, sessionNotes);
        content += `# ${sessionName} Notes:\n`

        sessionNotes.forEach(note => {
            content += `- ${note}`
        })

        await writeFile(`output/${sessionName}.md`, content)
        return content
    })
}