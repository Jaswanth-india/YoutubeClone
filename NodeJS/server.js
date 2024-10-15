import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import videosRoutes from "./Routes/videos.routes.js";

let dumpData=[
    {
        "kind": "youtube#video",
        "etag": "VgY3FI9cKOGp7jLKQB0pOKUK874",
        "id": "KiIpAeyatS0",
        "snippet": {
            "publishedAt": "2024-10-06T08:30:09Z",
            "channelId": "UCs2IckGd_d8kfZGAacfT2AA",
            "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Zidaan Shahid Aly",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT35S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "56652964",
            "likeCount": "1034973",
            "favoriteCount": "0",
            "commentCount": "751"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "j-0Wd6UojF7RL1Jliqa-h5RpgEM",
        "id": "7m9ne3ZX3fQ",
        "snippet": {
            "publishedAt": "2024-10-07T04:33:59Z",
            "channelId": "UCgW7gZxz7pZ_a8_uF5Q9Hsw",
            "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Bihari Ladka",
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
                "description": ""
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT1M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "46456034",
            "likeCount": "1395519",
            "favoriteCount": "0",
            "commentCount": "2964"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "O05Xo3p4pgpXCwnqeTQz7Smef30",
        "id": "qi56J0PMtWg",
        "snippet": {
            "publishedAt": "2024-10-02T15:35:01Z",
            "channelId": "UC64f5UX8h_RdQLEu9vTU62g",
            "title": "Sibling ki Z plus security 😂 | #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Kunal monu",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Sibling ki Z plus security 😂 | #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT20S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "62642988",
            "likeCount": "957485",
            "favoriteCount": "0",
            "commentCount": "869"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "bYovLVhntYyfroSxJYxyPTbT4FU",
        "id": "wILr1aH0AGo",
        "snippet": {
            "publishedAt": "2024-10-07T10:50:11Z",
            "channelId": "UCuAJ0ewzavRYzZfDpWM7WSw",
            "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "diyafavas_official",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "ml",
            "localized": {
                "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
                "description": ""
            },
            "defaultAudioLanguage": "ml"
        },
        "contentDetails": {
            "duration": "PT18S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "9974380",
            "likeCount": "331535",
            "favoriteCount": "0",
            "commentCount": "379"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "2y_H59Sv6Rg7NBA-ReEMj1aPKbg",
        "id": "dcGPeENa3Gg",
        "snippet": {
            "publishedAt": "2024-10-05T06:25:02Z",
            "channelId": "UC4DLvb5xZ9OLcVM1KC_R97g",
            "title": "Beti be papa ki scooty chalayi🥰❤️😂 #familylovestory #unknownboyvarun #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dcGPeENa3Gg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dcGPeENa3Gg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dcGPeENa3Gg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/dcGPeENa3Gg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/dcGPeENa3Gg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "unknown boy varun",
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Beti be papa ki scooty chalayi🥰❤️😂 #familylovestory #unknownboyvarun #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT54S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "31280933",
            "likeCount": "1131541",
            "favoriteCount": "0",
            "commentCount": "1079"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "loR70_P22FaYSaQ9a1UOujDsL6s",
        "id": "c5VJJLr1Uq4",
        "snippet": {
            "publishedAt": "2024-10-10T13:58:30Z",
            "channelId": "UCE6hGEwOgRlLc57sP9VqNXw",
            "title": "Car Dance || Trending Shorts #shorts #ytshorts #dance #love #feel #dance #anshkukreja #omaahi",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/c5VJJLr1Uq4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/c5VJJLr1Uq4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/c5VJJLr1Uq4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/c5VJJLr1Uq4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/c5VJJLr1Uq4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Ansh Kukreja01",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Car Dance || Trending Shorts #shorts #ytshorts #dance #love #feel #dance #anshkukreja #omaahi",
                "description": ""
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT16S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1613973",
            "likeCount": "46242",
            "favoriteCount": "0",
            "commentCount": "207"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "STyYeDzYIKHFqdAFDQCLAZ5muVo",
        "id": "bHTwru5VD0o",
        "snippet": {
            "publishedAt": "2024-10-09T12:30:36Z",
            "channelId": "UCXzULCWuvbnjm7Q0F6RBKsw",
            "title": "உள்ளூர் அண்ணனின் tyre design...😂😂",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/bHTwru5VD0o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/bHTwru5VD0o/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/bHTwru5VD0o/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/bHTwru5VD0o/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/bHTwru5VD0o/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Engineering Facts",
            "categoryId": "28",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "உள்ளூர் அண்ணனின் tyre design...😂😂",
                "description": ""
            },
            "defaultAudioLanguage": "ta"
        },
        "contentDetails": {
            "duration": "PT1M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "714030",
            "likeCount": "59543",
            "favoriteCount": "0",
            "commentCount": "244"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "vvT9WHWyCuoX4anJq3FkClkL0N0",
        "id": "k1wxIHpQQC4",
        "snippet": {
            "publishedAt": "2024-10-01T04:00:40Z",
            "channelId": "UCsRoar9Ec4rp7_66mP9mg-g",
            "title": "Bmw X6 Cycle 6 Spoke Foldable Cycle With 21 Speed Gear Cycle With Dual Disc Brake Cycle",
            "description": "Skyride Bmw X6 Cycle 6 Spoke Foldable Cycle With 21 Speed Gear Cycle With Dual Disc Brake Cycle Carbon Frame Suspension Bicycle For Men 26Inch Wheel Size (Cruiser Bike,Red)\n\nHello Everyone welcome back to my channel\nI hope you will be good happy - if You want to watch my video regularly please subscribe to my channel and press BELL- ICON 🔔 To get my video on right time.\n\n\nDisclaimer ÷\nThis video is only entertainment purposes \ncopyright disclaimer under section 107 of the copyright act 1976. allowance is made for x\"fair usex\"for purposes sach as music, comment, news, reporting, teaching, scholarship. and research,fair use is use permitted buy copyright statute that might otherwise be infringing.non-profit.educational or personal use tips the balance in favour of fair of use\n\n#ruhulshorts #unboxing #cycle #cycleunboxing",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/k1wxIHpQQC4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/k1wxIHpQQC4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/k1wxIHpQQC4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/k1wxIHpQQC4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/k1wxIHpQQC4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Ruhul Shorts",
            "tags": [
                "Cycle",
                "Cycle Unboxing",
                "cycle under 10000",
                "cycle under 10000 with gear",
                "cycle under 10000 with gear and disc brake",
                "bmw cycle price in india",
                "cycle unboxing video",
                "cycle unboxing under 5000 flipkart"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Bmw X6 Cycle 6 Spoke Foldable Cycle With 21 Speed Gear Cycle With Dual Disc Brake Cycle",
                "description": "Skyride Bmw X6 Cycle 6 Spoke Foldable Cycle With 21 Speed Gear Cycle With Dual Disc Brake Cycle Carbon Frame Suspension Bicycle For Men 26Inch Wheel Size (Cruiser Bike,Red)\n\nHello Everyone welcome back to my channel\nI hope you will be good happy - if You want to watch my video regularly please subscribe to my channel and press BELL- ICON 🔔 To get my video on right time.\n\n\nDisclaimer ÷\nThis video is only entertainment purposes \ncopyright disclaimer under section 107 of the copyright act 1976. allowance is made for x\"fair usex\"for purposes sach as music, comment, news, reporting, teaching, scholarship. and research,fair use is use permitted buy copyright statute that might otherwise be infringing.non-profit.educational or personal use tips the balance in favour of fair of use\n\n#ruhulshorts #unboxing #cycle #cycleunboxing"
            }
        },
        "contentDetails": {
            "duration": "PT32S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "16493019",
            "likeCount": "232777",
            "favoriteCount": "0",
            "commentCount": "85"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "HwJG5FL8HMR1UlPTheviLJoktIo",
        "id": "8zhWI9eXddI",
        "snippet": {
            "publishedAt": "2024-10-09T14:30:03Z",
            "channelId": "UCNwcxhfBVDgwx9Lv3CBpu6A",
            "title": "Tractor Wheel ல தண்ணியா?",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8zhWI9eXddI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8zhWI9eXddI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8zhWI9eXddI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/8zhWI9eXddI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/8zhWI9eXddI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Let's Make Education Simple",
            "tags": [
                "tractor",
                "wheel",
                "water",
                "science",
                "farmers",
                "Tractor Wheel ல தண்ணியா?",
                "experiment"
            ],
            "categoryId": "27",
            "liveBroadcastContent": "none",
            "defaultLanguage": "ta",
            "localized": {
                "title": "Tractor Wheel ல தண்ணியா?",
                "description": ""
            },
            "defaultAudioLanguage": "ta"
        },
        "contentDetails": {
            "duration": "PT34S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "476358",
            "likeCount": "27956",
            "favoriteCount": "0",
            "commentCount": "107"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "UFeLU-7f1UzPbkEd2o8GOTPRfa4",
        "id": "_mdYz6vhFX8",
        "snippet": {
            "publishedAt": "2024-10-08T13:02:36Z",
            "channelId": "UCbZADcBB7V4JluQlHJsfCUQ",
            "title": "Android system and subwoofer upgrade for my Swift 😍 | A One Car Jewels",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_mdYz6vhFX8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_mdYz6vhFX8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_mdYz6vhFX8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/_mdYz6vhFX8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/_mdYz6vhFX8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "WD TRAILS",
            "categoryId": "26",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Android system and subwoofer upgrade for my Swift 😍 | A One Car Jewels",
                "description": ""
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT52S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "652354",
            "likeCount": "50739",
            "favoriteCount": "0",
            "commentCount": "90"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "AQIJBObm-5lBtgFDkuhz8jRGHj0",
        "id": "9rKEebGi6Io",
        "snippet": {
            "publishedAt": "2024-10-05T11:30:08Z",
            "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
            "title": "CHUMMA | Vicky Vidya Ka Woh Wala Video | Rajkummar R, Triptii D, Pawan Singh | Sachin-Jigar, Vayu",
            "description": "Lo Ji! MAZZA To Ab Aayega Na! Jab Rajkummar Rao, Power Star Pawan Singh Aur Triptii Dimri Aayenge Ek Saath!\n\nPresenting the Most Awaited Song \"CHUMMA\" From the Hotly Awaited Film Vicky Vidya Ka Woh Wala Video.\n\n#Chumma #RajkummarRao #PawanSingh #TriptiiDimri #VickyVidyaKaWohWalaVideo\n\nWritten & Directed by Raaj Shaandilyaa.\n\nReleasing in Cinemas with The Bang on 11th October 2024!\n\nGulshan Kumar, T-Series, Balaji Telefilms & Wakaoo Films Present\nin Association with Kathavachak Films\nA T-Series Films & Wakaoo Films Production\n\n\"Vicky Vidya Ka Woh Wala Video\"\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3TZTz1U\nSpotify: https://bit.ly/4eN6pbA\nHungama: https://bit.ly/3NcHulV\nGaana: https://bit.ly/40b3F3Z\nAmazon Prime Music: https://bit.ly/3ZTj2O1\nYouTube Music: https://bit.ly/3XTR0PV\n\nSong Credits:\nMusic : Sachin Jigar\nSinger : Pawan Singh, Rupali Jagga, Rupesh Mishra, Mansa Jimmy & Sachin-Jigar\nLyrics : Vayu\nProgrammed & Arranged by: Sachin-Jigar\nAdditional Programming : Abhishek Singh & Sahil Vishwakarma (White Noise Collectives)\nMusic Production Head : Romil Ved  \nRecording Engineer : Swar Mehta (White Noise Collectives) \nMixed & Mastered : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nMusic Label: T-Series\n\nVideo Credits\n➟Director & choreographer - Vijay Ganguly \n➟ DOP -Adil afsar\n➟ Music Video Head(T- series)- Pooja Singh Gujral\n➟ Production designer- Rajat Poddar\n➟ Production desginer-Parijat Poddar\n➟Steady cam- Sandeep Shetty\n➟Jimmy jib- surender kumar J dulgach\n➟Choreographer Assts- Abhishek Pai, Muskan singh,Anjali Verma,kapil dekwal, Hrishikesh.\n➟ Line producer- Shivkumar Tewari\n➟UPM- Naseem shah\n➟ Production executive- Ravinder Rawat \n➟ Production Managers- Pradhuman Deora, Abhijeet Jitendra Patil\n➟ Creative Production Managers - Ankit Ojha, Paresh Vaishnav, Deepesh Jaipuriar \n➟ Production Assistant - Divyansh Vishwakarma\n➟ 1st AC-Anis Shaikh\n➟2nd AC- Santosh jadhav\n➟Focus puller-Sanjay dedure,\n ➟Focus puller- Sandeep Gurav\n➟Art Director-Mukesh Chauhan\n ➟ Associate Art director- Krishna swain, \n➟ Editor - Vijay ganguly\n➟Color studio - Prime focus LTD\n➟ DI Colorist -Andreas Brueckl     \n\nCredits- Artist \n\nRaj kummar Rao Team-\nManager - Mona\nHair-Vijay Raskar\nMakeup-Nitin Purohit\nCostume Designer- Sonali R Patel\n\nPawan Singh Team\nManager- Abhishek Singh\nMusic Marketing Head - Amit Singh\nHair Stylist - Deepak Sharma\nMakeup- Monu Dada\nBoy - Arjun\nStylist- Sonali R Patel\n\n\nTriptii dimri team\nCelebrity managed by - Dharma Cornerstone Agency \nManager - Jui Pawar \nMake up -Nikita kapoor \nHair - Hrishikesh Naskar\nStyled by - Hitendra kapopara\n\nFilm Credits:\nWritten & Directed by Raaj Shaandilyaa\nProduced by : Bhushan Kumar & Krishan Kumar \nProduced by : Shobha Kapoor & Ektaa R Kapoor\nProduced by : Vipul D Shah, Ashwin Varde, Rajesh Bahl \nProduced by : Raaj Shaandilyaa & Vimal Lahoti\nCo-Producer : Shiv Chanana   \nPresident (T-Series) : Neeraj Kalyan\nStory : Raaj Shaandilyaa, Yusuf Ali Khan \nDop : Aseem Mishra Isc\nScreenplay:  Raaj Shaandilyaa, Yusuf Ali Khan, Ishrat R Khan, Rajan Agarwal \nDialouges : Raaj Shaandilyaa\nDop : Aseem Mishra \nEditor : Prakash Chandra Sahoo \nSound Designer : Nihar Ranjan Samal \nProduction Design : Rajat Poddarr & Parijat Poddar\nCreative Director : Ishrat R Khan  \nExecutive  Producer : Kshitij Ravi Prasad \nProject Head (Wakaoo Films) : Barkha Thakur \nDA : Krishanu Singh Rathore  \nCostume Designer : Leepakshi Ellawadi \nAction Director : Manohar Verma \nMusic : Sachin - Jigar  \nLyrics : Priya Saraiya, Som \nBackground Music : Hitesh Sonik\nCasting Director : Paragg Mehta \nChoreographers : Ganesh Acharya, Raju Khan,  Vishnudeva, Sushma Sunam,  Piyush - Shazia\nProject Head (T-Series) : Meghha Chheda \nFilm & Content Team (T-Series) : Alok Kumar Shukla, Heett Savla, Shraddha Shrikant Ghanekar\nMarketing & Promotions (T-Series) : Shivam Chanana, Raj Chanana, Prashant Shetty, Mita Choudhary, Rahul Dubey, Amol Bhamare, Heett Savla\nDigital Team (T-Series) : Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on : T-Series  \nMusic Team  (T-Series)  : Raj Chanana, Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nDi  : Prime Focus \nVfx : Cinegence Media \nDigital Marketing : White Rivers Media \nPublicity Design : Parass Kanani (house of Awe) \nVisual Promotions : Just Right Studioz Nx\n\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/9rKEebGi6Io/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/9rKEebGi6Io/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/9rKEebGi6Io/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/9rKEebGi6Io/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/9rKEebGi6Io/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "T-Series",
            "tags": [
                "tseries",
                "tseries songs",
                "chumma",
                "chumma song pawan singh",
                "chumma pawan singh",
                "chumma rajkummar rao",
                "chumma song triptii dimri",
                "pawan singh chumma",
                "chumma pawan singh song",
                "pawan singh chumma song",
                "chumma song video",
                "chumma song pawan singh full",
                "chumma pawan singh full",
                "rajkummar rao and pawan singh",
                "pawan singh song chumma",
                "chumma song dance",
                "chumma vicky vidya ka woh wala video",
                "triptii",
                "pawan singh",
                "chumma dance",
                "pawan singh and rajkummar rao",
                "pawan singh and tripti dimri"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "CHUMMA | Vicky Vidya Ka Woh Wala Video | Rajkummar R, Triptii D, Pawan Singh | Sachin-Jigar, Vayu",
                "description": "Lo Ji! MAZZA To Ab Aayega Na! Jab Rajkummar Rao, Power Star Pawan Singh Aur Triptii Dimri Aayenge Ek Saath!\n\nPresenting the Most Awaited Song \"CHUMMA\" From the Hotly Awaited Film Vicky Vidya Ka Woh Wala Video.\n\n#Chumma #RajkummarRao #PawanSingh #TriptiiDimri #VickyVidyaKaWohWalaVideo\n\nWritten & Directed by Raaj Shaandilyaa.\n\nReleasing in Cinemas with The Bang on 11th October 2024!\n\nGulshan Kumar, T-Series, Balaji Telefilms & Wakaoo Films Present\nin Association with Kathavachak Films\nA T-Series Films & Wakaoo Films Production\n\n\"Vicky Vidya Ka Woh Wala Video\"\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3TZTz1U\nSpotify: https://bit.ly/4eN6pbA\nHungama: https://bit.ly/3NcHulV\nGaana: https://bit.ly/40b3F3Z\nAmazon Prime Music: https://bit.ly/3ZTj2O1\nYouTube Music: https://bit.ly/3XTR0PV\n\nSong Credits:\nMusic : Sachin Jigar\nSinger : Pawan Singh, Rupali Jagga, Rupesh Mishra, Mansa Jimmy & Sachin-Jigar\nLyrics : Vayu\nProgrammed & Arranged by: Sachin-Jigar\nAdditional Programming : Abhishek Singh & Sahil Vishwakarma (White Noise Collectives)\nMusic Production Head : Romil Ved  \nRecording Engineer : Swar Mehta (White Noise Collectives) \nMixed & Mastered : Eric Pillai (FSOB Studio)\nAssistant Mix Engineer : Michael Edwin Pillai\nMusic Label: T-Series\n\nVideo Credits\n➟Director & choreographer - Vijay Ganguly \n➟ DOP -Adil afsar\n➟ Music Video Head(T- series)- Pooja Singh Gujral\n➟ Production designer- Rajat Poddar\n➟ Production desginer-Parijat Poddar\n➟Steady cam- Sandeep Shetty\n➟Jimmy jib- surender kumar J dulgach\n➟Choreographer Assts- Abhishek Pai, Muskan singh,Anjali Verma,kapil dekwal, Hrishikesh.\n➟ Line producer- Shivkumar Tewari\n➟UPM- Naseem shah\n➟ Production executive- Ravinder Rawat \n➟ Production Managers- Pradhuman Deora, Abhijeet Jitendra Patil\n➟ Creative Production Managers - Ankit Ojha, Paresh Vaishnav, Deepesh Jaipuriar \n➟ Production Assistant - Divyansh Vishwakarma\n➟ 1st AC-Anis Shaikh\n➟2nd AC- Santosh jadhav\n➟Focus puller-Sanjay dedure,\n ➟Focus puller- Sandeep Gurav\n➟Art Director-Mukesh Chauhan\n ➟ Associate Art director- Krishna swain, \n➟ Editor - Vijay ganguly\n➟Color studio - Prime focus LTD\n➟ DI Colorist -Andreas Brueckl     \n\nCredits- Artist \n\nRaj kummar Rao Team-\nManager - Mona\nHair-Vijay Raskar\nMakeup-Nitin Purohit\nCostume Designer- Sonali R Patel\n\nPawan Singh Team\nManager- Abhishek Singh\nMusic Marketing Head - Amit Singh\nHair Stylist - Deepak Sharma\nMakeup- Monu Dada\nBoy - Arjun\nStylist- Sonali R Patel\n\n\nTriptii dimri team\nCelebrity managed by - Dharma Cornerstone Agency \nManager - Jui Pawar \nMake up -Nikita kapoor \nHair - Hrishikesh Naskar\nStyled by - Hitendra kapopara\n\nFilm Credits:\nWritten & Directed by Raaj Shaandilyaa\nProduced by : Bhushan Kumar & Krishan Kumar \nProduced by : Shobha Kapoor & Ektaa R Kapoor\nProduced by : Vipul D Shah, Ashwin Varde, Rajesh Bahl \nProduced by : Raaj Shaandilyaa & Vimal Lahoti\nCo-Producer : Shiv Chanana   \nPresident (T-Series) : Neeraj Kalyan\nStory : Raaj Shaandilyaa, Yusuf Ali Khan \nDop : Aseem Mishra Isc\nScreenplay:  Raaj Shaandilyaa, Yusuf Ali Khan, Ishrat R Khan, Rajan Agarwal \nDialouges : Raaj Shaandilyaa\nDop : Aseem Mishra \nEditor : Prakash Chandra Sahoo \nSound Designer : Nihar Ranjan Samal \nProduction Design : Rajat Poddarr & Parijat Poddar\nCreative Director : Ishrat R Khan  \nExecutive  Producer : Kshitij Ravi Prasad \nProject Head (Wakaoo Films) : Barkha Thakur \nDA : Krishanu Singh Rathore  \nCostume Designer : Leepakshi Ellawadi \nAction Director : Manohar Verma \nMusic : Sachin - Jigar  \nLyrics : Priya Saraiya, Som \nBackground Music : Hitesh Sonik\nCasting Director : Paragg Mehta \nChoreographers : Ganesh Acharya, Raju Khan,  Vishnudeva, Sushma Sunam,  Piyush - Shazia\nProject Head (T-Series) : Meghha Chheda \nFilm & Content Team (T-Series) : Alok Kumar Shukla, Heett Savla, Shraddha Shrikant Ghanekar\nMarketing & Promotions (T-Series) : Shivam Chanana, Raj Chanana, Prashant Shetty, Mita Choudhary, Rahul Dubey, Amol Bhamare, Heett Savla\nDigital Team (T-Series) : Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on : T-Series  \nMusic Team  (T-Series)  : Raj Chanana, Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nDi  : Prime Focus \nVfx : Cinegence Media \nDigital Marketing : White Rivers Media \nPublicity Design : Parass Kanani (house of Awe) \nVisual Promotions : Just Right Studioz Nx\n\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT2M35S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "41049686",
            "likeCount": "998720",
            "favoriteCount": "0",
            "commentCount": "151103"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "QzNua4dRBmz1Iz77LVjhqL4VbQY",
        "id": "DTxziqyBoUo",
        "snippet": {
            "publishedAt": "2024-10-07T07:30:07Z",
            "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
            "title": "SAJNA VE SAJNA | Rajkummar R | Shehnaaz G | Triptii | Sunidhi, Divya | Vicky Vidya Ka Woh Wala Video",
            "description": "Get Ready To Dance on this Sensational Song. Presenting the \"SAJNA VE SAJNA\" From the Hotly Awaited Film Vicky Vidya Ka Woh Wala Video.\n\n#SajnaVeSajna #RajkummarRao #ShehnaazGill #TriptiiDimri #VickyVidyaKaWohWalaVideo\n\nWritten & Directed by Raaj Shaandilyaa.\n\nReleasing in Cinemas with The Bang on 11th October 2024!\n\nGulshan Kumar, T-Series, Balaji Telefilms & Wakaoo Films Present\nin Association with Kathavachak Films\nA T-Series Films & Wakaoo Films Production\n\n\"Vicky Vidya Ka Woh Wala Video\"\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/47ZBVRJ\nSpotify: https://bit.ly/4gScaqm\nHungama: https://bit.ly/4eWinzX\nApple Music: https://bit.ly/3XY6tyo\nGaana: https://bit.ly/400ECQG\nAmazon Prime Music: https://bit.ly/3XY6wdy\nYouTube Music: https://bit.ly/4gQtnAp\n\nSong Credits:\nMusic Recreated By: White Noise Collectives\nSinger :Sunidhi Chauhan & Divya kumar \nLyrics :- Irshad Kamil\nProgrammed & Arranged By : Abhishek Singh & Sahil Vishwakarma(White Noise Collectives)\nMusic Production Head : Romil Ved  \nDirector of Choreography : Piyush Shazia\nRecording Engineer : Swar Mehta (White Noise Collectives) \nMixed & Mastered : Eric Pillai @ FSOB Studio\nAssistant Mix Engineer : Michael Edwin Pillai\nMusic Label: T-Series\n\nOriginal Credits\nMusic - Sandesh Shandilya\nSinger- Sunidhi Chauhan \nLyrics - Irshad Kamil\nMusic Label - T-Series\n\nCostume designer -\nSonali R Patel\n\nCostume Assistant -\nShweni shah \nPriyanshi raghuvanshi\n\nFilm Credits:\nWritten & Directed by Raaj Shaandilyaa\nProduced by : Bhushan Kumar & Krishan Kumar \nProduced by : Shobha Kapoor & Ektaa R Kapoor\nProduced by : Vipul D Shah, Ashwin Varde, Rajesh Bahl \nProduced by : Raaj Shaandilyaa & Vimal Lahoti\nCo-Producer : Shiv Chanana   \nPresident (T-Series) : Neeraj Kalyan\nStory : Raaj Shaandilyaa, Yusuf Ali Khan \nDop : Aseem Mishra Isc\nScreenplay:  Raaj Shaandilyaa, Yusuf Ali Khan, Ishrat R Khan, Rajan Agarwal \nDialouges : Raaj Shaandilyaa\nDop : Aseem Mishra \nEditor : Prakash Chandra Sahoo \nSound Designer : Nihar Ranjan Samal \nProduction Design : Rajat Poddarr & Parijat Poddar\nCreative Director : Ishrat R Khan  \nExecutive  Producer : Kshitij Ravi Prasad \nProject Head (Wakaoo Films) : Barkha Thakur \nDA : Krishanu Singh Rathore  \nCostume Designer : Leepakshi Ellawadi \nAction Director : Manohar Verma \nMusic : Sachin - Jigar  \nLyrics : Priya Saraiya, Som \nBackground Music : Hitesh Sonik\nCasting Director : Paragg Mehta \nChoreographers : Ganesh Acharya, Raju Khan,  Vishnudeva, Sushma Sunam,  Piyush - Shazia\nProject Head (T-Series) : Meghha Chheda \nFilm & Content Team (T-Series) : Alok Kumar Shukla, Heett Savla, Shraddha Shrikant Ghanekar\nMarketing & Promotions (T-Series) : Shivam Chanana, Raj Chanana, Prashant Shetty, Mita Choudhary, Rahul Dubey, Amol Bhamare, Heett Savla\nDigital Team (T-Series) : Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on : T-Series  \nMusic Team  (T-Series)  : Raj Chanana, Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nDi  : Prime Focus \nVfx : Cinegence Media \nDigital Marketing : White Rivers Media \nPublicity Design : Parass Kanani (house of Awe) \nVisual Promotions : Just Right Studioz Nx\nTeaser Vfx : Visual Birds Studio\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/DTxziqyBoUo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/DTxziqyBoUo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/DTxziqyBoUo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/DTxziqyBoUo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/DTxziqyBoUo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "T-Series",
            "tags": [
                "tseries",
                "tseries songs",
                "sajna ve sajna",
                "sajna ve sajna song",
                "sajna ve sajna shehnaaz gill",
                "sajna ve sajna rajkummar rao",
                "sajna ve sajna song dance",
                "sajna ve sajna triptii dimri",
                "rajkummar rao",
                "vicky vidya ka woh wala video",
                "shehnaaz gill sajna ve sajna",
                "sajna ve sajna song shehnaaz",
                "shehnaaz gill sajna ve sajna song",
                "rajkummar rao and shehnaaz gill",
                "triptii dimri and shenaaz gill",
                "rajkummar rao movie",
                "shehnaaz gill",
                "rajkummar rao and triptii dimri",
                "triptii dimri",
                "vicky vidya"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "SAJNA VE SAJNA | Rajkummar R | Shehnaaz G | Triptii | Sunidhi, Divya | Vicky Vidya Ka Woh Wala Video",
                "description": "Get Ready To Dance on this Sensational Song. Presenting the \"SAJNA VE SAJNA\" From the Hotly Awaited Film Vicky Vidya Ka Woh Wala Video.\n\n#SajnaVeSajna #RajkummarRao #ShehnaazGill #TriptiiDimri #VickyVidyaKaWohWalaVideo\n\nWritten & Directed by Raaj Shaandilyaa.\n\nReleasing in Cinemas with The Bang on 11th October 2024!\n\nGulshan Kumar, T-Series, Balaji Telefilms & Wakaoo Films Present\nin Association with Kathavachak Films\nA T-Series Films & Wakaoo Films Production\n\n\"Vicky Vidya Ka Woh Wala Video\"\n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/47ZBVRJ\nSpotify: https://bit.ly/4gScaqm\nHungama: https://bit.ly/4eWinzX\nApple Music: https://bit.ly/3XY6tyo\nGaana: https://bit.ly/400ECQG\nAmazon Prime Music: https://bit.ly/3XY6wdy\nYouTube Music: https://bit.ly/4gQtnAp\n\nSong Credits:\nMusic Recreated By: White Noise Collectives\nSinger :Sunidhi Chauhan & Divya kumar \nLyrics :- Irshad Kamil\nProgrammed & Arranged By : Abhishek Singh & Sahil Vishwakarma(White Noise Collectives)\nMusic Production Head : Romil Ved  \nDirector of Choreography : Piyush Shazia\nRecording Engineer : Swar Mehta (White Noise Collectives) \nMixed & Mastered : Eric Pillai @ FSOB Studio\nAssistant Mix Engineer : Michael Edwin Pillai\nMusic Label: T-Series\n\nOriginal Credits\nMusic - Sandesh Shandilya\nSinger- Sunidhi Chauhan \nLyrics - Irshad Kamil\nMusic Label - T-Series\n\nCostume designer -\nSonali R Patel\n\nCostume Assistant -\nShweni shah \nPriyanshi raghuvanshi\n\nFilm Credits:\nWritten & Directed by Raaj Shaandilyaa\nProduced by : Bhushan Kumar & Krishan Kumar \nProduced by : Shobha Kapoor & Ektaa R Kapoor\nProduced by : Vipul D Shah, Ashwin Varde, Rajesh Bahl \nProduced by : Raaj Shaandilyaa & Vimal Lahoti\nCo-Producer : Shiv Chanana   \nPresident (T-Series) : Neeraj Kalyan\nStory : Raaj Shaandilyaa, Yusuf Ali Khan \nDop : Aseem Mishra Isc\nScreenplay:  Raaj Shaandilyaa, Yusuf Ali Khan, Ishrat R Khan, Rajan Agarwal \nDialouges : Raaj Shaandilyaa\nDop : Aseem Mishra \nEditor : Prakash Chandra Sahoo \nSound Designer : Nihar Ranjan Samal \nProduction Design : Rajat Poddarr & Parijat Poddar\nCreative Director : Ishrat R Khan  \nExecutive  Producer : Kshitij Ravi Prasad \nProject Head (Wakaoo Films) : Barkha Thakur \nDA : Krishanu Singh Rathore  \nCostume Designer : Leepakshi Ellawadi \nAction Director : Manohar Verma \nMusic : Sachin - Jigar  \nLyrics : Priya Saraiya, Som \nBackground Music : Hitesh Sonik\nCasting Director : Paragg Mehta \nChoreographers : Ganesh Acharya, Raju Khan,  Vishnudeva, Sushma Sunam,  Piyush - Shazia\nProject Head (T-Series) : Meghha Chheda \nFilm & Content Team (T-Series) : Alok Kumar Shukla, Heett Savla, Shraddha Shrikant Ghanekar\nMarketing & Promotions (T-Series) : Shivam Chanana, Raj Chanana, Prashant Shetty, Mita Choudhary, Rahul Dubey, Amol Bhamare, Heett Savla\nDigital Team (T-Series) : Varun Arora, Juhi Singh, Praveen Sharma, Ratika Anand, Mohit Malik\nMusic on : T-Series  \nMusic Team  (T-Series)  : Raj Chanana, Shivam Chanana, Sonal Chawla, Sonu Srivastava, Vivin Sachdeva\nDi  : Prime Focus \nVfx : Cinegence Media \nDigital Marketing : White Rivers Media \nPublicity Design : Parass Kanani (house of Awe) \nVisual Promotions : Just Right Studioz Nx\nTeaser Vfx : Visual Birds Studio\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT2M30S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "16013221",
            "likeCount": "332748",
            "favoriteCount": "0",
            "commentCount": "33971"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "L4qd-CxRZRRQpSucrK5wXZRO4qs",
        "id": "dqjFPnMFbSk",
        "snippet": {
            "publishedAt": "2024-10-09T01:30:07Z",
            "channelId": "UC0J8BQahplvTY6LjlnLf_NQ",
            "title": "#Video | Chumma Chumma | चुम्मा चुम्मा | Khesari Lal Yadav | Shilpi Raj | Rajaram | नया भोजपुरी गाना",
            "description": "देखि Chumma Anthem Of The Year अउरी तैयार हो जाई रवुआ सब झूमे खातिर ट्रेंडिंग स्टार खेसारी लाल यादव और आकांशा पूरी के साथ \"चुम्मा चुम्मा \" पे।'\n\nSubscribe to our channel for more Bhojpuri Songs:\nhttps://youtube.com/c/SaregamaHumBhojpuri\n\nCredits:-\n\nTitle :- Chumma Chumma\nSinger :- Khesari Lal Yadav & Shilpi Raj\nFeat :- Akanksha Puri\nFilm Name:- Rajaram\nFilm Director:- Parag Patil\nSong Director :- Sooraj Katoch (Zenith)\nLyrics :- Pinku Baba\nMusic :- Vinay Vinayak \nChoreographer :- Geeta Tamta (Zenith)\nDop- Rahul Yadav \nEditor :- Anand Kumar (Santu)\nAssociate Dop - Priyanshu Vats \nFocus Puller- Chandan Singh\nDance troupe :- Zenith\nDance Group :- (PK) Kamlesh \nGFX :- Suraj Vishwakarma \nDI :- Rohit Singh \nProduction :- Amit Singh\nAll Costume:- Reema (Zai fashion )\nMakeup Hair:- Vikash Kumar and Aryan Rajesh\n\nFilm Credits:\n\nProduction:- Technician Film Factory \nProducers :- Parag Patil & R.R. Prince\n\nLyrics:-\n\nF-  फ्लेक्सी कमरिया पे नजरें गड़ाते हो \n     क्या बात है जो ये डॉलर उड़ाते हो \nM- लाली देखाके ललचावत बाड़ू \n      सुतल फीलिंग के जगावत बाड़ू \n      त दे द ना एगो नमूना \n      चूमा चूमा दे द, चूमा चूमा दे द चूमा \nF- चूमा चूमा ना देम, चूमा चूमा ना देम चूमा \n\n                     अंतरा -1\nF-  अरे इंस्टा की मै तो रानी हूँ \n      तेरे जैसे हैँ फैन लाखों में \n      क्यूँ दूँ मै तुझे चुम्मा \n      सपना देखो बस रातों में \nM- द मौका, ल मौका -2\n      गारंटी बा मजा आई हो \n      नाही देबू त दुख होइ दूना \n      चूमा चूमा दे.........\n\n     \n                   अंतरा -2\nF-  मेरा चुम्मा तो बड़ी महँगा है\n     बोलो क्या दोगे मुझे चुम्मे का \n     अरे मेकप में बड़े खर्चे हैँ \n     रेट लाखों हैँ मुझे छूने का \nM-  द खरचा, के परचा -2\n      सब डॉलर में दे दियाई हो \n      बा रइसी रानी बुझ तु उ ना \n      चूमा चूमा दे...\n\n#chummachumma \n#khesarilalyadav \n#akanshapuri \n#shilpiraj \n#saregamahumbhojpuri \n#nayabhojpurigana \n#bhojpurisong \n#jhumma \n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nFollow us on:\nFacebook: https://bit.ly/3FxwPgo \nInstagram: https://bit.ly/32rkJqM\nX: @saregamaglobal \n\nLabel:: Saregama India Limited, A RPSG Group Company",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dqjFPnMFbSk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dqjFPnMFbSk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dqjFPnMFbSk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/dqjFPnMFbSk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/dqjFPnMFbSk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Saregama Hum Bhojpuri",
            "tags": [
                "khesari lal new song",
                "khesari lal",
                "khesari lal yadav",
                "chumma chumma",
                "chumma chumma khesari lal",
                "chumma chumma de de chumma",
                "chumma chumma song",
                "chumma song pawan singh",
                "pawan singh chumma song",
                "chumma chumma khesari lal yadav",
                "khesari lal yadav new song",
                "khesari lal ka gana bhojpuri",
                "khesari lal yadav ka new song",
                "chooma",
                "jhooma",
                "chuma",
                "jhuma",
                "choma",
                "jhoma",
                "chumma song",
                "jumma",
                "chumma chumma de de",
                "Chuma chuma",
                "Chooma chooma",
                "Choomma choomma",
                "Pawan singh chumma",
                "Khesari chumma"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "#Video | Chumma Chumma | चुम्मा चुम्मा | Khesari Lal Yadav | Shilpi Raj | Rajaram | नया भोजपुरी गाना",
                "description": "देखि Chumma Anthem Of The Year अउरी तैयार हो जाई रवुआ सब झूमे खातिर ट्रेंडिंग स्टार खेसारी लाल यादव और आकांशा पूरी के साथ \"चुम्मा चुम्मा \" पे।'\n\nSubscribe to our channel for more Bhojpuri Songs:\nhttps://youtube.com/c/SaregamaHumBhojpuri\n\nCredits:-\n\nTitle :- Chumma Chumma\nSinger :- Khesari Lal Yadav & Shilpi Raj\nFeat :- Akanksha Puri\nFilm Name:- Rajaram\nFilm Director:- Parag Patil\nSong Director :- Sooraj Katoch (Zenith)\nLyrics :- Pinku Baba\nMusic :- Vinay Vinayak \nChoreographer :- Geeta Tamta (Zenith)\nDop- Rahul Yadav \nEditor :- Anand Kumar (Santu)\nAssociate Dop - Priyanshu Vats \nFocus Puller- Chandan Singh\nDance troupe :- Zenith\nDance Group :- (PK) Kamlesh \nGFX :- Suraj Vishwakarma \nDI :- Rohit Singh \nProduction :- Amit Singh\nAll Costume:- Reema (Zai fashion )\nMakeup Hair:- Vikash Kumar and Aryan Rajesh\n\nFilm Credits:\n\nProduction:- Technician Film Factory \nProducers :- Parag Patil & R.R. Prince\n\nLyrics:-\n\nF-  फ्लेक्सी कमरिया पे नजरें गड़ाते हो \n     क्या बात है जो ये डॉलर उड़ाते हो \nM- लाली देखाके ललचावत बाड़ू \n      सुतल फीलिंग के जगावत बाड़ू \n      त दे द ना एगो नमूना \n      चूमा चूमा दे द, चूमा चूमा दे द चूमा \nF- चूमा चूमा ना देम, चूमा चूमा ना देम चूमा \n\n                     अंतरा -1\nF-  अरे इंस्टा की मै तो रानी हूँ \n      तेरे जैसे हैँ फैन लाखों में \n      क्यूँ दूँ मै तुझे चुम्मा \n      सपना देखो बस रातों में \nM- द मौका, ल मौका -2\n      गारंटी बा मजा आई हो \n      नाही देबू त दुख होइ दूना \n      चूमा चूमा दे.........\n\n     \n                   अंतरा -2\nF-  मेरा चुम्मा तो बड़ी महँगा है\n     बोलो क्या दोगे मुझे चुम्मे का \n     अरे मेकप में बड़े खर्चे हैँ \n     रेट लाखों हैँ मुझे छूने का \nM-  द खरचा, के परचा -2\n      सब डॉलर में दे दियाई हो \n      बा रइसी रानी बुझ तु उ ना \n      चूमा चूमा दे...\n\n#chummachumma \n#khesarilalyadav \n#akanshapuri \n#shilpiraj \n#saregamahumbhojpuri \n#nayabhojpurigana \n#bhojpurisong \n#jhumma \n\nLearn to sing in Sur with AI Powered Personal Music Teacher- Padhanisa by Saregama. Download Padhanisa App now; https://sarega.ma/padhanisa\n\nFollow us on:\nFacebook: https://bit.ly/3FxwPgo \nInstagram: https://bit.ly/32rkJqM\nX: @saregamaglobal \n\nLabel:: Saregama India Limited, A RPSG Group Company"
            },
            "defaultAudioLanguage": "bh"
        },
        "contentDetails": {
            "duration": "PT3M23S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "11016988",
            "likeCount": "440713",
            "favoriteCount": "0",
            "commentCount": "202121"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "YTa7UfKUwfypewHkqV3EAXGlyF0",
        "id": "-rKAOaS7Q3I",
        "snippet": {
            "publishedAt": "2024-10-03T12:30:01Z",
            "channelId": "UCaayLD9i5x4MmIoVZxXSv_g",
            "title": "नवरात्रि विशेष आरती: जय अम्बे गौरी Jai Ambe Gauri Aarti,🙏Durga Ji Aarti🙏,ANURADHA PAUDWAL,Devi Aarti",
            "description": "🙏https://youtu.be/-rKAOaS7Q3I🙏\nSubscribe: http://www.youtube.com/tseriesbhakti\nDevi Aarti: Jai Ambe Gauri Aarti, Durga Ji Ki Aarti \nSinger: Anuradha Paudwal\nMusic: Arun Paudwal\nLyrics: Traditional \nAlbum: Aarti Vol.4\nMusic Label: T-Series\n\n#TSeriesBhaktiSagar #anuradhapaudwal #navratrisong #navratrispecial #navratribhajan #bhaktisongs #omjaiambegauri #deviaarti #deviaartisongs \n\nIf You like the video don't forget to share with others & also share your views.\nStay connected with us!!!\n► Subscribe: http://www.youtube.com/tseriesbhakti\n► Like us on Facebook: https://www.facebook.com/BhaktiSagarTseries/\n► Follow us on Twitter: https://twitter.com/tseriesbhakti\n\nFor Spiritual Voice Alerts, Airtel subscribers Dial 589991 (toll free) \nTo set popular Bhakti Dhun as your HelloTune, Airtel subscribers Dial 57878881",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-rKAOaS7Q3I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-rKAOaS7Q3I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-rKAOaS7Q3I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/-rKAOaS7Q3I/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/-rKAOaS7Q3I/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "T-Series Bhakti Sagar",
            "tags": [
                "t-series",
                "bhakti",
                "sagar",
                "devi bhajans",
                "navratri songs",
                "navaratri special video",
                "goddess",
                "durga",
                "kaali",
                "kali",
                "vaishno devi",
                "naurate",
                "devi bhakti bhajans",
                "stuti",
                "mata",
                "religious",
                "devotional songs",
                "bhetein",
                "new latest Punjabi devi",
                "new Punjabi devotional songs",
                "bhakti songs",
                "devotional video",
                "Punjabi devotional",
                "jai mata di",
                "navratri",
                "devi songs",
                "mata ke bhajan",
                "aarti",
                "jagambe",
                "sheranwali mata",
                "navrate",
                "jai mata di song",
                "divine mother",
                "mahakali",
                "jay",
                "sheranwali",
                "jai",
                "ambe",
                "navratri special",
                "navaratri"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "defaultLanguage": "hi",
            "localized": {
                "title": "नवरात्रि विशेष आरती: जय अम्बे गौरी Jai Ambe Gauri Aarti,🙏Durga Ji Aarti🙏,ANURADHA PAUDWAL,Devi Aarti",
                "description": "🙏https://youtu.be/-rKAOaS7Q3I🙏\nSubscribe: http://www.youtube.com/tseriesbhakti\nDevi Aarti: Jai Ambe Gauri Aarti, Durga Ji Ki Aarti \nSinger: Anuradha Paudwal\nMusic: Arun Paudwal\nLyrics: Traditional \nAlbum: Aarti Vol.4\nMusic Label: T-Series\n\n#TSeriesBhaktiSagar #anuradhapaudwal #navratrisong #navratrispecial #navratribhajan #bhaktisongs #omjaiambegauri #deviaarti #deviaartisongs \n\nIf You like the video don't forget to share with others & also share your views.\nStay connected with us!!!\n► Subscribe: http://www.youtube.com/tseriesbhakti\n► Like us on Facebook: https://www.facebook.com/BhaktiSagarTseries/\n► Follow us on Twitter: https://twitter.com/tseriesbhakti\n\nFor Spiritual Voice Alerts, Airtel subscribers Dial 589991 (toll free) \nTo set popular Bhakti Dhun as your HelloTune, Airtel subscribers Dial 57878881"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT7M40S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "9471879",
            "likeCount": "70988",
            "favoriteCount": "0",
            "commentCount": "5013"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "Y7Spf_x59a7nUt5wBIevvemVnWY",
        "id": "Qds5tztmb5g",
        "snippet": {
            "publishedAt": "2024-10-05T13:02:44Z",
            "channelId": "UCn4rEMqKtwBQ6-oEwbd4PcA",
            "title": "Vettaiyan - Hunter Vantaar Lyric Video | Rajinikanth | Anirudh Ravichander | T.J.Gnanavel",
            "description": "Lyca Productions \nSubaskaran Presents\nSuperstar Rajinikanth in Vettaiyan\n\nSong Title : Hunter Vantaar\nAlbum / Movie : Vettaiyan\nLanguage : Tamil\nComposed by Anirudh Ravichander\nLyrics - Arivu\nVocals - Siddarth Basrur\n\nMovie Credits:\nCast: Rajinikanth, Amitabh Bachchan, Fahadh Faasil,\nRana Daggubati, Manju Warrier, Kishore, Ritika Singh,\nDushara Vijayan, GM Sundar, Abirami, Rohini,\nRao Ramesh, Ramesh Thilak, Rakshan\nWriter & Director: T.J. Gnanavel\nMusic: Anirudh Ravichander\nDirector of Photography: SR Kathir I.S.C\nProduction Designer: K.Kadhir\nAction Director: Anbariv\nEditor: Philomin Raj\nScreenplay: B Kiruthika\nArt Director: Sakthee Venkatraj M.\nChoreographer: Dinesh\nMakeup: Banu, Pattanam Rasheed, Jeetendra Sawant\nCostume Design: Perumal Selvam, Anu Vardhan, Veera Kapur Ee, Dinesh Manoharan, Liji Preman\nStills: S.R Murugan\nProduction Controller (Tharu Creations): Kimberly Senthil\nCo Directors: Mahendran, Senthilkumar Kesavan\nCasting Director: Surendra Thanu Murthy\nProject Coordination: Whale Tale\nFirst Associate Directors - R. Manikandan Valarmathi, Arunprakash Samiaiah\nAssociate Directors - Muhammed Yasar Arafath, Manasvini Boovarahan, Saroja Prakash, Harsha\nDamodharan, Sridhar Lo, K.A. Andrew\nFirst Assistant Directors - Abishek, Ashok M J, Arunpandiyan Manokaran\nAssistant Directors - A. Gopi Allimuthu, Bala Ganesh, S. Ganesa Moorthy\nTrainee Asst Director - Kavi Kumaresan J.\nLighting Cameraman - SR. Santhosh Kumar\nOperating Cameraman - Bheemji K, Sriram\nAssociate Cinematographers - V. Karthik, Subramanian Vineeth R\nAssistant Cinematographers - Nirmal G, M. Mohamed Farid\nAssociate Editors - Anbalakan. G, Aral R Thangam\nAssistant Editor - Alagar Naveen\nDubbing Sound Engineer: Pari Venkat\nPublicity Design: Gopi Prasanna\nVFX: Digital Turbo Media (Lavan & Kusan)\nTitle Animation: The Ident Labs\nSound Design: Sync Cinema\nFinal Mixing: Kannan Ganpat\nColorist: Raghunath Varma\nSubtitles: Subemy\nDI: B2H Studios\nDIT: Abineswaran - GB Colors\nPRO: Riyaz K Ahmed, Sathish (AIM)\nProduction Executives: K.R Balamurugan, Thambi M Boopathy\nProduction Managers: Saattai GNS Sundaram, Seithur K Elango, Sudhakar Dachinamoorthy, N.\nPalpandi\nProduction Controller: R.S Venkat\nExecutive Producer Lyca Productions: Subramanian Narayanan\nHead of Lyca Productions - G.K.M. Tamil Kumaran\nProduced by Subaskaran\n\nMusicians Credits\nSong Title : Hunter Vantaar\nAlbum / Movie : Vettaiyan\nLanguage : Tamil\nComposed by Anirudh Ravichander\nLyrics - Arivu\nVocals - Siddarth Basrur\n\nDialogues - Super Star Rajinikanth\nEL Fé Choir by Roe Vincent\nBacking Vocals by Arivu\nVeena - Malavikka Rajhesh\nElectric Guitar - Keba Jeremiah\nKeyboards, Synth & Rhythm Programmed by Anirudh Ravichander\nAdditional Music Production - Ashwin Krishna\nAdditional Rhythm Programmed by Shashank Vijay\nAdditional Keyboard Programmed by Arish\nMusic Advisor - Ananthakrrishnan\nCreative Consultant - Sajith Satya\nRecorded at\nAlbuquerque Records, Chennai.\nEngineered by Srinivasan M, Shivakiran S, Rajesh Kannan\nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai\nMastered by Luca Pretolesi at Studio DMI, Las Vegas, Assisted by Alistair\nMusic Coordinator - Velavan B\n\nLyric Video by Venky\n\nMusic Label - Sony Music Entertainment India Pvt. Ltd.\n\n© 2024 Sony Music Entertainment India Pvt. Ltd.\n\nSubscribe Now: http://bit.ly/SonyMusicSouthVevo\nSubscribe Now: http://bit.ly/SonyMusicSouthYT\nFollow us: https://www.instagram.com/sonymusic_south/\nFollow us: Twitter: https://twitter.com/SonyMusicSouth\nLike us: Facebook: https://www.facebook.com/SonyMusicSouth\nJoin our WhatsApp broadcast channel https://whatsapp.com/channel/0029VaAThD53GJOwZNFUJZ3B\nJoin Our Instagram broadcast channel https://ig.me/j/Abal-auA3Y5L6OtV/",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Qds5tztmb5g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Qds5tztmb5g/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Qds5tztmb5g/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/Qds5tztmb5g/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/Qds5tztmb5g/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sony Music South",
            "tags": [
                "Sony Music South",
                "Sony Music",
                "Latest Song",
                "Tamil song",
                "Tamil Latest Song",
                "Tamil Latest Songs 2023",
                "Latest songs in Tamil",
                "Songs in Tamil",
                "Latest Tamil Movies",
                "latest Tamil Love Songs",
                "Latest Tamil Hit Songs",
                "Thalaivar 170",
                "Vettaiyan",
                "T.J. Gnanavel",
                "Rajinikanth",
                "Anirudh",
                "HBD Super Star",
                "Vettaiyan title reveal",
                "Thalaivar 170 title",
                "Happy Birthday Rajinikanth",
                "vettaiyan first look",
                "vettaiyan motion poster",
                "vettaiyan songs",
                "Rajinikanth dubbing",
                "Rajinikanth Vettaiyan",
                "Manasilaayo"
            ],
            "categoryId": "10",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-GB",
            "localized": {
                "title": "Vettaiyan - Hunter Vantaar Lyric Video | Rajinikanth | Anirudh Ravichander | T.J.Gnanavel",
                "description": "Lyca Productions \nSubaskaran Presents\nSuperstar Rajinikanth in Vettaiyan\n\nSong Title : Hunter Vantaar\nAlbum / Movie : Vettaiyan\nLanguage : Tamil\nComposed by Anirudh Ravichander\nLyrics - Arivu\nVocals - Siddarth Basrur\n\nMovie Credits:\nCast: Rajinikanth, Amitabh Bachchan, Fahadh Faasil,\nRana Daggubati, Manju Warrier, Kishore, Ritika Singh,\nDushara Vijayan, GM Sundar, Abirami, Rohini,\nRao Ramesh, Ramesh Thilak, Rakshan\nWriter & Director: T.J. Gnanavel\nMusic: Anirudh Ravichander\nDirector of Photography: SR Kathir I.S.C\nProduction Designer: K.Kadhir\nAction Director: Anbariv\nEditor: Philomin Raj\nScreenplay: B Kiruthika\nArt Director: Sakthee Venkatraj M.\nChoreographer: Dinesh\nMakeup: Banu, Pattanam Rasheed, Jeetendra Sawant\nCostume Design: Perumal Selvam, Anu Vardhan, Veera Kapur Ee, Dinesh Manoharan, Liji Preman\nStills: S.R Murugan\nProduction Controller (Tharu Creations): Kimberly Senthil\nCo Directors: Mahendran, Senthilkumar Kesavan\nCasting Director: Surendra Thanu Murthy\nProject Coordination: Whale Tale\nFirst Associate Directors - R. Manikandan Valarmathi, Arunprakash Samiaiah\nAssociate Directors - Muhammed Yasar Arafath, Manasvini Boovarahan, Saroja Prakash, Harsha\nDamodharan, Sridhar Lo, K.A. Andrew\nFirst Assistant Directors - Abishek, Ashok M J, Arunpandiyan Manokaran\nAssistant Directors - A. Gopi Allimuthu, Bala Ganesh, S. Ganesa Moorthy\nTrainee Asst Director - Kavi Kumaresan J.\nLighting Cameraman - SR. Santhosh Kumar\nOperating Cameraman - Bheemji K, Sriram\nAssociate Cinematographers - V. Karthik, Subramanian Vineeth R\nAssistant Cinematographers - Nirmal G, M. Mohamed Farid\nAssociate Editors - Anbalakan. G, Aral R Thangam\nAssistant Editor - Alagar Naveen\nDubbing Sound Engineer: Pari Venkat\nPublicity Design: Gopi Prasanna\nVFX: Digital Turbo Media (Lavan & Kusan)\nTitle Animation: The Ident Labs\nSound Design: Sync Cinema\nFinal Mixing: Kannan Ganpat\nColorist: Raghunath Varma\nSubtitles: Subemy\nDI: B2H Studios\nDIT: Abineswaran - GB Colors\nPRO: Riyaz K Ahmed, Sathish (AIM)\nProduction Executives: K.R Balamurugan, Thambi M Boopathy\nProduction Managers: Saattai GNS Sundaram, Seithur K Elango, Sudhakar Dachinamoorthy, N.\nPalpandi\nProduction Controller: R.S Venkat\nExecutive Producer Lyca Productions: Subramanian Narayanan\nHead of Lyca Productions - G.K.M. Tamil Kumaran\nProduced by Subaskaran\n\nMusicians Credits\nSong Title : Hunter Vantaar\nAlbum / Movie : Vettaiyan\nLanguage : Tamil\nComposed by Anirudh Ravichander\nLyrics - Arivu\nVocals - Siddarth Basrur\n\nDialogues - Super Star Rajinikanth\nEL Fé Choir by Roe Vincent\nBacking Vocals by Arivu\nVeena - Malavikka Rajhesh\nElectric Guitar - Keba Jeremiah\nKeyboards, Synth & Rhythm Programmed by Anirudh Ravichander\nAdditional Music Production - Ashwin Krishna\nAdditional Rhythm Programmed by Shashank Vijay\nAdditional Keyboard Programmed by Arish\nMusic Advisor - Ananthakrrishnan\nCreative Consultant - Sajith Satya\nRecorded at\nAlbuquerque Records, Chennai.\nEngineered by Srinivasan M, Shivakiran S, Rajesh Kannan\nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai\nMastered by Luca Pretolesi at Studio DMI, Las Vegas, Assisted by Alistair\nMusic Coordinator - Velavan B\n\nLyric Video by Venky\n\nMusic Label - Sony Music Entertainment India Pvt. Ltd.\n\n© 2024 Sony Music Entertainment India Pvt. Ltd.\n\nSubscribe Now: http://bit.ly/SonyMusicSouthVevo\nSubscribe Now: http://bit.ly/SonyMusicSouthYT\nFollow us: https://www.instagram.com/sonymusic_south/\nFollow us: Twitter: https://twitter.com/SonyMusicSouth\nLike us: Facebook: https://www.facebook.com/SonyMusicSouth\nJoin our WhatsApp broadcast channel https://whatsapp.com/channel/0029VaAThD53GJOwZNFUJZ3B\nJoin Our Instagram broadcast channel https://ig.me/j/Abal-auA3Y5L6OtV/"
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT3M19S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "4011036",
            "likeCount": "145841",
            "favoriteCount": "0",
            "commentCount": "3455"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "qbkQWyJ_MW5W0ZQx8jHWEwPiqhE",
        "id": "D0kZr01gOsk",
        "snippet": {
            "publishedAt": "2024-10-05T06:06:17Z",
            "channelId": "UCrWc5vUgSM4MvZWI3_2iQ8Q",
            "title": "Ghar mai nikala Saap 🐍 #minivlog #sanjhalikavlog #snake #vlog #trending",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/D0kZr01gOsk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/D0kZr01gOsk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/D0kZr01gOsk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/D0kZr01gOsk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/D0kZr01gOsk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sanjhalika Vlog",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Ghar mai nikala Saap 🐍 #minivlog #sanjhalikavlog #snake #vlog #trending",
                "description": ""
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT48S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "10076533",
            "likeCount": "154505",
            "favoriteCount": "0",
            "commentCount": "609"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "ANpoYKbXPPZAblbc8SfTWflhLu8",
        "id": "zmsF_dsHkzM",
        "snippet": {
            "publishedAt": "2024-10-11T09:30:08Z",
            "channelId": "UCJcCB-QYPIBcbKcBQOTwhiA",
            "title": "புலி நடிச்சு இப்பதான் பாக்குறேன்😱🔥| Bali Ep- 4 | Vj Sidddhu Vlogs",
            "description": "GT Holidays:\nContact GT holidays for Tour Packages all across the globe\nFor more details : https://www.gtholidays.in/\nCall : 9940882200\n\nFor Business inquiries please contact us :7200571056\nGmail : vjsidduvlogsadv@gmail.com  \n\n#vjsiddhuvlogs #funvlogs #balivlogs #zoo #episode4\n___________________________________\n\nFollow My Social Media Pages \n\nFacebook :- https://www.facebook.com/siddhuvideos?mibextid=LQQJ4d\nInstagram :- https://www.instagram.com/vjsiddhu_official/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\nPage Instagram :- https://www.instagram.com/vjsiddhu_vlogs/?igshid=MmIzYWVlNDQ5Yg%3D%3D\n\n___________________________________\n\nIn Association with DIVO - Digital Partner\nWebsite - http://web.divo.in/\nInstagram - https://www.instagram.com/divomovies/\nFacebook - http://www.facebook.com/divomovies\nTwitter - https://twitter.com/divomovies",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zmsF_dsHkzM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zmsF_dsHkzM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zmsF_dsHkzM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/zmsF_dsHkzM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/zmsF_dsHkzM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Vj Siddhu Vlogs",
            "tags": [
                "Vj Siddhu Vlogs",
                "Vj Siddhu Vlogs Youtube channel",
                "Vj Siddhu Vlogs channel",
                "Siddhu",
                "Siddhu vlogs",
                "Siddhu channel",
                "Vj Siddhu channel",
                "Vj Siddhu",
                "Siddhu latest videos",
                "Vj Siddhu Vlogs latest",
                "Vlogs",
                "fun panrom vlogs",
                "sidhu vlogs",
                "siddhu vlogs",
                "bali vlogs",
                "bali series",
                "vj siddhu vlogs",
                "vj siddhu vlogs bali series",
                "vj siddhu vlogs bali vlog",
                "siddhu balli series",
                "harshath khan",
                "celebrity sathish",
                "bali vlog",
                "siddhu bali series",
                "vj siddhu bali video",
                "zoo",
                "asia's largest zoo"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "புலி நடிச்சு இப்பதான் பாக்குறேன்😱🔥| Bali Ep- 4 | Vj Sidddhu Vlogs",
                "description": "GT Holidays:\nContact GT holidays for Tour Packages all across the globe\nFor more details : https://www.gtholidays.in/\nCall : 9940882200\n\nFor Business inquiries please contact us :7200571056\nGmail : vjsidduvlogsadv@gmail.com  \n\n#vjsiddhuvlogs #funvlogs #balivlogs #zoo #episode4\n___________________________________\n\nFollow My Social Media Pages \n\nFacebook :- https://www.facebook.com/siddhuvideos?mibextid=LQQJ4d\nInstagram :- https://www.instagram.com/vjsiddhu_official/?igshid=OGQ5ZDc2ODk2ZA%3D%3D\nPage Instagram :- https://www.instagram.com/vjsiddhu_vlogs/?igshid=MmIzYWVlNDQ5Yg%3D%3D\n\n___________________________________\n\nIn Association with DIVO - Digital Partner\nWebsite - http://web.divo.in/\nInstagram - https://www.instagram.com/divomovies/\nFacebook - http://www.facebook.com/divomovies\nTwitter - https://twitter.com/divomovies"
            },
            "defaultAudioLanguage": "ta"
        },
        "contentDetails": {
            "duration": "PT19M8S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1597832",
            "likeCount": "117904",
            "favoriteCount": "0",
            "commentCount": "1076"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "BqbVP25oNoWXwzrQhkh0qlUz9-Q",
        "id": "UqCXa-FJE0Y",
        "snippet": {
            "publishedAt": "2024-10-04T11:42:07Z",
            "channelId": "UCVIzkIF95Yll-aQ-SQBEbyA",
            "title": "ലോകത്ത് ആദ്യമായി ഉറുമ്പുകൾ കാരണം ആളുകൾ നാട് വിട്ട് പോകുന്ന വിചിത്രമായ ഗ്രാമത്തിൽ പോകാം 💯😱 #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/UqCXa-FJE0Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/UqCXa-FJE0Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/UqCXa-FJE0Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/UqCXa-FJE0Y/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/UqCXa-FJE0Y/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "indrajith vlogy",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "ലോകത്ത് ആദ്യമായി ഉറുമ്പുകൾ കാരണം ആളുകൾ നാട് വിട്ട് പോകുന്ന വിചിത്രമായ ഗ്രാമത്തിൽ പോകാം 💯😱 #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT1M1S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3478515",
            "likeCount": "143566",
            "favoriteCount": "0",
            "commentCount": "600"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "GKVuCksB74xzyYZNQ6pVGTnXvDE",
        "id": "YCWynjNTmPo",
        "snippet": {
            "publishedAt": "2024-10-12T02:30:16Z",
            "channelId": "UCjvgGbPPn-FgYeguc5nxG4A",
            "title": "Subh-Subh Etna Bada Snake Aagya 😲",
            "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YCWynjNTmPo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YCWynjNTmPo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YCWynjNTmPo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/YCWynjNTmPo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/YCWynjNTmPo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sourav Joshi Vlogs",
            "tags": [
                "sourav joshi",
                "sourav joshi vlogs",
                "family vlogs",
                "daily vlogs",
                "piyush joshi",
                "piyush joshi vlogs",
                "sourav joshi arts",
                "vlogs",
                "family vlog",
                "KUNALI",
                "KUNALI JOSHI",
                "KUNALI JOSHI VLOGS",
                "kunali",
                "kunali vlogs",
                "kunali vlog",
                "kunali k toys",
                "kunali ka dant tut gya",
                "ipl",
                "ipl match",
                "ipl match vlog",
                "new gaming pc",
                "new gaming pc vlog",
                "gaming pc",
                "kunali ka gaming pc",
                "gaming pc for kunali",
                "Secret Room",
                "WE BUILD A HIDDEN SECRET ROOM IN OUR HOUSE",
                "SECRET ROOM IN OUR HOUSE"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Subh-Subh Etna Bada Snake Aagya 😲",
                "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com"
            }
        },
        "contentDetails": {
            "duration": "PT8M25S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3799679",
            "likeCount": "191470",
            "favoriteCount": "0",
            "commentCount": "6348"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "Y0q_YOmWtPIAg2XDHMx2apAHAeQ",
        "id": "H-t83QqdhDo",
        "snippet": {
            "publishedAt": "2024-10-08T09:28:46Z",
            "channelId": "UCjeHCxQgZuR8uvbpkSy5vpQ",
            "title": "என்னடி முறைச்சு பார்க்கிற😞",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/H-t83QqdhDo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/H-t83QqdhDo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/H-t83QqdhDo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/H-t83QqdhDo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/H-t83QqdhDo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Ela Gayu",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "என்னடி முறைச்சு பார்க்கிற😞",
                "description": ""
            },
            "defaultAudioLanguage": "ta"
        },
        "contentDetails": {
            "duration": "PT33S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1249513",
            "likeCount": "32560",
            "favoriteCount": "0"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "0AOwIzxX5qtDdeC6iNl5JnkO7u8",
        "id": "oGM8uUNpe1s",
        "snippet": {
            "publishedAt": "2024-10-09T00:55:31Z",
            "channelId": "UCkBY0aHJP9BwjZLDYxAQrKg",
            "title": "Marnus invents a new fielding position! 😅 #SheffieldShield",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oGM8uUNpe1s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oGM8uUNpe1s/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oGM8uUNpe1s/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/oGM8uUNpe1s/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/oGM8uUNpe1s/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "cricket.com.au",
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Marnus invents a new fielding position! 😅 #SheffieldShield",
                "description": ""
            },
            "defaultAudioLanguage": "en-AU"
        },
        "contentDetails": {
            "duration": "PT47S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3943198",
            "likeCount": "137222",
            "favoriteCount": "0",
            "commentCount": "842"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "EZovb68Qt9tg1OJj3kCEFeku_Ns",
        "id": "0AZsfLWUGro",
        "snippet": {
            "publishedAt": "2024-10-03T09:00:01Z",
            "channelId": "UCq7Qi-bLMVeKO6lUlndXW2A",
            "title": "Women’s Free Kicks + Men’s 😳🚀",
            "description": "Women’s Free Kicks + Men’s 😳🚀",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/0AZsfLWUGro/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/0AZsfLWUGro/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/0AZsfLWUGro/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/0AZsfLWUGro/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/0AZsfLWUGro/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Thiago Productions",
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Women’s Free Kicks + Men’s 😳🚀",
                "description": "Women’s Free Kicks + Men’s 😳🚀"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT20S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "34678675",
            "likeCount": "1600577",
            "favoriteCount": "0",
            "commentCount": "4438"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "nL1kj7e8nBik-KpdNU8YjWcV8jk",
        "id": "UuJQx4Z8zG4",
        "snippet": {
            "publishedAt": "2024-10-06T13:00:37Z",
            "channelId": "UC1a2ZCw7tugRZYRMnecNj3A",
            "title": "TRY NOT TO FALL 🙈😱",
            "description": "Ouch",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/UuJQx4Z8zG4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/UuJQx4Z8zG4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/UuJQx4Z8zG4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/UuJQx4Z8zG4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/UuJQx4Z8zG4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Celine Dept",
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "TRY NOT TO FALL 🙈😱",
                "description": "Ouch"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT29S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
                "blocked": [
                    "BY",
                    "RU"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "21513126",
            "likeCount": "974921",
            "favoriteCount": "0",
            "commentCount": "3078"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "g5aqs11B1058N3LfnUWh4fw9xl4",
        "id": "-wgGCxzbFLE",
        "snippet": {
            "publishedAt": "2024-09-29T02:11:19Z",
            "channelId": "UC4xGPgUrXX9U1lfT3PrIcOw",
            "title": "गूँगा बना विराट कोहली 🥹❤️ #cricket #shorts #ytshorts #viral #trending #sports #love #respect #yt",
            "description": "गूँगा बना विराट कोहली 🥹❤️ #cricket #shorts #ytshorts #viral #trending #sports #love #respect #yt \n\n\n\n\n\n\n\n\n\n\n\n\n\n\nTop tennis cricket shots \nTop tennis cricket player \nBest tennis cricket player \nBest tennis cricket shots \nTop tennis cricket player inikhilcricketer \nBest tennis cricket player inikhilcricketer \nInstagram viral video \nInstagram viral reels \nInstagram viral videos \nTrending shorts \nTrending vidoe \nViral shorts \nViral video \nTiktok viral vidoe \nTiktok revenge video \nTiktok cricket video \nMotivation cricket video \nFunny cricket video \ninikhilcricketer viral vidoe \ninikhil revenge vidoe \ninikhilcricketer motivation video",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-wgGCxzbFLE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-wgGCxzbFLE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-wgGCxzbFLE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/-wgGCxzbFLE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/-wgGCxzbFLE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "👑inikhilcricketer👑",
            "tags": [
                "Cricket",
                "Cricketlovers",
                "cricketmerijaan",
                "cricketfans",
                "cricketfamily",
                "Tenniscricket",
                "Tennisplayer",
                "viral",
                "trending",
                "shorts",
                "ytshorts",
                "sports",
                "yt",
                "youtubeshorts",
                "viral shorts",
                "trending shorts",
                "respect cricket shorts",
                "tiktok viral vidoe",
                "trending vidoe",
                "viral vidoe",
                "revenge vidoe",
                "inikhilcricketer revenge video",
                "inikhilcricketer motivation video",
                "inikhilcricketer funny cricket video",
                "foryoupage",
                "virat kohli",
                "kohli respect",
                "virat kohli love"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "गूँगा बना विराट कोहली 🥹❤️ #cricket #shorts #ytshorts #viral #trending #sports #love #respect #yt",
                "description": "गूँगा बना विराट कोहली 🥹❤️ #cricket #shorts #ytshorts #viral #trending #sports #love #respect #yt \n\n\n\n\n\n\n\n\n\n\n\n\n\n\nTop tennis cricket shots \nTop tennis cricket player \nBest tennis cricket player \nBest tennis cricket shots \nTop tennis cricket player inikhilcricketer \nBest tennis cricket player inikhilcricketer \nInstagram viral video \nInstagram viral reels \nInstagram viral videos \nTrending shorts \nTrending vidoe \nViral shorts \nViral video \nTiktok viral vidoe \nTiktok revenge video \nTiktok cricket video \nMotivation cricket video \nFunny cricket video \ninikhilcricketer viral vidoe \ninikhil revenge vidoe \ninikhilcricketer motivation video"
            }
        },
        "contentDetails": {
            "duration": "PT58S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "10603517",
            "likeCount": "322498",
            "favoriteCount": "0",
            "commentCount": "586"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "fVnXLBrP767RM3G2s0MeUYNEuwM",
        "id": "jV3TyzpuWEA",
        "snippet": {
            "publishedAt": "2024-10-12T01:46:08Z",
            "channelId": "UCJ5v_MCY6GNUBTO8-D3XoAg",
            "title": "Randy Orton tried to be the voice of reason... but he let his fist do the talking instead #SmackDown",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jV3TyzpuWEA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jV3TyzpuWEA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jV3TyzpuWEA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/jV3TyzpuWEA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/jV3TyzpuWEA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "WWE",
            "tags": [
                "Cody Rhodes",
                "Jakara Jackson",
                "Kevin Owens",
                "Lash Legend",
                "Nick Aldis",
                "Randy Orton",
                "superstars",
                "world wrestling entertainment",
                "wrestle",
                "wrestler",
                "wrestling",
                "wwe",
                "wwe 2024",
                "مصارعه",
                "कुश्ती",
                "डब्लू डब्लू ई",
                "पहलवान",
                "मैच",
                "व्यावसायिक कुश्ती",
                "सुपरस्टार",
                "Smackdown clips",
                "smackdown highlights",
                "smackdown winners",
                "wwe smackdown highlights today",
                "smackdown tonight",
                "friday night smackdown",
                "wwe smackdown",
                "smackdown 2024",
                "smack downs highlights"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Randy Orton tried to be the voice of reason... but he let his fist do the talking instead #SmackDown",
                "description": ""
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT32S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
                "blocked": [
                    "RU"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1313223",
            "likeCount": "93610",
            "favoriteCount": "0",
            "commentCount": "698"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "4qzpkEfVVJXC84pjqmlUf0xJfk0",
        "id": "VKW_nUA0DNU",
        "snippet": {
            "publishedAt": "2024-10-13T06:47:06Z",
            "channelId": "UCrxutDChXkpAqpMW7nGxl9w",
            "title": "Morning Domination Is On !! FREE FIRE LIVE",
            "description": "Morning Domination Is On !! FREE FIRE LIVE #shortsfeed #nrz #freefirelive",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VKW_nUA0DNU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VKW_nUA0DNU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VKW_nUA0DNU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/VKW_nUA0DNU/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/VKW_nUA0DNU/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "NRZ",
            "tags": [
                "Tgr nrz",
                "Nrz tgr",
                "Nrz"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Morning Domination Is On !! FREE FIRE LIVE",
                "description": "Morning Domination Is On !! FREE FIRE LIVE #shortsfeed #nrz #freefirelive"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT3H36M51S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1047157",
            "likeCount": "12292",
            "favoriteCount": "0",
            "commentCount": "56"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "O083e_LNtQwZIRFqKTwcFcL-75w",
        "id": "tNI8pxKM7dQ",
        "snippet": {
            "publishedAt": "2024-10-13T14:49:22Z",
            "channelId": "UCSncGB_s0tuWN-4l-58mmvQ",
            "title": "I GOT TRAPPED INSIDE MINECRAFT FAKE EDITION!",
            "description": "So today, I Got Trapped inside the Fake Minecraft Edition where all the blocks are made of wools and everything in the game is just trash! can I escape this fake edition and make my way to the original one? Watch to find out!!\n\nBtw comments me batao Jackson ko wapas laya jaye ke nhi??\n\nFOLLOW ME :\nInstagram - https://www.instagram.com/proboiz_95\nTwitter - https://twitter.com/proboiz95\n\nBusiness Inquiry - proboizofficial@gmail.com\n\nAbout me: I am Paresh, Aka ProBoiz and I make gaming videos that will surely make your day! So if you enjoyed watching this videos then SMASH that Like button :D",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/tNI8pxKM7dQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/tNI8pxKM7dQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/tNI8pxKM7dQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/tNI8pxKM7dQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/tNI8pxKM7dQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "ProBoiz 95",
            "tags": [
                "minecraft",
                "minecraft free edition",
                "minecraft fake edition",
                "minecraft but",
                "minecraft but mod",
                "minecraft mod",
                "minecraft hindi",
                "minecraft video",
                "proboiz",
                "proboiz 95"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "I GOT TRAPPED INSIDE MINECRAFT FAKE EDITION!",
                "description": "So today, I Got Trapped inside the Fake Minecraft Edition where all the blocks are made of wools and everything in the game is just trash! can I escape this fake edition and make my way to the original one? Watch to find out!!\n\nBtw comments me batao Jackson ko wapas laya jaye ke nhi??\n\nFOLLOW ME :\nInstagram - https://www.instagram.com/proboiz_95\nTwitter - https://twitter.com/proboiz95\n\nBusiness Inquiry - proboizofficial@gmail.com\n\nAbout me: I am Paresh, Aka ProBoiz and I make gaming videos that will surely make your day! So if you enjoyed watching this videos then SMASH that Like button :D"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT17M40S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "350112",
            "likeCount": "19728",
            "favoriteCount": "0",
            "commentCount": "3211"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "d5bPsSgSQo6vkYHbhmk4ahyzeM8",
        "id": "ghOKNLRM6Jo",
        "snippet": {
            "publishedAt": "2024-10-13T22:06:54Z",
            "channelId": "UCI1vyXBgX3bruwvChLMNxjQ",
            "title": "TOP 10 OR 18 KD? | AGGRESSIVE CONQUEROR RANK PUSH | GODL LoLzZz",
            "description": "INSTAGRAM - https://www.instagram.com/lolzzzgaming/",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ghOKNLRM6Jo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ghOKNLRM6Jo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ghOKNLRM6Jo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/ghOKNLRM6Jo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/ghOKNLRM6Jo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "LoLzZz Gaming",
            "tags": [
                "lolz",
                "lolzz",
                "lolzzz",
                "lolz gaming",
                "lolzz gaming",
                "lolzzz gaming",
                "bgmi",
                "conqueror"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en-GB",
            "localized": {
                "title": "TOP 10 OR 18 KD? | AGGRESSIVE CONQUEROR RANK PUSH | GODL LoLzZz",
                "description": "INSTAGRAM - https://www.instagram.com/lolzzzgaming/"
            }
        },
        "contentDetails": {
            "duration": "PT5H57M41S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "417004",
            "likeCount": "31798",
            "favoriteCount": "0",
            "commentCount": "28"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "tqxApNQ94Rlk-qGzgDg3h7DZILk",
        "id": "QbP_pCZgGFk",
        "snippet": {
            "publishedAt": "2024-10-10T03:30:17Z",
            "channelId": "UCX8pnu3DYUnx8qy8V_c6oHg",
            "title": "I BUILT A LUXURY ROOM IN MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #3",
            "description": "I BUILT A LUXURY ROOM IN MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #3\n#technogamerz \n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/QbP_pCZgGFk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/QbP_pCZgGFk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/QbP_pCZgGFk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/QbP_pCZgGFk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/QbP_pCZgGFk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Techno Gamerz",
            "tags": [
                "motel manager",
                "simulator",
                "hotel",
                "shop",
                "gas station",
                "build",
                "craft",
                "repair",
                "clean",
                "funny",
                "adventure",
                "ujjwal",
                "techno gamerz"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "I BUILT A LUXURY ROOM IN MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #3",
                "description": "I BUILT A LUXURY ROOM IN MY MOTEL | MOTEL MANAGER SIMULATOR GAMEPLAY #3\n#technogamerz \n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button."
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT32M38S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "5887351",
            "likeCount": "277890",
            "favoriteCount": "0",
            "commentCount": "17120"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "WBBhmST3F3k4Z5n2TxfnqX16n-Y",
        "id": "VAsOSlk9BOc",
        "snippet": {
            "publishedAt": "2024-10-13T00:30:22Z",
            "channelId": "UCQ6mb97-kuBBp4ko6v4yKEw",
            "title": "Kamla in Franklin Horror House in Indian Bike Driving 3D",
            "description": "Kamla in Franklin Horror House in Indian Bike Driving 3D\n\nGame Credit - @rohitgamingstudio6902 \n\nSecond Channel - https://youtube.com/tatsuyaharsh\n\nInstagram- https://instagram.com/harshtatsuya\nDiscord- https://discord.com/invite/JnahrpHESq\nTwitter - https://twitter.com/HarshNaidu5\nFacebook - https://facebook.com/harshtatsuya\n\nFor Busniess Enquiries- harshnaiduu@gmail.com\n\n#harshtatsuya #indianbikedriving3d #indianbikesdriving3d #indianbikegame",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VAsOSlk9BOc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VAsOSlk9BOc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VAsOSlk9BOc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/VAsOSlk9BOc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/VAsOSlk9BOc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "HarshTatsuya",
            "tags": [
                "indian bike driving 3d kamla horror house",
                "indian bike driving 3d",
                "indian bikes driving 3d",
                "indian bike game",
                "indian bike driving 3d new update",
                "indian bike driving 3d cheat codes",
                "indian bike driving 3d kamla",
                "indian bike driving 3d horror house",
                "indian bike driving 3d haunted house",
                "indian bike driving 3d secrets",
                "indian bike driving 3d scary",
                "indian bike driving 3d horror",
                "indian bike driving 3d gameplay",
                "indian bike driving 3d franklin",
                "indian bike driving 3d update"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Kamla in Franklin Horror House in Indian Bike Driving 3D",
                "description": "Kamla in Franklin Horror House in Indian Bike Driving 3D\n\nGame Credit - @rohitgamingstudio6902 \n\nSecond Channel - https://youtube.com/tatsuyaharsh\n\nInstagram- https://instagram.com/harshtatsuya\nDiscord- https://discord.com/invite/JnahrpHESq\nTwitter - https://twitter.com/HarshNaidu5\nFacebook - https://facebook.com/harshtatsuya\n\nFor Busniess Enquiries- harshnaiduu@gmail.com\n\n#harshtatsuya #indianbikedriving3d #indianbikesdriving3d #indianbikegame"
            }
        },
        "contentDetails": {
            "duration": "PT14M33S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "369719",
            "likeCount": "3905",
            "favoriteCount": "0",
            "commentCount": "141"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "I9r0vB2U03y9dfG02bjT5fpLsSA",
        "id": "Ej3ZZnh21Kc",
        "snippet": {
            "publishedAt": "2024-10-12T07:49:52Z",
            "channelId": "UChZ0JmGgyOWSU-1iXxPhsVA",
            "title": "MY PREPARATION FOR KANYA POOJAN 🙏",
            "description": "Enroll in India's first Vlogging Course - Designed by Sambhavna & Avinash\nhttps://www.schoolofsambhavi.com/courses/Master-the-Art-of-Vlogging-63369b97e4b0e9a72c34f008\n\n\nFor any queries or feedback please mail us to sambhavnasethentertainment@gmail.com\n\nGears we use for vlogging :-\nCanon 80d camera - https://amzn.to/3cfyBGb\nCanon 80d extra battery  - https://amzn.to/3uQNOnv\nCanon 80d extra charger-  https://amzn.to/3ifFT0G\nBest vlogging lens for Canon 80d  - https://amzn.to/3vOxXaD\nCanon 80d Lens for cinematic shots - https://amzn.to/3iap4nP\nBest vlogging camera Canon G7x iii - https://amzn.to/2S9W5pk \nExtra battery for Canon G7x iii - https://amzn.to/3petYkY\nExtra charger for Canon G7x iii - https://amzn.to/3uPfZ6m\nSony Vlogging camera - https://amzn.to/3g785jn\nVlogging mic - https://amzn.to/3ceKEUi\nCollar mic - https://amzn.to/3cepZQp\nSandisk memory card 128gb - https://amzn.to/34Lb63E\nGorilla tripod for G7x iii and Phone - https://amzn.to/3ySxwOt\nGorilla tripod for Canon 80d - https://amzn.to/34JZa24\nMacbook air - https://amzn.to/3glunyj\nIphone 12 pro max for slow motion - https://amzn.to/2STtKUe\nRing light - https://amzn.to/3fKL3ju\n\n\n\nFollow me on :- \nYouTube :- http://bit.ly/SambhavnaSethEntertainment\nFacebooK :- https://www.facebook.com/ImSambhavnaSeth\nTwitter :- https://twitter.com/sambhavnaseth\nInstagram :- https://www.instagram.com/sambhavnasethofficial\n\nFollow AVINASH:-\nInstagram - https://www.instagram.com/imavinashdwivedi\nYoutube - https://www.youtube.com/c/avinashdwivediartist\n\nMusic by Peyruis : https://youtube.com/@Peyruismusic\nor\nMusic by Peyruis : https://soundcloud.com/peyruis",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/Ej3ZZnh21Kc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sambhavna Seth Entertainment",
            "tags": [
                "sambhavnaseth",
                "ss vlogs",
                "hindi vlogger",
                "celebrity vlogger",
                "indian vlogger",
                "bigg boss",
                "bigg boss contestant",
                "husband wife vlogs",
                "funny vlogs",
                "food vlogger",
                "lifestyle vlogger",
                "husband wife challenge",
                "travel vlogger"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "MY PREPARATION FOR KANYA POOJAN 🙏",
                "description": "Enroll in India's first Vlogging Course - Designed by Sambhavna & Avinash\nhttps://www.schoolofsambhavi.com/courses/Master-the-Art-of-Vlogging-63369b97e4b0e9a72c34f008\n\n\nFor any queries or feedback please mail us to sambhavnasethentertainment@gmail.com\n\nGears we use for vlogging :-\nCanon 80d camera - https://amzn.to/3cfyBGb\nCanon 80d extra battery  - https://amzn.to/3uQNOnv\nCanon 80d extra charger-  https://amzn.to/3ifFT0G\nBest vlogging lens for Canon 80d  - https://amzn.to/3vOxXaD\nCanon 80d Lens for cinematic shots - https://amzn.to/3iap4nP\nBest vlogging camera Canon G7x iii - https://amzn.to/2S9W5pk \nExtra battery for Canon G7x iii - https://amzn.to/3petYkY\nExtra charger for Canon G7x iii - https://amzn.to/3uPfZ6m\nSony Vlogging camera - https://amzn.to/3g785jn\nVlogging mic - https://amzn.to/3ceKEUi\nCollar mic - https://amzn.to/3cepZQp\nSandisk memory card 128gb - https://amzn.to/34Lb63E\nGorilla tripod for G7x iii and Phone - https://amzn.to/3ySxwOt\nGorilla tripod for Canon 80d - https://amzn.to/34JZa24\nMacbook air - https://amzn.to/3glunyj\nIphone 12 pro max for slow motion - https://amzn.to/2STtKUe\nRing light - https://amzn.to/3fKL3ju\n\n\n\nFollow me on :- \nYouTube :- http://bit.ly/SambhavnaSethEntertainment\nFacebooK :- https://www.facebook.com/ImSambhavnaSeth\nTwitter :- https://twitter.com/sambhavnaseth\nInstagram :- https://www.instagram.com/sambhavnasethofficial\n\nFollow AVINASH:-\nInstagram - https://www.instagram.com/imavinashdwivedi\nYoutube - https://www.youtube.com/c/avinashdwivediartist\n\nMusic by Peyruis : https://youtube.com/@Peyruismusic\nor\nMusic by Peyruis : https://soundcloud.com/peyruis"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT25M21S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "644625",
            "likeCount": "33114",
            "favoriteCount": "0",
            "commentCount": "2213"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "52ILepnjmHYaOkyjKdP5CZaBqiQ",
        "id": "2vgymw_j1n8",
        "snippet": {
            "publishedAt": "2024-10-07T13:46:32Z",
            "channelId": "UCZy6DH9FkMmXwqxrWj8cJWg",
            "title": "VLOG kyu nahi banaya ? | LIFE mein Yeh bhi zaruri hai",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2vgymw_j1n8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2vgymw_j1n8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2vgymw_j1n8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/2vgymw_j1n8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/2vgymw_j1n8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Saba Ibrahim",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "VLOG kyu nahi banaya ? | LIFE mein Yeh bhi zaruri hai",
                "description": ""
            },
            "defaultAudioLanguage": "en-GB"
        },
        "contentDetails": {
            "duration": "PT19M47S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1343918",
            "likeCount": "62183",
            "favoriteCount": "0",
            "commentCount": "4157"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "37Ku3M7JO3Nv8GBIh1mRTWcgxBY",
        "id": "mVKjkyNaPjY",
        "snippet": {
            "publishedAt": "2024-10-11T08:44:24Z",
            "channelId": "UCqWkMzcR3pKdYk-y5jwkGBg",
            "title": "Vlog #3164| ऐसी हालत देख पतिदेव का बहुत दुख हुआ जो सिर्फ़ घरवाले समझ सकते है ..?|",
            "description": "CureSkin app link\nhttps://app.curesk.in/Sachin\nCoupon code: SACHIN100",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mVKjkyNaPjY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mVKjkyNaPjY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mVKjkyNaPjY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/mVKjkyNaPjY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/mVKjkyNaPjY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Mr and Mrs Raj SachinManisha",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Vlog #3164| ऐसी हालत देख पतिदेव का बहुत दुख हुआ जो सिर्फ़ घरवाले समझ सकते है ..?|",
                "description": "CureSkin app link\nhttps://app.curesk.in/Sachin\nCoupon code: SACHIN100"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT15M32S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "526801",
            "likeCount": "18723",
            "favoriteCount": "0",
            "commentCount": "606"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "JBQ6sKAN3ntGV9apTrxoFGzgT1I",
        "id": "_oEWBih_WfE",
        "snippet": {
            "publishedAt": "2024-10-09T15:54:37Z",
            "channelId": "UC8ZRiu_mBJwuMHcdIpKjTfA",
            "title": "Website Launch??? | Hospital jana pada | Shoaib Ibrahim | Vlog",
            "description": "Label dki insta id- https://www.instagram.com/labeldki?igsh=MnQxMzU4c20yODd1\nMy insta id :- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_oEWBih_WfE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_oEWBih_WfE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_oEWBih_WfE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/_oEWBih_WfE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/_oEWBih_WfE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Shoaib Ibrahim Official",
            "tags": [
                "shoaib ibrahim",
                "dipika kakar",
                "dipika kakar ibrahim",
                "ramadan",
                "ramadan2021",
                "ibrahim family",
                "shoaib ibrahim official",
                "latest vlog",
                "shoaib ibrahim vlogs",
                "sehri vlog",
                "iftar vlog",
                "family",
                "family fun",
                "sasural simar ka",
                "simar",
                "ssk2",
                "yaar dua",
                "shoaika",
                "shoaika wedding",
                "shoika proposal",
                "daily vlog",
                "saba ibrahim",
                "dipika pregnant",
                "Ruhaan",
                "Daawat",
                "Bigg Boss",
                "Happy birthday dipika",
                "Dipika ka birthday",
                "Labeldki",
                "Dipika clothing brand"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Website Launch??? | Hospital jana pada | Shoaib Ibrahim | Vlog",
                "description": "Label dki insta id- https://www.instagram.com/labeldki?igsh=MnQxMzU4c20yODd1\nMy insta id :- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc"
            }
        },
        "contentDetails": {
            "duration": "PT12M13S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "880260",
            "likeCount": "38565",
            "favoriteCount": "0",
            "commentCount": "1373"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "gN-fRcRoC_uglQej-Mf8Xc3A1kc",
        "id": "I3hUcYMTWYg",
        "snippet": {
            "publishedAt": "2024-10-12T13:49:46Z",
            "channelId": "UC1WJljf14RfZdMxSSbeyMzQ",
            "title": "Home Vlog | Off to Abudhabi with Ammu | Sindhu Krishna",
            "description": "Home vlog # off to Abudhabi #fun with kids at home # cooking #sindhukrishna #ahanakrishna #family #ishaanikrishna #hansikakrishna",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/I3hUcYMTWYg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/I3hUcYMTWYg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/I3hUcYMTWYg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/I3hUcYMTWYg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/I3hUcYMTWYg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sindhu Krishna",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Home Vlog | Off to Abudhabi with Ammu | Sindhu Krishna",
                "description": "Home vlog # off to Abudhabi #fun with kids at home # cooking #sindhukrishna #ahanakrishna #family #ishaanikrishna #hansikakrishna"
            }
        },
        "contentDetails": {
            "duration": "PT34M24S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "231006",
            "likeCount": "4348",
            "favoriteCount": "0",
            "commentCount": "225"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "bJwqLEO02nFa2NktgZEfDkcv1h4",
        "id": "KiIpAeyatS0",
        "snippet": {
            "publishedAt": "2024-10-06T08:30:09Z",
            "channelId": "UCs2IckGd_d8kfZGAacfT2AA",
            "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/KiIpAeyatS0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Zidaan Shahid Aly",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Chaalak Bro🤣🤣 #zidaanshahidaly #funny #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT35S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "56664000",
            "likeCount": "1035265",
            "favoriteCount": "0",
            "commentCount": "751"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "Bc-BQsjMduOjtEjY8YzyyKrWd4Y",
        "id": "7m9ne3ZX3fQ",
        "snippet": {
            "publishedAt": "2024-10-07T04:33:59Z",
            "channelId": "UCgW7gZxz7pZ_a8_uF5Q9Hsw",
            "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/7m9ne3ZX3fQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Bihari Ladka",
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Me in my childhood vs today’s kid in front of relatives 🔥 | The most viral comedy 😂 #shorts",
                "description": ""
            },
            "defaultAudioLanguage": "en-IN"
        },
        "contentDetails": {
            "duration": "PT1M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "46472358",
            "likeCount": "1395791",
            "favoriteCount": "0",
            "commentCount": "2965"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "PPYnKKe0tOpMsS5g95e0d4tCd5Y",
        "id": "qi56J0PMtWg",
        "snippet": {
            "publishedAt": "2024-10-02T15:35:01Z",
            "channelId": "UC64f5UX8h_RdQLEu9vTU62g",
            "title": "Sibling ki Z plus security 😂 | #shorts",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/qi56J0PMtWg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Kunal monu",
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Sibling ki Z plus security 😂 | #shorts",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT20S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "62653248",
            "likeCount": "957612",
            "favoriteCount": "0",
            "commentCount": "869"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "vmim0VGufPjpnEjwAXgZHM098_E",
        "id": "wILr1aH0AGo",
        "snippet": {
            "publishedAt": "2024-10-07T10:50:11Z",
            "channelId": "UCuAJ0ewzavRYzZfDpWM7WSw",
            "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/wILr1aH0AGo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "diyafavas_official",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "ml",
            "localized": {
                "title": "Azhakiya baby 😂😂 #trending #diyafavas #viralvideo #short #shortsviral #shortvideo #viralvideo",
                "description": ""
            },
            "defaultAudioLanguage": "ml"
        },
        "contentDetails": {
            "duration": "PT18S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "9984234",
            "likeCount": "331635",
            "favoriteCount": "0",
            "commentCount": "379"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "WTRZBeaFZUClYQSSfP9wBBcgpPk",
        "id": "xkjbJl_jOKo",
        "snippet": {
            "publishedAt": "2024-10-05T08:00:45Z",
            "channelId": "UC-e10tRE8eoiAwLlm8BQbIQ",
            "title": "Mata ji ka chamatkaar 🥺❤️🤌🏻|Simran Makhija| #shorts #school #navratri #love #shortvideo",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xkjbJl_jOKo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xkjbJl_jOKo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xkjbJl_jOKo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/xkjbJl_jOKo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/xkjbJl_jOKo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Simran Makhija",
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Mata ji ka chamatkaar 🥺❤️🤌🏻|Simran Makhija| #shorts #school #navratri #love #shortvideo",
                "description": ""
            }
        },
        "contentDetails": {
            "duration": "PT46S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "32023341",
            "likeCount": "863845",
            "favoriteCount": "0",
            "commentCount": "724"
        }
    },

]

mongoose.connect("mongodb://localhost:27017/Practise");
mongoose.connection.on("open",()=>{
    console.log("Connection to MongoDB database Successfull");
})

const app=new express();

app.listen("5100",()=>{
    console.log("Server Started Successfully");
});

app.use(cors());

app.use(express.json());

videosRoutes(app)