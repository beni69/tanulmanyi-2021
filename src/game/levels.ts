import type { LevelConf } from "kaboom";
import k from "./kaboom";

const any = (n: number) => (ch: string) => {
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
        k.origin("bot"),
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
                "1": () => [k.text("helloó!", { font: "cp437" })],
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
        [[], {}],
    ],
    BASE_LVLCONF: LevelConf = {
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
    } as unknown as LevelConf,
    TEXTS: Array<{ [index: string]: string }> = [
        {},
        {
            A: "A hosszú buszút után megérkeztünk első állomásunkra, Hollókőre.",
            B: "Ez a kis falu Magyarország egyetlen UNESCO-s faluja.",
            C: "A 17–18. században kialakított falu a népi építészet és a 20. századot megelőző falusi élet olyan páratlan példája, amelyet sikerült eredeti állapotában megőrizni.",
            D: "Itt megnéztük a várat, amely most felújítás alatt áll, a falu régi részét és a falu múzeumom is meglátogattuk.",
        },
        {
            A: "Hollókő után Aggtelek felé vezetett az utunk.",
            B: "Aggtelek nagyon meglepően az Aggteleki Nemzeti Parkban található és bár magát a várost nem néztük meg, az Aggteleki cseppkőbarlangokat ki nem hagyhattuk.",
            C: "A Baradla-barlang, vöröstói közép túrán vettünk részt, amely nagyjából 100 percet vett igénybe.",
        },
        {
            A: "Telkibánya egy kis falu, Borsod-Abaúj Zemplén megyében adott nekünk szálláshelyet.",
            B: "Telkibánya régebben egy aranyat lelő hely volt, ezt a faluban több hely is jelzi.",
            C: "Emellett van egy kis kápolna, egy kopjafás temető és egy nagyon hangulatos patakparti sétány is a faluban.",
            D: "Mindkét este itt aludtunk és szerintem nagyon jó hangulata volt mind a falunak, mind a szálláshelynek.",
        },
        {
            A: "Vizsoly a már mindenki által hallott, Vizsolyi bibliáról híres.",
            B: "Ebben a kis faluban, amelynek össznépessége nem haladja meg a 900 főt, nyomtatták az első magyar nyelvű bibliát.",
            C: "Megnéztük a Vizsolyi Református templomot és magunk nyomtathatunk egy oldalt a bibliából.",
        },
        {
            A: "Boldogkőváralján megnéztük a várat.",
            B: "A várból a kilátás csodálatos volt és a kis fa erődítmény szerintem sokunk szívét elnyerte.",
            C: "A vár a tatárjárás idején épült és nagyjából ötször nevezték át az 130-as évek első felében.",
        },
        {},
        {
            A: "Széphalom falujából sem láttunk túl sokat, viszont a magyar nyelvújító, Kazinczy Ferenc régi birtokat vagy a mai, Magyar Nyelv Múzeumát megnéztük.",
            B: "Nagyon modern volt az épület és végképp nagyon informatív előadást hallgathattunk végig mind Kazinczy életéről, min a magyar nyelv történetéről.",
        },
        {
            A: "Füzéren a Füzéri várhoz másztunk fel, ez nagyjából egy fél órás túra.",
            B: "A vár aljánál kaptunk egy lapot, amelyre különféle pecséteket kellett gyűjteni.",
            C: "Bár mi ezt a lapot az első megállónál elhagytuk, Benedek szorgosan gyűjtögette végig a pecséteket.",
            D: "A vár belsejében több szoba is volt, mindegyik egy másfajta régi helyiségekbe nyílt.",
            E: "Volt ott borpince, sörpince, virágoskert de még egy belső templom is.",
        },
        {
            A: "Lillafüreden miután megebédeltünk, az osztály kétfelé vált és volt aki elment csónakázni, míg a másik fele megnézte a vízesést Lillafüreden.",
            B: "Mi mindketten a csónakázást választottuk, ezért csak arról van képünk.",
            C: "Nagyjából fél óra volt a csónakázás, de egy felettébb szép környezetben próbálhatjuk ki az evezési képességeinket.",
        },
        {
            A: "Miskolctapolca volt az utolsó állomásunk, ahol nem sok időt töltöttünk sajnos, mert haza kellett időben érjünk.",
            B: "Miskolc városán át buszoztunk, így egész sok mindent láthattunk Miskolcból is.",
            C: "Miskolctapolcára meg főképpen a bob miatt mentünk.",
            D: "Mindenki három kört mehetett és meg vagyok győződve arról, hogy az osztály többségének ez a program tetszett a legjobban.",
        },
    ];
