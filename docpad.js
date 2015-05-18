module.exports = {

    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "Google I/O Extended - Francisco Beltrão",
            description: "Conference description",
            date: "29 de Maio",
            // If your event is free, just comment this line
            // price: "FREE!",
            venue: "CIT - Centro de Inovação Tecnológica",
            address: "Tv. Equador, 59",
            city: "Francisco Beltrão",
            state: "Paraná"
        },

        // The Call To Action button at the header,
        // If you don't want this, just remove the callToAction property.
        callToAction: {
            text: "Inscreva-se!",
            link: "https://www.sympla.com.br/google-io-extended---francisco-beltrao__34423"
        },

        // "Fork me on GitHub", if you don't want this, just remove the forkButton property
        //  forkButton: {
        //    repository: "https://github.com/braziljs/conf-boilerplate"
        //      },


        // Site info
        site: {
            theme: "yellow-swan",
            url: "http://gdg-fb.github.io/io/",
            //googleanalytics: "UA-33656081-1"
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
      'about',
      'location',
      'speakers',
      'schedule',
    //  'sponsors',
      'partners'
      //'contact'
    ],

        // Labels which you can translate to other languages
        labels: {
            about: "About",
            location: "Location",
            speakers: "Speakers",
            schedule: "Schedule",
            sponsors: "Sponsors",
            partners: "Partners",
            contact: "Contact"
        },

        // The entire schedule
        schedule: [
            {
                name: "Google",
                photo: "themes/yellow-swan/img/speakers/io.png",
                bio: "A Google I/O é uma conferência anual de desenvolvedores com foco em software realizada pelo Google em San Francisco, Califórnia. Na Google I/O apresentam-se keynotes altamente técnicos, sessões focadas em desenvolvimento web, e aplicações empresariais móveis com o tecnologias Open-source do Google, como Android , Chrome, Chrome OS, APIs do Google , o Google Web Toolkit , App Engine, e muito mais!",
                company: "Google Inc.",
                link: {
                    href: "https://twitter.com/google",
                    text: "@Google"
                },
                presentation: {
                    title: "Google I/O Main Keynote",
                    description: "Junte-se a nós para aprender sobre as inovações dos produtos e plataformas do Google, começando com um pontapé inicial ao vivo do Vice- Presidente Sênior de Produtos, Sundar Pichai.",
                    time: "13h00"
                }
      },
            {
                name: "Check-in",
                description: "Recepção do público e assinatura de presenças.",
                time: "19h15"
      },
            {
                name: "Abertura Keynote Local",
                description: "Abertura de 10 minutos falando sobre as iniciativas e apresentando o evento.",
                time: "19h30"
      },
            {
                name: "Guilherme Berghauser",
                photo: "themes/yellow-swan/img/speakers/torto.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Mozilla Foundation",
                link: {
                    href: "http://twitter.com/tortoyo",
                    text: "@tortoyo"
                },
                presentation: {
                    title: "Node.JS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "19h40"
                }
      },
            {
                name: "Wellington Mitrut",
                photo: "themes/yellow-swan/img/speakers/mitrut.jpeg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "GDG Francisco Beltrão",
                link: {
                    href: "http://twitter.com/wmitrut",
                    text: "@wmitrut"
                },
                presentation: {
                    title: "Material Design - Bold, graphic, intentional",
                    description: "Material é Uma metáfora, é uma teoria unificadora de um espaço racionalizado e de movimento. O material é fundamentado na realidade tátil, inspirado no estudo de papel e tinta, mas tecnologicamente avançado e aberto à imaginação e magia",
                    time: "20h10"
                }
      },
            {
                name: "José Luiz Tafarel",
                photo: "themes/yellow-swan/img/speakers/tafarel.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Codoks",
                link: {
                    href: "http://twitter.com/jltafarel",
                    text: "@jltafarel"
                },
                presentation: {
                    title: "Integração android e hardware",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "20h40"
                }
      },
            {
                name: "Leandro Parazito",
                photo: "themes/yellow-swan/img/speakers/para.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "GDG Pato Branco",
                link: {
                    href: "http://twitter.com/parazito",
                    text: "@parazito"
                },
                presentation: {
                    title: "Angular JS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "21h10"
                }
      },
            {
                name: "Jonathan Santos",
                photo: "themes/yellow-swan/img/speakers/joridos.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "Ceicom",
                link: {
                    href: "http://twitter.com/jorids",
                    text: "@joridos"
                },
                presentation: {
                    title: "Polymer",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "21h40"
                }
      },
            {
                name: "Robison Cris Brito (A CONFIRMAR) ",
                photo: "themes/yellow-swan/img/speakers/brito.JPG",
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                company: "UTFPR",
                link: {
                    href: "http://twitter.com/robisonbrito",
                    text: "@robisonbrito"
                },
                presentation: {
                    title: "( A Confirmar )",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
                    time: "22h10"
                }
      },

            {
                name: "Encerramento",
                time: "22h40"
      },

    ],

        // List of Sponsors
        sponsors: [
                  {
                name: "Google",
                logo: "themes/yellow-swan/img/sponsors/google.png",
                url: "http://google.com"
      },
            {
                name: "SEBRAE PR",
                logo: "themes/yellow-swan/img/sponsors/sebrae.png",
                url: "http://www.sebraepr.com.br/sites/PortalSebrae"
      },
              {
                name: "WMITRUT - Tecnologia e Design",
                logo: "themes/yellow-swan/img/sponsors/wmitrut.png",
                url: "http://wmitrut.com"
      }
    ],

        // List of Partners
        partners: [
              {
                name: "Google",
                logo: "themes/yellow-swan/img/sponsors/google.png",
                url: "http://google.com"
      },
              {
                name: "Google Developers",
                logo: "themes/yellow-swan/img/partners/googledev.png",
                url: "http://developers.google.com/"
      },
            {
                name: "GDG Pato Branco",
                logo: "themes/yellow-swan/img/partners/gdgpb.png",
                url: "http://gdgpatobranco.org/"
      },
         {
                name: "SEBRAE PR",
                logo: "themes/yellow-swan/img/partners/sebrae.png",
                url: "http://www.sebraepr.com.br/sites/PortalSebrae"
      },
                {
                name: "ACEFB",
                logo: "themes/yellow-swan/img/partners/acefb.png",
                url: "http://www.acefb.com.br/"
      },
                      {
                name: "NUBETEC",
                logo: "themes/yellow-swan/img/partners/nubetec.png",
                url: "https://www.facebook.com/nubetec"
      },
                            {
                name: "GBG Sudoeste",
                logo: "themes/yellow-swan/img/partners/gbg.png",
                url: "https://plus.google.com/communities/105251408349562568852"
      },
             {
                name: "PatoLivre",
                logo: "themes/yellow-swan/img/partners/patolivre.png",
                url: "http://patolivre.tk/"
      },
                       {
                name: "WMITRUT - Tecnologia e Design",
                logo: "themes/yellow-swan/img/partners/wmitrut.png",
                url: "http://wmitrut.com"
      },
                                {
                name: "Invent.to - Pesquisa e Desenvolvimento",
                logo: "themes/yellow-swan/img/partners/inventto.png",
                url: "http://invent.to"
      },
            {
                name: "CEICOM - Tecnologia Web",
                logo: "themes/yellow-swan/img/partners/ceicom.png",
                url: "www.ceicom.com.br"
      },
                                     {
                name: "Hector Felipe Cabral",
                logo: "themes/yellow-swan/img/partners/hfc.png",
                url: "http://www.hectorfelipecabral.com.br/"
      }
        
    ],

        // Theme path
        getTheme: function () {
            return "themes/" + this.site.theme;
        },

        // Site Path
        getUrl: function () {
            return this.site.url;
        }
    }
};