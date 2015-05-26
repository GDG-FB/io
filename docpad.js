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
                bio: "Estudante de Sistema de Informação pela UTFPR – Pato Branco, voluntário da Mozilla (Mozillian), participa do projeto Firefox Student Ambassador,membro do grupo de usuários de Software Livre PatoLivre, Sócio-Fundador da QiLeverage empresa especializada no desenvolvimento de softwares educacionais, foi professor durante sete anos e nos últimos cinco anos se dedica ao desenvolvimento web e mobile, em especial com Apache Cordova.",
                company: "Mozilla Foundation",
                link: {
                    href: "http://twitter.com/tortoyo",
                    text: "@tortoyo"
                },
                presentation: {
                    title: "Node.JS",
                    description: "Node.js é um servidor javascript que utiliza o motor V8 do google, nessa palestra você vai entender como ele funciona e ver na prática consumindo dados de um Arduino.",
                    time: "19h40"
                }
      },
            {
                name: "Wellington Mitrut",
                photo: "themes/yellow-swan/img/speakers/mitrut.jpeg",
                bio: "Fundador do Google Developers Group Francisco Beltrão, formado em Sistemas de Informação pela UNIPAR - Universidade Paranaense, apaixonado por design e por descobrir como funcionam as coisas, sócio da WMITRUT - tecnologia e design, trabalhando a mais de 3 anos com design e desenvolvimento web e mobile por uma internet mais bonita e coesa.",
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
                bio: "José Luiz Tafarel é graduando do curso de sistemas de informação na UNIPAR Francisco Beltrão, sócio-fundador da Codoks e também atua como desenvolvedor Android na Tagon8. Trabalha com a plataforma Android a aproximadamente 3 anos.",
                company: "Codoks",
                link: {
                    href: "http://twitter.com/jltafarel",
                    text: "@jltafarel"
                },
                presentation: {
                    title: "Integração android e hardware",
                    description: "Nesta palestra serão apresentados os conceitos de integração com hardware utlizando o Android, mais especificamente uma estrutura implementada a partir do Android 3.1, chamada 'USB Host'.",
                    time: "20h40"
                }
      },
            {
                name: "Leandro Parazito",
                photo: "themes/yellow-swan/img/speakers/para.jpg",
                bio: "Desenvolvedor web front-end. Entusiasta de tecnologias voltadas para plataforma web. Acredita que a web é o futuro.",
                company: "GDG Pato Branco",
                link: {
                    href: "http://twitter.com/parazito",
                    text: "@parazito"
                },
                presentation: {
                    title: "Angular JS",
                    description: "Começando o desenvolvimento de web apps com AngularJS",
                    time: "21h10"
                }
      },
            {
                name: "Jonathan Santos",
                photo: "themes/yellow-swan/img/speakers/joridos.jpg",
                bio: "Cozinheiro da internet, sempre em busca de novas maneiras de cozinhar.",
                company: "Ceicom",
                link: {
                    href: "http://twitter.com/jorids",
                    text: "@joridos"
                },
                presentation: {
                    title: "Webcomponents: Basic Concepts",
                    description: "Até agora, você pode ter ouvido um monte de coisas sobre Web Components. Algumas pessoas dizem que é a terra prometida, outros dizem que isso é exagero. Se você ainda não tem certeza sobre o que exatamente são os Web Components ou até mesmo o 'por que' você deve se preocupar com isso, esta palestra é para você.",
                    time: "21h40"
                }
      },
            {
                name: "Wellton Costa",
                photo: "themes/yellow-swan/img/speakers/wellton.jpg",
                bio: "Wellton é doutorando em engenharia elétrica e informática industrial com ênfase em inteligência artificial para web; Atualmente é professor do magistério superior (graduação) e professor no curso de especialização, ambos no Departamento de informática da UTFPR",
                company: "UTFPR",
                link: {
                    href: "http://twitter.com/WelltonCosta",
                    text: "@WelltonCosta"
                },
                presentation: {
                    title: "ChromeOS e Software Livre",
                    description: " A palestra está dividida em três partes: A primeira fala sobre o ChromeBook, seu sistema operacional ChromeOS e como faze-lo se transformar no modulo desenvolvedor. A segunda parte fala sobre Software Livre e qual o envolvimento do Google com este mundo (servidores, ambientes de desenvolvimento, produtos...). A terceira parte fala sobre drones e como controla-lo com um ChromeBook.",
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
                name: "CITFEB",
                logo: "themes/yellow-swan/img/partners/citfeb.png",
                url: "#"
      },
                                   {
                name: "SEMDETEC",
                logo: "themes/yellow-swan/img/partners/semdetec.png",
                url: "#"
      },
                                             {
                name: "UTFPR",
                logo: "themes/yellow-swan/img/partners/utfpr.png",
                url: "http://www.utfpr.edu.br/"
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
                name: "Stickers Devs",
                logo: "themes/yellow-swan/img/partners/stickers.png",
                url: "http://www.stickersdevs.com.br/"
      },
                                     {
                name: "Hector Felipe Cabral",
                logo: "themes/yellow-swan/img/partners/hfc.png",
                url: "http://www.hectorfelipecabral.com.br/"
      },
                                    {
                name: "ADHOC - 3D Productions",
                logo: "themes/yellow-swan/img/partners/adhoc.png",
                url: "https://www.facebook.com/adhoc3d"
      },
                                         {
                name: "ParseInt Sistemas",
                logo: "themes/yellow-swan/img/partners/parseint.png",
                url: "http://parseint.com.br/"
      },
                                       {
                name: "Cisterlabs - Fábrica de software",
                logo: "themes/yellow-swan/img/partners/cisterlabs.png",
                url: "http://www.cisterlabs.com.br/"
      },
                                   {
                name: "Zombie Zoid Zenith",
                logo: "themes/yellow-swan/img/partners/zzz.png",
                url: "https://www.facebook.com/adhoc3d"
      },
                                       {
                name: "Plex Coworking",
                logo: "themes/yellow-swan/img/partners/plex.png",
                url: "http://www.plexcoworking.com.br/"
      },
                             {
                name: "Megasult",
                logo: "themes/yellow-swan/img/partners/megasult.png",
                url: "http://www.megasult.com.br/"
      },
                  {
                name: "A.inova",
                logo: "themes/yellow-swan/img/partners/ainova.png",
                url: "http://www.ainovaconsultores.com.br/"
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