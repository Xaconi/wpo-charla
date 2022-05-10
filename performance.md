## Xerrada performance - WPO - FrontEnd


- Seccions:
  - Introducció
  - Que es i importancia de la optimització en una aplicació web
    - Definició de performance
    - Per qué es important (UX + Googlebot)
    - Exemples de webs optimitzades VS webs no optimitzades
  - Métriques i conceptes a tenir en compte per la optimització
    - Google Core Web Vitals
    - Pes de la web i els seus assets
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
  - Exemple amb web real - comicfy.io
    - V1 - Métriques i temps de càrrega
    - V2 - Lazy loading de imatges/iframes
    - V3 - Preload d'assets com imatges i fonts
    - V4 - Generació de fitxers HTML estàtics
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


### Métriques i conceptes a tenir en compte per la optimització

Tot i saber la importància de la performance en una web...com podem saber si la nostra esta optimitzada? Quines eines es fan servir?

#### Google Core Web Vitals

Els Core Web Vitals, son les mètriques que ara mateix es tenen en compte per valorar la optimització d'una web. Aquestes mètriques, tot i que fa temps que estan definides, se'ls ha donat més importància degut a que estan incloses dins de la valoració de la performace que fa Googlebot de la nostre web. Aquestes mètriques son les següents:

* LCP - Largest Contentful Paint: es el temps des de que l'usuari entra la URL fins que es renderitza el darrer contingut a la pantalla. Un bon LCP sempre ha d'estar per sota 2.5s.
* FID - First Input Delay: es el temps que li porta a la web capturar un click, scroll o qualsevol interacció per part de l'usuari. Un bon FID sempre ha d'estar per sota els 100ms.
* CLS - Content Layout Shift: es la valoració que dona Google al canvi acumulatiu de la nostra web.. o lo que es el mateix, més alt serà, quants més "salts" de contingut doni la nostra web. Per exemple, si a la nostra web tenim una imatge sobre un bloc de text, i la càrrega d'aquesta imatge fa que aquest bloc de text "salti", això farà incrementar el CLS. Un bon CLS sempre estarà per sota de 0.1.

Altres mètriques a tenir en compte, que son igual d'importants però que no formen part dels Core Web Vitals, son les següents:

* FCP - First Contentful Paint: similar al LCP, però aquesta vegada valora el temps que passa des de que l'usuari entra la URL fins que es renderitza el primer contingut. Un bon FCP sempre ha d'estar per sota els 1.8s.
* TBT - Total Blocking Time: aquesta mètrica es més tècnica, i exposa el temps que passa el fil d'execució bloquejat. No hauria de ser gaire, i quant més TBT, més FID.
* TTI - Time To Interactive: també similar al LCP, i es el tempa que passa des de que l'usuari entra la URL fins que la web es interactiva.
* TTFB - Time to First Byte: es el temps que passa des de que l'usuari entra la URL fins que el servidor dona la primera resposta, o sigui, la primera resposta de codi HTML.
* SI - Speed Index: una altra mètrica tècnica, i medeix el temps que triga el contingut en veure's en pantalla des de que es comença a renderitzar.

Totes aquestes mètriques defineixen si una web esta optimitzada o no, o sigui, si la performance ha estat treballada. Gràcies a aquestes mètriques podrem tenir uan idea de l'estat de la performance a la nostra web, i un punt incial per establir accions de millora.

#### Pes de la web i els seus assets

Un altre concepte clau, i molt fàcil d'entendre, es el del pes de la web. Quan una web es carrega, els seus assets es van descarregant de manera seqüencial. Tot i que aqui poden entrar conceptes com caches estàtiques, de servidor, CDN, etc. de moment no ho tindrem en compte. Sempre hem de partir de la base de que un usuari nou entra a la web, i per defecte, s'haurà de descarregar tots els assets necessaris.

Aquests assets, més enllà del codi pur HTML, son els fitxers CSS amb els estils, els bundles de codi JavaScript necessaris per la lògica, fitxers de fonts, imatges i videos, i també les respostes que doni el BackEnd a les crides que fem des del FrontEnd demanant dades. Tots aquests assets comporten un pes, i quan més pesada sigui una web, més li costarà de descarregar a l'usuari. Per tant, menys percentatge de conversió, per tant, menys diners a la butxaca.

