
import { 
  Activity, 
  Bone, 
  UserCheck, 
  Zap, 
  Users,
  Move,
  Dumbbell,
  Heart,
  Sparkles
} from 'lucide-react';
import { FAQItem, NavLink, PainPoint, Service, Testimonial } from './types';

export const CONTACT_INFO = {
  phone: '+54 9 11 5622-8072',
  whatsapp: '+5491156228072',
  address: 'Dr. Norberto Quirno Costa 1255, Recoleta, CABA',
  email: 'informacion@kinac.com.ar',
  instagram: '@kinac.kinesio.acu',
  instagramLink: 'https://www.instagram.com/kinac.kinesio.acu/',
  mapsLink: 'https://www.google.com.ar/maps/place/KINAC+%7C+Centro+de+Kinesiolog%C3%ADa+y+Acupuntura/@-34.5951911,-58.4078438,17z/data=!4m8!3m7!1s0x95bccbf92e037037:0x3a7adaf9f6bbba3!8m2!3d-34.5951911!4d-58.4052635!9m1!1b1!16s%2Fg%2F11kg8lkvwl?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Comunidad', href: CONTACT_INFO.instagramLink, external: true },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'injury',
    title: 'Lesiones Deportivas',
    description: 'Esguinces, desgarros o dolores crónicos que te impiden entrenar al 100%. Volvé a tu deporte seguro.',
    icon: Zap
  },
  {
    id: 'stiffness',
    title: 'Dolor de Espalda y Postura',
    description: '¿Sentís el cuerpo "trabado" o con molestias lumbares/cervicales? Recuperá la libertad de movimiento.',
    icon: UserCheck
  },
  {
    id: 'senior',
    title: 'Mantenimiento y Salud',
    description: 'Espacios seguros para ganar fuerza, equilibrio y confianza, en un ambiente de cuidado y motivador.',
    icon: Bone
  }
];

export const SERVICES: Service[] = [
  // Clinical Services
  {
    id: 'deportiva',
    title: 'Rehabilitación Deportiva',
    description: 'Retorno al movimiento seguro. Evaluaciones biomecánicas para personas activas, corredores y bailarines.',
    iconUrl: 'https://i.postimg.cc/vHmYFbRn/Gemini-Generated-Image-gl1b7igl1b7igl1b.png',
    category: 'clinical'
  },
  {
    id: 'kine-integral',
    title: 'Kinesiología Integral',
    description: 'Sesiones 1 a 1 de una hora. Terapia manual, ejercicio terapéutico y fisioterapia analgésica con enfoque en la causa.',
    iconUrl: 'https://i.postimg.cc/k5W9F58M/Gemini-Generated-Image-5zt1225zt1225zt1.png',
    category: 'clinical'
  },
  {
    id: 'acupuntura-clinica',
    title: 'Acupuntura Clínica',
    description: 'Técnica milenaria para restablecer la energía, aliviar el dolor crónico y potenciar la recuperación física.',
    icon: Sparkles,
    category: 'clinical'
  },
  
  // Group Classes
  {
    id: 'flex',
    title: 'Taller FLEX',
    description: 'Exigencia física para ganar flexibilidad, control y rango de movimiento. Ideal para deportistas.',
    icon: Move,
    category: 'group'
  },
  {
    id: 'taller-corporal',
    title: 'Taller Corporal',
    description: 'Exploración del movimiento integrando fuerza, equilibrio y escucha postural para una vida más ágil.',
    icon: Users,
    category: 'group',
    promo: '¡PROMO ENERO! 2 clases semanales + 1 de regalo 🎁'
  },
  {
    id: 'rehab-mayores',
    title: 'Rehabilitación para Adultos Mayores',
    description: 'Programas especializados para mantener la autonomía y el equilibrio en un entorno seguro y cálido.',
    icon: Heart,
    category: 'group'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Manu Risso',
    role: 'Local Guide',
    content: 'Es un excelente lugar con atención personalizada y un equipo de trabajo muy profesional desde la recepción hasta las kinesiólogas. Mucha cordialidad y amabilidad. Xime una genia!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Manuela Rossi',
    role: 'Local Guide',
    content: 'Soy bailarina y hace muchos años me atiendo con Silvina. Es una genia, más allá de la parte física, su cuidado emocional y su conexión con los pacientes es lo que me hace volver cada vez.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Diana Man',
    role: 'Paciente',
    content: 'El equipo es muy profesional, tiene mucho conocimiento y te cuidan mucho. Empecé por dolores de espalda y terminé haciendo verticales. ¡Altamente recomendable!',
    rating: 5
  },
  {
    id: 't5',
    name: 'Maria Ester Vázquez Paz',
    role: 'Paciente',
    content: 'Estoy muy agradecida a Silvina y todo el equipo. Es un lugar de excelencia que soluciona los problemas físicos con mucha profesionalidad y calidez. Súper recomiendo el lugar.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: '¿Cuánto duran las sesiones?',
    answer: 'Las sesiones de kinesiología y acupuntura duran aproximadamente 1 hora. La atención es 1 a 1 para garantizar resultados óptimos.'
  },
  {
    id: 'f2',
    question: '¿La acupuntura duele?',
    answer: 'No. Las agujas son extremadamente delgadas y la inserción es indolora. La mayoría de los pacientes experimentan una profunda relajación durante la sesión.'
  },
  {
    id: 'f3',
    question: '¿Puedo combinar kinesiología con acupuntura?',
    answer: 'Sí, de hecho es nuestra especialidad. Combinar ambas técnicas potencia la reducción del dolor y acelera la recuperación de la fuerza y movilidad.'
  },
  {
    id: 'f4',
    question: '¿Cómo agendo un turno?',
    answer: 'Podés escribirnos por WhatsApp. Realizamos una evaluación inicial para definir el tratamiento que mejor se adapte a tus necesidades.'
  }
];
