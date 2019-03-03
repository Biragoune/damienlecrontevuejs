const movies = [
    {
        id: 0,
        title: "Dragons",
        director: {
            name: 'Dean Deblois, Chris Sanders',
            birthDate : '7 Juin 1970, 12/03/1962'
        },
        note : 5,
        year : '15 Octobre 2010',
        genre : 'Film d\'animation',
        synopsis : 'L\'histoire d\'Harold, jeune Viking peu à son aise dans sa tribu où combattre les dragons est le sport national. Sa vie va être bouleversée par sa rencontre avec un dragon qui va peu à peu amener Harold et les siens à voir le monde d\'un point de vue totalement différent.',
        affiche : '/../../static/affiche/affiche_dragons.jpg'
    },
    {
        id: 1,
        title: "Dragons 2",
        director: {
            name: 'Dean Deblois, Chris Sanders',
            birthDate : '7 Juin 1970, 12/03/1962'
        },
        note : 5,
        year : '2 Juillet 2014',
        genre : 'Film d\'animation',
        synopsis : 'Les côtes scandinaves. Voilà maintenant cinq ans que les Vikings ont apprivoisé les dragons. Fils du chef du clan, le jeune Harold n\'aime rien tant que chevaucher dans les airs sur le dos de son inséparable compagnon, le dragon Krokmou. Il va lui falloir mettre la pédale douce car son père juge qu\'il est temps de prendre sa retraite et de nommer son fils à sa succession.',
        affiche : '/../../static/affiche/affiche_dragons2.jpg'
    },
    {
        id: 2,
        title: "Dragons 3",
        director: {
            name: 'Dean Deblois, Chris Sanders',
            birthDate : '7 Juin 1970, 12/03/1962'
        },
        note : 5,
        year : '6 Février 2019',
        genre : 'Film d\'animation',
        synopsis : 'Harold est maintenant le chef de Berk au côté d’Astrid et Krokmou, en tant que dragon, est devenu le leader de son espèce. Ils réalisent enfin leurs rêves de vivre en paix entre vikings et dragons. Mais lorsque l’apparition soudaine d’une Furie Eclair coïncide avec la plus grande menace que le village n’ait jamais connue, Harold et Krokmou sont forcés de quitter leur village pour un voyage dans un monde caché dont ils n’auraient jamais soupçonnés l’existence. Alors que leurs véritables destins se révèlent, dragons et vikings vont se battre ensemble jusqu’au bout du monde pour protéger tout ce qu’ils chérissent.',
        affiche : '/../../static/affiche/affiche_dragons3.jpg'
    },
    {
        id: 3,
        title: "Ratatouille",
        director: {
            name: 'Brad Bird',
            birthDate : '24/09/1957'
        },
        note : 5,
        year : '8 Juillet 2007',
        genre : 'Film d\'animation',
        synopsis : 'Rémy n\'est pas un jeune rat comme les autres. Il a un véritable don, celui de cuisiner, marier les saveurs, découvrir de nouveaux arômes et un rêve : devenir un grand chef et le premier rat de goût. Il est prêt à tout pour vivre sa passion, notamment venir s\'installer avec sa famille sous les cuisines d\'un des plus grands restaurants parisiens : celui d\'Auguste Gusteau, la star des fourneaux.',
        affiche : '/../../static/affiche/affiche_ratatouille.jpg'
    },  
    {
        id: 4,
        title: "Coco",
        director: {
            name: 'Lee Unkrich, Adrian Molina',
            birthDate : '8 août 1967, 23 août 1985'
        },
        note : 5,
        year : '27 Octobre 2017',
        genre : 'Film d\'animation',
        synopsis : 'Depuis plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un endroit aussi étonnant que coloré : le Pays des Morts. Là, il se lie d\'amitié avec Hector, un gentil garçon mais un peu filou sur les bords.',
        affiche : '/../../static/affiche/affiche_coco.jpg'
    },
    {
        id: 5,
        title: "Vice-versa",
        director: {
            name: 'Pete Docter',
            birthDate : '9 Octobre 1968'
        },
        note : 5,
        year : '17 Juin 2015',
        genre : 'Film d\'animation',
        synopsis : 'Au Quartier Général, le centre de contrôle situé dans la tête de la petite Riley, 11 ans, cinq émotions sont au travail. À leur tête, Joie, débordante d\'optimisme et de bonne humeur, veille à ce que Riley soit heureuse. Peur se charge de la sécurité, Colère s\'assure que la justice règne, et Dégoût empêche Riley de se faire empoisonner la vie - au sens propre comme au figuré. Quant à Tristesse, elle n\'est pas très sûre de son rôle.',
        affiche : '/../../static/affiche/affiche_viceversa.jpg'
    },
]

exports.movies = movies