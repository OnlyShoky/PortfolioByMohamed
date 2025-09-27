// src/app/core/services/translation.service.ts
import { Injectable, signal } from '@angular/core';

interface Translations {
  [key: string]: {
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal('en');
  
  private translations: Translations = {
    en: {
      nav: {
        home: "Home",
        projects: "Projects", 
        career: "Career",
        blog: "Blog"
      },
      intro: {
        greeting: "Hey there!, I'm-",
        name1: "Mohamed",
        name2: "El Mourabit.",
        dynamicRoles: ["Software Engineer .", "AI Engineer .", "Robotics Engineer ."],
        description: "With a passion for programming. Driven by curiosity, I bring innovation and technical expertise to every project.",
        about: "🤖 I am a passionate robotics engineer and software creator, always exploring new technologies.",
        focus: "🚀 Currently focused on AI, C++, Python, and full-stack development.",
        github: "Github",
        linkedin: "Linkedin",
        downloadCV: "Download CV"
      },
      about: {
        title: "⚡ About Me",
        paragraph1: "I hold a degree in <strong>Robotics Engineering</strong> and a <strong>DUT in Electrical Engineering and Industrial Computing</strong>. This educational background has given me a solid understanding of both low-level and high-level programming. Curiosity drives me, and I am passionate about <b>creating and programming</b>—whether it's for robots, machines, or software design.",
        paragraph2: "\nBesides my technical skills, I am also deeply invested in exploring the world. I love traveling, experiencing new cultures, and meeting people from different backgrounds. Volleyball is one of my favorite sports, and I enjoy staying active and engaged.",
        paragraph3: "\nCurrently, my focus is on expanding my expertise in <strong>Artificial Intelligence</strong> and robotics. I am actively learning and improving in <strong>C++, Python, and TypeScript.</strong> I'm also on an exciting journey to master <b>full-stack web development</b>, building skills in both front-end and <b>back-end technologies.</b>"
      },
      career: {
        title: "Career & Studies",
        experience: "Experience",
        education: "Education"
      },
      projects: {
        title: "All Creative Works.",
        description: "Here's some of my projects that I have worked on.",
        explore: "Explore more →"
      },
      contact: {
        title: "Keep in Touch.",
        subtitle: "Feel free to connect with me.",
        sendEmail: "Send Email",
        linkedin: "Linkedin",
        downloadCV: "Download CV"
      }
    },
    es: {
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        career: "Carrera", 
        blog: "Blog"
      },
      intro: {
        greeting: "¡Hola!, Soy-",
        name1: "Mohamed",
        name2: "El Mourabit.",
        dynamicRoles: ["Ingeniero de Software .", "Ingeniero de IA .", "Ingeniero en Robótica ."],
        description: "Con una pasión por la programación. Impulsado por la curiosidad, aporto innovación y experiencia técnica a cada proyecto.",
        about: "🤖 Soy un apasionado ingeniero en robótica y creador de software, siempre explorando nuevas tecnologías.",
        focus: "🚀 Actualmente enfocado en IA, C++, Python y desarrollo full-stack.",
        github: "Github",
        linkedin: "Linkedin", 
        downloadCV: "Descargar CV"
      },
      about: {
        title: "⚡ Sobre Mí",
        paragraph1: "Poseo un título en <strong>Ingeniería en Robótica</strong> y un <strong>DUT en Ingeniería Eléctrica e Informática Industrial</strong>. Esta formación me ha dado una sólida comprensión tanto de la programación de bajo nivel como de alto nivel. La curiosidad me impulsa, y me apasiona <b>crear y programar</b>, ya sea para robots, máquinas o diseño de software.",
        paragraph2: "\nAdemás de mis habilidades técnicas, también me interesa explorar el mundo. Me encanta viajar, experimentar nuevas culturas y conocer personas de diferentes orígenes. El voleibol es uno de mis deportes favoritos y disfruto mantenerme activo y comprometido.",
        paragraph3: "\nActualmente, mi enfoque es expandir mi experiencia en <strong>Inteligencia Artificial</strong> y robótica. Estoy aprendiendo y mejorando activamente en <strong>C++, Python y TypeScript.</strong> También estoy en un emocionante viaje para dominar el <b>desarrollo web full-stack</b>, construyendo habilidades tanto en tecnologías <b>front-end como back-end.</b>"
      },
      career: {
        title: "Carrera y Estudios", 
        experience: "Experiencia",
        education: "Educación"
      },
      projects: {
        title: "Todos los Trabajos Creativos.",
        description: "Aquí hay algunos de mis proyectos en los que he trabajado.",
        explore: "Explorar más →"
      },
      contact: {
        title: "Mantengámonos en Contacto.",
        subtitle: "No dudes en conectarte conmigo.",
        sendEmail: "Enviar Email",
        linkedin: "Linkedin",
        downloadCV: "Descargar CV"
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        projects: "Projets",
        career: "Carrière",
        blog: "Blog"
      },
      intro: {
        greeting: "Salut !, Je suis-", 
        name1: "Mohamed",
        name2: "El Mourabit.",
        dynamicRoles: ["Ingénieur Logiciel .", "Ingénieur IA .", "Ingénieur en Robotique ."],
        description: "Avec une passion pour la programmation. Animé par la curiosité, j'apporte innovation et expertise technique à chaque projet.",
        about: "🤖 Je suis un ingénieur en robotique passionné et créateur de logiciels, toujours à la recherche de nouvelles technologies.",
        focus: "🚀 Actuellement concentré sur l'IA, C++, Python et le développement full-stack.",
        github: "Github",
        linkedin: "Linkedin",
        downloadCV: "Télécharger CV"
      },
      about: {
        title: "⚡ À Propos de Moi",
        paragraph1: "Je détiens un diplôme en <strong>Génie Robotique</strong> et un <strong>DUT en Génie Électrique et Informatique Industrielle</strong>. Cette formation m'a donné une solide compréhension de la programmation bas niveau et haut niveau. La curiosité me motive, et je suis passionné par la <b>création et la programmation</b>, que ce soit pour des robots, des machines ou la conception de logiciels.",
        paragraph2: "\nOutre mes compétences techniques, je m'investis également dans l'exploration du monde. J'aime voyager, découvrir de nouvelles cultures et rencontrer des personnes de différents horizons. Le volley-ball est l'un de mes sports préférés et j'aime rester actif et engagé.",
        paragraph3: "\nActuellement, je me concentre sur le développement de mon expertise en <strong>Intelligence Artificielle</strong> et robotique. J'apprends et m'améliore activement en <strong>C++, Python et TypeScript.</strong> Je suis également dans un voyage passionnant pour maîtriser le <b>développement web full-stack</b>, en acquérant des compétences dans les technologies <b>front-end et back-end.</b>"
      },
      career: {
        title: "Carrière et Études",
        experience: "Expérience",
        education: "Éducation"
      },
      projects: {
        title: "Tous les Travaux Créatifs.",
        description: "Voici quelques-uns de mes projets sur lesquels j'ai travaillé.",
        explore: "Explorer plus →"
      },
      contact: {
        title: "Restons en Contact.",
        subtitle: "N'hésitez pas à me contacter.",
        sendEmail: "Envoyer Email",
        linkedin: "Linkedin",
        downloadCV: "Télécharger CV"
      }
    }
  };

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentLanguage.set(language);
    }
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation: any = this.translations[this.currentLanguage()];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = this.translations['en'];
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key;
          }
        }
        break;
      }
    }

    return typeof translation === 'string' ? translation : key;
  }

  // Helper method for getting nested translation objects
  getTranslationObject(key: string): any {
    const keys = key.split('.');
    let translation: any = this.translations[this.currentLanguage()];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return this.translations['en'][keys[keys.length - 1]] || {};
      }
    }

    return translation;
  }
}