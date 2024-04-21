# Moment3

Projektet i Moment 3 är skapad i Angular.

## Länk till webbplats
https://genuine-unicorn-a105f6.netlify.app/

## Innehåll

Angular projektet skapades i en mapp, där varje webbsida är skapad som komponenter via kommandot: <em>ng generate component "Namn på komponent"</em>.

### Bindning

På startsidan är fotot kopplat med en property bindning där url:en är definerad i klassen HomeComponent. På så sätt kan fotot uppdateras och ändras dynamiskt.
<br>

Sidan Konvertering innehåller fyra input fält som är kopplade med Two-way Data Bindning <em>[(ngModel)]</em>. Det betyder att inputen är bundna till variabler som defineras i komponenten CalculateComponent. Dessutom har <em>(ngModelChange)</em> lagts till på inputen för att fånga när värden i input fälten ändras. På så sätt kan värden konverteras dynamiskt och visas direkt på input fälten bredvid. Följande källa har använts för metoden: <a href="https://ultimatecourses.com/blog/difference-change-ngmodelchange-angular" target="_blank"> Extern länk</a>

### Komponenter

Både Header och Footer är komponenter som används på alla webbplatsens sidor. Navigationslänkarna i headern använder RouterLink, detta för att hindra omladdning av sidor och tillåter att endast innehållet uppdateras dynamiskt.</p>
