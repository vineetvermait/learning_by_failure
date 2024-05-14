Search.setIndex({"docnames": ["intro", "notebooks/algo_trading/sma_crossover", "notebooks/temporal_vectors"], "filenames": ["intro.md", "notebooks/algo_trading/sma_crossover.ipynb", "notebooks/temporal_vectors.ipynb"], "titles": ["Learning By Failure: Data Science/ML/AI", "Basic SMA Crossover", "[In Progress] Temporal Vectors"], "terms": {"i": [0, 1, 2], "am": [0, 1], "journei": 0, "machin": 0, "artifici": 0, "intellig": 0, "have": [0, 1], "been": 0, "thi": [0, 1, 2], "while": 0, "now": [0, 1, 2], "lot": 0, "go": [0, 2], "document": 0, "my": 0, "here": 0, "success": [0, 1], "from": [0, 1, 2], "me": 0, "you": 0, "like": 0, "In": [0, 1], "progress": 0, "tempor": 0, "vector": 0, "basic": 0, "sma": 0, "crossov": 0, "One": 1, "simplest": 1, "most": 1, "popular": 1, "trade": 1, "move": 1, "averag": 1, "gener": 1, "bui": 1, "sell": 1, "signal": 1, "base": 1, "two": 1, "notebook": [1, 2], "we": 1, "implement": 1, "us": [1, 2], "adjust": 1, "close": [1, 2], "price": [1, 2], "stock": [1, 2], "simpl": [1, 2], "short": 1, "term": [1, 2], "long": 1, "follow": 1, "when": 1, "cross": 1, "abov": 1, "below": 1, "hold": 1, "otherwis": 1, "rebal": 1, "everi": 1, "month": 1, "all": 1, "calcul": 1, "time": [1, 2], "frame": 1, "dai": [1, 2], "our": 1, "case": 1, "need": 1, "minut": [1, 2], "level": 1, "interact": 1, "For": 1, "test": 1, "purpos": 1, "first": [1, 2], "daili": 1, "note": 1, "rate": 1, "concept": 1, "52": 1, "dataset": 1, "subsequ": [1, 2], "check": 1, "import": [1, 2], "warn": [1, 2], "filterwarn": [1, 2], "ignor": [1, 2], "set_bokeh_output": 1, "fals": [1, 2], "sqlalchemi": [1, 2], "create_engin": [1, 2], "lib": 1, "panda": [1, 2], "pd": [1, 2], "numpi": [1, 2], "np": [1, 2], "matplotlib": [1, 2], "pyplot": [1, 2], "plt": [1, 2], "tqdm": 1, "bokeh": 1, "plot": [1, 2], "figur": [1, 2], "show": [1, 2], "output_notebook": 1, "def": [1, 2], "get_stock_data": [1, 2], "symbol": [1, 2], "return": [1, 2], "read_sql": [1, 2], "f": [1, 2], "select": [1, 2], "ohlc_data": [1, 2], "where": [1, 2], "engin": [1, 2], "parse_d": [1, 2], "datetim": [1, 2], "set_index": [1, 2], "sort_index": [1, 2], "renam": [1, 2], "column": [1, 2], "open": [1, 2], "high": [1, 2], "low": [1, 2], "postgresql": [1, 2], "postgr": [1, 2], "localhost": [1, 2], "6004": [1, 2], "distinct": 1, "nifti": [1, 2], "to_list": 1, "print": 1, "numer": 1, "len": 1, "load": 1, "bokehj": 1, "singl": 1, "There": 1, "ar": [1, 2], "multipl": 1, "other": 1, "librari": 1, "avail": 1, "backtrad": 1, "ziplin": 1, "quantconnect": 1, "etc": 1, "class": 1, "defin": [1, 2], "execut": 1, "rule": 1, "an": 1, "init": 1, "method": 1, "initi": 1, "paramt": 1, "each": [1, 2], "candlestick": 1, "ohlc": 1, "data": 1, "next": [1, 2], "call": 1, "sma_crossov": 1, "window": [1, 2], "bar": 1, "A": 1, "trigger": 1, "fast": 1, "slow": 1, "posit": 1, "profit": 1, "loss": 1, "thu": [1, 2], "do": 1, "explicit": 1, "pnl": 1, "soon": 1, "certain": 1, "profit_threshold": 1, "loss_threshold": 1, "reach": 1, "smacross": 1, "fast_ma": 1, "5": [1, 2], "slow_ma": 1, "20": [1, 2], "0": [1, 2], "05": [1, 2], "self": 1, "ltp": 1, "_broker": 1, "last_pric": 1, "margin": 1, "margin_avail": 1, "order_s": 1, "min": 1, "100": 1, "int": 1, "2": [1, 2], "pl_pct": 1, "size": [1, 2], "elif": 1, "which": 1, "2020": 1, "01": [1, 2], "2024": [1, 2], "04": [1, 2], "accuraci": 1, "stat": 1, "addition": 1, "also": 1, "optim": 1, "chang": 1, "see": 1, "can": 1, "improv": 1, "These": 1, "mai": 1, "some": [1, 2], "corrupt": 1, "stocks_to_ignor": 1, "hdfwa2": 1, "hdfban": 1, "brind2": 1, "daily_run_stat": 1, "cash": 1, "100_000": 1, "commiss": 1, "002": 1, "continu": [1, 2], "groupbi": [1, 2], "index": [1, 2], "date": [1, 2], "agg": [1, 2], "max": 1, "last": [1, 2], "reset_index": [1, 2], "convert": 1, "to_datetim": [1, 2], "drop": [1, 2], "bt": 1, "year": [1, 2], "run": 1, "pre_opt": 1, "append": 1, "opt_stat": 1, "rang": 1, "3": [1, 2], "15": [1, 2], "1": [1, 2], "8": [1, 2], "31": [1, 2], "linspac": 1, "10": [1, 2], "tolist": 1, "constraint": 1, "lambda": [1, 2], "p": 1, "return_heatmap": 1, "maxim": 1, "equiti": 1, "final": 1, "post_opt": 1, "_strategi": 1, "daily_run_stats_df": 1, "datafram": [1, 2], "sort_valu": [1, 2], "ascend": [1, 2], "head": [1, 2], "_trade": 1, "_equity_curv": 1, "t": 1, "33": [1, 2], "93": 1, "57": 1, "61": 1, "91": 1, "63": 1, "11": 1, "95": 1, "75": [1, 2], "17": [1, 2], "45": 1, "9": [1, 2], "13": 1, "47": 1, "79": 1, "39": 1, "35": [1, 2], "start": [1, 2], "03": 1, "00": [1, 2], "06": 1, "end": [1, 2], "2023": 1, "12": 1, "29": 1, "durat": 1, "1456": 1, "1453": 1, "exposur": 1, "96": [1, 2], "45749": 1, "78": [1, 2], "216819": 1, "446701": 1, "97": 1, "874494": 1, "558704": 1, "247465": 1, "555218": 1, "194332": 1, "436105": 1, "724696": 1, "92": 1, "813765": 1, "307692": 1, "86": 1, "046512": 1, "94": [1, 2], "129555": 1, "88": 1, "753799": 1, "89": 1, "676113": 1, "761134": 1, "66": 1, "329626": 1, "218623": 1, "87": 1, "854251": 1, "323887": 1, "9802": 1, "313535": 1, "458": 1, "299609": 1, "8877": 1, "299224": 1, "8658": 1, "293760": 1, "9305": 1, "289943": 1, "5638": 1, "264551": 1, "3151": 1, "254688": 1, "9509": 1, "251429": 1, "6269": 1, "250851": 1, "3227": 1, "249296": 1, "326": 1, "247509": 1, "4912": 1, "245991": 1, "9076": 1, "245748": 1, "8212": 1, "244751": 1, "8532": 1, "237115": 1, "0259": 1, "235339": 1, "1258": 1, "232395": 1, "1984": 1, "221085": 1, "1461": 1, "217018": 1, "722": 1, "peak": 1, "326202": 1, "749": 1, "321513": 1, "1888": 1, "299681": 1, "2658": 1, "294562": 1, "1505": 1, "290280": 1, "7376": 1, "274104": 1, "7725": 1, "264884": 1, "6969": 1, "255195": 1, "6227": 1, "251539": 1, "7822": 1, "254341": 1, "3412": 1, "246483": 1, "3876": 1, "251504": 1, "251340": 1, "4532": 1, "235445": 1, "5258": 1, "233847": 1, "0184": 1, "218521": 1, "222": 1, "223": 1, "88798": 1, "213": 1, "535458": 1, "199": 1, "609888": 1, "224866": 1, "193": 1, "760931": 1, "189": 1, "943564": 1, "164": 1, "551315": 1, "154": 1, "688951": 1, "151": 1, "429627": 1, "150": 1, "851323": 1, "149": 1, "296326": 1, "147": 1, "509491": 1, "145": 1, "991908": 1, "748821": 1, "144": 1, "751853": 1, "137": 1, "115026": 1, "135": 1, "339126": 1, "132": 1, "395198": 1, "121": 1, "085146": 1, "117": 1, "018722": 1, "amp": 1, "181": 1, "902307": 1, "74": [1, 2], "836465": 1, "152": 1, "778615": 1, "163": 1, "670412": 1, "224": 1, "390244": 1, "218": 1, "573898": 1, "42": 1, "087623": 1, "122": 1, "497716": 1, "745565": 1, "46": 1, "806766": 1, "125": 1, "30898": 1, "85": [1, 2], "060241": 1, "285": 1, "129209": 1, "48": 1, "261456": 1, "81": 1, "950385": 1, "4": [1, 2], "375409": 1, "184": 1, "243176": 1, "1267": 1, "434605": 1, "70": 1, "171405": 1, "319588": 1, "ann": 1, "34": 1, "952731": 1, "878701": 1, "32": 1, "410054": 1, "253848": 1, "633643": 1, "267494": 1, "28": 1, "196118": 1, "26": 1, "92794": 1, "572009": 1, "437365": 1, "236993": 1, "005594": 1, "25": [1, 2], "778882": 1, "776363": 1, "675085": 1, "24": 1, "63423": 1, "395473": 1, "23": [1, 2], "969747": 1, "22": 1, "428806": 1, "21": 1, "850474": 1, "volatil": 1, "046562": 1, "855573": 1, "748891": 1, "44124": 1, "729616": 1, "224624": 1, "963264": 1, "19": [1, 2], "013161": 1, "732169": 1, "736342": 1, "18": [1, 2], "533412": 1, "379002": 1, "729167": 1, "643842": 1, "270721": 1, "30": [1, 2], "717393": 1, "924262": 1, "536432": 1, "059653": 1, "64846": 1, "sharp": 1, "ratio": 1, "516614": 1, "624444": 1, "309556": 1, "267778": 1, "229464": 1, "192295": 1, "283785": 1, "416279": 1, "924817": 1, "216275": 1, "415659": 1, "414962": 1, "134176": 1, "090194": 1, "821058": 1, "801964": 1, "22441": 1, "167182": 1, "176769": 1, "238095": 1, "sortino": 1, "404179": 1, "776202": 1, "828502": 1, "725987": 1, "741966": 1, "4733": 1, "817962": 1, "848515": 1, "835441": 1, "550983": 1, "983935": 1, "300792": 1, "456923": 1, "158871": 1, "325201": 1, "530971": 1, "561002": 1, "647167": 1, "285466": 1, "66425": 1, "calmar": 1, "715872": 1, "72465": 1, "457638": 1, "231367": 1, "824567": 1, "116926": 1, "149265": 1, "981572": 1, "112118": 1, "967621": 1, "881635": 1, "315745": 1, "210794": 1, "204735": 1, "970092": 1, "972543": 1, "680435": 1, "673457": 1, "177627": 1, "163761": 1, "drawdown": 1, "370249": 1, "434147": 1, "234646": 1, "193525": 1, "337613": 1, "27": 1, "994236": 1, "118961": 1, "031458": 1, "893161": 1, "436207": 1, "943717": 1, "229906": 1, "290895": 1, "395871": 1, "466653": 1, "329718": 1, "14": [1, 2], "517353": 1, "323491": 1, "045757": 1, "775737": 1, "avg": 1, "19797": 1, "096592": 1, "817131": 1, "665659": 1, "237331": 1, "06526": 1, "523349": 1, "906631": 1, "124036": 1, "710786": 1, "846082": 1, "89117": 1, "044139": 1, "694728": 1, "830306": 1, "449002": 1, "207267": 1, "372624": 1, "106875": 1, "927735": 1, "448": 1, "319": 1, "324": 1, "241": 1, "469": 1, "273": 1, "281": 1, "158": 1, "185": 1, "231": 1, "434": 1, "358": 1, "556": 1, "551": 1, "301": 1, "322": 1, "724": 1, "131": 1, "80": [1, 2], "167": 1, "133": 1, "119": 1, "161": 1, "120": 1, "107": 1, "110": 1, "113": 1, "71": [1, 2], "156": 1, "win": 1, "73": 1, "282443": 1, "72": 1, "77": 1, "245509": 1, "518519": 1, "68": 1, "939394": 1, "157895": 1, "225166": 1, "428571": 1, "459627": 1, "67": 1, "105263": 1, "787879": 1, "65": 1, "833333": 1, "28972": 1, "636364": 1, "62": 1, "886598": 1, "69": 1, "911504": 1, "647887": 1, "56": 1, "410256": 1, "181818": 1, "664234": 1, "best": 1, "943227": 1, "819217": 1, "199743": 1, "554031": 1, "38": 1, "409313": 1, "361206": 1, "379307": 1, "541135": 1, "999791": 1, "793153": 1, "193719": 1, "898247": 1, "784095": 1, "942012": 1, "72857": 1, "30631": 1, "695381": 1, "969887": 1, "822527": 1, "497383": 1, "worst": 1, "330005": 1, "987205": 1, "965246": 1, "155732": 1, "935739": 1, "418455": 1, "273068": 1, "733955": 1, "969567": 1, "269062": 1, "582736": 1, "558598": 1, "07792": 1, "178393": 1, "16": [1, 2], "866795": 1, "023037": 1, "7": [1, 2], "462108": 1, "589857": 1, "622723": 1, "731706": 1, "6": 1, "964447": 1, "538885": 1, "591439": 1, "521757": 1, "228533": 1, "437322": 1, "61778": 1, "670631": 1, "847332": 1, "067912": 1, "426372": 1, "114482": 1, "163588": 1, "089554": 1, "964293": 1, "918841": 1, "576968": 1, "849731": 1, "092776": 1, "154845": 1, "337": 1, "148": 1, "208": 1, "266": 1, "274": 1, "288": 1, "155": 1, "345": 1, "462": 1, "166": 1, "440": 1, "214": 1, "234": 1, "237": 1, "356": 1, "182": 1, "103": 1, "49": 1, "99": 1, "60": [1, 2], "126": 1, "factor": 1, "120754": 1, "676763": 1, "722173": 1, "143903": 1, "097556": 1, "586782": 1, "20639": 1, "880553": 1, "260881": 1, "927521": 1, "373883": 1, "714367": 1, "912087": 1, "50509": 1, "817715": 1, "880024": 1, "115095": 1, "123883": 1, "475692": 1, "940158": 1, "expect": 1, "476193": 1, "875261": 1, "124009": 1, "015446": 1, "804792": 1, "341364": 1, "017209": 1, "891935": 1, "503114": 1, "328989": 1, "860553": 1, "433923": 1, "729088": 1, "754725": 1, "831628": 1, "700415": 1, "943494": 1, "10513": 1, "520277": 1, "552849": 1, "sqn": 1, "168439": 1, "620387": 1, "420866": 1, "222859": 1, "440461": 1, "440364": 1, "466154": 1, "203302": 1, "286017": 1, "484766": 1, "531033": 1, "507487": 1, "056306": 1, "724107": 1, "756577": 1, "411925": 1, "486029": 1, "551978": 1, "750134": 1, "42451": 1, "grasim": 1, "bajfi": 1, "ultcem": 1, "lartou": 1, "mahmah": 1, "titind": 1, "maruti": 1, "baauto": 1, "unip": 1, "sbilif": 1, "bhaair": 1, "iciban": 1, "apoho": 1, "axiban": 1, "bafin": 1, "indba": 1, "sunpha": 1, "adaent": 1, "herhon": 1, "hcltec": 1, "115556": 1, "157778": 1, "178889": 1, "073333": 1, "136667": 1, "094444": 1, "052222": 1, "metrics_column": 1, "filter": 1, "isin": 1, "uniqu": 1, "drs_df": 1, "quantil": 1, "timedeltaarrai": 1, "length": 1, "dtype": 1, "timedelta64": 1, "n": 1, "089664": 1, "50": 1, "64": 1, "761905": 1, "796610": 1, "76": [1, 2], "823496": 1, "name": [1, 2], "float64": 1, "457490": 1, "98020": 1, "74900": 1, "887980": 1, "197970": 1, "200000": 1, "45800": 1, "18880": 1, "500000": 1, "88770": 1, "86580": 1, "26580": 1, "441240": 1, "93050": 1, "15050": 1, "56380": 1, "73760": 1, "065260": 1, "31510": 1, "77250": 1, "617780": 1, "95090": 1, "927940": 1, "62690": 1, "69690": 1, "37": 1, "32270": 1, "62270": 1, "32600": 1, "78220": 1, "308980": 1, "49120": 1, "34120": 1, "891170": 1, "90760": 1, "38760": 1, "289720": 1, "82120": 1, "85320": 1, "45320": 1, "02590": 1, "634230": 1, "12580": 1, "52580": 1, "19840": 1, "01840": 1, "14610": 1, "72200": 1, "22200": 1, "648460": 1, "36": 1, "relind": 1, "672065": 1, "215221": 1, "41770": 1, "224188": 1, "92590": 1, "115": 1, "221418": 1, "294271": 1, "592284": 1, "477648": 1, "045909": 1, "197224": 1, "130": 1, "384615": 1, "377014": 1, "573": 1, "200": 1, "hinlev": 1, "356275": 1, "205741": 1, "46850": 1, "215286": 1, "69440": 1, "105": 1, "741468": 1, "556936": 1, "203218": 1, "912294": 1, "993132": 1, "758939": 1, "207": 1, "55": 1, "555556": 1, "105925": 1, "480": 1, "ltinfo": 1, "82": 1, "894737": 1, "204682": 1, "51140": 1, "204873": 1, "01140": 1, "104": 1, "682511": 1, "245": 1, "720504": 1, "045112": 1, "740521": 1, "163099": 1, "927871": 1, "118": 1, "482635": 1, "259": 1, "jswste": 1, "562753": 1, "203780": 1, "58820": 1, "203990": 1, "34420": 1, "780588": 1, "740632": 1, "909969": 1, "762960": 1, "139118": 1, "368534": 1, "521368": 1, "990634": 1, "340": 1, "briind": 1, "009119": 1, "202971": 1, "76790": 1, "102": 1, "971768": 1, "522545": 1, "810313": 1, "946215": 1, "293477": 1, "805081": 1, "714286": 1, "501511": 1, "cipla": 1, "408907": 1, "201346": 1, "12650": 1, "211897": 1, "75650": 1, "101": 1, "346126": 1, "165": 1, "590141": 1, "542957": 1, "883735": 1, "586801": 1, "697499": 1, "58": [1, 2], "517241": 1, "658190": 1, "290": 1, "90": [1, 2], "adapor": 1, "586451": 1, "201012": 1, "05020": 1, "201378": 1, "92300": 1, "012050": 1, "931937": 1, "470821": 1, "810787": 1, "087898": 1, "710622": 1, "134": 1, "59": 1, "701493": 1, "570084": 1, "40": 1, "eicmot": 1, "198587": 1, "33944": 1, "198934": 1, "03104": 1, "98": 1, "587339": 1, "143800": 1, "123033": 1, "242463": 1, "452816": 1, "210551": 1, "43": 1, "333333": 1, "945915": 1, "227": 1, "tc": 1, "197393": 1, "30960": 1, "254555": 1, "92240": 1, "393310": 1, "603362": 1, "939937": 1, "573335": 1, "027435": 1, "533814": 1, "190476": 1, "571199": 1, "552": 1, "44": 1, "tecmah": 1, "170040": 1, "191830": 1, "12530": 1, "194637": 1, "47530": 1, "830125": 1, "232258": 1, "075819": 1, "015747": 1, "264379": 1, "540453": 1, "183": 1, "109290": 1, "478919": 1, "278": 1, "inftec": 1, "287449": 1, "191473": 1, "47480": 1, "193710": 1, "72480": 1, "473475": 1, "106": 1, "963639": 1, "019788": 1, "322753": 1, "268284": 1, "482171": 1, "128": 1, "593750": 1, "703352": 1, "031111": 1, "tatglo": 1, "651822": 1, "187431": 1, "89850": 1, "431898": 1, "242": 1, "237586": 1, "379340": 1, "127077": 1, "728511": 1, "068943": 1, "54": 1, "807692": 1, "421184": 1, "124": 1, "asipai": 1, "856421": 1, "177145": 1, "13420": 1, "181220": 1, "78420": 1, "145134": 1, "114286": 1, "684451": 1, "842020": 1, "542620": 1, "708672": 1, "869565": 1, "567024": 1, "kotmah": 1, "396761": 1, "176852": 1, "38770": 1, "183221": 1, "47980": 1, "852388": 1, "819840": 1, "652713": 1, "049436": 1, "085388": 1, "576967": 1, "394161": 1, "079775": 1, "491": 1, "nesind": 1, "991903": 1, "174207": 1, "51000": 1, "207510": 1, "658952": 1, "209076": 1, "106091": 1, "129937": 1, "943887": 1, "837654": 1, "drredd": 1, "906883": 1, "170061": 1, "53320": 1, "178929": 1, "18320": 1, "061533": 1, "945618": 1, "503446": 1, "710473": 1, "553703": 1, "193147": 1, "687800": 1, "hindal": 1, "178138": 1, "163808": 1, "24960": 1, "808250": 1, "914953": 1, "414514": 1, "035403": 1, "352436": 1, "005648": 1, "51": 1, "724138": 1, "282072": 1, "41": 1, "tatmot": 1, "242915": 1, "161721": 1, "96250": 1, "721962": 1, "307": 1, "585666": 1, "044327": 1, "757313": 1, "545298": 1, "049394": 1, "352941": 1, "704339": 1, "staban": 1, "663968": 1, "160868": 1, "61420": 1, "162340": 1, "71420": 1, "868614": 1, "185629": 1, "891885": 1, "751806": 1, "511125": 1, "165820": 1, "285814": 1, "297": 1, "wipro": 1, "472617": 1, "156740": 1, "82580": 1, "159817": 1, "24580": 1, "740826": 1, "862473": 1, "171952": 1, "149937": 1, "800324": 1, "144563": 1, "315068": 1, "307405": 1, "hdfsta": 1, "206478": 1, "153103": 1, "84480": 1, "157315": 1, "04480": 1, "53": 1, "103845": 1, "327791": 1, "476337": 1, "533096": 1, "218570": 1, "882654": 1, "153846": 1, "163207": 1, "391": 1, "divlab": 1, "952381": 1, "151825": 1, "21900": 1, "153495": 1, "48900": 1, "825219": 1, "112": 1, "529229": [1, 2], "250142": 1, "753408": 1, "501913": 1, "333614": 1, "551724": 1, "705736": 1, "tatst": 1, "809717": 1, "149441": 1, "09600": 1, "156135": 1, "78200": 1, "441096": 1, "204134": 1, "789973": 1, "108102": 1, "883283": 1, "856469": 1, "269841": 1, "753847": 1, "bhapet": 1, "147690": 1, "40900": 1, "690409": 1, "528497": 1, "457477": 1, "477283": 1, "652703": 1, "135516": 1, "285714": 1, "794302": 1, "itc": 1, "670719": 1, "131119": 1, "37730": 1, "136181": 1, "91110": 1, "119377": 1, "856154": 1, "162443": 1, "538175": 1, "808581": 1, "998408": 1, "260870": 1, "593911": 1, "116": 1, "coalin": 1, "821862": 1, "119536": 1, "44000": 1, "119727": 1, "72000": 1, "536440": 1, "972407": 1, "656760": 1, "566190": 1, "655970": 1, "704013": 1, "000000": 1, "959375": 1, "ntpc": 1, "983806": 1, "117152": 1, "56000": 1, "152560": 1, "090147": 1, "120412": 1, "826465": 1, "476850": 1, "714239": 1, "272727": 1, "992138": 1, "powgri": 1, "910931": 1, "109098": 1, "24800": 1, "110675": 1, "15800": 1, "098248": 1, "533964": 1, "245883": 1, "114878": 1, "554645": 1, "669631": 1, "632911": 1, "547503": 1, "ongc": 1, "712551": 1, "107966": 1, "89000": 1, "108669": 1, "93000": 1, "966890": 1, "421546": 1, "974392": 1, "515017": 1, "776636": 1, "595946": 1, "292683": 1, "508986": 1, "row": [1, 2], "result": 1, "perform": 1, "metric": 1, "test_stat": 1, "testcross": 1, "qty_threshold": 1, "conservative_factor": 1, "to_dict": 1, "record": 1, "test_data": 1, "teststrat": 1, "1000": 1, "res_df": 1, "897149": 1, "398991": 1, "974389": 1, "303910": 1, "136562": 1, "84": [1, 2], "810127": 1, "115527": 1, "3556": 1, "116708": 1, "3956": 1, "527356": 1, "934783": 1, "473511": 1, "405811": 1, "397785": 1, "632742": 1, "591269": 1, "886076": 1, "114719": 1, "3717": 1, "719372": 1, "794300": 1, "965034": 1, "831475": 1, "034846": 1, "601627": 1, "133797": 1, "113040": 1, "4492": 1, "115360": 1, "0831": 1, "040449": 1, "212909": 1, "845912": 1, "730849": 1, "064166": 1, "835828": 1, "014722": 1, "164557": 1, "110780": 1, "7321": 1, "111708": 1, "9821": 1, "780732": 1, "101566": 1, "622992": 1, "676503": 1, "294403": 1, "909899": 1, "707243": 1, "341772": 1, "107775": 1, "2325": 1, "108606": 1, "6285": 1, "775233": 1, "215909": 1, "978851": 1, "703736": 1, "996664": 1, "919547": 1, "666667": 1, "596471": 1, "620253": 1, "106829": 1, "3721": 1, "108509": 1, "8221": 1, "829372": 1, "383826": 1, "458110": 1, "059866": 1, "142882": 1, "132410": 1, "181693": 1, "607595": 1, "106220": 1, "7078": 1, "1910": 1, "220708": 1, "648241": 1, "228296": 1, "232158": 1, "378747": 1, "246147": 1, "180920": 1, "104837": 1, "3935": 1, "104990": 1, "3205": 1, "837393": 1, "111263": 1, "263697": 1, "443972": 1, "012543": 1, "622313": 1, "250000": 1, "500421": 1, "83": 1, "278481": 1, "104389": 1, "111745": 1, "8318": 1, "389821": 1, "553016": 1, "687781": 1, "775799": 1, "608757": 1, "317546": 1, "675991": 1, "506329": 1, "104240": 1, "5600": 1, "240560": 1, "480653": 1, "165506": 1, "746460": 1, "436507": 1, "990301": 1, "429422": 1, "569620": 1, "102883": 1, "2948": 1, "883295": 1, "664533": 1, "491033": 1, "531809": 1, "345425": 1, "203699": 1, "947633": 1, "708861": 1, "102569": 1, "9256": 1, "105332": 1, "1840": 1, "569926": 1, "458897": 1, "430768": 1, "803584": 1, "338797": 1, "504094": 1, "811738": 1, "987342": 1, "102303": 1, "9100": 1, "102788": 1, "707317": 1, "536270": 1, "731662": 1, "895038": 1, "863595": 1, "780748": 1, "822785": 1, "102250": 1, "2526": 1, "104395": 1, "8526": 1, "250253": 1, "882997": 1, "356459": 1, "590492": 1, "894478": 1, "803630": 1, "767783": 1, "544304": 1, "101112": 1, "2991": 1, "106721": 1, "0076": 1, "112299": 1, "989695": 1, "591496": 1, "045577": 1, "081652": 1, "343401": 1, "030402": 1, "101056": 1, "0693": 1, "104016": 1, "056069": 1, "199029": 1, "407844": 1, "427002": 1, "271326": 1, "058520": 1, "671263": 1, "848101": 1, "101052": 1, "8784": 1, "101216": 1, "052878": 1, "301587": 1, "397429": 1, "783580": 1, "218547": 1, "286756": 1, "609417": 1, "291139": 1, "100450": 1, "6000": 1, "104163": 1, "8500": 1, "450600": 1, "223938": 1, "444461": 1, "283783": 1, "611618": 1, "983101": 1, "067348": 1, "582278": 1, "100232": 1, "1400": 1, "103151": 1, "5400": 1, "232140": 1, "035186": 1, "742381": 1, "019245": 1, "830205": 1, "628440": 1, "766645": 1, "99968": 1, "5500": 1, "101517": 1, "3500": 1, "031450": 1, "987894": 1, "100287": 1, "190590": 1, "748015": 1, "570256": 1, "571429": 1, "815870": 1, "037975": 1, "99941": 1, "7700": 1, "100266": 1, "6700": 1, "058230": 1, "175875": 1, "185628": 1, "911575": 1, "773840": 1, "138836": 1, "481013": 1, "99850": 1, "1622": 1, "102163": 1, "2902": 1, "149838": 1, "180075": 1, "477180": 1, "079413": 1, "552735": 1, "195676": 1, "261383": 1, "99549": 1, "1700": 1, "100650": 1, "3600": 1, "450830": 1, "685039": 1, "431004": 1, "733691": 1, "431878": 1, "765705": 1, "583296": 1, "683544": 1, "99137": 1, "9823": 1, "103139": 1, "862018": 1, "076555": 1, "723863": 1, "382038": 1, "914195": 1, "054315": 1, "363945": 1, "151899": 1, "99025": 1, "6109": 1, "102584": 1, "8723": 1, "629842": 1, "075145": 1, "847454": 1, "294642": 1, "454410": 1, "392237": 1, "746835": 1, "98674": 1, "2245": 1, "101462": 1, "7340": 1, "325776": 1, "719968": 1, "167988": 1, "492430": 1, "148685": 1, "689393": 1, "949367": 1, "98354": 1, "8038": 1, "102403": 1, "9366": 1, "645196": 1, "787296": 1, "154048": 1, "042791": 1, "362992": 1, "738793": 1, "818947": 1, "98238": 1, "6260": 1, "100843": 1, "6800": 1, "761374": 1, "917335": 1, "510957": 1, "540849": 1, "687526": 1, "116041": 1, "025846": 1, "898734": 1, "97244": 1, "5900": 1, "100099": 1, "7840": 1, "755410": 1, "824801": 1, "527127": 1, "040263": 1, "907293": 1, "141454": 1, "768267": 1, "012658": 1, "96834": 1, "3426": 1, "101241": 1, "0748": 1, "165657": 1, "204651": 1, "752417": 1, "061833": 1, "339618": 1, "247325": 1, "96771": 1, "6120": 1, "100000": 1, "0000": 1, "228388": 1, "668142": 1, "938776": 1, "694977": 1, "946588": 1, "365903": 1, "96487": 1, "9240": 1, "104012": 1, "8060": 1, "512076": 1, "828467": 1, "778254": 1, "482289": 1, "234573": 1, "440986": 1, "222222": 1, "027524": 1, "96294": 1, "2152": 1, "9652": 1, "705785": 1, "922390": 1, "348374": 1, "060602": 1, "907051": 1, "308141": 1, "142857": 1, "216608": 1, "215190": 1, "96111": 1, "8602": 1, "105859": 1, "6922": 1, "888140": 1, "014403": 1, "882786": 1, "484907": 1, "208257": 1, "854056": 1, "255959": 1, "95768": 1, "6273": 1, "231373": 1, "905929": 1, "882664": 1, "662963": 1, "339323": 1, "216870": 1, "430380": 1, "95660": 1, "8586": 1, "339141": 1, "560209": 1, "194993": 1, "160734": 1, "617441": 1, "641233": 1, "088608": 1, "95601": 1, "0086": 1, "104676": 1, "4586": 1, "284133": 1, "368115": 1, "691684": 1, "670001": 1, "094601": 1, "076923": 1, "400379": 1, "95420": 1, "4052": 1, "579595": 1, "322484": 1, "889089": 1, "357111": 1, "848449": 1, "566047": 1, "95365": 1, "5879": 1, "634412": 1, "222143": 1, "046790": 1, "185857": 1, "543222": 1, "437794": 1, "94863": 1, "2968": 1, "100407": 1, "3320": 1, "136703": 1, "527027": 1, "482586": 1, "958592": 1, "261928": 1, "857143": 1, "366248": 1, "240506": 1, "94685": 1, "5814": 1, "314419": 1, "672140": 1, "986615": 1, "825195": 1, "438599": 1, "285138": 1, "94238": 1, "100208": 1, "2400": 1, "761460": 1, "192631": 1, "245364": 1, "027166": 1, "585387": 1, "334040": 1, "766384": 1, "93869": 1, "7184": 1, "102473": 1, "6224": 1, "130282": 1, "262161": 1, "274070": 1, "870220": 1, "396213": 1, "946546": 1, "784868": 1, "91993": 1, "7484": 1, "006252": 1, "571928": 1, "370920": 1, "053038": 1, "459773": 1, "834616": 1, "417722": 1, "90814": 1, "0929": 1, "100404": 1, "4300": 1, "185907": 1, "200413": 1, "461602": 1, "645758": 1, "639353": 1, "361211": 1, "191458": 1, "90128": 1, "3209": 1, "102654": 1, "3787": 1, "871679": 1, "041152": 1, "218390": 1, "159637": 1, "202166": 1, "319185": 1, "082076": 1, "90085": 1, "8717": 1, "102558": 1, "914128": 1, "890157": 1, "326178": 1, "266466": 1, "397718": 1, "651101": 1, "039754": 1, "89468": 1, "4160": 1, "100109": 1, "9200": 1, "531584": 1, "867306": 1, "881500": 1, "068973": 1, "010551": 1, "718140": 1, "87902": 1, "4854": 1, "100435": 1, "7848": 1, "097515": 1, "287549": 1, "721790": 1, "863847": 1, "623488": 1, "958519": 1, "577889": 1, "same": [1, 2], "As": 1, "great": 1, "doe": 1, "particularli": 1, "offer": 1, "standardis": 1, "possibl": 1, "annual": 1, "too": 1, "standard": 1, "conceptu": 2, "wai": 2, "encod": 2, "inform": 2, "seri": 2, "thei": 2, "movement": 2, "pattern": 2, "sequenc": 2, "veri": 2, "forecast": 2, "task": 2, "how": 2, "model": 2, "number": 2, "passeng": 2, "week": 2, "isocalendar": 2, "2015": 2, "09": 2, "8272": 2, "8253": 2, "8254": 2, "8261": 2, "timedelta": 2, "ref_df": 2, "mean": 2, "std": 2, "ref_year": 2, "ref_week": 2, "close_mean": 2, "close_std": 2, "dt": 2, "valu": 2, "rdata": 2, "merg": 2, "copi": 2, "scaled_open": 2, "scaled_high": 2, "scaled_low": 2, "scaled_clos": 2, "inplac": 2, "true": 2, "col": 2, "scaled_": 2, "hour": 2, "r15data": 2, "409948": 2, "539754": 2, "641493": 2, "771298": 2, "find": 2, "sampl": 2, "tempral": 2, "demonstr": 2, "597640": 2, "563434": 2, "404686": 2, "489761": 2, "447662": 2, "586238": 2, "682462": 2, "657286": 2, "630122": 2, "635753": 2, "612564": 2, "519478": 2, "505564": 2, "580100": 2, "596663": 2, "562874": 2, "171314": 2, "rxdata": 2, "round": 2, "dist": 2, "ab": 2, "38382": 2, "34407": 2, "34151": 2, "38676": 2, "38431": 2, "20175": 2, "20176": 2, "20177": 2, "20179": 2, "58518": 2, "58519": 2, "r2data": 2, "sample_indic": 2, "random": 2, "choic": 2, "second": 2, "fig": 2, "ax": 2, "add_subplot": 2, "x_data": 2, "shape": 2, "alpha": 2, "axvlin": 2, "c": 2, "r": 2, "l": 2, "lw": 2, "set_titl": 2, "intern": 2, "v": 2, "behaviour": 2, "notic": 2, "though": 2, "ha": 2, "point": 2, "mark": 2, "vertic": 2, "line": 2, "differ": 2, "anoth": 2, "visual": 2, "special": 2, "context": 2, "imagin": 2, "buyer": 2, "versu": 2, "seller": 2, "forc": 2, "market": 2, "want": 2, "come": 2, "down": 2, "wherea": 2, "up": 2, "The": 2, "technic": 2, "being": 2, "bull": 2, "bear": 2, "battl": 2, "appli": 2, "dure": 2, "segment": 2, "extent": 2, "algebra": 2, "similar": 2, "physic": 2, "": 2, "e": 2, "subplot": 2, "figsiz": 2, "plt_candl": 2, "candl": 2, "els": 2, "g": 2, "none": 2, "x": 2, "axi": 2, "dot": 2, "marker": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"learn": 0, "By": 0, "failur": 0, "data": [0, 2], "scienc": 0, "ml": 0, "ai": 0, "tabl": 0, "content": 0, "concept": 0, "algo": 0, "trade": 0, "basic": 1, "sma": 1, "crossov": 1, "introduct": [1, 2], "The": 1, "strategi": 1, "backtest": 1, "py": 1, "conclus": 1, "In": 2, "progress": 2, "tempor": 2, "vector": 2, "abstract": 2, "scale": 2, "creat": 2}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Learning By Failure: Data Science/ML/AI": [[0, "learning-by-failure-data-science-ml-ai"]], "Table of Contents": [[0, "table-of-contents"]], "Concepts": [[0, null]], "Algo Trading": [[0, null]], "Basic SMA Crossover": [[1, "basic-sma-crossover"]], "Introduction": [[1, "introduction"], [2, "introduction"]], "The Strategy": [[1, "the-strategy"]], "Backtesting.py": [[1, "backtesting-py"]], "Conclusion": [[1, "conclusion"]], "[In Progress] Temporal Vectors": [[2, "in-progress-temporal-vectors"]], "Abstract": [[2, "abstract"]], "Scaling the data to create Temporal Vector": [[2, "scaling-the-data-to-create-temporal-vector"]]}, "indexentries": {}})