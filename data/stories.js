const stories = [
  {
    id: "prelude",
    title: "Sesjats Offerande",
    image: "Draft/Sesjat.jpg",
    date: "Prélude",
    text: "texts/prelude.html" // Dit klopt, want op GitHub is dit ook kleine letters
  },
    {
    id: "Offer 01",
    title: "Heden ben ik Monogaam",
    image: "Draft/Sesjat.jpg",
    date: "Offer 01",
    text: "texts/hedenbenikmonogaam.html" // Dit klopt, want op GitHub is dit ook kleine letters
  }
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
    title: "La Vie sexuelle des Belges 1950–1978",
    year: "1994",
    director: "Jan Bucquoy",
    image: "Draft/vie.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-sexual-life-of-the-belgians/",
    platform: "letterboxd"
  },
  {
    title: "Napoleon",
    year: "1927",
    director: "Abel Gance",
    image: "Draft/napoleon.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/napoleon/",
    platform: "letterboxd"
  },
  {
    title: "À bout de souffle",
    year: "1960",
    director: "Jean-Luc Godard",
    image: "Draft/bout.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/breathless/",
    platform: "letterboxd"
  },
  {
    title: "Dr. Caligari",
    year: "1986",
    director: "Stephen Sayadian",
    image: "Draft/caligari.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/dr-caligari/",
    platform: "letterboxd"
  },
  {
    title: "Szamanka",
    year: "1996",
    director: "Andrzej Żuławski",
    image: "Draft/szamanka.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/szamanka/",
    platform: "letterboxd"
  },
    {
    title: "Max, Mischa & het Tet-offensief",
    year: "2015",
    director: "Johan Harstad",
    image: "Draft/misha.jpg",
    link: "https://app.thestorygraph.com/reviews/a6b913f0-bcd7-4ed1-a432-f402c2061222",
    platform: "storygraph"
  },
  {
    title: "Zabriskie Point",
    year: "1970",
    director: "Michelangelo Antonioni",
    image: "Draft/point.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/zabriskie-point/",
    platform: "letterboxd"
  },
  {
    title: "Babylon",
    year: "2022",
    director: "Damien Chazelle",
    image: "Draft/babylon.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/babylon-2022/",
    platform: "letterboxd"
  },
 {
    title: "Sirenen",
    year: "2017",
    director: "Jan Cremer",
    image: "Draft/sirenen.jpg",
    link: "https://app.thestorygraph.com/reviews/59fb3d85-8a88-4404-ab12-c0d551ea8618",
    platform: "storygraph"
  },
  {
    title: "Den Sidste Viking",
    year: "2025",
    director: "Anders Thomas Jensen",
    image: "Draft/viking.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-last-viking-2025/",
    platform: "letterboxd"
  },
    {
    title: "The Texas Chain Saw Massacre",
    year: "1974",
    director: "Tobe Hooper",
    image: "Draft/texas.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-texas-chain-saw-massacre/",
    platform: "letterboxd"
  },
  {
   title: "Grand Hotel Europa",
    year: "2018",
    director: "Ilja Leonard Pfeijffer",
    image: "Draft/grand.jpg",
    link: "https://app.thestorygraph.com/reviews/f55d85a0-b36b-436c-8703-d4d6cdcf636c",
    platform: "storygraph"
  },

  {
    title: "Paris Is Burning",
    year: "1990",
    director: "Jennie Livingston",
    image: "Draft/Paris.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/paris-is-burning/",
    platform: "letterboxd"
  },
    {
    title: "Leven om het te vertellen",
    year: "2002",
    director: "Gabriel García Márquez",
    image: "Draft/vertellen.jpg",
    link: "https://app.thestorygraph.com/reviews/8109815d-7157-4bd9-bfff-7da7d2b465bb",
    platform: "storygraph"
  },
  
  {
    title: "O Agente Secreto",
    year: "2025",
    director: "Kleber Mendonça Filho",
    image: "Draft/secretagent.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-secret-agent-2025/",
    platform: "letterboxd"
  },
{
    title: "Beladonna of Sadness",
    year: "1973",
    director: "Eiichi Yamamoto",
    image: "Draft/belladonna.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/belladonna-of-sadness/",
    platform: "letterboxd"
  },
  {
    title: "Nulpunt",
    year: "2025",
    director: "Day Lernout",
    image: "Draft/nulpunt.jpg",
    link: "https://app.thestorygraph.com/reviews/2f7806f3-312c-4e36-913c-a31d1da4ad4c",
    platform: "storygraph"
  },
  {
    title: "Les Baronnes",
    year: "2025",
    director: "Nabil Ben Yadir",
    image: "Draft/baronnes.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-baronesses/",
    platform: "letterboxd"
  },
{
    title: "Resurrection",
    year: "2025",
    director: "Bi Gan",
    image: "Draft/Resurrection.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/resurrection-2025/",
    platform: "letterboxd"
  },
  {
    title: "Glass Onion",
    year: "2022",
    director: "Rian Johnson",
    image: "Draft/onion.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/glass-onion/",
    platform: "letterboxd"
  },
    {
    title: "The Holiday",
    year: "2006",
    director: "Nancy Meyers",
    image: "Draft/holiday.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-holiday/",
    platform: "letterboxd"
  },
    {
    title: "Holy Motors",
    year: "2012",
    director: "Leos Carax",
    image: "Draft/motors.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/holy-motors/",
    platform: "letterboxd"
  },
      {
    title: "L'Engloutie",
    year: "2025",
    director: "Louise Hémon",
    image: "Draft/engloutie.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-girl-in-the-snow-2025/",
    platform: "letterboxd"
  },
        {
    title: "Martyrs",
    year: "2008",
    director: "Pascal Laugier",
    image: "Draft/martyrs.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/martyrs/",
    platform: "letterboxd"
  },
          {
    title: "F for Fake",
    year: "1973",
    director: "Orson Welles",
    image: "Draft/fake.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/f-for-fake/",
    platform: "letterboxd"
  },
            {
    title: "PlayTime",
    year: "1967",
    director: "Jacques Tati",
    image: "Draft/playtime.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/playtime/",
    platform: "letterboxd"
  },
      {
    title: "De Dag Van De Nachtschade",
    year: "2000",
    director: "Jean-Pierre van Rossem",
    image: "Draft/nachtschade.jpg",
    link: "https://app.thestorygraph.com/reviews/1c61fb08-b0cd-45e0-888f-13fe9dcb5f98",
    platform: "storygraph"
  },
                    {
    title: "Carrie",
    year: "1976",
    director: "Brian De Palma",
    image: "Draft/carrie.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/carrie-1976/",
    platform: "letterboxd"
  },
                      {
    title: "Total Recall",
    year: "1990",
    director: "Paul Verhoeven",
    image: "Draft/totalrecall.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/total-recall/",
    platform: "letterboxd"
  },
        {
    title: "Based on a True Story: Not a Memoir",
    year: "2016",
    director: "Norm Macdonald",
    image: "Draft/macdonald.jpg",
    link: "https://app.thestorygraph.com/reviews/1bbaa85f-4b00-43e6-9f9b-9c7a4757b264",
    platform: "storygraph"
  },
                        {
    title: "The Chronology of Water",
    year: "2025",
    director: "Kristen Stewart",
    image: "Draft/chronology.jpg",
    link: "https://letterboxd.com/pieterpaultybbe/film/the-chronology-of-water/",
    platform: "letterboxd"
  },
];
