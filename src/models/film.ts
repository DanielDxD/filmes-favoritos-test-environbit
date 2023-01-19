export interface IFilm {
    id: number;
    name: string;
    director: string;
    country: string;
    releasedYear: number;
    imageUrl: string;
}

export const films: IFilm[] = [
    {
        id: 1,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BBFCCAE666B43C90466E4EFC66D959D2C8348DA9F9FCFE62E633C79B337F9166/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Irmãos Russo",
        name: "Vingadores Guerra Infinita",
        releasedYear: 2018
    },
    {
        id: 2,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/79C8D57C3AEC4FE8E46F1E22F02523EEC968FFEE3E3E7FD9DBE4E16B6C0A0157/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Ryan Coogler",
        name: "Pantera Negra",
        releasedYear: 2018
    },
    {
        id: 3,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD72115B9CDAE873B2234BD0908CEF7B45A2D9AD9C66C699239B46E582F70A8B/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Jon Favreau",
        name: "Homem de Ferro",
        releasedYear: 2008
    },
    {
        id: 4,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29859918D787A9A644D348B59AB90854C58DFD65DE68C50B9FBA28C423405167/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Angus MacLane",
        name: "Lightyear",
        releasedYear: 2022
    },
    {
        id: 5,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F75F013DECACEDF74E589AD665E4B55DC1A0C18F29D794BCF792E8633EFBF36E/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Taika Waititi",
        name: "Thor: Amor e Trovão",
        releasedYear: 2022
    },
    {
        id: 6,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E4786BAF64F2090F5B3147FC2ED1E2C8B4D6D49628246EB22E2BE3DCD8DF360B/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Domee Shi",
        name: "Red: Crescer é uma fera",
        releasedYear: 2022
    },
    {
        id: 7,
        imageUrl: "https://lumiere-a.akamaihd.net/v1/images/1920x1080_comclassifica_231_227_o_a7ebb7a4.png?region=0,0,1920,1080",
        country: "Estados Unidos",
        director: "Pete Docter",
        name: "Soul",
        releasedYear: 2020
    },
    {
        id: 8,
        imageUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97773D3AD23DD9942EE4EDDB26E775D192E7AC6B038E459A6CF91D0107BB33AF/scale?width=1200&aspectRatio=1.78&format=jpeg",
        country: "Estados Unidos",
        director: "Josh Cooley",
        name: "Toy Story 4",
        releasedYear: 2019
    }
];
