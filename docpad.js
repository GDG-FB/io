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
      link: "http://eventick.com.br"
    },

      // "Fork me on GitHub", if you don't want this, just remove the forkButton property
      //  forkButton: {
      //    repository: "https://github.com/braziljs/conf-boilerplate"
      //      },

      
    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
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
        photo: "themes/yellow-swan/img/speaker.jpg",
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
        time: "19h30"
      },
    {
        name: "Abertura Keynote Local",
        time: "19h40"
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
          time: "20h00"
        }
      },

      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};