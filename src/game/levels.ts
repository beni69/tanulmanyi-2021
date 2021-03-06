import k from "./kaboom";
import type { LvlConf } from "./types";

const any = (n: number) => (ch: string) => {
    if (ch === " ") return;

    // number = picture, letter = sign
    if (!isNaN(parseInt(ch))) {
        return [k.sprite(`${n}-${ch}`), k.origin("bot"), k.scale(0.1)];
    }

    const msg = TEXTS[n]?.[ch];
    if (!msg) return;
    return [
        k.sprite("sign"),
        k.area({}),
        k.scale(0.2),
        k.origin("center"),
        "sign",
        { msg },
    ];
};

export const LEVELS: [string[], any][] = [
        [
            [
                "  1  2                  ",
                "     3     4            ",
                "                     @  ",
                "========================",
            ],
            {
                // any: any(0),
                height: 64,
                "1": () => [k.text("helloó!")],
                "2": () => [k.text("mozogj a nyilakkal"), k.scale(0.75)],
                "3": () => [k.text("vagy kattints"), k.scale(0.7)],
                "4": () => [k.text("erre ->"), k.scale(0.9)],
            },
        ],
        [
            [
                "            0    1    2    3    4            ",
                "                                             ",
                "         A    B    C    D                 @  ",
                "=============================================",
            ],
            {
                any: any(1),
            },
        ],
        [
            [
                "            0    1    2    3    4            ",
                "                                             ",
                "             A    B    C    D             @  ",
                "=============================================",
            ],
            {
                any: any(2),
                background: { name: "bg-2", width: 1639, height: 1088 },
            },
        ],
        [
            [
                "            0    1    2    3                 ",
                "                                             ",
                "             A    B    C    D             @  ",
                "=============================================",
            ],
            {
                any: any(3),
            },
        ],
        [
            [
                "            0    1    2    3    4    5       ",
                "                                             ",
                "             A    B    C                  @  ",
                "=============================================",
            ],
            {
                any: any(4),
            },
        ],
        [
            [
                "            0    1    2    3    4            ",
                "                                             ",
                "             A    B    C                  @  ",
                "=============================================",
            ],
            {
                any: any(5),
            },
        ],
        [
            [
                "            0    1    2                      ",
                "                                             ",
                "             A    B    C                  @  ",
                "=============================================",
            ],
            {
                any: any(6),
            },
        ],
        [
            [
                "            0    1    2    3                 ",
                "                                             ",
                "             A    B                       @  ",
                "=============================================",
            ],
            {
                any: any(7),
            },
        ],
        [
            [
                "            0    1    2    3    4            ",
                "                                             ",
                "             A    B    C    D    E        @  ",
                "=============================================",
            ],
            {
                any: any(8),
            },
        ],
        [
            [
                "            0    1    2                      ",
                "                                             ",
                "             A    B    C                  @  ",
                "=============================================",
            ],
            {
                any: any(9),
            },
        ],
        [
            [
                "                 0                           ",
                "                                             ",
                "             A  B  C  D             @        ",
                "=============================================",
            ],
            {
                any: any(10),
            },
        ],
        [
            [
                "              0                              ",
                "                                             ",
                "             A  B                            ",
                "=============================================",
            ],
            {
                any: any(11),
            },
        ],
    ],
    BASE_LVLCONF: LvlConf = {
        width: 128,
        height: 16,
        "=": () => [
            k.rect(128, 48),
            k.outline(4),
            k.solid(),
            k.area({}),
            k.color(127, 200, 255),
        ],
        "@": () => [
            k.sprite("bus"),
            k.area({}),
            k.body(),
            k.scale(0.69),
            k.origin("bot"),
            "bus",
        ],
        background: { name: "bg-1", width: 2048, height: 1024 },
    } as unknown as LvlConf,
    TEXTS: Array<{ [index: string]: string }> = [
        {},
        {
            A: "A hosszú buszút után megérkeztünk elso állomásunkra, Hollókore.",
            B: "Ez a kis falu Magyarország egyetlen UNESCO-s faluja.",
            C: "A 17–18. században kialakított falu a népi építészet és a 20. századot megelozo falusi élet olyan páratlan példája, amelyet sikerült eredeti állapotában megorizni.",
            D: "Itt megnéztük a várat, amely most felújítás alatt áll, a falu régi részét és a falu múzeumom is meglátogattuk.",
        },
        {
            A: "Hollóko után Aggtelek felé vezetett az utunk.",
            B: "Aggtelek nagyon meglepoen az Aggteleki Nemzeti Parkban található és bár magát a várost nem néztük meg, az Aggteleki cseppkobarlangokat ki nem hagyhattuk.",
            C: "A Baradla-barlang, vöröstói közép túrán vettünk részt, amely nagyjából 100 percet vett igénybe.",
        },
        {
            A: "Telkibánya egy kis falu, Borsod-Abaúj Zemplén megyében adott nekünk szálláshelyet.",
            B: "Telkibánya régebben egy aranyat lelo hely volt, ezt a faluban több hely is jelzi.",
            C: "Emellett van egy kis kápolna, egy kopjafás temeto és egy nagyon hangulatos patakparti sétány is a faluban.",
            D: "Mindkét este itt aludtunk és szerintem nagyon jó hangulata volt mind a falunak, mind a szálláshelynek.",
        },
        {
            A: "Vizsoly a már mindenki által hallott, Vizsolyi bibliáról híres.",
            B: "Ebben a kis faluban, amelynek össznépessége nem haladja meg a 900 fot, nyomtatták az elso magyar nyelvu bibliát.",
            C: "Megnéztük a Vizsolyi Református templomot és magunk nyomtathatunk egy oldalt a bibliából.",
        },
        {
            A: "Boldogkováralján megnéztük a várat.",
            B: "A várból a kilátás csodálatos volt és a kis fa erodítmény szerintem sokunk szívét elnyerte.",
            C: "A vár a tatárjárás idején épült és nagyjából ötször nevezték át az 130-as évek elso felében.",
        },
        {
            A: "Sárospatakon egy kiadós ebéd után megnéztük a Református Kollégium Könyvtárát, amely több ezer régebbnél régebbi könyvvel rendelkezik.",
            B: " Egyik legjobban megmaradt könyvük 1629-ben íródott.",
            C: "Egy csodálatos könyvtár volt és egy kihagyhatatlan élmény.",
        },
        {
            A: "Széphalom falujából sem láttunk túl sokat, viszont a magyar nyelvújító, Kazinczy Ferenc régi birtokat vagy a mai, Magyar Nyelv Múzeumát megnéztük.",
            B: "Nagyon modern volt az épület és végképp nagyon informatív eloadást hallgathattunk végig mind Kazinczy életérol, min a magyar nyelv történetérol.",
        },
        {
            A: "Füzéren a Füzéri várhoz másztunk fel, ez nagyjából egy fél órás túra.",
            B: "A vár aljánál kaptunk egy lapot, amelyre különféle pecséteket kellett gyujteni.",
            C: "Bár mi ezt a lapot az elso megállónál elhagytuk, Benedek szorgosan gyujtögette végig a pecséteket.",
            D: "A vár belsejében több szoba is volt, mindegyik egy másfajta régi helyiségekbe nyílt.",
            E: "Volt ott borpince, sörpince, virágoskert de még egy belso templom is.",
        },
        {
            A: "Lillafüreden miután megebédeltünk, az osztály kétfelé vált és volt aki elment csónakázni, míg a másik fele megnézte a vízesést Lillafüreden.",
            B: "Mi mindketten a csónakázást választottuk, ezért csak arról van képünk.",
            C: "Nagyjából fél óra volt a csónakázás, de egy felettébb szép környezetben próbálhatjuk ki az evezési képességeinket.",
        },
        {
            A: "Miskolctapolca volt az utolsó állomásunk, ahol nem sok idot töltöttünk sajnos, mert haza kellett idoben érjünk.",
            B: "Miskolc városán át buszoztunk, így egész sok mindent láthattunk Miskolcból is.",
            C: "Miskolctapolcára meg foképpen a bob miatt mentünk.",
            D: "Mindenki három kört mehetett és meg vagyok gyozodve arról, hogy az osztály többségének ez a program tetszett a legjobban.",
        },
        {
            A: "Köszönjük a figyelmet!",
            B: "Készítették: Vánky Laura és Varga Benedek",
        },
    ],
    IMAGES: string[][] = [
        [],
        [
            "DSC_0820.jpg",
            "DSC_0821.jpg",
            "DSC_0809.jpg",
            "DSC_0879.jpg",
            "DSC_0831.jpg",
        ],
        [
            "20210908_133754.jpg",
            "20210908_140931.jpg",
            "20210908_145632.jpg",
            "20210908_144452.jpg",
            "20210908_154207.jpg",
        ],
        ["DSC_0935.jpg", "DSC_0922.jpg", "DSC_0933.jpg", "DSC_0960.jpg"],
        [
            "DSC_0074.jpg",
            "DSC_0029.jpg",
            "DSC_0049.jpg",
            "DSC_0094.jpg",
            "DSC_0113.jpg",
            "DSC_0144.jpg",
        ],
        [
            "hihi-4.jpg",
            "hihi-2 (1).jpg",
            "hihi-7.jpg",
            "DSC_0151.jpg",
            "DSC_0155.jpg",
        ],
        ["DSC_0360.jpg", "DSC_0310.jpg", "DSC_0323.jpg"],
        ["DSC_0419.jpg", "DSC_0444.jpg", "DSC_0399.jpg", "DSC_0400.jpg"],
        [
            "DSC_0591.jpg",
            "DSC_0608.jpg",
            "DSC_0656.jpg",
            "DSC_0632.jpg",
            "DSC_0628.jpg",
        ],
        ["20210910_155946.jpg", "20210910_155847.jpg", "20210910_155928.jpg"],
        ["1631291205956.jpg"],
        ["DSC_1030.jpg"],
    ];
