const stories = [
  {
    id: "prelude",
    title: "Sesjats Offerande",
    image: "Draft/Sesjat.jpg",
    date: "Prélude",
    text: "texts/prelude.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
    {
    id: "Offer 1",
    title: "Heden ben ik Monogaam",
    image: "Draft/Sesjat.jpg",
    date: "Offer 1",
    text: "texts/hedenbenikmonogaam.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
    {
    id: "Offer 2",
    title: "Veel te veel D.J.",
    image: "Draft/Sesjat.jpg",
    date: "Offer 2",
    text: "texts/veelteveeldj.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
    {
    id: "Offer 3",
    title: "Sophie met PH",
    image: "Draft/Sesjat.jpg",
    date: "Offer 3",
    text: "texts/sophiemetph.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
      {
    id: "Offer 4",
    title: "Bewijsstuk",
    image: "Draft/Sesjat.jpg",
    date: "Offer 4",
    text: "texts/bewijsstuk.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
        {
    id: "Offer 5",
    title: "Over Boeren en Bezit",
    date: "Offer 5",
    text: "texts/overboerenenbezit.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
          {
    id: "Offer 6",
    title: "Kroniek van een Fabriek",
    date: "Offer 6",
    text: "texts/kroniekvaneenfabriek.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
            {
  
    title: "Ctrl+alt+del",
    date: "Offer 7",
    text: "texts/ctrl-alt-del.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
];

const archiveStories = [
  
 
  {
    id: "archief-02",
    title: "De nacht is duisternis",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/duisternis.html" 
  },
    {
    id: "archief-05",
    title: "Kanker",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/Kanker.html" 
  },
     {
    id: "archief-09",
    title: "One Night Stand",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/onenightstand.html" 
  },
    {
    id: "archief-11",
    title: "Het Zijn",
    image: "Draft/archief.jpg",
    date: "Poëzie",
    text: "texts/zijn.html" 
  },
   {
    id: "archief-03",
    title: "Ik wil alles",
    image: "Draft/archief.jpg",
    date: "Poëzie",
    text: "texts/Ik_wil_alles.html" 
  },
   {
    id: "archief-10",
    title: "Twee Zijden van een Bank",
    image: "Draft/archief.jpg",
    date: "Dialoog",
    text: "texts/bank.html" 
  },
   {
    id: "archief-12",
    title: "Geduld",
    image: "Draft/archief.jpg",
    date: "Poëzie",
    text: "texts/geduld.html" 
  },
     {
    id: "archief-07",
    title: "Over de verloren wijs van het lijdend onderwerp",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/verloren_wijs.html" 
  },
     {
    id: "archief-06",
    title: "Muziek",
    image: "Draft/archief.jpg",
    date: "Poëzie",
    text: "texts/muziek.html" 
  },
   {
    id: "archief-08",
    title: "De Menselijke Geest Belichaamd",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/menselijkegeest.html" 
  },
     {
    id: "archief-04",
    title: "Wintertijd",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/wintertijd.html" 
  },
 
  {
    id: "archief-01",
    title: "Drie gebroken principes",
    image: "Draft/archief.jpg",
    date: "Proza",
    text: "texts/Drie-gebroken-principes.html" 
  }
];
const reviewStories = [

    {
    title: "Max, Mischa & het Tet-offensief",
    year: "2015",
    director: "Johan Harstad",
    image: "Draft/misha.jpg",
      rating: 4.5,
    link: "https://app.thestorygraph.com/reviews/a6b913f0-bcd7-4ed1-a432-f402c2061222",
    platform: "storygraph"
  },
 {
    title: "Sirenen",
    year: "2017",
    director: "Jan Cremer",
    image: "Draft/sirenen.jpg",
   rating: 4.75,
    link: "https://app.thestorygraph.com/reviews/59fb3d85-8a88-4404-ab12-c0d551ea8618",
    platform: "storygraph"
  },
 
  {
   title: "Grand Hotel Europa",
    year: "2018",
    director: "Ilja Leonard Pfeijffer",
    image: "Draft/grand.jpg",
    rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/f55d85a0-b36b-436c-8703-d4d6cdcf636c",
    platform: "storygraph"
  },

    {
    title: "Leven om het te vertellen",
    year: "2002",
    director: "Gabriel García Márquez",
    image: "Draft/vertellen.jpg",
      rating: 3.25,
    link: "https://app.thestorygraph.com/reviews/8109815d-7157-4bd9-bfff-7da7d2b465bb",
    platform: "storygraph"
  },  
{
    title: "Belladonna of Sadness",
    year: "1973",
    director: "Eiichi Yamamoto",
    image: "Draft/belladonna.jpg",
  rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/belladonna-of-sadness/",
    platform: "letterboxd"
  },
  {
    title: "Nulpunt",
    year: "2025",
    director: "Day Lernout",
    image: "Draft/nulpunt.jpg",
    rating: 3,
    link: "https://app.thestorygraph.com/reviews/2f7806f3-312c-4e36-913c-a31d1da4ad4c",
    platform: "storygraph"
  },
  {
    title: "Les Baronnes",
    year: "2025",
    director: "Nabil Ben Yadir",
    image: "Draft/baronnes.jpg",
    rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-baronesses/",
    platform: "letterboxd"
  },
{
    title: "Resurrection",
    year: "2025",
    director: "Bi Gan",
    image: "Draft/Resurrection.jpg",
  rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/resurrection-2025/",
    platform: "letterboxd"
  },
  {
    title: "Glass Onion",
    year: "2022",
    director: "Rian Johnson",
    image: "Draft/onion.jpg",
    rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/glass-onion/",
    platform: "letterboxd"
  },
    {
    title: "The Holiday",
    year: "2006",
    director: "Nancy Meyers",
    image: "Draft/holiday.jpg",
      rating:2,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-holiday/",
    platform: "letterboxd"
  },
    {
    title: "Holy Motors",
    year: "2012",
    director: "Leos Carax",
    image: "Draft/motors.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/holy-motors/",
    platform: "letterboxd"
  },
      {
    title: "L'Engloutie",
    year: "2025",
    director: "Louise Hémon",
    image: "Draft/engloutie.jpg",
        rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-girl-in-the-snow-2025/",
    platform: "letterboxd"
  },
        {
    title: "Martyrs",
    year: "2008",
    director: "Pascal Laugier",
    image: "Draft/martyrs.jpg",
          rating: 2.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/martyrs/",
    platform: "letterboxd"
  },
          {
    title: "F for Fake",
    year: "1973",
    director: "Orson Welles",
    image: "Draft/fake.jpg",
            rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/f-for-fake/",
    platform: "letterboxd"
  },
            {
    title: "PlayTime",
    year: "1967",
    director: "Jacques Tati",
    image: "Draft/playtime.jpg",
              rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/playtime/",
    platform: "letterboxd"
  },
      {
    title: "De Dag Van De Nachtschade",
    year: "2000",
    director: "Jean-Pierre van Rossem",
    image: "Draft/nachtschade.jpg",
    rating: 2.25,
    link: "https://app.thestorygraph.com/reviews/1c61fb08-b0cd-45e0-888f-13fe9dcb5f98",
    platform: "storygraph"
  },
                    {
    title: "Carrie",
    year: "1976",
    director: "Brian De Palma",
    image: "Draft/carrie.jpg",
                       rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/carrie-1976/",
    platform: "letterboxd"
  },
                      {
    title: "Total Recall",
    year: "1990",
    director: "Paul Verhoeven",
    image: "Draft/totalrecall.jpg",
                         rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/total-recall/",
    platform: "letterboxd"
  },
        {
    title: "Based on a True Story: Not a Memoir",
    year: "2016",
    director: "Norm Macdonald",
    image: "Draft/macdonald.jpg",
           rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/1bbaa85f-4b00-43e6-9f9b-9c7a4757b264",
    platform: "storygraph"
  },
                        {
    title: "The Chronology of Water",
    year: "2025",
    director: "Kristen Stewart",
    image: "Draft/chronology.jpg",
                           rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-chronology-of-water/",
    platform: "letterboxd"
  },
                          {
    title: "Father Mother Sister Brother",
    year: "2025",
    director: "Jim Jarmusch",
    image: "Draft/fathermother.jpg",
                             rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/father-mother-sister-brother/",
    platform: "letterboxd"
  },
                            {
    title: "Code Inconnu",
    year: "2000",
    director: "Michael Haneke",
    image: "Draft/inconnu.jpg",
                               rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/code-unknown/",
    platform: "letterboxd"
  },
                              {
    title: "Rio Bravo",
    year: "1959",
    director: "Howard Hawks",
    image: "Draft/riobravo.jpg",
                                 rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/rio-bravo/",
    platform: "letterboxd"
  },
          {
    title: "Lijmen / Het Been",
    year: "1938",
    director: "Willem Elsschot",
    image: "Draft/lijmenbeen.jpg",
             rating: 4.25,
    link: "https://app.thestorygraph.com/reviews/bd1428e9-4244-4d29-969d-87cc66ef9f70",
    platform: "storygraph"
  },
                                {
    title: "The Terminator",
    year: "1984",
    director: "James Cameron",
    image: "Draft/terminator.jpg",
                                   rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-terminator/",
    platform: "letterboxd"
  },
                                  {
    title: "Terminator 2: Judgment Day",
    year: "1991",
    director: "James Cameron",
    image: "Draft/terminator2.jpg",
                                     rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/terminator-2-judgment-day/",
    platform: "letterboxd"
  },
                                    {
    title: "Left-Handed Girl",
    year: "2025",
    director: "Shih-Ching Tsou",
    image: "Draft/lefthandedgirl.jpg",
    rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/left-handed-girl/",
    platform: "letterboxd"
  },
                                      {
    title: "In die Sonne Schauen",
    year: "2025",
    director: "Mascha Schilinski",
    image: "Draft/sonneschauen.jpg",
    rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/sound-of-falling/",
    platform: "letterboxd"
  },
            {
    title: "Vertrouwelijke gesprekken",
    year: "1996",
    director: "Ingmar Bergman",
    image: "Draft/vertrouwelijkegesprekken.jpg",
    rating: 4,
    link: "https://app.thestorygraph.com/reviews/9611171a-5031-4b0a-91a2-d7873a692938",
    platform: "storygraph"
  },
                                        {
    title: "Blue Moon",
    year: "2025",
    director: "Richard Linklater",
    image: "Draft/bluemoon.jpg",
    rating: 5,
    link: "https://letterboxd.com/pieterpaultybbe/film/blue-moon-2025/",
    platform: "letterboxd"
  },
   { 
    title: "The Blair Witch Project",
    year: "1999",
    director: "Daniel Myrick, Eduardo Sánchez",
    image: "Draft/blairwitchproject.jpg",
    rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-blair-witch-project/",
    platform: "letterboxd"
  },
     { 
    title: "Amadeus",
    year: "1984",
    director: "Miloš Forman",
    image: "Draft/amadeus.jpg",
    rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/amadeus/",
    platform: "letterboxd"
  },
       { 
    title: "Blade Runner",
    year: "1982",
    director: "Ridley Scott",
    image: "Draft/bladerunner.jpg",
    rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/blade-runner/",
    platform: "letterboxd"
  },
              {
    title: "The Sublime Object of Ideology",
    year: "1989",
    director: "Slavoj Žižek",
    image: "Draft/sublimeobject.jpg",
    rating: 4.5,
    link: "https://app.thestorygraph.com/reviews/1e81262e-ffc1-417d-a2ff-cd24002f9852",
    platform: "storygraph"
  },
                {
    title: "Wake Up Dead Man",
    year: "2025",
    director: "Rian Johnson",
    image: "Draft/wakeupdeadman.jpg",
    rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/wake-up-dead-man/",
    platform: "letterboxd"
  },
                  {
    title: "Fuori",
    year: "2025",
    director: "Mario Martone",
    image: "Draft/fuori.jpg",
    rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/fuori-2025/",
    platform: "letterboxd"
  },
                    {
    title: "Vie Privée",
    year: "2025",
    director: "Rebecca Zlotowski",
    image: "Draft/vieprivée.jpg",
    rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/a-private-life-2025/",
    platform: "letterboxd"
  },
                    {
    title: "Blade Runner 2049",
    year: "2017",
    director: "Denis Villeneuve",
    image: "Draft/bladerunner2049.jpg",
    rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/blade-runner-2049/",
    platform: "letterboxd"
  },
                      {
    title: "Hamnet",
    year: "2025",
    director: "Chloé Zhao",
    image: "Draft/hamnet.jpg",
    rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/hamnet/",
    platform: "letterboxd"
  },
                        {
    title: "In bruges",
    year: "2008",
    director: "Martin McDonagh",
    image: "Draft/inbruges.jpg",
    rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/in-bruges/",
    platform: "letterboxd"
  },
      {
    title: "Tirza",
    year: "2006",
    director: "Arnon Grunberg",
    image: "Draft/tirza.jpg",
      rating: 4,
    link: "https://app.thestorygraph.com/reviews/e55d8c8b-4797-4321-833c-5c141cb5a39c",
    platform: "storygraph"
  },
        {
    title: "Nuremberg",
    year: "2025",
    director: "James Vanderbilt",
    image: "Draft/nuremberg.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/nuremberg-2025/",
    platform: "letterboxd"
  },
          {
    title: "MY HEART IS GOING TO EXPLODE!",
    year: "2023",
    director: "Jung In-hyuk",
    image: "Draft/myheartisgoingtoexplode.jpg",
      rating: 2,
    link: "https://letterboxd.com/pieterpaultybbe/film/my-heart-is-going-to-explode/",
    platform: "letterboxd"
  },
          {
    title: "Fucktoys",
    year: "2025",
    director: "Annapurna Sriram",
    image: "Draft/fucktoys.jpg",
      rating: 2.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/fucktoys/",
    platform: "letterboxd"
  },  
         { title: "Pluribus (seizoen 1)",
    year: "2025",
    director: "Vince Gilligan",
    image: "Draft/pluribus.jpg",
      rating: 4.5,
    link: "https://www.serializd.com/review/56798189",
    platform: "serializd"
  },
            {
    title: "La Grazia",
    year: "2025",
    director: "Paolo Sorrentino",
    image: "Draft/lagrazia.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/la-grazia/",
    platform: "letterboxd"
  },    
              {
    title: "The Wizard of the Kremlin",
    year: "2025",
    director: "Olivier Assayas",
    image: "Draft/wizardofthekremlin.jpg",
      rating: 2,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-wizard-of-the-kremlin/",
    platform: "letterboxd"
  }, 
                {
    title: "Airplane!",
    year: "1980",
    director: "Jerry Zucker, David Zucker, Jim Abrahams",
    image: "Draft/airplane.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/airplane/",
    platform: "letterboxd"
  },
      {
    title: "Reus",
    year: "2006",
    director: "Annelies Verbeke",
    image: "Draft/reus.jpg",
      rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/408f0786-57b4-4748-b6ee-f202470dd2b3",
    platform: "storygraph"
  },
                 {
    title: "Dune: Part Two",
    year: "2024",
    director: "Denis Villeneuve",
    image: "Draft/duneparttwo.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/dune-part-two/",
    platform: "letterboxd"
  },
       { title: "Twin Peaks (Seizoen 1)",
    year: "1990",
    director: "David Lynch, Mark Frost",
    image: "Draft/twinpeakss1.jpg",
      rating: 4,
    link: "https://www.serializd.com/review/56872296",
    platform: "serializd"
  },

                     {
    title: "No Other Choice",
    year: "2025",
    director: "Park Chan-wook",
    image: "Draft/nootherchoice.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/no-other-choice-2025/",
    platform: "letterboxd"
  },
     { title: "Twin Peaks (Seizoen 2)",
    year: "1990",
    director: "David Lynch, Mark Frost",
    image: "Draft/twinpeakss2.jpg",
      rating: 3.5,
    link: "https://www.serializd.com/review/56873865",
    platform: "serializd"
  },
                     {
    title: "Twin Peaks: Fire Walk with Me",
    year: "1992",
    director: "David Lynch",
    image: "Draft/twinpeaksfirewalkwithme.jpg",
      rating: 4,
    link: "https://letterboxd.com/film/twin-peaks-fire-walk-with-me/",
    platform: "letterboxd"
  },
                     {
    title: "Marty Supreme",
    year: "2025",
    director: "Josh Safdie",
    image: "Draft/martysupreme.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/marty-supreme/",
    platform: "letterboxd"
  },
                       {
    title: "The Mastermind",
    year: "2025",
    director: "Kelly Reichardt",
    image: "Draft/themastermind.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-mastermind-2025/",
    platform: "letterboxd"
  },  
                     {
    title: "Outsider. Freud",
    year: "2024",
    director: "Yair Qedar",
    image: "Draft/outsiderfreud.jpg",
      rating: 2.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/outsider-freud/",
    platform: "letterboxd"
  },  
                     {
    title: "Blue velvet",
    year: "1986",
    director: "David Lynch",
    image: "Draft/bluevelvet.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/blue-velvet/",
    platform: "letterboxd"
  }, 
          { title: "Euphoria (Seizoen 1)",
    year: "2019",
    director: "Sam Levinson",
    image: "Draft/euphorias1.jpg",
      rating: 3,
    link: "https://www.serializd.com/review/57328945",
    platform: "serializd"
  },
        {
    title: "De Toverberg",
    year: "1924",
    director: "Thomas Mann",
    image: "Draft/detoverberg.jpg",
    link: "https://app.thestorygraph.com/reviews/fbd469bf-a346-4fbc-a555-100e59340fda",
    platform: "storygraph"
  },
            { title: "Twin Peaks: The Return",
    year: "2017",
    director: "David Lynch, Mark Frost",
    image: "Draft/twinpeaksthereturn.jpg",
      rating: 5,
    link: "https://www.serializd.com/review/57385787",
    platform: "serializd"
  },
                          {
    title: "Zondag de Negenste",
    year: "2025",
    director: "Kat Steppe",
    image: "Draft/zondagdenegenste.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/sunday-ninth/",
    platform: "letterboxd"
  }, 
  { title: "Nonkels (seizoen 1)",
    year: "2022",
    director: "Jelle De Beule, Rik Verheye, Koen De Poorter",
    image: "Draft/nonkelss1.jpg",
      rating: 4,
    link: "https://www.serializd.com/review/58202727",
    platform: "serializd"
  },

                         {
    title: "Dust",
    year: "2026",
    director: "Anke Blondé",
    image: "Draft/dust.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/dust-2026/",
    platform: "letterboxd"
  },            
  { title: "Nonkels (seizoen 2)",
    year: "2024",
    director: "Jelle De Beule, Rik Verheye, Koen De Poorter",
    image: "Draft/nonkelss2.jpg",
      rating: 3,
    link: "https://www.serializd.com/review/58204340",
    platform: "serializd"
  },
                       {
    title: "Wild at Heart",
    year: "1990",
    director: "David Lynch",
    image: "Draft/wildatheart.jpg",
      rating: 3,
        link: "https://letterboxd.com/pieterpaultybbe/film/wild-at-heart/",
    platform: "letterboxd"
  },
 
                       {
    title: "The Darjeeling Limited",
    year: "2007",
    director: "Wes Anderson",
    image: "Draft/thedarjeelinglimited.jpg",
      rating: 3,
        link: "https://letterboxd.com/pieterpaultybbe/film/the-darjeeling-limited/",
    platform: "letterboxd"
  },
                         {
    title: "A Touch of Sin",
    year: "2013",
    director: "Jia Zhangke",
    image: "Draft/atouchofsin.jpg",
      rating: 4,
        link: "https://letterboxd.com/pieterpaultybbe/film/a-touch-of-sin/",
    platform: "letterboxd"
  },
        {
    title: "Oorlog en Terpentijn",
    year: "2013",
    director: "Stefan Hertmans",
    image: "Draft/oorlogenterpentijn.jpg",
      rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/fc631b01-4b75-4792-9a7e-7c545f71bbc5",
    platform: "storygraph"
  },
                           {
    title: "The Testament of Ann Lee",
    year: "2025",
    director: "Mona Fastvold",
    image: "Draft/thetestamentofannlee.jpg",
      rating: 4,
        link: "https://letterboxd.com/pieterpaultybbe/film/the-testament-of-ann-lee/",
    platform: "letterboxd"
  },
          {
    title: "De Vreemdeling",
    year: "1942",
    director: "Albert Camus",
    image: "Draft/devreemdeling.jpg",
      rating: 4.5,
    link: "https://app.thestorygraph.com/reviews/6c1f885b-22ef-4f1f-9dea-a51270e470e6",
    platform: "storygraph"
  },
     {  title: "La Femme Publique",
    year: "1984",
    director: "Andrzej Żuławski",
    image: "Draft/lafemmepublique.jpg",
      rating: 3.5,
        link: "https://letterboxd.com/pieterpaultybbe/film/the-public-woman/",
    platform: "letterboxd"
  },
                           {
    title: "Louis Theroux: Inside the Manosphere",
    year: "2026",
    director: "Adrian Choa",
    image: "Draft/louistherouxinsidethemanosphere.jpg",
      rating: 3,
        link: "https://letterboxd.com/pieterpaultybbe/film/louis-theroux-inside-the-manosphere/",
    platform: "letterboxd"
  },
 {
    title: "Crazy Love",
    year: "1987",
    director: "Dominique Deruddere",
    image: "Draft/crazylove.jpg",
      rating: 4,
        link: "https://letterboxd.com/pieterpaultybbe/film/crazy-love/",
    platform: "letterboxd"
  },       
                       {
    title: "Final Destination 2",
    year: "2003",
    director: "David R. Ellis",
    image: "Draft/finaldestination2.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/final-destination-2/",
    platform: "letterboxd"
  }, 
                     {
    title: "Mulholland Drive",
    year: "2001",
    director: "David Lynch",
    image: "Draft/mulhollanddrive.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/mulholland-drive/",
    platform: "letterboxd"
  }, 
                         {
    title: "Final Destination 3",
    year: "2006",
    director: "James Wong",
    image: "Draft/finaldestination3.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/final-destination-3/",
    platform: "letterboxd"
  },
                         {
    title: "The Final Destination",
    year: "2009",
    director: "David R. Ellis",
    image: "Draft/thefinaldestination.jpg",
      rating: 2,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-final-destination/",
    platform: "letterboxd"
  },
                        {
    title: "She's Gotta Have It",
    year: "1986",
    director: "Spike Lee",
    image: "Draft/she'sgottahaveit.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/shes-gotta-have-it/",
    platform: "letterboxd"
  },
                          {
    title: "Les Enfants du Paradis",
    year: "1945",
    director: "Marcel Carné",
    image: "Draft/lesenfantsduparadis.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/children-of-paradise/",
    platform: "letterboxd"
  },
                            {
    title: "Kids",
    year: "1995",
    director: "Larry Clark",
    image: "Draft/kids.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/kids/",
    platform: "letterboxd"
  }, 
            {
    title: "Het Geuzenboek",
    year: "1979",
    director: "Louis Paul Boon",
    image: "Draft/hetgeuzenboek.jpg",
      rating: 3,
    link: "https://app.thestorygraph.com/reviews/dea6b93a-604e-47e6-90e3-97426d2f842a",
    platform: "storygraph"
  },
                            {
    title: "I Swear",
    year: "2025",
    director: "Kirk Jones",
    image: "Draft/iswear.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/i-swear/",
    platform: "letterboxd"
  }, 
                             {
    title: "The Singers",
    year: "2025",
    director: "Sam A. Davis",
    image: "Draft/thesingers.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-singers-2025/",
    platform: "letterboxd"
  }, 
                               {
    title: "If Anything Happens I Love You",
    year: "2020",
    director: "Will McCormack, Michael Govier",
    image: "Draft/ifanythinghappensiloveyou.jpg",
      rating: 2.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/if-anything-happens-i-love-you/",
    platform: "letterboxd"
  }, 
                               {
    title: "This Film is not yet Rated",
    year: "2006",
    director: "Kirby Dick",
    image: "Draft/thisfilmisnotyetrated.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/this-film-is-not-yet-rated/",
    platform: "letterboxd"
  }, 
                                {
    title: "The Drama",
    year: "2026",
    director: "Kristoffer Borgli",
    image: "Draft/thedrama.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-drama/",
    platform: "letterboxd"
  }, 
                                  {
    title: "The Conjuring",
    year: "2013",
    director: "James Wan",
    image: "Draft/theconjuring.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-conjuring/",
    platform: "letterboxd"
  }, 
                                    {
    title: "Zoolander",
    year: "2001",
    director: "Ben Stiller",
    image: "Draft/zoolander.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/zoolander/",
    platform: "letterboxd"
  },
                                     {
    title: "Pillion",
    year: "2025",
    director: "Harry Lighton",
    image: "Draft/pillion.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/pillion-2025/",
    platform: "letterboxd"
  },
                                       {
    title: "David Lynch: The Art Life",
    year: "2016",
    director: "Jon Nguyen, Rick Barnes, Olivia Neergaard-Holm",
    image: "Draft/davidlynchtheartlife.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/david-lynch-the-art-life/",
    platform: "letterboxd"
  },
                                         {
    title: "Eyes Wide Shut",
    year: "1999",
    director: "Stanley Kubrick",
    image: "Draft/eyeswideshut.jpg",
      rating: 5,
    link: "https://letterboxd.com/pieterpaultybbe/film/eyes-wide-shut/",
    platform: "letterboxd"
  },
                                           {
    title: "Crouching Tiger, Hidden Dragon",
    year: "2000",
    director: "Ang Lee",
    image: "Draft/crouchingtigerhiddendragon.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/crouching-tiger-hidden-dragon/",
    platform: "letterboxd"
     },                                                                                   {
    title: "Dead Man's Wire",
    year: "2025",
    director: "Gus Van Sant",
    image: "Draft/deadmanswire.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/dead-mans-wire/",
    platform: "letterboxd"
  },
              {
    title: "Al Het Blauw van de Hemel",
    year: "2019",
    director: "Mélissa Da Costa",
    image: "Draft/alhetblauwvandehemel.jpg",
      rating: 3.75,
    link: "https://app.thestorygraph.com/reviews/abfcc2d9-ebd1-421c-8495-f830eebe09c9",
    platform: "storygraph"
  },
                       {
    title: "The Straight Story",
    year: "1999",
    director: "David Lynch",
    image: "Draft/thestraightstory.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-straight-story/",
    platform: "letterboxd"
  }, 
                         {
    title: "The French Dispatch of the Liberty, Kansas Evening Sun",
    year: "2021",
    director: "Wes Anderson",
    image: "Draft/thefrenchdispatch.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-french-dispatch-of-the-liberty-kansas/",
    platform: "letterboxd"
  }, 
                  {
    title: "ReinAard",
    year: "2025",
    director: "Tom Lanoye",
    image: "Draft/reinaard.jpg",
      rating: 4.75,
    link: "https://app.thestorygraph.com/reviews/44ced77a-db02-4eeb-b6b1-5ca464b8518a",
    platform: "storygraph"
  },
                {
    title: "Slaap!",
    year: "2003",
    director: "Annelies Verbeke",
    image: "Draft/slaap.jpg",
      rating: 3.75,
    link: "https://app.thestorygraph.com/reviews/cef09a9a-2e52-4f2e-abed-0844c01923fb",
    platform: "storygraph"
  },
                          {
    title: "La Residencia",
    year: "1969",
    director: "Chicho Ibáñez Serrador",
    image: "Draft/laresidencia.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-house-that-screamed/1/",
    platform: "letterboxd"
  }, 
                            {
    title: "Brussels by Night",
    year: "1983",
    director: "Marc Didden",
    image: "Draft/brusselsbynight.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/brussels-by-night/",
    platform: "letterboxd"
  }, 
    { title: "Agatha Christie's Seven Dials",
    year: "2026",
    director: "Chris Chibnall",
    image: "Draft/agathachristie'ssevendials.jpg",
      rating: 2,
    link: "https://www.serializd.com/review/64722106",
    platform: "serializd"
  },
      {
    title: "Cannibal Holocaust",
    year: "1980",
    director: "Ruggero Deodato",
    image: "Draft/cannibalholocaust.jpg",
      rating: 2.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/cannibal-holocaust/",
    platform: "letterboxd"
  }, 
        {
    title: "Orpheé",
    year: "1950",
    director: "Jean Cocteau",
    image: "Draft/orpheé.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/orpheus/",
    platform: "letterboxd"
  },
        {
    title: "Funeral Parade of Roses",
    year: "1969",
    director: "Toshio Matsumoto",
    image: "Draft/funeralparadeofroses.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/funeral-parade-of-roses/",
    platform: "letterboxd"
  },
          {
    title: "La Double Vie de Véronique",
    year: "1991",
    director: "Krzysztof Kieślowski",
    image: "Draft/ladoubleviedevéronique.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-double-life-of-veronique/",
    platform: "letterboxd"
  },
                  {
    title: "Joe Speedboot",
    year: "2005",
    director: "Tommy Wieringa",
    image: "Draft/joespeedboot.jpg",
      rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/8d661b34-089a-408f-a137-247bc9cbb941",
    platform: "storygraph"
  },
            {
    title: "How To Steal a Million",
    year: "1966",
    director: "William Wyler",
    image: "Draft/howtostealamillion.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/how-to-steal-a-million/",
    platform: "letterboxd"
  },
     { title: "The Office (seizoen 1)",
    year: "2001",
    director: "Ricky Gervais, Stephen Merchant",
    image: "Draft/theoffices1.jpg",
      rating: 4,
    link: "https://www.serializd.com/review/65063832",
    platform: "serializd"
  },
                    {
    title: "Niets gaat ten onder",
    year: "1956",
    director: "Louis Paul Boon",
    image: "Draft/nietsgaattenonder.jpg",
      rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/ad8e065b-d7ce-4006-b010-113028e4a356",
    platform: "storygraph"
  },
              {
    title: "Die My Love",
    year: "2025",
    director: "Lynne Ramsay",
    image: "Draft/diemylove.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/die-my-love/",
    platform: "letterboxd"
  },
                {
    title: "Dirty Work",
    year: "1998",
    director: "Bob Saget",
    image: "Draft/dirtywork.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/dirty-work-1998/",
    platform: "letterboxd"
  },
                  {
    title: "Napoleon Dynamite",
    year: "2004",
    director: "Jared Hess",
    image: "Draft/napoleondynamite.jpg",
      rating: 2,
    link: "https://letterboxd.com/pieterpaultybbe/film/napoleon-dynamite/",
    platform: "letterboxd"
  },
                  {
    title: "Nosferatu",
    year: "2024",
    director: "Robert Eggers",
    image: "Draft/nosferatu.jpg",
      rating: 3,
    link: "https://letterboxd.com/pieterpaultybbe/film/nosferatu-2024/",
    platform: "letterboxd"
  },
                    {
    title: "Everything Everywhere All at Once",
    year: "2022",
    director: "Daniel Scheinert, Daniel Kwan",
    image: "Draft/everythingeverywhereallatonce.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/everything-everywhere-all-at-once/",
    platform: "letterboxd"
  },
                      {
    title: "Rashomon",
    year: "1950",
    director: "Akira Kurosawa",
    image: "Draft/rashomon.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/rashomon/",
    platform: "letterboxd"
  },
                      {
    title: "De vertellingen van duizend en één nacht (deel 3/4)",
    year: "ca. 450 - 1200",
    director: "Onbekend/Anoniem",
    image: "Draft/devertellingenvanduizendeneennacht34.jpg",
      rating: 3.5,
    link: "https://app.thestorygraph.com/reviews/22213f77-8d97-424c-880d-bb4c39580c65",
    platform: "storygraph"
  },
                       {
    title: "The Zone Of Interest",
    year: "2023",
    director: "Jonathan Glazer",
    image: "Draft/thezoneofinterest.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-zone-of-interest/",
    platform: "letterboxd"
  },
                         {
    title: "Incendies",
    year: "2010",
    director: "Denis Villeneuve",
    image: "Draft/incendies.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/incendies/",
    platform: "letterboxd"
  },
  
     { title: "The Office (seizoen 2)",
    year: "2002",
    director: "Ricky Gervais, Stephen Merchant",
    image: "Draft/theoffices2.jpg",
      rating: 4.5,
    link: "https://www.serializd.com/review/66447970",
    platform: "serializd"
  },
                           {
    title: "The Player",
    year: "1992",
    director: "Robert Altman",
    image: "Draft/theplayer.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-player/",
    platform: "letterboxd"
  },
                   {
    title: "Mijn Vader en Andere Bedriegers",
    year: "1996",
    director: "Milena Moser",
    image: "Draft/mijnvaderenanderebedriegers.webp",
      rating: 3.25,
    link: "https://app.thestorygraph.com/books/ad439411-e214-4079-8553-16181b3d7b85",
    platform: "storygraph"
  },
                            {
    title: "A Girl Walks Home Alone at Night",
    year: "2014",
    director: "Ana Lily Amirpour",
    image: "Draft/agirlwalkshomealoneatnight.jpg",
      rating: 5,
    link: "https://letterboxd.com/pieterpaultybbe/film/a-girl-walks-home-alone-at-night/",
    platform: "letterboxd"
  },
                             {
    title: "Nirvanna the Band the Show the Movie",
    year: "2025",
    director: "Matt Johnson",
    image: "Draft/nirvannathebandtheshowthemovie.jpg",
      rating: 4,
    link: "https://letterboxd.com/film/nirvanna-the-band-the-show-the-movie/",
    platform: "letterboxd"
  },
                               {
    title: "Iron Maiden: Burning Ambition",
    year: "2026",
    director: "Malcolm Venville",
    image: "Draft/ironmaidenburningambition.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/iron-maiden-burning-ambition/",
    platform: "letterboxd"
  },
                                 {
    title: "C'est arrivé près de chez vous",
    year: "1992",
    director: " Rémy Belvaux, André Bonzel, Benoît Poelvoorde",
    image: "Draft/cestarrivepresdechezvous.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/iron-maiden-burning-ambition/",
    platform: "letterboxd"
  },
                                   {
    title: "La Chimera",
    year: "2023",
    director: "Alice Rohrwacher",
    image: "Draft/lachimera.jpg",
      rating: 3.5,
    link: "https://letterboxd.com/pieterpaultybbe/film/la-chimera/",
    platform: "letterboxd"
  },
                                     {
    title: "Kill Bill: The Whole Bloody affair",
    year: "2004",
    director: "Quentin Tarantino",
    image: "Draft/killbillthewholebloodyaffair.jpg",
      rating: 4.5,
    link: "https://letterboxd.com/film/kill-bill-the-whole-bloody-affair/",
    platform: "letterboxd"
  },
                                    {
    title: "The Lost Chapter: Yuki's Revenge",
    year: "2025",
    director: "Quentin Tarantino",
    image: "Draft/thelostchapteryukisrevenge.jpg",
      rating: 1,
    link: "https://letterboxd.com/pieterpaultybbe/film/the-lost-chapter-yukis-revenge/1/",
    platform: "letterboxd"
  },
                                      {
    title: "Vixen!",
    year: "1968",
    director: "Russ Meyer",
    image: "Draft/vixen.jpg",
      rating: 2,
    link: "https://letterboxd.com/pieterpaultybbe/film/vixen/",
    platform: "letterboxd"
  },
                                       {
    title: "Exotica",
    year: "1994",
    director: "Atom Egoyan",
    image: "Draft/exotica.jpg",
      rating: 4,
    link: "https://letterboxd.com/pieterpaultybbe/film/exotica/",
    platform: "letterboxd"
  },
  {
    title: "Une Femme est une Femme",
    year: "1961",
    director: "Jean-Luc Godard",
    rating: 4,
    platform: "letterboxd",
   link: "https://letterboxd.com/film/a-woman-is-a-woman/"
},
  {title: "Joker: Folie à Deux",
    year: "2024",
    director: "Todd Phillips",
    rating: 4,
    platform: "letterboxd",
   link: "https://letterboxd.com/pieterpaultybbe/film/joker-folie-a-deux/"
     },
   {title: "Truly Naked",
year: "2026",
director: "Muriel d’Ansembourg",
rating: 4,
platform: "letterboxd",
link: "https://letterboxd.com/film/truly-naked/review/"
     },
 { title: "Ladri di biciclette",
year: "1948",
director: "Vittorio De Sica",
rating: 4,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/bicycle-thieves/" },
  
  { title: "Amarga Navidad",
year: "2026",
director: "Pedro Almodóvar",
rating: 2.5,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/bitter-christmas/" }, 
  
  { title: "Swiss Army Man",
year: "2016",
director: "Daniel Kwan, Daniel Scheinert",
rating: 3.5,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/swiss-army-man/" }, 
  {title: "Backrooms",
year: "2026",
director: "Kane Parsons",
rating: 3,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/backrooms-2026/" },   
  {title: "Disclosure Day",
year: "2026",
director: "Steven Spielberg",
rating: 2.5,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/disclosure-day/"},
 { title: "Gravity's Rainbow",
year: "1973",
director: "Thomas Pynchon",
rating: 2.75,
platform: "storygraph",
link: "https://app.thestorygraph.com/reviews/a80a4119-3fd4-4897-9e25-7c2c3c038c5a"},
   { title: "Honey Don't",
year: "2026",
director: "Joel Coen",
rating: 2,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/honey-dont/"},
   { title: "Broken English",
year: "2025",
director: "Iain Forsyth & Jane Pollard",
rating: 3,
platform: "letterboxd",
link: "https://letterboxd.com/pieterpaultybbe/film/broken-english-2025/"},
       {
    id: "the-backrooms-series",
     year: "2022",
director: "Kane Parsons",
    title: "The Backrooms",
    image: "Draft/the-backrooms-series.jpg",
    rating: 4,
    text: "reviews/the-backrooms-series.html",
          platform: "serializd"
  },
  {title: "Jongens uit het leven",
year: "1955",
director: "Pier Paolo Pasolini",
rating: 3.5,
platform: "storygraph",
link: "https://app.thestorygraph.com/reviews/8a9d8c05-76da-4750-9e45-5b21d4d38f0b"},
];
