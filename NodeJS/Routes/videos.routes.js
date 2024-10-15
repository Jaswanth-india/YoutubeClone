import { videoModel } from "../Model/video.model.js";

const data=[
    {
      "id": "KiIpAeyatS0",
      "thumbnail": "https://i.ytimg.com/vi/KiIpAeyatS0/default.jpg",
      "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
      "channelTitle": "Zidaan Shahid Aly",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "7m9ne3ZX3fQ",
      "thumbnail": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/default.jpg",
      "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
      "channelTitle": "Bihari Ladka",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "qi56J0PMtWg",
      "thumbnail": "https://i.ytimg.com/vi/qi56J0PMtWg/default.jpg",
      "title": "Sibling ki Z plus security 😂 | #shorts",
      "channelTitle": "Kunal monu",
      "categoryId": "24",
      "comments": []
    },
    {
      "id": "wILr1aH0AGo",
      "thumbnail": "https://i.ytimg.com/vi/wILr1aH0AGo/default.jpg",
      "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
      "channelTitle": "diyafavas_official",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "dcGPeENa3Gg",
      "thumbnail": "https://i.ytimg.com/vi/dcGPeENa3Gg/default.jpg",
      "title": "Beti be papa ki scooty chalayi🥰❤️😂 #familylovestory #unknownboyvarun #shorts",
      "channelTitle": "unknown boy varun",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "c5VJJLr1Uq4",
      "thumbnail": "https://i.ytimg.com/vi/c5VJJLr1Uq4/default.jpg",
      "title": "Car Dance || Trending Shorts #shorts #ytshorts #dance #love #feel #dance #anshkukreja #omaahi",
      "channelTitle": "Ansh Kukreja01",
      "categoryId": "24",
      "comments": []
    },
    {
      "id": "bHTwru5VD0o",
      "thumbnail": "https://i.ytimg.com/vi/bHTwru5VD0o/default.jpg",
      "title": "உள்ளூர் அண்ணனின் tyre design...😂😂",
      "channelTitle": "Engineering Facts",
      "categoryId": "28",
      "comments": []
    },
    {
      "id": "k1wxIHpQQC4",
      "thumbnail": "https://i.ytimg.com/vi/k1wxIHpQQC4/default.jpg",
      "title": "Bmw X6 Cycle 6 Spoke Foldable Cycle With 21 Speed Gear Cycle With Dual Disc Brake Cycle",
      "channelTitle": "Ruhul Shorts",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "8zhWI9eXddI",
      "thumbnail": "https://i.ytimg.com/vi/8zhWI9eXddI/default.jpg",
      "title": "Tractor Wheel ல தண்ணியா?",
      "channelTitle": "Let's Make Education Simple",
      "categoryId": "27",
      "comments": []
    },
    {
      "id": "_mdYz6vhFX8",
      "thumbnail": "https://i.ytimg.com/vi/_mdYz6vhFX8/default.jpg",
      "title": "Android system and subwoofer upgrade for my Swift 😍 | A One Car Jewels",
      "channelTitle": "WD TRAILS",
      "categoryId": "26",
      "comments": []
    },
    {
      "id": "9rKEebGi6Io",
      "thumbnail": "https://i.ytimg.com/vi/9rKEebGi6Io/default.jpg",
      "title": "CHUMMA | Vicky Vidya Ka Woh Wala Video | Rajkummar R, Triptii D, Pawan Singh | Sachin-Jigar, Vayu",
      "channelTitle": "T-Series",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "DTxziqyBoUo",
      "thumbnail": "https://i.ytimg.com/vi/DTxziqyBoUo/default.jpg",
      "title": "SAJNA VE SAJNA | Rajkummar R | Shehnaaz G | Triptii | Sunidhi, Divya | Vicky Vidya Ka Woh Wala Video",
      "channelTitle": "T-Series",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "dqjFPnMFbSk",
      "thumbnail": "https://i.ytimg.com/vi/dqjFPnMFbSk/default.jpg",
      "title": "#Video | Chumma Chumma | चुम्मा चुम्मा | Khesari Lal Yadav | Shilpi Raj | Rajaram | नया भोजपुरी गाना",
      "channelTitle": "Saregama Hum Bhojpuri",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "-rKAOaS7Q3I",
      "thumbnail": "https://i.ytimg.com/vi/-rKAOaS7Q3I/default.jpg",
      "title": "नवरात्रि विशेष आरती: जय अम्बे गौरी Jai Ambe Gauri Aarti,🙏Durga Ji Aarti🙏,ANURADHA PAUDWAL,Devi Aarti",
      "channelTitle": "T-Series Bhakti Sagar",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "Qds5tztmb5g",
      "thumbnail": "https://i.ytimg.com/vi/Qds5tztmb5g/default.jpg",
      "title": "Vettaiyan - Hunter Vantaar Lyric Video | Rajinikanth | Anirudh Ravichander | T.J.Gnanavel",
      "channelTitle": "Sony Music South",
      "categoryId": "10",
      "comments": []
    },
    {
      "id": "D0kZr01gOsk",
      "thumbnail": "https://i.ytimg.com/vi/D0kZr01gOsk/default.jpg",
      "title": "Ghar mai nikala Saap 🐍 #minivlog #sanjhalikavlog #snake #vlog #trending",
      "channelTitle": "Sanjhalika Vlog",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "zmsF_dsHkzM",
      "thumbnail": "https://i.ytimg.com/vi/zmsF_dsHkzM/default.jpg",
      "title": "புலி நடிச்சு இப்பதான் பாக்குறேன்😱🔥| Bali Ep- 4 | Vj Sidddhu Vlogs",
      "channelTitle": "Vj Siddhu Vlogs",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "UqCXa-FJE0Y",
      "thumbnail": "https://i.ytimg.com/vi/UqCXa-FJE0Y/default.jpg",
      "title": "ലോകത്ത് ആദ്യമായി ഉറുമ്പുകൾ കാരണം ആളുകൾ നാട് വിട്ട് പോകുന്ന വിചിത്രമായ ഗ്രാമത്തിൽ പോകാം 💯😱 #shorts",
      "channelTitle": "indrajith vlogy",
      "categoryId": "24",
      "comments": []
    },
    {
      "id": "YCWynjNTmPo",
      "thumbnail": "https://i.ytimg.com/vi/YCWynjNTmPo/default.jpg",
      "title": "Subh-Subh Etna Bada Snake Aagya 😲",
      "channelTitle": "Sourav Joshi Vlogs",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "H-t83QqdhDo",
      "thumbnail": "https://i.ytimg.com/vi/H-t83QqdhDo/default.jpg",
      "title": "என்னடி முறைச்சு பார்க்கிற😞",
      "channelTitle": "Ela Gayu",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "oGM8uUNpe1s",
      "thumbnail": "https://i.ytimg.com/vi/oGM8uUNpe1s/default.jpg",
      "title": "Marnus invents a new fielding position! 😅 #SheffieldShield",
      "channelTitle": "cricket.com.au",
      "categoryId": "17",
      "comments": []
    },
    {
      "id": "0AZsfLWUGro",
      "thumbnail": "https://i.ytimg.com/vi/0AZsfLWUGro/default.jpg",
      "title": "Women’s Free Kicks + Men’s 😳🚀",
      "channelTitle": "Thiago Productions",
      "categoryId": "17",
      "comments": []
    },
    {
      "id": "UuJQx4Z8zG4",
      "thumbnail": "https://i.ytimg.com/vi/UuJQx4Z8zG4/default.jpg",
      "title": "TRY NOT TO FALL 🙈😱",
      "channelTitle": "Celine Dept",
      "categoryId": "17",
      "comments": []
    },
    {
      "id": "-wgGCxzbFLE",
      "thumbnail": "https://i.ytimg.com/vi/-wgGCxzbFLE/default.jpg",
      "title": "गूँगा बना विराट कोहली 🥹❤️ #cricket #shorts #ytshorts #viral #trending #sports #love #respect #yt",
      "channelTitle": "👑inikhilcricketer👑",
      "categoryId": "17",
      "comments": []
    },
    {
      "id": "jV3TyzpuWEA",
      "thumbnail": "https://i.ytimg.com/vi/jV3TyzpuWEA/default.jpg",
      "title": "Randy Orton tried to be the voice of reason... but he let his fist do the talking instead #SmackDown",
      "channelTitle": "WWE",
      "categoryId": "17",
      "comments": []
    },
    {
      "id": "VKW_nUA0DNU",
      "thumbnail": "https://i.ytimg.com/vi/VKW_nUA0DNU/default.jpg",
      "title": "Morning Domination Is On !! FREE FIRE LIVE",
      "channelTitle": "NRZ",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "tNI8pxKM7dQ",
      "thumbnail": "https://i.ytimg.com/vi/tNI8pxKM7dQ/default.jpg",
      "title": "I GOT TRAPPED INSIDE MINECRAFT FAKE EDITION!",
      "channelTitle": "ProBoiz 95",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "ghOKNLRM6Jo",
      "thumbnail": "https://i.ytimg.com/vi/ghOKNLRM6Jo/default.jpg",
      "title": "TOP 10 OR 18 KD? | AGGRESSIVE CONQUEROR RANK PUSH | GODL LoLzZz",
      "channelTitle": "LoLzZz Gaming",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "QbP_pCZgGFk",
      "thumbnail": "https://i.ytimg.com/vi/QbP_pCZgGFk/default.jpg",
      "title": "I BUILT A LUXURY ROOM IN MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #3",
      "channelTitle": "Techno Gamerz",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "VAsOSlk9BOc",
      "thumbnail": "https://i.ytimg.com/vi/VAsOSlk9BOc/default.jpg",
      "title": "Kamla in Franklin Horror House in Indian Bike Driving 3D",
      "channelTitle": "HarshTatsuya",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "Ej3ZZnh21Kc",
      "thumbnail": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/default.jpg",
      "title": "MY PREPARATION FOR KANYA POOJAN 🙏",
      "channelTitle": "Sambhavna Seth Entertainment",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "2vgymw_j1n8",
      "thumbnail": "https://i.ytimg.com/vi/2vgymw_j1n8/default.jpg",
      "title": "VLOG kyu nahi banaya ? | LIFE mein Yeh bhi zaruri hai",
      "channelTitle": "Saba Ibrahim",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "mVKjkyNaPjY",
      "thumbnail": "https://i.ytimg.com/vi/mVKjkyNaPjY/default.jpg",
      "title": "Vlog #3164| ऐसी हालत देख पतिदेव का बहुत दुख हुआ जो सिर्फ़ घरवाले समझ सकते है ..?|",
      "channelTitle": "Mr and Mrs Raj SachinManisha",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "_oEWBih_WfE",
      "thumbnail": "https://i.ytimg.com/vi/_oEWBih_WfE/default.jpg",
      "title": "Website Launch??? | Hospital jana pada | Shoaib Ibrahim | Vlog",
      "channelTitle": "Shoaib Ibrahim Official",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "I3hUcYMTWYg",
      "thumbnail": "https://i.ytimg.com/vi/I3hUcYMTWYg/default.jpg",
      "title": "Home Vlog | Off to Abudhabi with Ammu | Sindhu Krishna",
      "channelTitle": "Sindhu Krishna",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "KiIpAeyatS0",
      "thumbnail": "https://i.ytimg.com/vi/KiIpAeyatS0/default.jpg",
      "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
      "channelTitle": "Zidaan Shahid Aly",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "7m9ne3ZX3fQ",
      "thumbnail": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/default.jpg",
      "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
      "channelTitle": "Bihari Ladka",
      "categoryId": "20",
      "comments": []
    },
    {
      "id": "qi56J0PMtWg",
      "thumbnail": "https://i.ytimg.com/vi/qi56J0PMtWg/default.jpg",
      "title": "Sibling ki Z plus security 😂 | #shorts",
      "channelTitle": "Kunal monu",
      "categoryId": "24",
      "comments": []
    },
    {
      "id": "wILr1aH0AGo",
      "thumbnail": "https://i.ytimg.com/vi/wILr1aH0AGo/default.jpg",
      "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
      "channelTitle": "diyafavas_official",
      "categoryId": "22",
      "comments": []
    },
    {
      "id": "xkjbJl_jOKo",
      "thumbnail": "https://i.ytimg.com/vi/xkjbJl_jOKo/default.jpg",
      "title": "Mata ji ka chamatkaar 🥺❤️🤌🏻|Simran Makhija| #shorts #school #navratri #love #shortvideo",
      "channelTitle": "Simran Makhija",
      "categoryId": "22",
      "comments": []
    }
];

let firstTime=true;
let noOfItemsAdded=0;

function videosRoutes(app){
    app.get("/home",async (req,res)=>{
        if(!firstTime){
            res.send(await videoModel.find({}))
            console.log(1)
        }
        else{
            await videoModel.deleteMany({}); // Once the server is restarted, database will be cleared.
            for(let i=0;i<data.length;i++){
                (new videoModel(data[i])).save().then(async ()=>{
                    noOfItemsAdded+=1;
                    if(noOfItemsAdded==data.length){
                        res.send(await videoModel.find({}))
                    }
                })
            }
            firstTime=false;
            console.log(2)
        }
    })
}

export default videosRoutes;