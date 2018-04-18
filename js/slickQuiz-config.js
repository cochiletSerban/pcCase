// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test carcasa/sistemul de racire",
        "main":    "<p>Test cu scop de autoevaluare</p>",
        "results": "<h5>Testul s-a finalizat</h5><p></p>",
        "level1":  "10",
        "level2":  "8",
        "level3":  "6",
        "level4":  "4",
        "level5":  "0" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Care este firama care produce cel mai popular cooler care foloseste tehnologia heat pipe?",
            "a": [
                {"option": "Lian li ",      "correct": false},
                {"option": "Intel",     "correct": false},
                {"option": "coolerMaster",      "correct": true},
                {"option": "asus",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>coolerMaster este varianta corecta</p>" // no comma here
        },
       
	   
	   
	   
	      { // Question 2 - Multiple Choice, Single True Answer
            "q": "Cine a implementat penrtu prima oara tehnologia vapor chamber?",
            "a": [
                {"option": "Amd ",                       "correct": false},
                {"option": "coolerMaster",     "correct": false},
                {"option": "sapphire",            "correct": true},
				{"option": "windforce",            "correct": false} // no comma here
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>sapphire este varianta corecta</p>" // no comma here
        },
		
		 { // Question 3 - Multiple Choice, Single True Answer
            "q": "Care este cea mai eficienta forma de racire pentru un porcesor? ",
            "a": [
                {"option": "Racirea pe aer",                       "correct": false},
                {"option": "Racirea pe apa",     "correct": false},
                {"option": "Racirea hibrida",            "correct": false},
				{"option": "Racirea cu azot lichid",            "correct": true}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Racirea cu azot lichid este varianta corecta</p>" // no comma here
        },
		
		{ // Question 4 - Multiple Choice, Single True Answer
            "q": " Care tip de cooler pentru palcile video ofera o temperatura mai scazuta a aerului din carcasa? ",
            "a": [
                {"option": "Tipul blower",  "correct": true},
                {"option": "Tipul open air",     "correct": false},
                {"option": "Tipul activ",        "correct": false},
				{"option": "Tipul fanless",        "correct": false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Tipul blower este varianta corecta</p>" // no comma here
        },
		
		
		{ // Question 5 - Multiple Choice, Single True Answer
            "q": " Ce trebuie asezat intre procesor si cooler pentru a facilita transferul de caldura? ",
            "a": [
                {"option": "Alcool izopropilic ",  "correct": false},
                {"option": "Ulei mineral",     "correct": false},
                {"option": "Nimic ",        "correct": false},
				{"option": "Pasta termoconductoare",        "correct":true}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Pasta termoconductoare este varianta corecta</p>" // no comma here
        },
		
		{ // Question 6 - Multiple Choice, Single True Answer
            "q": "Care este cea mai folosita metoda de fan controll?",
            "a": [
                {"option": "Puls width modulation (pwm)",  "correct": true},
                {"option": "Controlul tensiunii",     "correct": false},
                {"option": "Legarea unei rezitente in serie cu ventilatorul",        "correct": false},
				{"option": "Folosirea unui fan controlrel specializat  ",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Puls width modulation (pwm)</p>" // no comma here
        },
		
		
		{ // Question 7 - Multiple Choice, Single True Answer
            "q": "In ce tip de sisteme se foloseste racirea pe azot lichid?",
            "a": [
                {"option": "In sistemele pentru office",  "correct": false},
                {"option": "In sistemele pentru gaming",     "correct": false},
                {"option": "In servere",        "correct": false},
				{"option": "In sisteme pentru overcloking",        "correct":true}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>In sisteme pentru overcloking</p>" // no comma here
        },
		
		
		{ // Question 8 - Multiple Choice, Single True Answer
            "q": "Ce tip ventilator va fi ideal pentru aprovizonarea cu aer a carcasei prin panoul din fata?",
            "a": [
                {"option": "Un ventilator de tip high airflow (haf)",  "correct": false},
                {"option": "Un venitlator cu pwm",     "correct": false},
                {"option": "Un ventilator de tip static presure (sp)",        "correct": true},
				{"option": "Un ventilator noctua",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Un ventilator de tip static presure (sp) este varianta corecta</p>" // no comma here
        },
		
		{ // Question 9 - Multiple Choice, Single True Answer
            "q": "Care este un avantaj al racirii pe apa?",
            "a": [
                {"option": "Este mai silentioasa",  "correct": true},
                {"option": "Este mai ieftina",     "correct": false},
                {"option": "Mareste durata de viata a vrm-uli",        "correct": false},
				{"option": "Este mai usor de montat",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Este mai silentioasa</p>" // no comma here
        },
		
		{ // Question 10 - Multiple Choice, Single True Answer
            "q": "Ce fel de racire realizeaza  un aio cooler?",
            "a": [
                {"option": "racire pe aer",  "correct": false},
                {"option": "racire pe azot",     "correct": false},
                {"option": "racire pe lichid",        "correct": true},
				{"option": "racire pasiva",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>racire pe lichid este varianta corecta</p>" // no comma here
        },
		
		{ // Question 11 - Multiple Choice, Single True Answer
            "q": "Cel mai cunoscut producator de carcase cu forme de factor inedite este",
            "a": [
                {"option": "lian li",  "correct": true},
                {"option": "coolerMaster",     "correct": false},
                {"option": "amd",        "correct": false},
				{"option": "sapphire",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>lian li  este varianta corecta</p>" // no comma here
        },
		
		{ // Question 12 - Multiple Choice, Single True Answer
            "q": "Cel mai greu de implementat sistem de racire este?",
            "a": [
                {"option": "Racirea pe apa",  "correct": false},
                {"option": "Racirea pe baza de ulei mineral",     "correct": true},
                {"option": "Racirea pasiva",        "correct": false},
				{"option": "Racirea pe aer",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Racirea pe baza de ulei mineral este varianta corecta</p>" // no comma here
        },
		
		{ // Question 13 - Multiple Choice, Single True Answer
            "q": "Care este singura componeta care este diferita la racirea pe apa a uni procesor grafic fara de un porcesor normal?",
            "a": [
                {"option": "Rezervorul",  "correct": false},
                {"option": "Ventilatoarele",     "correct": false},
                {"option": "Corpul de racire",        "correct": true},
				{"option": "Furtunele",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Corpul de racire este varianta corecta</p>" // no comma here
        },
		
			{ // Question 14 - Multiple Choice, Single True Answer
            "q": "Sistemul de racire pe azot lichid este format doar din?",
            "a": [
                {"option": "Corupul de racire",  "correct": true},
                {"option": "Azot lichid ",     "correct": false},
                {"option": "Ventilator",        "correct": false},
				{"option": "Radiator  ",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Corupul de racire este varianta corecta</p>" // no comma here
        },
		
		{ // Question 15 - Multiple Choice, Single True Answer
            "q": "Care este cea mai populara forma de factor pentru carcasele din ziua de azi",
            "a": [
                {"option": "Btx",  "correct": false},
                {"option": "Micro-atx",     "correct": false},
                {"option": "Atx",        "correct": true},
				{"option": "At ",        "correct":false}
                
            ],
            "correct": "<p><span>Raspuns corect!</span></p>",
            "incorrect": "<p><span>Raspuns gresit</span>Atx</p>" // no comma here
        }
		
		
		
    ]
};
