//Code for the slideshow on the Homepage
var slideindex = 0;
var Timer;
var Autoslide = true;

//Moving to the next slide
function NextSlide(n){
	Slideshow(slideindex += n);
	//clearTimeout(Timer);
}

//The main body for the slideshow
function Slideshow(n){
	var i;
	var x = document.getElementsByClassName("Slide");
	//counts how many slides there are
	if(n > x.length){slideindex = 1}
	if (n < 1) {slideindex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideindex-1].style.display = "block";
	AutoslideTimer();
}

function AutoslideTimer(){
	Timer = setTimeout(function Next(){
		if (Autoslide){
			NextSlide(1);
		}
	}, 3000) // 3 sec
}

// Voorlichting functies
function Voorlichting(){
	Elementinfo();
	Woordfilter();
	Dropdown();
}
//dit is om de copy paste en aanpassen te voorkomen
	function Elementinfo(){
		//Voor iederer item in de aandoening array
		for (var i = 0; i < aandoening.length; i++) {
		    var divElement, LiElement, paraElement, Name, text;
		    divElement = document.createElement("div");
		    LiElement = document.createElement("li");
		    paraElement = document.createElement("p");

		    Name = document.createTextNode(aandoening[i]);
		    text = document.createTextNode(aandoeninginfo[i]);

		    LiElement.setAttribute("class","naam");
		    LiElement.setAttribute("id",i);
		    LiElement.appendChild(Name);

		    paraElement.setAttribute("class", "aandoeninginfo");
		    paraElement.appendChild(text);

		    divElement.setAttribute("class","aandoening");
		    divElement.appendChild(LiElement);
		    divElement.appendChild(paraElement);

		    document.getElementById("Info").appendChild(divElement);
		}
	}

	//dit is voor de searchbar om de zoek resultaten te verminderen
	function Woordfilter(){
		var input, filter, word, textvalue;
        input = document.getElementById("Myinput");
        word = document.getElementsByClassName("aandoening");
        filter = input.value.toUpperCase();

        for (var i = 0; i < word.length; i++) {
        	a = word[i].getElementsByTagName("li")[0];
   		    textvalue = a.textContent || a.innerText;
   		    if (textvalue.toUpperCase().indexOf(filter) > -1) {
   			    word[i].style.display = "";
   		    }else{
   		    	word[i].style.display = "none";
   		    }
   		}
	}

	//dit is voor de dropdown
	function Dropdown(){
		var i, d;
		var x = document.getElementsByClassName("naam");
		for (i = 0; i < x.length; i++) {
			x[i].addEventListener("click",function(){
				d = this.id;
				var y = document.getElementsByClassName("aandoeninginfo");
				if(y[d].style.display === "block"){
					y[d].style.display = "none";
				}else{
					y[d].style.display = "block";
				}
			});
		}

	}
//Dit is een js database. Niet aankomen aub.
//68
var aandoening = ['Aambeien','Aften','Anticonceptiepil','Artrose','Bijholteontsteking','Bloedneus','Brandwonden','Buikgriep','Cholestrol','Condooms','Coeliakie',
'Diarree','Drogen ogen','Duizeligheid','Dikke benen','Etalagebenen','Eczeem','Epilepsie','Eetstoornis','Fenomeen van Raymaud','Fijt','Galstenen','Griep','Golfarm',
'Haartong','Hooikoorts','Hoofdpijn','Hoge bloeddruk','Insectenbeet','Jeuk','Koorts','Kinkhoest','Keelpijn','Knieproblemen',
'Lage bloeddruke','Likdoorn','Luieruitslag','Liesschimmel','Moeheid','Migraine','Malletvinger','Morning-afterpil','Nekpijn','Netelroos','Nagelriemontsteking',
'Oorpijn','Overgang','Overgeven','Paniekaanvallen','Plasklachten','Pijn onderin de rug','Q-koorts','Reisziekte','Roos','Slaapproblemen','Schouderklachten','Spierpijn',
'Tekenbeet','Tennisarm','Urineverlies bij vrouwen','Verkouden','VitamineB12','Voetschimmel','Waterwratjes','Wratten','Zwemmersjeuk','Zonneallergie','Zweten'];

