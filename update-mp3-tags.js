import csv from "csvtojson"
import NodeID3 from "node-id3"
const inputFileName = "mp3-tag-source.csv"

try {
    const parsed = await csv().fromFile(`./resources/${inputFileName}`)
    for (const p of parsed) {
        updateTagsForOneFile(p)
    }
    console.log("Finished");
} catch (err) {
    console.error(err);
}

function updateTagsForOneFile(file) {
    const { title, series, artist, trackNumber, fileName } = file
    console.log({ title });
    const filepath = `/mnt/e/Documents/Media/Podcasts/${fileName}`

    const tags = {
        title: title,
        artist: artist,
        album: series,
        APIC: "./resources/artwork.png",
        TRCK: trackNumber
    }
    console.log({ tags, filepath });
    NodeID3.update(tags, filepath, handleError)
}

function handleError(error) {
    if (error) {
        console.error(error)
    }
}