export const menus=[
    {
      titre: "A Propos",
      stitre:"Découvrez la RVA",
      icon:<svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      smenu: [
        {
          titre:"Qui sommes-nous ?",
          description:"Histrorique de la RVA",
          lien:"/apropos"
        },
        {
          titre:"Mission de la RVA",
          description:"Notre mission",
          lien:"/mission"
        },
        {
          titre:"Structure de la RVA",
          description:"Organigramme de la RVA",
          lien:"#"
        }
       
      ]
    },
    {
      titre: "Actualités",
      stitre:"Toutes nos nouvelles",
      icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M12 17c0-3-2-5-5-5M17 17c0-6-4-10-10-10M7 17.01l.01-.011" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      smenu: [
        {
          titre:"Actualités",
          description:"",
          lien:"/actualites"
        },
        {
          titre:"Évènements",
          description:"",
          lien:"/evenements"
        },
        {
          titre:"Nos projets",
          description:"Les projets en cours et en préparation",
          lien:"/projets"
        },
        {
          titre:"Nos réalisations",
          description:"Projets déjà réalisés",
          lien:"#"
        }
      ]
    },
    {
      titre: "Nos aéroports",
      stitre:"",
      icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      smenu: [
        {
          titre:"Aéroports Internationaux (4)",
          stitre:"Nos aéroports internationaux",
          description:"",
          smenu:[
            {
              titre:"Kinshasa",
              description:"",
              smenu:[
                {
                  titre:"A Propos de l'aeroport",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"/aeroports/internationaux/fzaa"
                },
                {
                  titre:"Trafic",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Services et contact",
                  description:"Les services de l'aeroport",
                  lien:"#"
                }
              ]
            },
            {
              titre:"Lubumbashi",
              description:"",
              smenu:[
                {
                  titre:"A Propos de l'aeroport",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"/aeroports/internationaux/fzqa"
                },
                {
                  titre:"Trafic",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Services et contact",
                  description:"Les services de l'aeroport",
                  lien:"#"
                }
              ]
            },
            {
              titre:"Goma",
              description:"",
              smenu:[
                {
                  titre:"A Propos de l'aeroport",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"/aeroports/internationaux/fzna"
                },
                {
                  titre:"Trafic",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Services et contact",
                  description:"Les services de l'aeroport",
                  lien:"#"
                }
              ]
            },
            {
              titre:"Kisangani",
              description:"",
              smenu:[
                {
                  titre:"A Propos de l'aeroport",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"/aeroports/internationaux/fzic"
                },
                {
                  titre:"Trafic",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Services et contact",
                  description:"Les services de l'aeroport",
                  lien:"#"
                }
              ]
            }
          ]
        },
        {
          titre:"Aéroports Nationaux (17)",
          stitre:"Nos aéroports nationaux",
          description:"",
          lien:"#",
          smenu:[{
            titre:"Afficher la liste",
            description:"",
            lien:"/aeroports/nationaux"
          }],
        },
        {
          titre:"Aérodromes (32)",
          stitre:"Nos aérodomes",
          description:"",
          lien:"#",
          smenu:[{
            titre:"Afficher la liste",
            description:"",
            lien:"/aeroports/aerodromes"
          }],
        }
      ]
    },
    {
      titre: "Appel d'offres",
      stitre:"Appel d'offres & offres d'emplois",
      icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M14 14V6m0 8l6.102 3.487a.6.6 0 00.898-.52V3.033a.6.6 0 00-.898-.521L14 6m0 8H7a4 4 0 01-4-4v0a4 4 0 014-4h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 01-3.92.56z" stroke="#fb6a09" stroke-width="1.5"></path></svg>,
      smenu: [
        {
          titre:"Appel d'offre",
          description:"",
          lien:"/appel-offre"
        },
        {
          titre:"Offres d'emploi",
          description:"Opportunités d'emploi à la RVA",
          lien:"#"
        }
      ]
    },
    {
      titre: "Services RVA",
      stitre:"",
      icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M9.019 9A6.5 6.5 0 1115 14.981M8.5 22a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM22 17a3 3 0 01-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 013-3h2m0 0L5 6m2-2L5 2" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      smenu: [
        {
          titre:"Nos principaux services ",
          stitre:"",
          description:"",
          smenu:[
            {
              titre:"Navigation aérienne",
              description:"",
              smenu:[
                {
                  titre:"ATM",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"#"
                },
                {
                  titre:"AIS",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Meteo",
                  description:"Les services de l'aeroport",
                  lien:"#"
                },
                {
                  titre:"ASM",
                  description:"Les services de l'aeroport",
                  lien:"#"
                },
                {
                  titre:"PANOPS",
                  description:"Les services de l'aeroport",
                  lien:"#"
                },
                {
                  titre:"AIP",
                  description:"Service AIP",
                  lien:"#"
                }
              ]
            },
            {
              titre:"Technique",
              description:"",
              smenu:[
                {
                  titre:"CNS",
                  description:"Toutes les infos sur l'aéroport",
                  lien:"#"
                },
                {
                  titre:"ADS-B",
                  description:"",
                  lien:"#"
                }
              ]
            },
            {
              titre:"Gestion aéroportuaire",
              description:"",
              smenu:[
                {
                  titre:"Services aéroportuaires",
                  description:"",
                  lien:"#"
                },
                {
                  titre:"Trafic",
                  description:"Informations sur les vols",
                  lien:"#"
                },
                {
                  titre:"Services et contact",
                  description:"Les services de l'aeroport",
                  lien:"#"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      titre: "Voyager",
      stitre:"Conditions de voyage",
      icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M10.5 4.5v4.667a.6.6 0 01-.282.51l-7.436 4.647a.6.6 0 00-.282.508v.9a.6.6 0 00.746.582l6.508-1.628a.6.6 0 01.746.582v2.96a.6.6 0 01-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 01.214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 01-.205-.452v-2.96a.6.6 0 01.745-.582l6.51 1.628a.6.6 0 00.745-.582v-.9a.6.6 0 00-.282-.508l-7.436-4.648a.6.6 0 01-.282-.509V4.5a1.5 1.5 0 00-3 0z" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      smenu: [
        {
          titre:"Mesure COVID-19",
          description:"",
          lien:"#"
        },
        {
          titre:"Bagage",
          description:"Objets interdits et formalités bagage",
          lien:"#"
        },
        {
          titre:"Formalités de voyage",
          description:"Comment préparer son voyage",
          lien:"#"
        },
        {
          titre:"Enregistrement",
          description:"Que dois-je savoir avant de m'enregistrer et d'enregistrer ma valise",
          lien:"#"
        },
        {
          titre:"Contrôle",
          description:"Documents utiles à votre voyage",
          lien:"#"
        },
        {
          titre:"Assistance specifique",
          description:"Formalités pour voyager avec un enfant, un bébé ou un animal de compagnie",
          lien:"#"
        }
      ]
    }
  ];

export const style={
  bg:"#16243d"
}