var aandoeninginfo = ['Een aambei is een uitstulping aan de binnenkant van de anus. Een aambei kan soms bloedverlies bij de ontlasting geven. Aambeien ontstaan door hoge druk rond de anus, bijvoorbeeld door persen.','Aften zijn grijswitte plekjes in de mond. Ze doen vaak pijn. Ze verdwijnen vanzelf binnen 14 dagen.',
'De pil voorkomt zwangerschap. De pil beschermt niet tegen soa. Rookt u en bent u 35 jaar of ouder? Dan kunt u beter niet kiezen voor de pil.','Bij artrose verandert het kraakbeen van uw handgewrichten. De klachten zijn stijfheid en pijn in uw pols, vinger of duim. Het is belangrijk om te blijven bewegen, maar overbelasting te voorkomen.',
'De bijholten zitten links en rechts van uw neus in het bot van uw bovenkaak en voorhoofd. U heeft een bijholteontsteking wanneer u bij verkoudheidsklachten (lopende, snotterige of verstopte neus) extra klachten heeft, zoals pijn/druk voelt in uw gezicht of minder ruiken.',
'Bij een bloedneus komt er bloed uit één of beide neusgaten. Ga rustig zitten en snuit de neus. Houd het hoofd licht voorover. Knijp de neus 10 minuten dicht, vlak onder het neusbeen.', 'Koel bij verbranding direct 10 tot 20 minuten met lauw zacht stromend kraanwater. Trek ook zo snel mogelijk kleren en sieraden uit. Laat kleding die aan de wond plakt, zitten. Smeer niets op de brandwond. Dek de wond tijdelijk af met plastic huishoudfolie. Bel na koeling de huisarts: bij een blaar in gezicht, op handen, voeten of geslachtsdelen. als de brandwond groter is dan de helft van de hand van degene die zich heeft verbrand. als de verbrande plek geelwit, bruin of zwart is en juist geen pijn doet Heeft een baby of kleuter een brandwond? Bel na koeling altijd de huisarts. ',
'Buikgriep wordt meestal veroorzaakt door een virus, soms door een bacterie. Vaak heeft u diarree, misselijkheid, last van overgeven en buikpijn. Soms ook koorts. Buikgriep is erg besmettelijk. Was uw handen goed na toiletgebruik en voor het eten. Buikgriep gaat meestal vanzelf over. Binnen een week zijn de klachten vaak weg. Drink vaak kleine beetjes om uitdroging te voorkomen.',
'Cholesterol is een belangrijke stof voor het lichaam. Uw lichaam maakt zelf cholesterol aan en neemt het op uit voeding. Een verhoogd cholesterol is geen ziekte en geeft op zich geen klachten. Maar een overschot aan cholesterol kan de bloedvaten nauwer maken.',
'Een condoom is een rubber hoesje dat om de penis past. Het beschermt tegen zwangerschap en tegen soa. Een condoom kun je één keer gebruiken.', 'Coeliakie is een overgevoeligheid voor het eiwit gluten. Gluten zit in verschillende graansoorten, en dus bijvoorbeeld in brood en pasta. Coeliakie geeft vooral darmklachten, zoals buikpijn en diarree. De enige behandeling is eten zonder gluten.',
'Diarree is dunne waterige ontlasting die veel vaker komt dan u gewend bent. Drink extra veel om uitdroging te voorkomen. Drink bijvoorbeeld elke keer na waterige ontlasting een glas water, thee of bouillon. Diarree gaat meestal binnen een week vanzelf over. ',
'Bij droge ogen heeft u bijvoorbeeld een branderig, moe, zanderig, jeukend of geïrriteerd gevoel in uw ogen.Uw ogen kunnen rood zijn en veel tranen, u kunt wazig zien en dichtgeplakte oogleden hebben. Droge ogen door lezen en kijken naar een beeldscherm? Probeer dan regelmatig te knipperen. Droge lucht in huis? Hang een bak water aan de verwarming. Vermijd tocht, ruimtes met rook en ruimtes met airconditioning als u daar klachten van krijgt.',
'De belangrijkste vormen van duizeligheid zijn: een gevoel alsof alles om u heen draait, een licht gevoel in uw hoofd, een onvast gevoel in uw benen. Probeer door te gaan met uw normale bezigheden, voor zover dat kan. Bel wel direct de huisarts als u plotseling duizelig wordt samen met andere klachten, zoals dubbelzien, moeilijk slikken of praten, geen kracht in een arm of been. ',
'Slecht werkende aderen kunnen leiden tot vocht in uw benen. In het begin zijn alleen uw enkels dik, vooral s avonds. Later kunnen uw benen de hele dag dik blijven, vooral de enkels en onderbenen. Er zijn geen medicijnen die de werking van de aderen verbeteren.',
'Etalagebenen is een vaatziekte. De slagaderen in uw been zijn vernauwd. Deze ziekte veroorzaakt pijn, kramp of een doof/moe gevoel in uw been.Als u loopt, krijgt u de klachten. Als u stilstaat, verdwijnen ze binnen 10 minuten.U krijgt ook medicijnen om uw cholesterol te verlagen en u krijgt bloedverdunners.',
'Eczeem is een jeukende huiduitslag met roodheid, zwelling, schilfers, bultjes, kloofjes of korstjes. Douch of baad niet te vaak, niet te warm en niet te lang (hooguit 5 minuten). Gebruik geen of zo min mogelijk zeep, shampoo of badschuim. Eczeem is niet vies of besmettelijk. Elkaar aanraken kan geen kwaad.',
'Eén aanval is (nog) geen epilepsie. Als u hoort dat u epilepsie heeft, dan schrikt u waarschijnlijk. Merkt u dat iets een aanval kan uitlokken? Bijvoorbeeld overmatig alcohol of weinig slaap? Probeer die situatie dan te vermijden. Zorg dat u fit bent en vermijd stressvolle situaties. Medicijnen kunnen de aanvallen onderdrukken. ', 'Beginnende eetproblemen kunnen een eetstoornis worden: Bij anorexia voel je je dik, terwijl je juist te weinig weegt,Bij boulimia en eetbuistoornis heb je heftige eetbuien,Bij de eetstoornis ARFID wil of durf je bepaald voedsel niet te eten en/of eet je te weinig. Er zijn goede behandelingen om te herstellen van een eetstoornis. ',
'Bij het fenomeen van Raynaud krijgt u aanvallen van koude, gevoelloze vingers of tenen. Ze zijn eerst wit, dan paars en rood. Ze gaan tintelen en gloeien. De aanvallen komen door tijdelijk minder bloed in vingers of tenen. De oorzaak is meestal kou, soms heftige emotie.','Fijt is een diepe huidontsteking aan de onderkant van de vinger. De ontsteking ontstaat vaak na een (prik)wond. Er ontstaat een rode zwelling met pijn en soms met pus.Neem direct contact op met uw huisarts, als u denkt dat u fijt heeft. U moet snel behandeld worden. Soms zijn alleen antibiotica nodig, vaak een operatie.',
'De gal is een vloeistof in de galblaas die nodig is om vetten af te breken en te verbranden. De gal kan indikken, waardoor hardere stukken ontstaan en dit kunnen galstenen worden. Veel mensen hebben galstenen, zonder daar ooit klachten van te hebben. Een galsteenkoliek geeft heftige pijn in de bovenbuik waarbij u niet stil kunt blijven zitten. Pijnstillers kunnen helpen bij een pijnaanval. Het klem zitten van een galsteen kan soms een reden zijn voor een galblaasoperatie of een ERCP.',
'Bij griep heeft u hoge koorts, hoofdpijn en spierpijn in uw hele lichaam. Neem genoeg rust. Drink 1,5 tot 2 liter per dag (water, thee). U kunt paracetamol nemen. Na 3 tot 5 dagen is griep meestal over. ','De plek waar de onderarmspieren vastzitten aan de binnenste elleboogknobbel is geïrriteerd. Het doet pijn als u uw hand dichtknijpt, uw pols naar voren buigt en uw onderarm naar binnen draait. Waarschijnlijk ontstaat het door overbelasting. Het gaat vanzelf over, al kan het maanden duren. Er is niets bekend dat de genezing kan versnellen.',
'Een haartong is een tong waarop een soort ‘begroeiïng’ zit. Dat laagje is bruinzwart of wit. Het ontstaat door een verstoring van het evenwicht tussen afslijten en aanmaken van nieuwe cellen van de tong. Iemand lijkt meer kans op een haartong te hebben bij roken, veel koffie of thee drinken en weinig tandenpoetsen. Een haartong is een onschuldige aandoening.',
'Hooikoorts is een allergie voor stuifmeel van grassen, planten of bomen. De klachten zijn: Uw neus kan jeuken, waardoor u veel niest, U heeft een verstopte neus of een ‘loopneus’,Uw ogen jeuken, tranen of voelen branderig aan,Uw keel kan droog en branderig zijn, waarbij u moet hoesten. Hooikoorts is vervelend, maar het kan geen kwaad. Tegen de klachten kunt u een neusspray of tabletten met antihistaminica gebruiken.',
'Hoofdpijn komt veel voor. Meestal is er geen ernstige oorzaak. Veelvoorkomende soorten hoofdpijn zijn: spanningshoofdpijn, migraine, hoofdpijn door pijnstillers.','De bloeddruk ontstaat doordat het hart bloed in de bloedvaten pompt. Een hoge bloeddruk hoeft geen probleem te zijn. Een te hoge bloeddruk is een risicofactor voor hart- en vaatziekten. Stoppen met roken, veel lichaamsbeweging, gezond eten en zorgen voor weinig stress zijn dan belangrijke leefregels. Medicijnen om de bloeddruk te verlagen zijn niet altijd nodig. Bij een ernstig verhoogde bloeddruk zijn wel altijd bloeddrukverlagende medicijnen nodig.',
'Insectenbeten kunnen jeuk, pijn en zwelling geven. Een koude, natte doek geeft verlichting. Neem direct contact op met uw huisarts bij: een steek in de mond, tong of keel,overgevoeligheid voor insectenbeten,acute benauwdheid,uitslag op andere plaatsen dan waar u gestoken bent.','Jeuk kan allerlei oorzaken hebben, zoals een droge huid, een allergie, galbulten, eczeem of schurft.  Hoe moeilijk het ook is: probeer niet te krabben. Probeer uitdrogen van de huid te voorkomen: niet te vaak, lang en heet douchen/in bad gaan, gebruik geen of weinig zeep, smeer de huid in met een neutrale zalf of creme.',
'Koorts wil zeggen dat de lichaamstemperatuur boven de 38 graden komt. Meet uw temperatuur via de anus (poepgat). Dit is het meest betrouwbaar. Koorts kan meestal geen kwaad en is geen reden tot ongerustheid. Zorg ervoor dat u genoeg drinkt en rust.','Kinkhoest is een ziekte van de keel, neus en luchtwegen. Kinkhoest wordt veroorzaakt door een bacterie. De bacterie wordt overdragen door niezen of hoesten. Klachten zijn verkoudheid, niezen, lichte koorts en (hevige) prikkelhoest. Kinkhoest gaat vanzelf over, na 2 tot 4 maanden. Een kind met kinkhoest dat zich verder goed voelt, kan gewoon naar school of het kinderdagverblijf.',
'Keelpijn gaat meestal vanzelf over binnen 10 dagen. Een verkoudheidsvirus is vaak de oorzaak. Regelmatig iets drinken, zoals koud water, kan de pijn verzachten. Ook op iets zuigen (dropje/zuurtje) kan de pijn verzachten.','Knieproblemen bij kinderen en jongvolwassenen ontstaan vaak door tijdelijke overbelasting. Probeer de sport of activiteit die pijn doet tijdelijk minder te doen. Zodra het beter gaat, kun je de activiteit geleidelijk weer opbouwen. Ouderen hebben vaak pijn bij belasten van de knie en stijfheid bij in beweging komen (artrose).',
'U kunt een lage bloeddruk hebben, zonder dat u het merkt. De klachten die kunnen passen bij een lage bloeddruk zijn: duizeligheid, vermoeidheid en flauwvallen. Een lage bloeddruk kan verschillende oorzaken hebben, zoals bloedverlies, vochtverlies of gebruik van bepaalde medicijnen. Vaak is er geen oorzaak en gaat het om het leren omgaan met de klachten.','Een likdoorn is een eeltknobbel op de voet.Likdoorns ontstaan door verhoogde druk, zoals bij knellende schoenen. Ze kunnen zeer pijnlijk zijn, maar kunnen geen kwaad. Draag schoenen die niet knellen.',
'Luieruitslag zit op de huid die bedekt is door de luier. De huid wordt geïrriteerd, rood, schraal en gaat kapot. Het komt door irriterende stoffen in de ontlasting en urine, wrijven en schuren van de luier.  Geef vaak een schone luier en smeer de huid in met zinkzalf of zinkolie.','Bij liesschimmel zitten er in de liezen rode plekken met schilfertjes langs de randen. Was uw huid het liefst zonder zeep. Droog de huid goed af met een handdoek. Liesschimmel behandelt u met antischimmelcrème. Meestal is de huid binnen twee tot vier weken genezen.','Tegen moeheid helpen goede slaapgewoontes, zoals: Drink s avonds geen koffie (cafeïne) of alcohol. Doe een uur voor het slapengaan tv, smartphone en tablet uit. Goed voor uzelf zorgen helpt ook: Eet gezond. Kies vooral volkorenproducten, peulvruchten, groenten, fruit, noten en vis, Beweeg elke dag genoeg, Probeer problemen actief op te lossen.',
'Migraine is een aanval van erge hoofdpijn. Een aanval kan een halve dag tot drie dagen duren. De pijn is bonzend, meestal aan één kant van het hoofd. Vaak is er ook sprake van misselijkheid en overgeven. Kort voor de aanval zijn soms schitteringen, flitsen of golvende beelden zien. Migraine wordt behandeld met medicijnen.','Bij een malletvinger (of hamervinger) kunt u het kootje aan de top van uw vinger niet strekken. De pees is afgescheurd. Soms is er ook een stukje bot afgebroken. Ga hiermee naar uw huisarts. U krijgt 6 tot 8 weken een spalk om uw vinger.',
'Onbeschermde seks geeft kans op een soa en op een zwangerschap. De morning-afterpil  kan zwangerschap voorkomen. Deze koopt u bij de apotheek en drogist, zonder recept van de huisarts. Slik de morning-afterpil het liefst binnen 12 uur na de seks, in ieder geval binnen 3 dagen. Hoe eerder u de morning-afterpil slikt, hoe kleiner de kans om toch zwanger te worden.','Nekpijn kan samengaan met stijfheid en minder goed kunnen bewegen van de nek. Nekpijn kan komen door overbelasting of een verkeerde beweging. Meestal is er geen duidelijke oorzaak. Blijf (voorzichtig) bewegen ook al heeft u pijn. Zo voorkomt u dat uw nek stijf wordt. Nekpijn gaat vaak vanzelf over. Bel de praktijk bij koorts of sufheid met een stijve nek (de kin kan de borst niet aanraken).',
'Netelroos is een jeukende huiduitslag met bleekroze licht gezwollen vlekken (galbulten). Meestal komt het door een overgevoeligheidsreactie. De uitslag verdwijnt vanzelf binnen uren tot dagen. Leefregels en medicijnen kunnen de jeuk verminderen. Bloedonderzoek naar allergische prikkels heeft meestal geen zin. Bel direct de huisart als de uitslag verergert, uw lippen en oogleden opzwellen of als u ook benauwd wordt.',
'Bij een ontsteking van de nagelriem is de huid rond de nagel rood, dik en pijnlijk. Er kan pus uit komen. Laat de ontsteking met rust: niet aan zitten en niet tegenaan stoten. Soms moet de huisarts een sneetje in de ontstoken nagelriem maken. De pus kan er dan uit. Soms zijn tabletten antibiotica nodig. Was uw handen regelmatig met water en zeep.','Bij volwassenen komt oorpijn vooral door een ontsteking van de gehoorgang: Oordruppels helpen dan. Bij kinderen komt oorpijn meestal door een ontsteking van het middenoor: Dit geneest meestal vanzelf. De ergste klachten zijn binnen 2 tot 3 dagen over. Tegen de pijn helpt paracetamol.',
'De overgang is een natuurlijke fase in het leven van een vrouw. De menstruaties worden onregelmatig en blijven uiteindelijk helemaal weg. U kunt opvliegers en zweetaanvallen krijgen. Uw vagina wordt droger. Vrijen kan daardoor onaangenaam zijn. De overgang begint meestal tussen uw 45e en 55e jaar. Gezond eten, genoeg bewegen en voldoende nachtrust helpen u om in deze periode fit te blijven. Zo nodig kunt u tijdelijk medicijnen gebruiken om de klachten te verminderen, zoals de pil of hormoontabletten.',
'Overgeven komt meestal door buikgriep (door een virus of bacterie). Blijf genoeg drinken: vaak en kleine beetjes per keer. Is het overgeven na een dag niet minder, overleg dan met uw huisarts.','Spanning en angst kunnen lichamelijke klachten veroorzaken. Bijvoorbeeld hartkloppingen, een snelle ademhaling, duizeligheid of wazig zien. Als de angst u gaat overheersen, dan heeft u een paniekaanval. Een paniekaanval kan een paar minuten tot anderhalf uur duren. Bent u bang voor situaties waarin u een paniekaanval kunt krijgen? U kunt uw angst verminderen: Schrijf op wat er precies gebeurt op angstige momenten, Blijf de dingen doen die u eng vindt, Beweeg veel, slaap genoeg en probeer veel te ontspannen. Door gesprekken (praktijkondersteuner GGZ, psycholoog) en bijvoorbeeld een online cursus kan de angst verminderen.',
'Plasklachten bij mannen: Veel mannen krijgen op oudere leeftijd problemen met plassen, zoals vaker plassen, een zwakkere straal en nadruppelen. Meestal wordt de prostaat groter op oudere leeftijd. Deze verandering is goedaardig en heeft niets met kanker te maken. De behandeling kan bestaan uit medicatie, een operatie of afwachten. Plasklachten bij vrouwen: Voorbeelden zijn pijn bij plassen, vaak plassen, s nachts plassen en urineverlies. Veel voorkomende oorzaken zijn een blaasontsteking, een overactieve blaas, of slappe bekkenbodemspieren.',
'Pijn onderin de rug kan opeens beginnen of langzamer. Het belangrijkste is om in beweging te blijven. Voorkom dat u lang in dezelfde houding zit. Ga vooral gewoon door met uw dagelijkse activiteiten (huishouden, werk, hobby). Het kan prettig zijn om oefeningen te doen. Probeer stress te verminderen. De klachten worden meestal binnen een maand minder.','Q-koorts lijkt op griep (koorts, hoofdpijn, hoest, spierpijn). De ziekte wordt overgedragen door dieren, voornamelijk geiten. De meeste mensen herstellen binnen een tot twee weken van Q-koorts. Ruim de helft van de mensen die met de Q-koortsbacterie besmet zijn, wordt niet ziek en krijgt geen klachten. Indien nodig wordt u behandeld met antibiotica. Ongeveer een kwart van de mensen heeft na een jaar nog last van vermoeidheid, spierklachten, gewrichtsklachten en concentratieproblemen. Een klein aantal mensen krijgt hart- of vaatproblemen van de Q-koorts.',
'Met reisziekte bedoelen we wagenziekte, zeeziekte en luchtziekte. U kunt last hebben van gapen, misselijkheid, overgeven, duizelig zijn, zweten en hoofdpijn. Eet een kleine maaltijd en drink geen alcohol voordat u op reis gaat. Kijk naar een vast punt in de verte tijdens de reis. Doe een dutje. Zorg voor frisse lucht. Wat u beter niet kunt doen tijdens de reis is lezen, schrijven, gamen of op een beeldscherm kijken. Zodra de reis voorbij is, wordt de reisziekte minder.',
'Bij roos zitten er veel huidschilfers op de behaarde hoofdhuid en in het haar. De cellen van de hoofdhuid vernieuwen zich twee keer zo snel als normaal. Roos kan geen kwaad en is niet besmettelijk. Een antiroosshampoo helpt vaak.','Probeer na te gaan wat de oorzaak is van uw slapeloosheid. Een slaapdagboek bijhouden kan hierbij helpen. Probeer zorgen en problemen met iemand te bespreken. Probeer welke slaapadviezen bij u helpen: Ga sporten en bewegen, overdag of vroeg in de avond, Neem s avonds geen koffie, andere drank met cafeïne en nicotine, Stop een uur voor het slapengaan met kijken naar tv, computer en smartphone,Zorg een uur voor het slapengaan voor ontspanning (korte wandeling, warm bad, ontspanningsoefeningen, muziek),Sta steeds rond dezelfde tijd op. Ga ook rond een vaste tijd naar bed.',
'Bij schouderklachten heeft u pijn rond het schoudergewricht. Lang dezelfde bewegingen maken is vaak de oorzaak. Het is belangrijk dat u uw schouder blijft gebruiken, ook al heeft u pijn. Pijnstillers kunnen de pijn verminderen. Oefentherapie (Cesar of Mensendieck), manuele therapie, fysiotherapie, of een injectie in de schouder kunnen helpen als u klachten blijft houden.','Spierpijn is een gevolg van overbelasting van uw spieren. Er ontstaat een ophoping van afvalstoffen, met name melkzuur. Meestal verdwijnt spierpijn vanzelf binnen enkele dagen.',
'In de natuur geweest? Controleer uzelf en uw kinderen op teken, vooral de oksels, liezen, knieholtes, bilspleet, nek en achter de oren. Verwijder teken zo snel mogelijk met een puntig pincet (of tekentang); maak het wondje daarna schoon met alcohol. Neem contact op met de huisarts in deze gevallen: als het niet lukt de teek te verwijderen, als de teek misschien langer dan 24 uur in uw huid heeft gezeten, als na enkele dagen tot weken een verkleuring of rode vlek rond de tekenbeet ontstaat, als u op een andere plek van uw lichaam een verkleuring of rode vlek ontdekt, als u na dagen tot maanden griepachtige klachten krijgt, gewrichtsklachten, uitstralende pijn of minder kracht.',
'Bij een tennisarm doen deze bewegingen pijn: als u uw hand dichtknijpt, als u uw pols naar achteren buigt, als u uw onderarm naar buiten draait. De plek waar de onderarmspieren vastzitten aan de buitenste elleboogknobbel is geïrriteerd.Een tennisarm geneest vanzelf. Het kan wel maanden duren. Er is niets bekend dat de genezing kan versnellen. Blijf uw arm zo veel mogelijk normaal gebruiken.Pijnstillers, zoals paracetamol, helpen tegen de pijn.',
'Bij urineverlies kunt u uw plas niet goed ophouden. De meest voorkomende vormen van urineverlies zijn: Urineverlies bij inspanning, zoals hoesten, niezen, lachen, bukken, tillen, traplopen, rennen of springen, Urineverlies bij aandrang: u voelt ineens sterke aandrang om te plassen en kunt de plas niet ophouden tot het toilet, Urineverlies met kenmerken van beide.','Verkoudheid is een ontsteking van het slijmvlies in de neus, de bijholten en de keel. Mogelijke klachten zijn niezen, snotteren, hoesten, keelpijn, heesheid en oorpijn. Virussen zijn de oorzaak. Medicijnen zijn bij verkoudheid niet nodig. U kunt eventueel neusdruppels of spray met xylometazoline gebruiken.',
'Vitamine B12 is nodig voor de aanmaak van bloed en zenuwen. Vitamine B12 zit in vlees, vis, melk, boter, kwark, yoghurt en eieren. Eerste klachten door een laag vitamine B12 kunnen zijn: gevoelloze vingers en tenen, tintelingen, bewegingen gaan minder precies, evenwichtsproblemen. Een te laag vitamine B12 kan komen door: te weinig vitamine B12 in uw voeding, minder aanmaak van maagzuur op oudere leeftijd (door maagontsteking), darmontsteking, te veel alcohol, medicijnen bij diabetes en maagtabletten. De huisarts kan zo nodig uw bloed onderzoeken. Door vitamine B12 tabletten te slikken (1000 microgram) kunt u uw vitamine B12 verhogen.',
'Voetschimmel wordt ook zwemmerseczeem genoemd. Klachten zijn grijs-witte huidschilfertjes en kloofjes tussen de tenen, soms met jeuk. Voetschimmel kan ontstaan als de beschermende functie van de huid niet goed werkt. Gebruik 2 keer per dag een antischimmelcrème, -zalf of -poeder op de plekken. Na 2 tot 4 weken kunt u verbetering zien.','Waterwratjes (mollusca contagiosa) ontstaan door besmetting van de huid met een virus. Het is een besmettelijke aandoening die vooral bij kinderen voorkomt. Er ontstaan huidkleurige pukkeltjes, die meestal spontaan verdwijnen binnen 6-12 maanden. Uw huisarts kan de waterwratjes beoordelen en zo nodig behandelen.',
'Wratten worden veroorzaakt door een virus. Wratten komen vooral voor op de handen en voeten, maar ze kunnen ook op andere plaatsen zitten. Wratten zijn onschuldig. Ze verdwijnen meestal vanzelf zonder littekens. Na 1 jaar zijn de wratten bij ongeveer de helft van de mensen spontaan verdwenen. Wratten hoeven alleen behandeld te worden als u er veel last van heeft. Voetwratten bijvoorbeeld kunnen pijn doen bij staan of lopen. Wratten kunt u zelf insmeren met salicylzuurzalf of laten bevriezen bij de huisarts. De behandeling van een wrat geeft vaak meer klachten dan de wrat zelf.',
'Zwemmersjeuk is een rode, bobbelige huiduitslag. De uitslag jeukt of brandt erg. De huiduitslag begint na zwemmen in zoet natuurwater. De klachten worden veroorzaakt door larven van een platworm. Die kruipen in uw huid. U kunt er hoofdpijn en koorts bij krijgen, soms ook misselijkheid en braken. Zwemmersjeuk kan geen kwaad en gaat vanzelf over. De klachten duren 12 uur tot 3 weken. Zwemmersjeuk is niet besmettelijk.',
'Bij zonneallergie krijgt u rode, jeukende blaasjes, bultjes of vlekjes. Ze zitten alleen op de huid waar zonlicht op gekomen is. Als ze alleen op de oren zitten, heet het lente-oren. De vlekjes gaan vanzelf weg, meestal binnen een paar dagen. Uw huisarts kan tegen de jeuk een gel, crème of tablet voorschrijven. Als u verstandig zont, kunt u zonneallergie voorkómen: Laat uw huid aan het zonlicht wennen. Begin bijvoorbeeld met 20 minuten in de zon en daarna steeds iets langer, Gebruik zonnebrandcrème met minimaal factor 30.',
'Bij inspanning en warmte zweet u over uw hele lichaam. Bij spanning en emoties zweet u vooral in oksels, handen en voeten. Sommige mensen zweten veel meer dan andere. Dat begint meestal in de puberteit. Het komt dan niet door een ziekte. Was u regelmatig en draag ventilerende katoenen kleding. Is het vervelend? Een antitranspirant-deodorant met aluminiumzouten kan tijdelijk helpen Soms heeft veel zweten wél een medische oorzaak.'];
