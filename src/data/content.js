const content = {
  monitor: {
    id: 'monitor',
    title: 'Monitor',
    category: 'output',
    icon: '🖥️',
    image: '/images/monitor.png',
    shortDesc: 'Výstupné zariadenie na zobrazovanie informácií v podobe obrazu a textu.',
    explanation: 'Monitor je výstupné zariadenie, ktoré zobrazuje informácie z počítača na obrazovke. Funguje podobne ako televízor — prevádza digitálne signály z grafickej karty na obraz, ktorý vidíš. Moderné monitory využívajú LCD alebo OLED technológiu, vďaka ktorej sú tenké a majú vydarený obraz.',
    keyTerms: [
      { term: 'Pixel', desc: 'Najmenší bod na obrazovke, z ktorého sa skladá obraz' },
      { term: 'Rozlíšenie', desc: 'Počet pixelov na obrazovke (napr. 1920×1080)' },
      { term: 'Obnovovacia frekvencia', desc: 'Koľkokrát za sekundu sa obraz prekreslí (napr. 60 Hz)' }
    ],
    examples: ['Televízor', 'Projektor', 'Smartfony a tablety'],
    funFact: 'Prvé monitory vážili viac ako 30 kg a zobrazovali iba zelený text na čiernom pozadí!',
    parameters: [
      { label: 'Uhlopriečka', value: '24" – 32"' },
      { label: 'Rozlíšenie', value: 'Full HD, 4K' },
      { label: 'Obnovovacia frekvencia', value: '60 – 240 Hz' }
    ]
  },
  systemUnit: {
    id: 'systemUnit',
    title: 'Systémová jednotka',
    category: 'processing',
    icon: '🖥️',
    image: '/images/systemUnit.jpg',
    shortDesc: 'Hlavný blok počítača, v ktorom sú umiestnené všetky dôležité komponenty.',
    explanation: 'Systémová jednotka (skrinia) je „srdce" počítača. Obsahuje procesor (CPU), operačnú pamäť (RAM), pevný disk, základnú dosku a ďalšie komponenty. Všetky výpočty a spracovanie dát prebiehajú práve tu. Môže mať tvar veže (tower) alebo byť zabudovaná za monitorom (all-in-one).',
    keyTerms: [
      { term: 'Základná doska', desc: 'Doska, ktorá spája všetky komponenty počítača' },
      { term: 'Napájací zdroj', desc: 'Mení sieťové napätie na napätie pre počítačové súčiastky' },
      { term: 'Chladenie', desc: 'Ventilátory a radiátory, ktoré udržujú komponenty v bezpečnej teplote' }
    ],
    examples: ['Tower (veža)', 'All-in-One', 'Laptop — integrovaná skriňa'],
    funFact: 'Prvý počítač s procesorom Intel 4004 mal výkon menší ako dnešná kalkulačka!',
    parameters: []
  },
  cpu: {
    id: 'cpu',
    title: 'Procesor (CPU)',
    category: 'processing',
    icon: '🧠',
    image: '/images/cpu.jpg',
    shortDesc: '„Mozog" počítača — vykonáva všetky výpočty a spracúva inštrukcie.',
    explanation: 'CPU (Central Processing Unit) je hlavný procesor počítača. Vykonáva inštrukcie programov — všetky výpočty, rozhodnutia a operácie prebiehajú v ňom. Rýchlosť CPU sa meria v gigahertzoch (GHz). Moderné procesory majú viac jadier, takže môžu spracúvať viac úloh naraz.',
    keyTerms: [
      { term: 'Jadro', desc: 'Samostatná výpočtová jednotka v procesore' },
      { term: 'Taktovacia frekvencia', desc: 'Rýchlosť procesora v GHz' },
      { term: 'Cache', desc: 'Rýchla pamäte priamo v procesore na časté dáta' }
    ],
    examples: ['Intel Core i7', 'AMD Ryzen 5', 'Apple M2'],
    funFact: 'Moderný procesor môže obsahovať viac ako 10 miliárd tranzistorov!',
    parameters: [
      { label: 'Frekvencia', value: '2 – 5 GHz' },
      { label: 'Počet jadier', value: '2 – 24' },
      { label: 'Výrobný proces', value: '3 – 7 nm' }
    ]
  },
  ram: {
    id: 'ram',
    title: 'Operačná pamäť (RAM)',
    category: 'memory',
    icon: '💾',
    image: '/images/ram.jpg',
    shortDesc: 'Dočasná pamäť, ktorá uchováva dáta, s ktorými procesor práve pracuje.',
    explanation: 'RAM (Random Access Memory) je dočasná pamäť počítača. Keď otvoríš program, jeho dáta sa načítajú z pomalého disku do rýchlej RAM, aby k nim procesor mohol rýchlo pristupovať. Po vypnutí počítača sa obsah RAM vymaže — preto je dôležité ukladať prácu.',
    keyTerms: [
      { term: 'Volatile pamäť', desc: 'Pamäť, ktorá sa vymaže po vypnutí napájania' },
      { term: 'Kapacita', desc: 'Množstvo dát, ktoré RAM môže pojať (v GB)' },
      { term: 'Rýchlosť', desc: 'Ako rýchlo dokáže RAM čítať/zapisovať dáta (v MHz)' }
    ],
    examples: ['DDR4 8 GB', 'DDR5 16 GB', 'SO-DIMM pre notebooky'],
    funFact: 'Ak by mala RAM kapacitu ako pevný disk, stála by viac ako auto!',
    parameters: [
      { label: 'Kapacita', value: '4 – 64 GB' },
      { label: 'Typ', value: 'DDR4, DDR5' },
      { label: 'Rýchlosť', value: '2400 – 6000 MHz' }
    ]
  },
  storage: {
    id: 'storage',
    title: 'Pamäťové úložisko',
    category: 'storage',
    icon: '📀',
    image: '/images/storage.jpg',
    shortDesc: 'Zariadenie na dlhodobé ukladanie dát — programov, dokumentov a systému.',
    explanation: 'Pevný disk (HDD) alebo SSD slúži na trvalé ukladanie dát. Na rozdiel od RAM, dáta na disku zostanú aj po vypnutí počítača. SSD disky sú oveľa rýchlejšie ako klasické HDD, pretože nemajú pohyblivé časti a používajú flash pamäť.',
    keyTerms: [
      { term: 'HDD', desc: 'Hard Disk Drive — mechanický disk s rotujúcimi platničkami' },
      { term: 'SSD', desc: 'Solid State Drive — rýchly disk bez pohyblivých častí' },
      { term: 'NVMe', desc: 'Najrýchlejší typ SSD pripojený priamo k základnej doske' }
    ],
    examples: ['HDD 1 TB', 'SSD 512 GB', 'USB flash disk 64 GB'],
    funFact: 'Prvý pevný disk IBM z roku 1956 mal kapacitu 5 MB a mal veľkosť chladničky!',
    parameters: [
      { label: 'Kapacita', value: '128 GB – 8 TB' },
      { label: 'Rýchlosť čítania (SSD)', value: '500 – 7000 MB/s' },
      { label: 'Typ', value: 'HDD, SATA SSD, NVMe SSD' }
    ]
  },
  gpu: {
    id: 'gpu',
    title: 'Grafická karta (GPU)',
    category: 'processing',
    icon: '🎮',
    image: '/images/gpu.jpg',
    shortDesc: 'Spracúva grafiku — zobrazuje obraz na monitore a urýchľuje 3D výpočty.',
    explanation: 'GPU (Graphics Processing Unit) je špecializovaný procesor na spracovanie grafiky. Zaisťuje plynulé zobrazovanie hier, videí a animácií. Moderné graficke karty majú vlastnú pamäť (VRAM) a dokážu spracúvať tisíce operácií súčasne — preto sa používajú aj na strojové učenie a ťažbu kryptomien.',
    keyTerms: [
      { term: 'VRAM', desc: 'Pamäť grafickej karty na ukladanie obrazových dát' },
      { term: 'Ray Tracing', desc: 'Technológia realistického zobrazovania svetla a tieňov' },
      { term: 'FPS', desc: 'Počet snímkov za sekundu — meriate plynulosti obrazu' }
    ],
    examples: ['NVIDIA GeForce RTX 4060', 'AMD Radeon RX 7600', 'Integrovaná grafika Intel UHD'],
    funFact: 'Najvýkonnejšia grafická karta stojá viac ako auto!',
    parameters: [
      { label: 'VRAM', value: '2 – 24 GB' },
      { label: 'Frekvencia', value: '1 – 2.5 GHz' },
      { label: 'Spotreba', value: '75 – 450 W' }
    ]
  },
  keyboard: {
    id: 'keyboard',
    title: 'Klávesnica',
    category: 'input',
    icon: '⌨️',
    image: '/images/keyboard.jpg',
    shortDesc: 'Vstupné zariadenie na zadávanie textu a príkazov do počítača.',
    explanation: 'Klávesnica je najpoužívanejšie vstupné zariadenie. Máviac ako 100 kláves rozdelených do skupín: alfanumerické (písmená a čísla), funkčné (F1–F12), špeciálne (Enter, Shift, Ctrl) a klávesy pre pohyb kurzora. Stlačením klávesu sa odošle signál do počítača, ktorý ho preloží na znak alebo akciu.',
    keyTerms: [
      { term: 'Alfanumerické klávesy', desc: 'Písmená, čísla a interpunkčné znamienka' },
      { term: 'Funkčné klávesy', desc: 'Klávesy F1–F12 na rýchle akcie' },
      { term: 'Klávesové skratky', desc: 'Kombinácie klávesov (napr. Ctrl+C) na rýchle operácie' }
    ],
    examples: ['Mechanická klávesnica', 'Membránová klávesnica', 'Ergonomická klávesnica'],
    funFact: 'Svetový rekord v písaní na klávesnici je 212 slov za minútu!',
    parameters: [
      { label: 'Počet klávesov', value: '84 – 108' },
      { label: 'Spätná väzba', value: 'Mechanická / Membránová' },
      { label: 'Pripojenie', value: 'USB, Bluetooth' }
    ]
  },
  mouse: {
    id: 'mouse',
    title: 'Myš',
    category: 'input',
    icon: '🖱️',
    image: '/images/mouse.jpg',
    shortDesc: 'Polohové vstupné zariadenie na ovládanie kurzora na obrazovke.',
    explanation: 'Počítačová myš je polohové zariadenie, ktoré premiestňuje kurzor na obrazovke. Pohyb myši po podložke sa prekladá na pohyb kurzora. Moderné myši majú optický alebo laserový senzor, koliesko na skrolovanie a viacero tlačidiel na prispôsobenie.',
    keyTerms: [
      { term: 'Optický senzor', desc: 'Sníma povrch pod myšou pomocou svetla' },
      { term: 'DPI', desc: 'Citlivosť myši — počet bodov na palec' },
      { term: 'Koliesko', desc: 'Slúži na skrolovanie a priblíženie' }
    ],
    examples: ['Optická myš', 'Herná myš', 'Ergonomická vertikálna myš'],
    funFact: 'Prvá myš bola vyrobená z dreva a mala iba jedno tlačidlo!',
    parameters: [
      { label: 'Senzor', value: 'Optický / Laserový' },
      { label: 'DPI', value: '800 – 25600' },
      { label: 'Tlačidlá', value: '3 – 12+' }
    ]
  },
  vonNeumann: {
    id: 'vonNeumann',
    title: 'Von Neumannova architektúra',
    category: 'architecture',
    icon: '📐',
    image: '/images/vonNeumann.png',
    shortDesc: 'Základný model architektúry počítača — oddelenie pamäte a procesora.',
    explanation: 'John von Neumann navrhol v roku 1945 model počítača, v ktorom sú dáta aj program uložené v tej istej pamäti. Tento model pozostáva z piatich hlavných častí: aritmeticko-logická jednotka (ALU), riadiaca jednotka, pamäť, vstupné a výstupné zariadenia. Väčšina dnešných počítačov stále funguje podľa tohto princípu.',
    keyTerms: [
      { term: 'ALU', desc: 'Aritmeticko-logická jednotka — vykonáva výpočty a logické operácie' },
      { term: 'Riadiaca jednotka', desc: 'Zabezpečuje prenos inštrukcií z pamäte do procesora' },
      { term: 'Zbernica', desc: 'Komunikačná cesta medzi komponentmi počítača' }
    ],
    examples: ['Osobný počítač', 'Server', 'Smartfón — všetky používajú tento model'],
    funFact: 'Von Neumann sa inšpiroval prácou Alana Turinga, ktorý už v roku 1936 popísal teoretický model počítača!',
    parameters: []
  },
  hardware: {
    id: 'hardware',
    title: 'Hardvér',
    category: 'concept',
    icon: '🔧',
    image: '/images/hardware.jpg',
    shortDesc: 'Všetky fyzické časti počítača, ktoré môžeš vidieť a dotknúť sa ich.',
    explanation: 'Hardvér zahŕňa všetky hmatateľné časti počítača — monitor, klávesnicu, myš, systémovú jednotku, procesor, pamäť a ďalšie. Na rozdiel od softvéru, hardvér je fyzický a môže sa pokaziť mechanicky. Bez hardvéru by softvér nemal na čom bežať.',
    keyTerms: [
      { term: 'Fyzické zariadenie', desc: 'Časť počítača, ktorú vidíš a dotkneš sa' },
      { term: 'Komponent', desc: 'Jednotlivá časť hardvéru (napr. procesor, disk)' },
      { term: 'Periféria', desc: 'Zariadenie pripojené k počítaču (myš, tlačiareň)' }
    ],
    examples: ['Procesor', 'Pamäť RAM', 'Monitor', 'Klávesnica'],
    funFact: 'Prvý počítač ENIAC z roku 1945 vážil 27 ton!',
    parameters: []
  },
  software: {
    id: 'software',
    title: 'Softvér',
    category: 'concept',
    icon: '💿',
    image: '/images/software.png',
    shortDesc: 'Programy a inštrukcie, ktoré hovoria hardvéru, čo má robiť.',
    explanation: 'Softvér je nehmotná časť počítača — programy, aplikácie a operačné systémy. Bez softvéru by bol hardvér len kus kovu a plastu. Delí sa na systémový softvér (Windows, Linux), aplikačný softvér (hry, prehliadače) a programovací softvér (Python, Visual Studio).',
    keyTerms: [
      { term: 'Operačný systém', desc: 'Hlavný program, ktorý riadi celý počítač' },
      { term: 'Aplikácia', desc: 'Program na konkrétnu úlohu (prehliadač, textový editor)' },
      { term: 'Ovládač', desc: 'Program, ktorý umožňuje OS komunikovať s hardvérom' }
    ],
    examples: ['Windows 11', 'Google Chrome', 'Minecraft', 'Python'],
    funFact: 'Priemerný smartfón má viac softvéru než vesmírna loď Apollo 11!',
    parameters: []
  },
  inputDevices: {
    id: 'inputDevices',
    title: 'Vstupné zariadenia',
    category: 'concept',
    icon: '📥',
    image: '/images/inputDevices.jpg',
    shortDesc: 'Zariadenia, ktoré vkladajú dáta do počítača — od človeka k stroju.',
    explanation: 'Vstupné zariadenia prenášajú informácie od používateľa do počítača. Patria sem klávesnica, myš, touchpad, skener, mikrofón, webkamera a ďalšie. Každé vstupné zariadenie prevádza jeden typ informácie (text, obraz, zvuk) na digitálny signál, ktorý počítač dokáže spracovať.',
    keyTerms: [
      { term: 'Polohové zariadenie', desc: 'Určuje pozíciu na obrazovke (myš, touchpad)' },
      { term: 'Snímacie zariadenie', desc: 'Prevádza fyzický objekt na digitálny obraz (skener)' },
      { term: 'Akustický vstup', desc: 'Zvukový vstup cez mikrofón alebo hlasový asistent' }
    ],
    examples: ['Klávesnica', 'Myš', 'Skener', 'Mikrofón', 'Webkamera', 'Touchpad'],
    funFact: 'Počítačová myš bola pomenovaná podľa svojho tvaru — skôr sa podobá myši než hmyzu!',
    parameters: []
  },
  outputDevices: {
    id: 'outputDevices',
    title: 'Výstupné zariadenia',
    category: 'concept',
    icon: '📤',
    image: '/images/outputDevices.jpg',
    shortDesc: 'Zariadenia, ktoré zobrazujú dáta z počítača — od stroju k človeku.',
    explanation: 'Výstupné zariadenia prenášajú informácie z počítača k používateľovi. Najdôležitejším je monitor, ďalej sem patrí tlačiareň, reproduktor, sluchátka a projektor. Výstup môže byť vizuálny (obraz, text), zvukový alebo hmatateľný (vytlačený dokument).',
    keyTerms: [
      { term: 'Vizuálny výstup', desc: 'Zobrazenie na obrazovke alebo papieri' },
      { term: 'Akustický výstup', desc: 'Zvuk z reproduktora alebo slúchadiel' },
      { term: 'Tlač', desc: 'Prevod digitálneho dokumentu na papier' }
    ],
    examples: ['Monitor', 'Tlačiareň', 'Reproduktor', 'Projektor', 'Slúchadlá'],
    funFact: 'Najrýchlejšia tlačiareň dokáže vytlačiť 75 strán za minútu!',
    parameters: []
  },
  printer: {
    id: 'printer',
    title: 'Tlačiareň',
    category: 'output',
    icon: '🖨️',
    image: '/images/printer.jpg',
    shortDesc: 'Výstupné zariadenie, ktoré prevádza digitálne dokumenty na papier.',
    explanation: 'Tlačiareň je výstupné zariadenie, ktoré vytvára hmatateľnú kópiu digitálneho dokumentu na papieri. Rozdeľujú sa na laserové (rýchle, pre kanceláriu) a atramentové (kvalitné farby, pre domácnosť). 3D tlačiarne dokážu vytvoriť trojrozmerný objekt z plastu alebo kovu.',
    keyTerms: [
      { term: 'Laserová tlačiareň', desc: 'Používa laser na presné nanášanie tonera na papier' },
      { term: 'Atramentová tlačiareň', desc: 'Vystrekuje mikroskopické kvapky atramentu na papier' },
      { term: 'DPI tlače', desc: 'Rozlíšenie tlače — body na palec' }
    ],
    examples: ['Laserová tlačiareň HP LaserJet', 'Atramentová Canon PIXMA', '3D tlačiareň Prusa'],
    funFact: 'Prvá laserová tlačiareň v roku 1971 mala rozlíšenie len 240 DPI!',
    parameters: [
      { label: 'Rýchlosť', value: '5 – 75 strán/min' },
      { label: 'Rozlíšenie', value: '600 – 4800 DPI' },
      { label: 'Typ', value: 'Laser, Atramentová, 3D' }
    ]
  }
};

