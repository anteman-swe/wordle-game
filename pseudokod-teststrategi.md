# Algoritm A
## Pseudokod  
1. Skapa en array av samma längd som ordet med tomma platser för att senare lagra resultatet
2. Markera alla bokstäver som är korrekta först
3. Håll reda på vilka bokstäver i det hemliga ordet som har använts
4. Gå igenom det gissade ordet igen mot resterande bokstäver för att markera misplaced eller incorrect utifrån vad som finns kvar av det hemliga ordet.

## Teststrategi  
- **Identiska ord:** Kontrollera att alla bokstöver blir *correct*
- **Helt olika ord:** Kontrollera att alla bokstäver markeras som *incorrect*
- **Dubletter:** Om gissningen har två av samma bokstav men det hemliga ordet bara har en, kontrollera att bara en markeras på korrekt sätt  (*correct* eller *misplaced*) och att den andra bokstaven markeras som *incorrect*
- **Skiftläge:** Se till att versaler och gemener behandlas på samma sätt med lika resultat oavsett vilket  

# Algoritm B  
## Pseudokod
1. Skapa en tom lista för ord som uppfyller villkoren för vilka ord som kan väljas från en lista utifrån längd på ord och om dubletter av bokstäver tillåts.
2. Gå igenom den lagrade ordlistan och kontrollera om ordlängden är den valda  
    2.1 Om ordlängden är korrekt, kontrollera om dubletter av bokstäverna finns  
    .. 2.1.1 Om dubletter finns och inte tillåts, hoppa över ordet, gå vidare till nästa ord  
    2.2 Om ordlängden inte är korrekt, hoppa över ordet gå vidare till nästa ord  
    2.3 Annars lägg ordet i listan för ord som kan väljas  
3. Om listan med valbara ord är tom, returnera ett felmeddelande  
4. Slumpa fram vilket ord som ska returneras genom att slumpa fram ett index mellan noll och valbara ord listans längd
5. Returnera ordet  

## Teststrategi
 - **Ordlängd:** Kontrollera att man aldrig får längre eller kortare ord än vad som har begärts
 - **Dubletter:** Om man inte tillåter dublett-bokstäver ska man aldrig få ord med dubletter i retur. t ex PALT är ok, RATT är inte ok
 - **Tomt resultat:** Om man begär ett ord med t ex 10 bokstäver från en lista som bara har kortare ord ska man få fel eller null
 - **Slumpmässighet:** Svårt att testa men testa att man alltid får något ur listan när villkoren är uppfyllda i övrigt t ex genom att köra flera tester i rad med samma villkor