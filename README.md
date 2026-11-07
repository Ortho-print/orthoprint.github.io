# ORTHOPRINT – web stranica projekta

Stranica ima samo tri dijela:

```
index.html    izgled i ponašanje stranice (ne treba ga dirati)
content.js    SAV sadržaj: radovi, novosti, konferencije, galerija, tim
img/          fotografije (sami napravite mapu kad dodate prvu sliku)
```

## Kako dodati novi rad

U `content.js`, unutar `publications: [ ... ]`, dodajte blok:

```js
{
  type: "journal",            // ili "conference"
  year: 2027,
  authors: "Šimunović L, Brenko L, Haramina T, Meštrović S",
  title: "Naslov rada",
  venue: "Dental Materials. 2027; 43(2):100-110",
  doi: "10.1016/j.dental.2027.01.001",
  openAccess: true
},
```

Prezimena članova tima automatski se podebljaju. Kartice „Članci u časopisima” i „Kongresna priopćenja” pojave se same čim postoji prvi rad.

## Kako dodati konferenciju ili događanje sa slikama

1. Slike spremite u `img/` (npr. `img/eos-2027-1.jpg`). Najbolje JPG, širine do ~2000 px.
2. U `news: [ ... ]` dodajte:

```js
{
  date: "2027-06-12",
  type: "conference",         // "news", "conference" ili "event"
  title: { en: "Poster at the EOS Congress", hr: "Poster na kongresu EOS-a" },
  text:  { en: "…", hr: "…" },
  place: { en: "Lisbon, Portugal", hr: "Lisabon, Portugal" },
  images: ["img/eos-2027-1.jpg", "img/eos-2027-2.jpg"],
  link: "https://…"           // neobavezno
},
```

Novosti se same slažu od najnovije. Klik na sliku otvara pregled preko cijelog zaslona.

## Galerija

U `gallery: [ ... ]`:

```js
{ src: "img/lab-1.jpg", caption: { en: "Rheometry at FSB", hr: "Reometrija na FSB-u" }, date: "2027-01-20" },
```

## Fotografije članova tima

Dodajte `photo: "img/team/ime.jpg"` u redak osobe. Bez fotografije prikazuju se inicijali.

## Logo HRZZ-a

Preuzmite službeni logo s hrzz.hr i spremite ga kao `img/hrzz-logo.png`. Pojavit će se u podnožju uz tekst o financiranju.

## Pravila koja sprječavaju greške

- Svaki blok `{ … }` završava zarezom ako iza njega slijedi još jedan.
- Tekst je uvijek u navodnicima `"…"`.
- Datumi u obliku `GGGG-MM-DD`.
- Ako stranica nakon izmjene ostane prazna, najčešće nedostaje zarez ili navodnik u retku koji ste upravo dodali.