const quizQuestions = [
  {
    id: 1,
    question: 'Ktoré z nasledujúcich zariadení je vstupné?',
    options: ['Monitor', 'Klávesnica', 'Tlačiareň', 'Reproduktor'],
    correctIndex: 1,
    explanation: 'Klávesnica je vstupné zariadenie — vkladá dáta do počítača. Monitor, tlačiareň a reproduktor sú výstupné zariadenia.'
  },
  {
    id: 2,
    question: 'Čo je hardvér?',
    options: [
      'Programy a aplikácie v počítači',
      'Fyzické časti počítača, ktoré môžeš dotknúť',
      'Operačný systém',
      'Súbory a dokumenty'
    ],
    correctIndex: 1,
    explanation: 'Hardvér sú všetky fyzické časti počítača — procesor, pamäť, monitor, klávesnica atď. Softvér sú programy a dáta.'
  },
  {
    id: 3,
    question: 'Ako sa volá základný model architektúry počítača?',
    options: [
      'Turingov model',
      'Von Neumannova architektúra',
      'Einsteinov model',
      'Bohrov model'
    ],
    correctIndex: 1,
    explanation: 'Von Neumannova architektúra je základný model, v ktorom sú program aj dáta uložené v spoločnej pamäti. Tento model navrhol John von Neumann v roku 1945.'
  }
];

