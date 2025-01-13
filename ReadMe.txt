
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

4. Installera och konfigurera Tailwind CSS: 
    1. Installera Tailwind CSS och dess beroenden:
        npm install -D tailwindcss postcss autoprefixer
    2. Initiera Tailwind CSS-konfigurationsfiler:
        npx tailwindcss init -p

5. Starta projektet
    1. Kör följande kommando för att starta projektet: 
        "npm run dev"
    2. Öppna http://localhost:3000 i din webbläsare för att se projektet.


Viktig info: TripAdvisor API:erna fungerar endast på travelfusion.se då de har en begränsning på vilka domäner som får använda API:erna. För att testa API:erna behöver ni göra det på www.travelfusion.se.