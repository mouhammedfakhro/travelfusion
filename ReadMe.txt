
**Installation och Uppstart**
1. Öppna ett nytt projekt i Visual Studio Code
    1. Öppna Visual Studio Code.
    2. Öppna en terminal

2. Klona projektet från GIT
    1. Kör följande kommando i terminalen för att klona projektet:
        "git clone https://github.com/mouhammedfakhro/travelfusion.git"
    2. Gå in i projektmappen: 
        "cd travelfusion"

3. Initiera projektet
    1. Kör följande kommando för att installera nödvändiga Node.js-beroenden: 
        "npm install"
    2. Installera Next.js:
        "npm install next --save"

4. Starta projektet
    1. Kör följande kommando för att starta projektet: 
        "npm run dev"
    2. Öppna http://localhost:3000 i din webbläsare för att se projektet.


Viktig info: TripAdvisor API:erna fungerar endast på travelfusion.se då de har en begränsning på vilka domäner som får använda API:erna. För att testa API:erna behöver ni göra det på www.travelfusion.se.

.env:
TRIPADVISOR_API_KEY=CD678A669501410DA16D6EBE3DF571D5
OPENWEATHER_API_KEY=e2122c11dee270408b1b8a473b2d4e70
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyAbwVanV2LY5cdcSIDEvmLtTlcs5Ea1P4k
GOOGLE_EVENTS_API_KEY=23326564-8910-4b69-9e5b-a06b0c4da143