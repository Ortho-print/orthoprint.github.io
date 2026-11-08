/* =====================================================================
   ORTHOPRINT – sadržaj web stranice / website content
   ---------------------------------------------------------------------
   Ovo je JEDINA datoteka koju trebate mijenjati za novi sadržaj.
   This is the ONLY file you need to edit to add new content.

   • Tekst koji ima dvije verzije piše se kao { en: "...", hr: "..." }.
     Ako napišete samo "tekst", isti se prikazuje na oba jezika.
   • Slike stavite u mapu  img/  i navedite put, npr. "img/kickoff-1.jpg".
   • Datumi uvijek u obliku "GGGG-MM-DD", npr. "2027-05-14".
   • Pazite na zareze između stavki i navodnike oko teksta.
   ===================================================================== */

window.SITE = {

  project: {
    acronym: "ORTHOPRINT",
    code: "IP-2026-6612",
    start: "2026-10-01",
    end: "2029-09-30",
    title: {
      en: "Materials design for 3D-printed orthodontic appliances: from photopolymer network architecture to clinical performance",
      hr: "Dizajn materijala za 3D-printane ortodontske naprave: od arhitekture fotopolimerne mreže do kliničke učinkovitosti"
    },
    leader: { en: "Professor Senka Meštrović", hr: "prof. dr. sc. Senka Meštrović" },
    host: { en: "University of Zagreb, School of Dental Medicine", hr: "Sveučilište u Zagrebu Stomatološki fakultet" },
    funder: { en: "Croatian Science Foundation", hr: "Hrvatska zaklada za znanost" }
  },

  /* ---------------------------------------------------------------
     PUBLIKACIJE IZ PROJEKTA / PROJECT PUBLICATIONS
     type: "journal" (članak u časopisu) ili "conference" (kongresno priopćenje)
     Primjer / example – kopirajte blok, maknite // i popunite:

     {
       type: "journal",
       year: 2027,
       authors: "Šimunović L, Brenko L, Haramina T, Meštrović S",
       title: "Naslov rada",
       venue: "Dental Materials. 2027; 43(2):100-110",
       doi: "10.1016/j.dental.2027.01.001",
       openAccess: true
     },
     --------------------------------------------------------------- */
  publications: [
  ],

  /* ---------------------------------------------------------------
     NOVOSTI, KONFERENCIJE I DOGAĐANJA / NEWS, CONFERENCES, EVENTS
     type: "news" | "conference" | "event"
     images: popis slika iz mape img/ (može biti prazno: [])
     link: neobavezno, poveznica na vanjsku stranicu
     --------------------------------------------------------------- */
  news: [
    {
      date: "2026-10-01",
      type: "news",
      title: { en: "ORTHOPRINT has started", hr: "Započeo je projekt ORTHOPRINT" },
      text: {
        en: "The Croatian Science Foundation research project IP-2026-6612 began on 1 October 2026. Over the next three years, the team will map how photopolymer network architecture determines the durability and biological safety of 3D-printed orthodontic appliances.",
        hr: "Istraživački projekt Hrvatske zaklade za znanost IP-2026-6612 započeo je 1. listopada 2026. Tijekom sljedeće tri godine tim će istražiti kako arhitektura fotopolimerne mreže određuje trajnost i biološku sigurnost 3D-printanih ortodontskih naprava."
      },
      place: { en: "Zagreb", hr: "Zagreb" },
      images: []
    }
    /* Primjer konferencije / conference example:
    ,{
      date: "2027-06-12",
      type: "conference",
      title: { en: "Poster at the EOS Congress", hr: "Poster na kongresu EOS-a" },
      text:  { en: "Luka Šimunović presented ...", hr: "Luka Šimunović predstavio je ..." },
      place: { en: "Lisbon, Portugal", hr: "Lisabon, Portugal" },
      images: ["img/eos-2027-1.jpg", "img/eos-2027-2.jpg"],
      link: "https://..."
    }
    */
  ],

  /* ---------------------------------------------------------------
     GALERIJA / GALLERY
     { src: "img/lab-1.jpg", caption: { en: "...", hr: "..." }, date: "2027-01-20" }
     --------------------------------------------------------------- */
  gallery: [
  ],

  /* ---------------------------------------------------------------
     TIM / TEAM   (photo: neobavezno, npr. "img/team/smestrovic.jpg")
     --------------------------------------------------------------- */
  team: [
    { name: "Senka Meštrović", title: { en: "Professor", hr: "prof. dr. sc." }, lead: true, org: "SFZG", orcid: "0000-0003-3224-3579",
      role: { en: "Project leader. Scientific strategy, dissemination and project management.",
              hr: "Voditeljica projekta. Znanstvena strategija, diseminacija i upravljanje projektom." } },
    { name: "Tatjana Haramina", title: { en: "Professor", hr: "prof. dr. sc." }, org: "FSB", orcid: "0000-0001-5327-4329",
      role: { en: "Polymer engineering, rheology and mechanical characterisation. Formulation design and design of experiments.",
              hr: "Polimerno inženjerstvo, reologija i mehanička karakterizacija. Dizajn formulacija i plan pokusa." } },
    { name: "Kristina Radošević", title: { en: "Professor", hr: "prof. dr. sc." }, org: "PBF", orcid: "0000-0001-5156-1893",
      role: { en: "Biological evaluation. Cell culture and ISO 10993-5 cytotoxicity testing, linked to leachable profiles.",
              hr: "Biološka evaluacija. Stanične kulture i ispitivanje citotoksičnosti prema ISO 10993-5, povezano s profilima otpuštenih tvari." } },
    { name: "Samir Čimić", title: { en: "Professor", hr: "prof. dr. sc." }, org: "SFZG", orcid: "0000-0002-5029-310X",
      role: { en: "Clinical and translational advisor. Defines clinical requirements and interprets material performance.",
              hr: "Klinički i translacijski savjetnik. Definira kliničke zahtjeve i tumači svojstva materijala." } },
    { name: "Luka Šimunović", title: { en: "PhD", hr: "dr. sc." }, org: "SFZG", orcid: "0000-0003-2848-6041",
      role: { en: "Core experimental work and data integration. Printing, working curves, conversion and cross-platform validation.",
              hr: "Glavni eksperimentalni rad i integracija podataka. Printanje, radne krivulje, konverzija i validacija na više platformi." } },
    { name: "Ivana Bačić", title: { en: "PhD", hr: "dr. sc." }, org: "CFIIV", orcid: "0000-0003-0997-3960",
      role: { en: "Analytical chemistry. FTIR-ATR, SEM and LC-MS measurements and analytical quality control.",
              hr: "Analitička kemija. Mjerenja FTIR-ATR, SEM i LC-MS te kontrola kvalitete analitičkih podataka." } },
    { name: "Ana Marija Miličević", title: { en: "DMD", hr: "dr. med. dent." }, org: "SFZG", orcid: "0009-0008-5488-6915",
      role: { en: "Aging protocols, specimen preparation, biological testing workflows and data curation.",
              hr: "Protokoli starenja, priprema uzoraka, tijek bioloških ispitivanja i kuracija podataka." } },
    { name: "Luka Brenko", title: { en: "univ. mag. ing. mech.", hr: "univ. mag. ing. mech." }, org: "FSB", orcid: "0009-0007-2685-6201",
      role: { en: "Rheological and mechanical testing, support for the design of experiments, data curation.",
              hr: "Reološka i mehanička ispitivanja, podrška planu pokusa, kuracija podataka." } },
    { name: "Antun Jakob Marić", title: { en: "univ. mag. ing. mech.", hr: "univ. mag. ing. mech." }, org: "MED3D", orcid: "0009-0008-2099-3237",
      role: { en: "Printing systems and industrial workflow validation across platforms.",
              hr: "Sustavi za printanje i validacija industrijskog tijeka rada na više platformi." } }
  ],

  /* logo: neobavezno, npr. "img/logos/fsb.png" – prikazuje se uz naziv ustanove */
  institutions: [
    { id: "SFZG", lead: true, url: "https://www.sfzg.unizg.hr",
      name: { en: "University of Zagreb, School of Dental Medicine", hr: "Sveučilište u Zagrebu Stomatološki fakultet" } },
    { id: "FSB", url: "https://www.fsb.unizg.hr",
      name: { en: "University of Zagreb, Faculty of Mechanical Engineering and Naval Architecture", hr: "Sveučilište u Zagrebu Fakultet strojarstva i brodogradnje" } },
    { id: "PBF", url: "https://www.pbf.unizg.hr",
      name: { en: "University of Zagreb, Faculty of Food Technology and Biotechnology", hr: "Sveučilište u Zagrebu Prehrambeno-biotehnološki fakultet" } },
    { id: "CFIIV", url: "https://forenzika.gov.hr",
      name: { en: "Forensic Science Centre Ivan Vučetić, Zagreb", hr: "Centar za forenzična ispitivanja, istraživanja i vještačenja „Ivan Vučetić”, Zagreb" } },
    { id: "MED3D", url: "",
      name: { en: "Med3D Innovations, Zagreb", hr: "Med3D Innovations, Zagreb" } }
  ],

  /* Raniji radovi tima (prije projekta) / Earlier work by the team */
  earlierWork: [
    { year: 2025, authors: "Šimunović L, Brenko L, Marić AJ, Meštrović S, Haramina T", title: "Rheology of Dental Photopolymers for SLA/DLP/MSLA 3D Printing", venue: "Polymers. 2025; 17(19):2706", doi: "10.3390/polym17192706" },
    { year: 2025, authors: "Šimunović L, Miličević AM, Brenko L, Haramina T, Meštrović S", title: "Absorption and desorption dynamics of thermoformed and 3-dimensional-printed orthodontic aligners", venue: "American Journal of Orthodontics and Dentofacial Orthopedics. 2025; 168(4):466-76", doi: "10.1016/j.ajodo.2025.04.022" },
    { year: 2025, authors: "Šimunović L, Pečanić P, Marić AJ, Haramina T, Šrut Rakić I, Meštrović S", title: "Impact of various cleaning protocols on the physical and aesthetic properties of 3D-printed orthodontic aligners", venue: "Scientific Reports. 2025; 15:19022", doi: "10.1038/s41598-025-04096-z" },
    { year: 2025, authors: "Šimunović L, Bačić I, Meštrović S", title: "Micro- and Nanoplastics in Dentistry: Challenges in Obtaining High-Quality Evidence", venue: "Materials. 2025; 18(18):4269", doi: "10.3390/ma18184269" },
    { year: 2025, authors: "Šimunović L, Čimić S, Meštrović S", title: "Three-Dimensionally Printed Splints in Dentistry: A Comprehensive Review", venue: "Dentistry Journal. 2025; 13(7):312", doi: "10.3390/dj13070312" },
    { year: 2024, authors: "Šimunović L, Marić AJ, Bačić I, Haramina T, Meštrović S", title: "Impact of UV Light Exposure During Printing on Thermomechanical Properties of 3D-Printed Polyurethane-Based Orthodontic Aligners", venue: "Applied Sciences. 2024; 14(20):9580", doi: "10.3390/app14209580" },
    { year: 2024, authors: "Šimunović L, Čekalović Agović S, Marić AJ, Bačić I, Klarić E, Uribe F, Meštrović S", title: "Color and Chemical Stability of 3D-Printed and Thermoformed Polyurethane-Based Aligners", venue: "Polymers. 2024; 16(8):1067", doi: "10.3390/polym16081067" },
    { year: 2024, authors: "Šimunović L, Jurela A, Sudarević K, Bačić I, Haramina T, Meštrović S", title: "Influence of Post-Processing on the Degree of Conversion and Mechanical Properties of 3D-Printed Polyurethane Aligners", venue: "Polymers. 2024; 16(1):17", doi: "10.3390/polym16010017" },
    { year: 2023, authors: "Šimunović L, Blagec T, Meštrović S", title: "Resistance of PETG Materials on Thermocycling and Brushing", venue: "Dentistry Journal. 2023; 11(5):135", doi: "10.3390/dj11050135" },
    { year: 2023, authors: "Šimunović L, Blagec T, Meštrović S", title: "The Influence of Different Cleaning Protocols on the Surface Roughness of Orthodontic Retainers", venue: "Applied Sciences. 2023; 13(3):1319", doi: "10.3390/app13031319" }
  ],

  contact: {
    address: { en: "Gundulićeva 5, 10000 Zagreb, Croatia", hr: "Gundulićeva 5, 10000 Zagreb" },
    email: ""   // npr. "orthoprint@sfzg.unizg.hr" – ostavite prazno ako ne želite prikazati
  },

  /* ---------------------------------------------------------------
     LOGOTIPI / LOGOS
     funder, host       – službeni logotipi u boji (PNG s prozirnom pozadinom ili SVG);
                          mogu imati englesku i hrvatsku verziju: { en: "...", hr: "..." }
     funderWhite, hostWhite – neobavezno: službene bijele (negativ) verzije za tamnu naslovnicu.
                          Ako ih ne navedete, stranica sama pobijeli logotip u boji.
     Ako datoteka ne postoji, umjesto logotipa prikazuje se naziv ustanove.
     --------------------------------------------------------------- */
  logos: {
    funder: { en: "img/logos/hrzz-en.png", hr: "img/logos/hrzz-hr.png" },
    host: "img/logos/sfzg.png",
    funderWhite: "img/logos/hrzz-white.png",
    hostWhite: "img/logos/sfzg-white.png"
  }
};
