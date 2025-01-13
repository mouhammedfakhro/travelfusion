
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

4. Konfigurera TripAdvisors API-åtkomst
Viktigt: TripAdvisors API tillåter endast åtkomst från specifika IP-adresser. 
Din publika IP-adress är inte privat och används enbart för att ge åtkomst till API:t. Det innebär ingen risk för säkerheten.
Följ dessa steg för att koppla din IP-adress:
    1. Besök whatsmyip.com för att få din publika IP-adress.
    2. Kopiera IP-adressen som visas.
    3. Gå till TripAdvisors utvecklarportal.
    4. Klicka på "Get Started" i det övre högra hörnet.
    5. Klicka på "Continue with Email".
    6. Klicka på "Sign in using your Tripadvisor account".
    7. Logga in med följande uppgifter:
        * E-postadress: m01316292@gmail.com
        * Lösenord: Password12345!
    8. Klicka på redigeringsikonen för "API KEY RESTRICTION".
    9. Ange din IP-adress följt av /32, exempel: "79.136.62.125/32"
    10 Klicka på Spara och vänta i 1–3 minuter för att ändringarna ska träda i kraft.

5. Starta projektet
    1. Kör följande kommando för att starta projektet: 
        "npm run dev"
    2. Öppna http://localhost:3000 i din webbläsare för att se projektet.
