const express = require("express");
const fs = require("fs");
const { appData } = require("./mock");
const cors = require("cors");
const app = express();
const PORT = 8000;

const AUDIO_TYPE = {
    ADVENTUROUS: "adventurous",
    MOTIVATION: "motivation",
    PARTY_WEDDING: "party_wedding"
}

function getDirectories(type) {
    return fs.readdirSync(`./music_data/${type}`);
}

function getSongDetails(type, dir) {
    try {
        const path = `music_data/${type}/${dir}/media`;
        const audioData = fs.readdirSync(path);
        const audioInfo  = fs.readFileSync(`music_data/${type}/${dir}/info.json`); 
        const parsedData = JSON.parse(audioInfo);
        return {
            audiofile: `${path}/${audioData[0]}`,
            avatar: `${path}/${audioData[1]}`,
             ...parsedData
        }
    } catch (error) {
        return false;
    }
}

app.use(cors()); 
app.use('/music', express.static('music_data'));

app.get(`/song`, (req, res) => {
      
    const songData = {} 

    for (let type in AUDIO_TYPE) {
        const directoryItems = getDirectories(AUDIO_TYPE[type]);
        directoryItems.forEach((item) => {
            const audioData = getSongDetails(AUDIO_TYPE[type], item);
             if(audioData){
                console.log({ audioData });
                if(AUDIO_TYPE[type] in songData){
                   songData[AUDIO_TYPE[type]].push(audioData);
                }else{
                    songData[AUDIO_TYPE[type]] = [audioData];
                }
             }
        })
    }
      //console.log(songData);
     appData['freelicense'] = songData

    res.status(200).json({appData});
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});