### Com saber si una aplicació web està optimitzada

#### Eines a fer servir

Una vegada tenim clara la importància de la performance i quines son les mètriques bàsiques per avaluar-la, el que queda per saber es com obtenir aquestes mètriques. Existeixen diferents serveis (la majora gratuits però hi ha algun de pagament), que ens donen aquesta informació detallada a més a més de consells sobre com millorar la performance:

* Pagespeed Insights / Lighthouse: la eina oficial de Google i l'algorisme que s'utilitza tant per Googlebot (l'indexador de Google) com per altres eines de Google més enfocades a l'administració web, com Google Search Console o Chrome User Experience Report. Es tracta d'una eina web que, tan sols posant la URL d'una web, ens dona una puntuació de la performance de la web, tant per ordinador com per Mobile. Els seus resultats ajuden a detectar problemes primaris i et dona recomanacions sobre com arreglar-los.
* GTMetrix: una altra eina gratuita, que també dona una puntuació de la performance de la web que entrem. Dona a més a més, screenshots dels diferents passos de la renderització, permet realitzar comparatives entre diferents dates d'anàlisi i ofereix les dades de descàrrega dels assets i quan ha trigat cadascú.
* Pingdom: una altra eina similar a les dues anteriors, amb les mateixes funcionalitats, afegint una molt important, la d'escollir la ubicació del servidor que farà el test.
* Webpagetest: la darrera eina realitza tasques similars, afegint la possibilitat d'obtenir la mitjana de tots els resultats (realitza tres tests per tot).

Com es pot veure, totes aquestes eines realitzen tasques similars, però tot i així, cal tenir-les en compte de cares a l'anàlisi de la performance d'una web, o bé per un informe on es vulgui valorar l'evolució de la performance durant un període de temps.

#### Chrome/Edge/Firefox Developer Tools

Una altra manera de mesurar la performance de la nostra web, es utilitzar les Developer Tools del navegador que fem servir. Tot i que recomano Google Chrome per realitzar aquestes tasques, altres navegadors com Edge o Firefox també serveixen. Safari per Mac... no...

En aquestes Developer Tools, a la pestanyeta de Network, podrem veure totes les requests que es fan, i els assets que es descarreguen, així com també el pes que tenen i qué triguen en descarregar-se. Es un indicatiu molt important, ja que ens deixa veure el pes dels diferents tipus d'assets, el format que tenen i qué triguen en descarregar-se.

A la pestanyeta de Performance, podrem fer proves de càrregues incials de la nostra web i comprovar qué triga en carregar-se. A més a més, surten algunes de les mètriques descrites anteriorment i podrem saber, sense fer cap deploy a producció, si les millores que anem implementant tenen algun efecte o no.

De totes maneres, per tenir una idea clara de l'estat de les mètriques sense fer cap deploy, lo seu es fer comprovacions a la pestanya Lighthouse, que ens permet fer un anàlisi amb aquesta mateixa eina, i tenir en compte els resultats amb les millores que hem implementat en local. També ens donarà recomanacions sobre millores i de quina manera podem millorar la puntuació.

#### Experiencia d'usuari

Finalment, la darrea eina per veure la performance a la web...som nosaltres mateixos. Moltes vegades, quant hi dediquem tantes hores a un projecte, sol passar que estem tant acostumats a la navegació que passem per alt la performance i l'experiència d'usuari. Es vital provar la web en diferents dispositius i qualitats de connexió, i valorar objectivament (tot i que costi) si no es pot realitzar alguna millora per tal que la experiència d'usuari sigui millor i més ràpida.

### Técniques, trucs i funcions per la millora de les mètriques

Tot això està molt be. Sabem que la performance es important, sabem quins avantatges ens porta i tenim clar quiness mètriques s'utilitzen per mesurar-la, i quines eines podem fer servir, nosaltres com desenvolupadors, per tal d'obtenir les mètriques, sigui en producció o en local. Per la pregunta del mil·lió es...com millorar la performance? Com fem que aquestes mètriques millorin? A continuació explicaré les tècniques més comunes, a quina etapa del desenvolupament s'apliquen i sobretot, quina mètrica milloren.

#### Compressió de fitxers

  * Qué es: Es tracta de comprimir tot asset que surti del servidor, des del HTML inicial, fins la darrera imatge, passant per fonts, videos, JS, CSS etc. La compressió més habitual d'avui dia es Gzip, tot i cada vegada té més força el Brotli, amb millors resultats.
  * On s'aplica: directament a la capa del servidor, en el nostre cas, IIS.
  * Qué millora: millora directament el FCP/LCP, TBT i SI.

--- Cal imatge de asset amb compressió gzip/brotli a developer tools ---

#### Lazy loading de imatges/iframes

  * Qué es: es tracta de deferir la descàrrega de imatges, videos o iframes, fins que l'usuari no els tingui directament en pantalla. Es a dir, si la imatge encara no es visible per l'usuari, que aquesta no es descarregui. Aquests assets poden ser de molts tipus, imatges, fonts, etc.
  * On s'aplica: al FrontEnd, a l'HTML a l'etiqueta `<link rel="preload">` dins de `<head>`.
  * Qué millora: millora directament el FCP/LCP i redueix el pes inicial de la web.

--- Cal tros de codi HTML amb img i loading ---

#### Preload d'assets crítics

  * Qué es: es tracta de ordenar de manera prioritària, una sèrie d'assets que estiguem 100% segurs que seran requerits amb la càrrega de la pàgina. Aquesta ordre els farà descarregar més ràpid i estaran disponibles abans.
  * On s'aplica: al FrontEnd, a l'HTML a l'etiqueta `<img>` o `<iframe>` amb el paràmetre `loading="async"`.
  * Qué millora: millora directament el FCP/LCP.

#### Critical CSS

  * Qué es: es tracta de generar de manera automàtica, el CSS crític per cada pàgina de la nostra aplicació. El CSS crític es aquell CSS mínim per tal que la pàgina es vegi correctament, treguent tot lo prescindible (com per exemple, els estils de `hover` d'un `button`). 
  * On s'aplica: El codi CSS es printarà inline dins de l'etiqueta `<head>` a l'HTML. Però la generació d'aquest codi s'ha de fer amb alguna Pipeline amb cada procés de deploy.
  * Qué millora: millora directament el FCP/LCP.

#### Dimesions de les img/iframes
  * Qué es: es tracta de posar les dimensions d'una imatge o iframe per tal que, mentres aquesta es carrega, ocupi el mateix espai que com si estiguès carregada. Així evitem salts estranys a la pàgina web.
  * On s'aplica: al FrontEnd, a l'HTML. Dins de cada etiqueta `<img>` o `<iframe>`, posar les dimensions amb `width="100px"` i `height="100px"`.
  * Qué millora: millora directament el CLS.

--- Cal animació de CLS VS NO CLS ---

#### Generació de fitxers HTML estàtics

  * Qué es: es tracta de pregenerar les pàgines HTML del nostra projecte de manera estàtica (tenint en compte aspectes variables com l'idioma) per tal que no calgui fer crides al BackEnd. Frameworks com NextJS (React) o Nuxt (Vue) l'implementen de sèrie i es realment util per millorar la velocitat.
  * On s'aplica: en el procés de Deploy.
  * Qué millora: millora directament el FCP/LCP/TTFB i SI.

#### CDNs

  * Qué es: una CDN es una sèrie de servidors repartits pel mon, i un servei al darrere que decideix quin d'aquests servidors et dona l'asset que tu estas buscant. En el cas d'una web, per una imatge per exemple, nosaltres demanem aquella imatge, i la CDN decideix quin servidor dels seus tenim més prop per tal que ens la faci arribar. Els serveis de CDN com Cloudflare o Sucuri, escanejen tots els assets i els pugen automàticament al seu núvol, per tal a producció, quan es demanin aquests assets, aquests siguin gestionats directament per la CDN.
  * On s'aplica: en el procés de Deploy.
  * Qué millora: millora directament el FCP/LCP i SI.

### Links d'utilitat

* [MDN - What is web performance?](https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance)
* [Web.dev - Core Web Vitals](https://web.dev/i18n/es/vitals/)
* [GitHub - Lighthouse Scoring Calculator](https://googlechrome.github.io/lighthouse/scorecalc/)

### Temes pendents

* Muntar comicfy.io amb diferents versions per veure l'evolució de la performance
* Fer GIF d'animació de la descàrrega d'assets amb la càrrega d'una web