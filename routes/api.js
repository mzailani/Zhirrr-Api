__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['@Mzailani8'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var zrapi = require("zrapi");
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Invalid!',
        getApikey: 'Gk punya apikey? Chat Admin Untuk Mendapatkan Apikey Yang Valid'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/628881277513'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------MzailaniGanteng'+'ZAILANI--GANS';
        
 
const listkey = ["trial7D", "ZailaniGans"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

router.get('/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/blackpink.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/movie', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/movie`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/action', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/action`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/adventure', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/adventure`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
}
})

router.get('/kartun/drama', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/drama`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/comedy', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/comedy`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/military', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/genre/military`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/husbu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/husbu.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/filmapik/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zailani.herokuapp.com/search?q=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/filmapik/kategori', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            film = req.query.film
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!film) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})

       fetch(encodeURI(`https://filmapik-api-zailani.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kartun/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://kartun-apii1.herokuapp.com/api/kartun/search?film=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/filmapik/play', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            id = req.query.id
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!id) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})

       fetch(encodeURI(`https://filmapik-api-zailani.herokuapp.com/play?id=${id}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/filmapik/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://filmapik-api-zailani.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/playstore/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://api-gplay.azharimm.tk/apps?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/terbaru', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/comingsoon', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/tvseries', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/year', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tahun = req.query.tahun
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!tahun) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/year?year=${tahun}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/country', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter negara"})

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/country?country=${negara}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/genre', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            tipe = req.query.tipe
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!tipe) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})

       fetch(encodeURI(`https://lk21-apii.herokuapp.com/genre?genre=${tipe}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/bts', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/bts.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/exo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/exo.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/lk21/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://lk21-apii.herokuapp.com/search?query=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/pinterest', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=${kata}`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/googleimage', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`http://nzcha-apii.herokuapp.com/googleimage?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/randomloli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime loli`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/hug', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/hug`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kiss5', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/kiss`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/anime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/wallpaper`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/waifu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/waifu`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nekonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/nekonime`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kbbi', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/pantun', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/pantun.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/howgay', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/howgay.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/faktaunix', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/faktaunix.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/cersex', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://masgi.herokuapp.com/api/cersex2`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/cerpen', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/cerpen`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://st4rz.herokuapp.com/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

 router.get('/estetikpic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://api.zeks.xyz/api/estetikpic?apikey=benbenz`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/lirik?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
     } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nulis', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
            text = req.query.text
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`http://salism3.pythonanywhere.com/write/?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/meme5', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/meme5.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/dadu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dadu.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/chikaa', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/chika.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/asupan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/asupan.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/citacita', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/citacita.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/drakjokes', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/drak.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
         } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
         } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/ig/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/stalk?username=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/fbdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/yt-play', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/yt-play?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/yutub/search', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            video = req.query.video
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!video) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter video"})

       fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${video}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Mzailani8',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/joox', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan Judulnya"})
       fetch(encodeURI(`https://pencarikode.xyz/download/joox?search=${kata}&apikey=pais`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/ytv2', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan Url nya"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/ytv2?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/yta2', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan url nya"})
       fetch(encodeURI(`https://st4rz.herokuapp.com/api/yta2?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/igtv', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         url = req.query.url   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/igtv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/nsfwNeko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/cum', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/nsfw/ahegao', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/nsfw/ass', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/nsfw/bdsm', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/nsfw/blowjob', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/alpin1234567/Js-Project/master/jsinnsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/hentai', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/hentai`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/baka', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/baka`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/spank', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/spank`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/hentai_gif', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/Random_hentai_gif`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/classic', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/classic`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/yuri', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
       fetch(encodeURI(`https://nekos.life/api/v2/img/yuri`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'flaming' && theme != 'underwater') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'flaming') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'underwater') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner3', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'romantic' && theme != 'burn-paper') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'romantic') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'burn-paper') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/effect', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wood' && theme != 'harry-potter') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wood') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'harry-potter') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner65', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'yellow-roses' && theme != 'typography') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'yellow-roses') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'typography') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/logo4', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != '8-bit' && theme != 'pornhub') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == '8-bit') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'pornhub') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `White_text=${text}&Black_text=${text2}&login=Go`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://textpro.me/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textpro/black-pink', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/new3', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'camouflage' && theme != 'stars-text') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'camouflage') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/army-camouflage-fabric-text-effect-221.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'stars-text') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/new2', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'smoke' && theme != 'rainbow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'smoke') {
            try {
            request.post({
                url: "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'rainbow') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner7', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'funny-cup' && theme != 'gradient') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'funny-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'gradient') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner6', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'metallic-glow' && theme != 'sweet-candy') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'metallic-glow') {
            try {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'sweet-candy') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner5', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wolf-metal' && theme != 'neon-glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wolf-metal') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'neon-glow') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner4', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'love' && theme != 'under-grass') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'love') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'under-grass') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/banner2', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'shadow' && theme != 'cemetery') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'shadow') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'cemetery') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
        } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/cuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kabupaten = req.query.kabupaten
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
	if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.json(loghandler.notparam)
		if(listkey.includes(apikey)) {
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
		} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/covidindo', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/covidworld', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/truth', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/truth.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/truthen', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/truthen.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dare.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/dareen', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/dareen.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter daerah"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/samehadaku', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         kata = req.query.kata   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/tafsirmimpi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         mimpi = req.query.mimpi   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/artimimpi?q=${mimpi}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})



router.get('/artinama', async (req, res, next) => {
        var apikeyInput = req.query.apikey
         name = req.query.name   
         
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if(!name) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter name"})
       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/artinama?nama=${name}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		if(listkey.includes(apikey)) {
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
		} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/kuis/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://raw.githubusercontent.com/mzailani/Latihan/master/family100.json`))
        .then(response => response.json())
        .then(data => {
        var isi = data[Math.floor(Math.random() * data.length)];
        var result = isi;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(listkey.includes(apikey)) {

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=tebakgambar`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

module.exports = router
