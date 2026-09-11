// 1. DATA COLLECTION: Add or change words here!
        const wordData = {
            "Substantivit (Nouns)": ["osa", "talo", "teksti", "aika", "kaupunki", "omena", "poika", "auto", "kuva", "elämä", "käsi", "alue", "kieli", "tie", "tyttö", "koulu", "asia", "päivä", "maailma", "huone", "mies", "lista", "nimi", "vuosi", "sana", "ovi", "koira", "maa", "musiikki", "lapsi", "paikka", "kukka", "nainen", "väri", "video", "artikkeli", "kahvila", "pöytä", "luonto", "apu", "kissa", "sivu", "puhelin", "idea", "ikkuna", "ruoka", "dokumentti", "banaani", "kirkko", "luku", "onnellisuus", "veli", "liiketoiminta", "sydän", "taivas", "ryhmä", "isä", "kirja", "pää", "rakkaus", "lause", "vesi", "kysymys", "yö", "silta", "opettaja", "syy", "äiti", "osoite", "raha", "substantiivi", "meri", "tavoite", "tuoli", "esimerkki", "vuori", "toimisto", "ilta", "sisko", "ravintola", "verbi", "jalka", "menestys", "paita", "leipä", "kuppi", "hinta", "keittiö", "laulu", "kuukausi", "tuli", "lääkäri", "työ", "vastaus", "aamiainen", "kirjasto", "sää", "insinööri", "lippu", "viesti", "aamu", "kävely", "länsi", "silmä", "perhe", "valo", "opiskelija", "laukku", "jänis", "tilaisuus", "puutarha", "bussi", "ystävä", "aurinko", "uni", "haku", "sade", "palvelu", "viikko", "sanakirja", "ihminen", "ongelma", "rakennus", "matka", "poika", "makuuhuone", "ilma", "lasi", "oppitunti", "kirje", "hattu", "laji", "suu", "askel", "katu", "adjektiivi", "tapahtuma", "kauppa", "pala", "vihje", "tuki", "seutu", "kesä", "tunti", "asiakas", "pari", "tietokone", "lintu", "hetki", "juoma", "piste", "tieto", "koko", "kännykkä", "kakku", "kartta", "valinta", "tosiasia", "tytär", "tilanne", "pinta", "vanhempi", "sänky", "määrä", "orava", "terveys", "juhla", "suunta", "kasvot", "alku", "metsä", "pankki", "loma", "yliopisto", "herra", "toimitus", "kello", "itä", "tyyppi", "piha", "yhteiskunta", "maito", "kulma", "vieras", "nojatuoli", "kala", "arvo", "mänty", "sääntö", "joki", "ajatus", "ympyrä", "eläin", "järjestelmä", "merkki", "hiukset", "klubi", "oranssi", "profiili", "puisto"],
            "Adjektiivit (Adjectives)": ["iso", "hyvä", "pitkä", "pieni", "valkoinen", "ensimmäinen", "korkea", "uusi", "kiva", "vapaa", "nuori", "keltainen", "läheinen", "lyhyt", "muu", "iloinen", "oikea", "tyytyväinen", "vanha", "helppo", "punainen", "selkeä", "mielenkiintoinen", "matala", "koko", "lämmin", "kylmä", "kallis", "tärkeä", "kaunis", "seuraava", "tavallinen", "sininen", "hieno", "tehokas", "myöhäinen", "pyöreä", "sama", "huono", "kokenut", "kuuluisa", "nopea", "samanlainen", "onnellinen", "vaikea", "söpö", "vihreä", "jännittävä", "maukas", "hyödyllinen", "tyhjä", "vahva", "klassinen", "ruskea", "väärä", "ihana", "oma", "aikainen", "ystävällinen", "merkittävä", "makea", "luova", "ylimääräinen", "rauhallinen", "halpa", "ainutlaatuinen", "hidas", "hauska", "pimeä", "suosittu", "täysi", "pehmeä", "väsynyt", "saatavilla", "avoin", "paksu", "kiinnostunut", "harmaa", "aurinkoinen", "leveä", "nykyinen", "sopiva", "rakas", "suljettu", "rikas", "harvinainen", "ohut", "viihtyisä", "kultainen", "musta", "utelias", "vaarallinen", "pilvinen", "suosikki", "syvä", "mukava", "kova", "valmis", "mahdollinen", "muodikas"],
            "Verbit (Verbs)": ["olla", "mennä", "voida", "puhua", "tehdä", "tulla", "oppia", "nähdä", "matkustaa", "avata", "haluta", "ajatella", "syödä", "lukea", "asua", "tietää", "odottaa", "sanoa", "juoda", "viedä", "kuunnella", "pitää", "seisoa", "auttaa", "kävellä", "alkaa", "lisätä", "kertoa", "tuoda", "ymmärtää", "sulkea", "opiskella", "saada", "elää", "toivottaa", "juosta", "löytää", "osata", "laulaa", "jatkaa", "kysyä", "ostaa", "muistaa", "tarvita", "istua", "kirjoittaa", "antaa", "yrittää", "jäädä", "vastata", "toistaa", "ajaa", "valmistaa", "käydä", "keskustella", "tuntea", "näyttää", "seurata", "lopettaa", "tarkistaa", "etsiä", "onnistua", "lentää", "päättää", "juhlia", "luoda", "katsoa", "harjoittaa", "nukkua", "käyttää", "pelata", "uskoa", "liittyä", "nousta", "rakastaa", "tilata", "pestä", "valita", "suunnitella", "parantaa", "riittää", "unohtaa", "soittaa", "tavata", "saapua", "toimia", "kuulla", "lähettää", "tutustua", "palata", "maalata", "laittaa", "hymyillä", "uida", "levätä", "siivota", "suorittaa", "tapahtua", "kääntää", "unelmoida"],
            "Adverbit (Adverbs)": ["lisää", "vain", "jo", "nyt", "myös", "aina", "niin", "vielä", "sitten", "ennen", "heti", "paljon", "miten", "taas", "hyvin", "ainakin", "pois", "takaisin", "koska", "lisäksi", "miksi", "tänään", "enemmän", "no", "ihan", "noin", "täällä", "usein", "helposti", "kuitenkin", "kuinka", "yhdessä", "mikäli", "vähän", "esimerkiksi", "ehkä", "ensin", "enää", "todella", "pian", "erittäin", "oikein", "lähellä", "varmasti", "siellä", "eilen", "erityisesti", "melko", "melkein", "tietysti"],
            "Muut (Misc)": ["minä", "sinä", "hän", "me", "te", "he", "se", "tuo", "tämä", "ne", "nuo", "nämä", "kuka", "joka", "kaikki", "moni", "että", "ja", "mutta", "tai", "edessä", "kiitos", "hei", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai", "tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu", "Venäjä", "Suomi", "Yhdysvallat", "yksi", "kaksi", "kolme", "neljä", "viisi"]
        };

        // State variables
        const guessedWords = new Set();
        const inputField = document.getElementById('userInput');
        const messageEl = document.getElementById('message');
        const progressEl = document.getElementById('progress');
        const totalCountEl = document.getElementById('total-count');
        const foundCountEl = document.getElementById('found-count');
        const remainingCountEl = document.getElementById('remaining-count');
		const giveUpButton = document.getElementById('giveUpButton');   // <‑ NEW
		// --------- **new** flag ----------------------------------------------------
		let gaveUp = false; 

        // Calculate total words
        let totalWords = 0;
        for (let category in wordData) {
            totalWords += wordData[category].length;
        }
        totalCountEl.textContent = totalWords;

        // Function to update stats
        function updateStats() {
            const found = guessedWords.size;
            const remaining = totalWords - found;
            
            foundCountEl.textContent = found;
            remainingCountEl.textContent = remaining;
            
            const progressPercentage = (found / totalWords) * 100;
            progressEl.style.width = `${progressPercentage}%`;
            
            // Update message
            if (found === 0) {
                messageEl.textContent = "Kirjoita oikea sana aloittaaksesi!";
            } else if (found === totalWords) {
                messageEl.textContent = "Onnittelemme! Olet löytänyt kaikki sanat! 🎉";
            } else {
                messageEl.textContent = `Hyvin jatkuu! Löytyy vielä ${remaining} sanaa.`;
            }
        }

        // Function to check if word exists and handle guess
        function handleGuess(word) {
            const normalizedWord = word.toLowerCase().trim();
            
            // Ignore empty input
            if (normalizedWord.length === 0) {
                return false;
            }
            
            let found = false;
            
            for (let category in wordData) {
                if (wordData[category].includes(normalizedWord)) {
                    if (!guessedWords.has(normalizedWord)) {
                        guessedWords.add(normalizedWord);
                        found = true;
                        messageEl.textContent = `"${normalizedWord}" löytyy! 🎯`;
                    } else {
                        messageEl.textContent = `"${normalizedWord}" on jo löytynyt.`;
                    }
                    break;
                }
            }
            
            if (!found) {
                messageEl.textContent = `"${normalizedWord}" ei ole oikea sana. Yritä uudelleen.`;
            }
            
            updateStats();
            renderTable();
            return found;
        }

        // Function to render the table
        function renderTable() {
    const table = document.getElementById('wordTable');
    table.innerHTML = '';

    /* ----- header (unchanged) ----- */
    const headerRow = document.createElement('tr');
    for (let cat in wordData) {
        const th = document.createElement('th');
        th.textContent = cat;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    /* ----- find longest column ----- */
    let maxWords = 0;
    for (let cat in wordData) {
        if (wordData[cat].length > maxWords) maxWords = wordData[cat].length;
    }

    /* ----- data rows ----- */
    for (let i = 0; i < maxWords; i++) {
        const row = document.createElement('tr');

        for (let cat in wordData) {
            const td = document.createElement('td');

            if (i < wordData[cat].length) {
                const word = wordData[cat][i];

                if (guessedWords.has(word)) {               // ✅ guessed by the player
                    td.textContent = word;
                    td.classList.add('guessed');

                } else if (gaveUp) {                         // ← **NEW** – after Give Up
                    /* Show the actual word *and* the red X */
                    td.textContent = word;                    // <‑‑ show the word
                    td.classList.add('unguessed');           // ← triggers the X overlay

                } else {                                     // still hidden
                    td.textContent = '•••••';
                    td.classList.add('empty');
                }
            } else {
                td.classList.add('empty');
            }

            row.appendChild(td);
        }

        table.appendChild(row);
    }
}
		
		function handleGiveUp() {
		// 1️⃣  Tell the UI we have given up
		gaveUp = true;

		// 2️⃣  Show every remaining word (but don’t count them as “found”)
		renderTable();          // re‑draw the table with the red ✗ marks

		// 3️⃣  (Do NOT call updateStats() – the “found” bar stays unchanged)

		// 4️⃣  Disable further interaction
		inputField.disabled = true;
		giveUpButton.disabled = true;

		// 5️⃣  Friendly end‑message
		messageEl.textContent = 'Peli päättyi! Kaikki sanat on paljastettu.';
		messageEl.style.color = 'var(--danger)';
	}

        // Event listener for input - automatically process words as you type
        let inputTimeout;
        inputField.addEventListener('input', (e) => {
            const val = e.target.value;
            
            // Clear previous timeout
            clearTimeout(inputTimeout);
            
            // Set a new timeout to process the input after user stops typing
            inputTimeout = setTimeout(() => {
                const word = val.trim();
                if (word.length > 0) {
                    const wasFound = handleGuess(word);
                    if (wasFound) {
                        inputField.value = ''; // Clear input after successful guess
                    }
                }
            }, 500); // Wait 500ms after user stops typing
        });

        // Also handle Enter key for immediate processing
        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                clearTimeout(inputTimeout);
                const val = inputField.value.trim();
                if (val.length > 0) {
                    const wasFound = handleGuess(val);
                    if (wasFound) {
                        inputField.value = ''; // Clear input after successful guess
                    }
                }
            }
        });
		
		giveUpButton.addEventListener('click', handleGiveUp);

        // Initial render
        renderTable();
        updateStats();
