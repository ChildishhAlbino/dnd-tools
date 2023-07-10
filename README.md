# dnd-tools
A small repo with tools that help me maintain my DND campaign(s)

- `trello-to-md.js`: Converts a csv export from my Trello board into markdown files grouped by a column in the CSV.
    - Accepts a `notes.csv` file from the `resources` directory like so:
    - ```csv
        "cardName","listName"
        "This is a note for a particular session","Session XX"
        "This is a note for a different session","Session XY"
        "This is a 2nd note for the first session","Session XX"
        ```
    - Files are written to the `output` directory