const comparisons = {
  hardwareVsSoftware: {
    title: 'Hardvér vs Softvér',
    items: [
      {
        label: 'Hardvér',
        color: 'blue',
        points: [
          'Fyzické časti počítača',
          'Môžeš ich vidieť a dotknúť sa',
          'Príklady: monitor, klávesnica, procesor',
          'Môže sa mechanicky pokaziť',
          'Bez neho softvér nefunguje'
        ]
      },
      {
        label: 'Softvér',
        color: 'purple',
        points: [
          'Programy a inštrukcie pre počítač',
          'Neviditeľný — existuje len ako dáta',
          'Príklady: Windows, Chrome, hry',
          'Môže mať chyby (bugy)',
          'Bez hardvéru nemôže bežať'
        ]
      }
    ],
    common: [
      'Obaja sú nevyhnutní pre chod počítača',
      'Pracujú spolu — softvér riadi hardvér',
      'Môžu byť aktualizovaní / vylepšení'
    ]
  },
  inputVsOutput: {
    title: 'Vstupné vs Výstupné zariadenia',
    items: [
      {
        label: 'Vstupné zariadenia',
        color: 'green',
        points: [
          'Prenášajú dáta od človeka k počítaču',
          'Prevádzajú akciu na digitálny signál',
          'Príklady: klávesnica, myš, mikrofón',
          'Zadávajú pokyny a informácie',
          'Smer: človek → počítač'
        ]
      },
      {
        label: 'Výstupné zariadenia',
        color: 'orange',
        points: [
          'Prenášajú dáta od počítača k človeku',
          'Prevádzajú digitálny signál na zrozumiteľnú formu',
          'Príklady: monitor, tlačiareň, reproduktor',
          'Zobrazujú výsledky spracovania',
          'Smer: počítač → človek'
        ]
      }
    ],
    common: [
      'Obidva typy pripájame k počítaču',
      'Sú prepojené cez procesor',
      'Niektoré zariadenia sú obojsmerné (touchscreen)'
    ]
  }
};

export { content, quizQuestions, comparisons };