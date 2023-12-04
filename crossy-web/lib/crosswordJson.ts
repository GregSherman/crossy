import { z } from 'zod'

// sample JSON
// {
//     "valid": true,
//     "title": "New York Times, Tuesday, November 28, 2023",
//     "date": "11/28/2023",
//     "author": "Gia Bosko",
//     "editor": "Will Shortz",
//     "publisher": "The New York Times",
//     "copyright": "2023, The New York Times",
//     "notepad": null,
//     "jnotes": null,
//     "key": null,
//     "track": null,
//     "autowrap": null,
//     "mini": null,
//     "id": null,
//     "id2": null,
//     "code": null,
//     "dow": "Tuesday",
//     "type": null,
//     "target": "/Crossword?date=11/28/2023",
//     "hastitle": false,
//     "navigate": true,
//     "hold": false,
//     "auto": false,
//     "uniclue": false,
//     "interpretcolors": false,
//     "shadecircles": false,
//     "admin": false,
//     "json": true,
//     "size": { "rows": 15, "cols": 15 },
//     "grid": [
//       "G",
//       "E",
//       "T",
//       "R",
//       "I",
//       "C",
//       "H",
//       ".",
//       "T",
//       "O",
//       "O",
//       "K",
//       "O",
//       "F",
//       "F",
//       "A",
//       "I",
//       "R",
//       "H",
//       "O",
//       "L",
//       "E",
//       ".",
//       "A",
//       "N",
//       "D",
//       "O",
//       "R",
//       "R",
//       "A",
//       "G",
//       "R",
//       "A",
//       "Y",
//       "D",
//       "A",
//       "Y",
//       ".",
//       "R",
//       "E",
//       "D",
//       "H",
//       "E",
//       "A",
//       "D",
//       "S",
//       "E",
//       "P",
//       "S",
//       "I",
//       "S",
//       ".",
//       ".",
//       ".",
//       "C",
//       "O",
//       "L",
//       "O",
//       "N",
//       "S",
//       ".",
//       ".",
//       ".",
//       ".",
//       "N",
//       "S",
//       "A",
//       ".",
//       "S",
//       "A",
//       "N",
//       ".",
//       ".",
//       ".",
//       ".",
//       ".",
//       ".",
//       "G",
//       "R",
//       "E",
//       "E",
//       "N",
//       "S",
//       "C",
//       "R",
//       "E",
//       "E",
//       "N",
//       ".",
//       ".",
//       "A",
//       "P",
//       "E",
//       "D",
//       ".",
//       "S",
//       "Y",
//       "N",
//       "O",
//       "D",
//       ".",
//       "V",
//       "E",
//       "G",
//       "A",
//       "F",
//       "R",
//       "E",
//       "A",
//       "K",
//       ".",
//       "H",
//       "A",
//       "T",
//       ".",
//       "R",
//       "E",
//       "A",
//       "L",
//       "M",
//       "T",
//       "I",
//       "S",
//       ".",
//       "A",
//       "D",
//       "O",
//       "P",
//       "T",
//       "M",
//       "E",
//       ".",
//       "T",
//       "O",
//       "P",
//       ".",
//       "M",
//       "E",
//       "L",
//       "L",
//       "O",
//       "W",
//       ".",
//       "Y",
//       "E",
//       "L",
//       "L",
//       "O",
//       "W",
//       ".",
//       ".",
//       ".",
//       ".",
//       "L",
//       "I",
//       "T",
//       ".",
//       ".",
//       ".",
//       "M",
//       "I",
//       "A",
//       ".",
//       ".",
//       ".",
//       "P",
//       "I",
//       "C",
//       "A",
//       "N",
//       "T",
//       "E",
//       ".",
//       "P",
//       "O",
//       "S",
//       "T",
//       "I",
//       "T",
//       "S",
//       "O",
//       "R",
//       "A",
//       "N",
//       "G",
//       "E",
//       "D",
//       "O",
//       "O",
//       "R",
//       "H",
//       "I",
//       "N",
//       "G",
//       "E",
//       "N",
//       "A",
//       "T",
//       "O",
//       ".",
//       "D",
//       "E",
//       "E",
//       "R",
//       "E",
//       ".",
//       "S",
//       "T",
//       "I",
//       "R",
//       "E",
//       "N",
//       "O",
//       "S",
//       ".",
//       "I",
//       "N",
//       "D",
//       "E",
//       "X",
//       ".",
//       "H",
//       "O",
//       "F",
//       "F"
//     ],
//     "gridnums": [
//       1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0,
//       16, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 19, 0,
//       0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 22, 0, 23, 0, 0,
//       0, 0, 0, 0, 0, 0, 24, 25, 0, 0, 0, 26, 0, 0, 0, 27, 28, 0, 0, 29, 30, 0, 0,
//       0, 31, 0, 0, 0, 0, 0, 32, 0, 33, 34, 35, 0, 0, 0, 36, 0, 37, 0, 0, 0, 38, 0,
//       0, 0, 0, 39, 0, 0, 0, 40, 41, 0, 0, 0, 42, 0, 0, 43, 0, 0, 0, 44, 0, 45, 0,
//       0, 0, 0, 46, 0, 0, 47, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0,
//       0, 50, 51, 52, 0, 0, 0, 53, 0, 54, 0, 0, 0, 55, 56, 57, 58, 0, 0, 0, 0, 0,
//       0, 59, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 61, 0, 0, 0, 0, 0, 62, 0, 0, 0,
//       63, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 65, 0, 0, 0
//     ],
//     "circles": null,
//     "acrossmap": null,
//     "downmap": null,
//     "rbars": null,
//     "bbars": null,
//     "clues": {
//       "across": [
//         "1. Make millions, say",
//         "8. Departed on a flight",
//         "15. Opening in a pet carrier",
//         "16. Tiny country in the Pyrenees",
//         "17. Colorful rhyme for gloomy weather",
//         "18. Colorful rhyme for a &quot;ginger&quot;",
//         "19. Harmful reaction to an infection",
//         "20. : : : : : :",
//         "21. Surveillance org.",
//         "23. ___ José, Costa Rica",
//         "24. Colorful rhyme for a filming background",
//         "29. Copied",
//         "31. Church council",
//         "32. Lyra&#39;s brightest star",
//         "35. Go bananas",
//         "37. What a street musician may use to collect tips",
//         "38. Domain",
//         "39. &quot;___ the season ...&quot;",
//         "40. Sign seen at an S.P.C.A. center, perhaps",
//         "43. Outdo",
//         "44. With 46-Across, colorful rhyme for a 1966 Donovan hit",
//         "46. See 44-Across",
//         "48. Hoppin&#39;, as a party",
//         "49. Soccer star Hamm",
//         "50. Hot and spicy, as salsa",
//         "54. Sticky notes",
//         "58. Colorful (albeit rare!) rhyme for an item at a hardware store",
//         "60. Finland joined it in 2023",
//         "61. Big name in tractors",
//         "62. Ruckus",
//         "63. Grandson of Adam",
//         "64. Pages that point to other pages",
//         "65. Benjamin who wrote &quot;The Tao of Pooh&quot;"
//       ],
//       "down": [
//         "1. Reacts to an awful smell, maybe",
//         "2. Dublin&#39;s land, to Dubliners",
//         "3. &quot;Piehole&quot;",
//         "4. Matthew ___ of &quot;The Americans&quot;",
//         "5. I, on the periodic table",
//         "6. College catalog assortment",
//         "7. &quot;Watch it!&quot;",
//         "8. Road goo",
//         "9. What an Uno player has in hand upon crying &quot;Uno!&quot;",
//         "10. Quirky person",
//         "11. Helmut ___, 1980s-&#39;90s German chancellor",
//         "12. Cookie often dipped in milk",
//         "13. ___ Drescher, leader of the 2023 SAG-AFTRA strike",
//         "14. Passing crazes",
//         "22. &quot;Be that as it may ...&quot;",
//         "23. &quot;Beam me up, ___!&quot; (&quot;Star Trek&quot; misquotation)",
//         "24. Birds in a gaggle",
//         "25. Multivitamin stat, for short",
//         "26. Cakewalk",
//         "27. Night before",
//         "28. &quot;Swell!&quot;",
//         "29. Back, to a boatswain",
//         "30. Overly proper",
//         "33. What fireflies and happy faces do",
//         "34. Bit of band equipment",
//         "36. Mindy of &quot;The Mindy Project&quot;",
//         "38. Hot dog topping",
//         "41. Partner of a crossed &quot;t&quot;",
//         "42. Big name in cassette tapes, once",
//         "45. South American grasslands",
//         "47. Not quite on time",
//         "50. Corn cake",
//         "51. Tehran&#39;s land",
//         "52. Roman senator who insisted &quot;Carthage must be destroyed&quot;",
//         "53. Heaven on earth",
//         "54. Look carefully (over)",
//         "55. Hooked on",
//         "56. What you might say as you crack open a beer",
//         "57. Medieval worker",
//         "59. Massive ref."
//       ]
//     },
//     "answers": {
//       "across": [
//         "GETRICH",
//         "TOOKOFF",
//         "AIRHOLE",
//         "ANDORRA",
//         "GRAYDAY",
//         "REDHEAD",
//         "SEPSIS",
//         "COLONS",
//         "NSA",
//         "SAN",
//         "GREENSCREEN",
//         "APED",
//         "SYNOD",
//         "VEGA",
//         "FREAK",
//         "HAT",
//         "REALM",
//         "TIS",
//         "ADOPTME",
//         "TOP",
//         "MELLOW",
//         "YELLOW",
//         "LIT",
//         "MIA",
//         "PICANTE",
//         "POSTITS",
//         "ORANGEDOORHINGE",
//         "NATO",
//         "DEERE",
//         "STIR",
//         "ENOS",
//         "INDEX",
//         "HOFF"
//       ],
//       "down": [
//         "GAGS",
//         "EIRE",
//         "TRAP",
//         "RHYS",
//         "IODINE",
//         "CLASSES",
//         "HEY",
//         "TAR",
//         "ONECARD",
//         "ODDONE",
//         "KOHL",
//         "OREO",
//         "FRAN",
//         "FADS",
//         "ANYHOW",
//         "SCOTTY",
//         "GEESE",
//         "RDA",
//         "SNAP",
//         "EVE",
//         "NEATO",
//         "AFT",
//         "PRIM",
//         "GLOW",
//         "AMP",
//         "KALING",
//         "RELISH",
//         "DOTTEDI",
//         "MEMOREX",
//         "LLANOS",
//         "LATISH",
//         "PONE",
//         "IRAN",
//         "CATO",
//         "EDEN",
//         "PORE",
//         "INTO",
//         "TGIF",
//         "SERF",
//         "OED"
//       ]
//     }
//   }

export const crosswordJsonSchema = z.object({
  title: z.string(),
  date: z.string(),
  grid: z.array(z.string()),
  gridnums: z.array(z.number()),
  circles: z.array(z.number()).nullable(),
  author: z.string().nullable(),
  size: z.object({
    cols: z.number(),
    rows: z.number(),
  }),
  clues: z.object({
    across: z.array(z.string()),
    down: z.array(z.string()),
  }),
  answers: z.object({
    across: z.array(z.string()),
    down: z.array(z.string()),
  }),
})

export type CrosswordJson = z.infer<typeof crosswordJsonSchema>
