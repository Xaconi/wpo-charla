## Xerrada performance - WPO - FrontEnd

Introducció:

- Seccions:
  - Que es i importancia de la optimització en una aplicació web
    - Definició de performance
    - Per qué es important (UX + Googlebot)
    - Exemples de webs optimitzades VS webs no optimitzades
  - Métriques i conceptes a tenir en compte per la optimització
    - Google Core Web Vitals
    - Pes de la web i els seus assets
    - FOIT i FOUT
  - Com saber si una aplicació web està optimitzada
    - Eines a fer servir (Pagespeed Insights, Lighthouse, GTMetrix, etc.)
    - Chrome/Edge/Firefox Developer Tools
    - Experiencia d'usuari
  - Técniques, trucs i funcions per la millora de les mètriques
    - Compressió de fitxers
    - Lazy loading de imatges/iframes
    - Preload d'assets crítics
    - Critical CSS
    - Generació de fitxers HTML estàtics
    - CDNs
  - Tracking de les mètriques
    - Eines com DebugBear, SEMRush o Google Analytics
    - Lighthouse CI
  - Final thoughts

- Objectius:
  - Tenir clar que es la performance al desenvolupament web i per què es important
  - Com mesurar la performance en una WebApp (framework agnostic)
  - Com millorar la performance en una WebApp (framework agnostic)


### Introducció - parlar de la performance en termes generals i resum dels punts

Sembla una evidència dir-ho, però avui en dia es molt important el fet que una web "vagi ràpida". Sé que es una frase molt "de carrer" però es veritat, els usuaris saben quan una web "va ràpida" o no. I cregueu-me que hi han poques coses que em facin més ràbia que escoltar "aquesta web va lenta". Dins d'aquesta frase poden trobar-se mil i un punts de millora, i molts estarien relacionats amb la **performance** de la web. En allò que la web carregui més ràpid i doni una sensació de velocitat i fiabilitat a l'usuari. Quan millor i més ràpid vagi una web, més ràpid podrà l'usuari executar les seves accions per tant, més percentatge de conversió, per tant, més diners a la butxaca. I no només això, sino que quan més ràpid vagi una web, millor posició a Google, per tant més usuaris a la nostra web, per tant més conversions, per tant, més diners a la butxaca. Al final, el tractament i millora de la performance, sempre tindrà un impacte directe a les conversions de la nostra web, i si això genera ingressos, l'impacte directe es traduirà es més diners.

En aquesta xerrada parlaré sobre la definició més bàsica de la performance, per què es tant important, quines mètriques la composen, com mesurar-la i tenir-la en compte dins d'un projecte, i quines tècniques existeixen per millorar-la.

### Que es la performance i importancia de la optimització en una aplicació web

#### Definició de performance

La performance al desenvolupament web, es la mesura objectiva de la experiència que té l'usuari a la nostra web. Això vol dir, de la sensació que té l'usuari quan interactua a la nostra web, des del moment en que entra la URL, fins a la darrera acció que realitza, sigui clicar un link, un botó, etc. Aquesta mesura, es pot dividir en vàries àrees:

* Temps de càrrega: el temps que triga la web en donar una primera resposta. O lo que es el mateix, el temps que passa des de que l'usuari entra la URL fins que el servidor torna la primera resposta.
* Temps de renderitzat: el temps que triga la web fins renderitzar el primer contingut per pantalla, que es allò que l'usuari té com referència per adonar-se que la web comença a carregar.
* Qualitat de renderitzat: les diferents fases per les quals va passant el renderitzat mentres es carrega, i la sensació que dona a l'usuari.
* Temps de finalització: el temps que triga la web en acabar de renderitzar tot el contingut, acabant així amb la càrrega i donant la sensació a l'usuari que ja pot começar a interactuar amb la web.

Tots aquests conceptes, que detallarem més endavant, son conceptes que tot i que l'usuari final no en té ni idea, si que ajuden a canviar la seva opinió sobre la performance d'una web. Amb la millora d'aquests conceptes, podem canviar aquella frase de "la web va lenta", a "aquesta web vola".

### Per qué es important (UX + Googlebot)

La performance es vital per un projecte, per diversos motius. El motiu principal es i sempre ha de ser (i això es molt important) l'usuari. Que l'usuari tingui la nostra web carregada el més aviat possible, esperant-se el mínim de temps necessari, per tal que pugui començar a navegar i (amb sort) convertir dins la nostra plataforma. Aquest usuari, recordem, potser te un portàtil amb un Intel i9 i 64GB de RAM, amb connexió de 1Gbps... o potser esta sota d'un pont amb un mòvil de fa 10 anys i amb 3G. El dispositiu que facin servir es vital i la performance de la web ajuda a que el seu contingut arribi el més ràpid possible a l'usuari, independentment del dispositiu que utilitzi o de la connexió que tingui. I torno al mateix, quan més ràpid arribi el contingut a l'usuari, més ràpid podrà interactuar amb la web, per tant més conversió, per tant, més diners a la butxaca.

Per altra banda, la performance a la web es tan important avui dia perque l'indexador de Google (Googlebot) la te en compte per posicionar les webs al seu ranking. Imaginem que el Googlebot arriba a la nostra web per indexar-la, i segons la importància de la nostra web, li assigna un crawling budget (el temps el qual pot estar indexant la nostra web) de 1 minut. Durant aquest minut, Googlebot anirà indexant tota la nostra web, entrant a tots els links possibles i crawlejant contingut. Òbviament, Google tindrà temps d'indexar més pàgines si la web en qüestió es troba optimitzada i amb una performance óptima, degut a que la càrrega de cada pàgina serà més ràpida i li donarà temps d'indexar moltes més pàgines. A més a més, l'algoritme de Google li dona cada vegada més importància a la performance d'una web, arribant al punt en que dos webs exactament iguals, una amb la performance treballada i l'altre sense, tinguin posicions diferents dintre l'index de Google. Es clar, la web optimitzada tindrà millor posició. 

Disclaimer: Això no vol dir que, una web amb una bona performance tingui tot fet de cares a Google, ni molt menys, però es un aspecte important a tenir en compte.

#### Exemples de webs optimitzades VS webs no optimitzades

* Cas millor
    * Web Joan León https://joanleon.dev/ (602ms de càrrega - 1.1MB)
    * Alba Silvente https://www.dawntraoz.com/ (648ms de càrrega - 1.6MB)
* Cas bo =>
    * React Docs https://es.reactjs.org/ (1.28s - 2.6MB)
* Cas regulero
    * Renfe https://www.renfe.com/es/es (1.24s - 6.1MB)
* Cas horrible
    * Platzi https://platzi.com/ (3.14s - 18.1MB)
    * Medium - @DayoScript https://medium.com/@DayoScript/marte-the-martian-ebb0cd0b5b91 (4.05s de càrrega - 4.9MB)

### Links d'utilitat

[MDN - What is web performance?](https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance)