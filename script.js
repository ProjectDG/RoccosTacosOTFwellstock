class Bottle{
    constructor(name/*, glass, rim, liquor = [], liqueur = [], mixers = [], garnish = [], photo, batch, instructions = []*/){
     this.name = name;
     /*
     this.glass = glass;
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.batch = batch;
     this.instructions = instructions;
     */
    };
   };


   let cordialTripleSec = new Bottle("Triple Sec");
   let cordialJFHayden = new Bottle("J. F. Hayden Orange Liqueur");
   let cordialCointreau = new Bottle("Cointreau");
   let ginBombay = new Bottle("Bombay");
   let mezcalDosHombres = new Bottle("Dos Hombres Mezcal");
   let rumBacardi = new Bottle("Bacardi");
   let sangriaBatches = new Bottle("Sangria Batches");
   let tequila1800Anejo = new Bottle("1800 Anejo");
   let tequilaCasamigosBlanco = new Bottle("Casamigos Blanco");
   let tequilaCazadoresReposado = new Bottle("Cazadores Reposado");
   let tequilaElJimadorBlanco = new Bottle("El Jimador Blanco");
   let tequilaFletchaAzulBlanco = new Bottle("Fletcha Azul Blanco");
   let tequilaGhost = new Bottle("Ghost Tequila");
   let tequilaHerraduraSilver = new Bottle("Herradura Silver");
   let tequilaJoseCuervoBlanco = new Bottle("Jose Cuervo Tradicional Plata");
   let tequilaRoccoMangoMix = new Bottle("Rocco Mango Mix");
   let tequilaSantoBlanco = new Bottle("Santo Blanco");
   let tequilaTanteoJalapeno = new Bottle("Tanteo Jalapeno");
   let tequilaTeremanaBlanco = new Bottle("Teremana Blanco");
   let tequilaAltZeroRitual = new Bottle("Zero Ritual ( Tequila Alternative )");
   let tonicDuganDaneTonic = new Bottle("Dugan & Dane's Tonic");
   let tonicDuganDaneTikiTonic = new Bottle("Dugan & Dane's Tiki Tonic");
   let vodkaFinlandia = new Bottle("Finlandia");
   let vodkaTitos = new Bottle("Tito's");
   let whiskeyJackDaniels = new Bottle("Jack Daniels");

   
   


   let bottles = [
    tequila1800Anejo,
    tequilaCasamigosBlanco,
    tequilaCazadoresReposado,
    mezcalDosHombres,
    tequilaElJimadorBlanco,
    tequilaFletchaAzulBlanco,
    tequilaGhost,
    tequilaHerraduraSilver,
    tequilaJoseCuervoBlanco,
    tequilaRoccoMangoMix,
    tequilaSantoBlanco,
    tequilaTanteoJalapeno,
    tequilaTeremanaBlanco,
    cordialJFHayden,
    cordialCointreau,
    cordialTripleSec,
    vodkaFinlandia,
    vodkaTitos,
    rumBacardi,
    ginBombay,
    whiskeyJackDaniels,
    sangriaBatches,
    tequilaAltZeroRitual,
    tonicDuganDaneTonic,
    tonicDuganDaneTikiTonic
   ];

   

   bottles.map(x => {

    let listItem = document.createElement("li");
    let targetList = document.getElementById("wellStockList");

    listItem.innerText = x.name;
    targetList.append(listItem);


   })