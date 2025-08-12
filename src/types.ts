// src/types.ts

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Education {
  degree: string;
  course: string;
  institution: string;
  period: string;
  competencies: string[]; // Adicione as competências aqui
}

export interface ComplementaryCourse {
  title: string;
  institution: string;
  period: string;
}

export interface ComplementaryCourseCategory {
  category: string;
  courses: ComplementaryCourse[];
}

export interface ProfessionalExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ProfileData {
  profile: {
    name: string;
  };
  socialLinks: SocialLink[];
  skills: {
    linguagensDeProgramacao: Skill[];
    desenvolvimentoSoftware: Skill[];
    ferramentasEDesign: Skill[];
    qualidadeDeSoftware: Skill[];
    dadosEIA: Skill[];
    cloudEInfraestrutura: Skill[];
    habilidadesGerais: Skill[];
  };
  mainEducation: Education[];
  complementaryCourses: ComplementaryCourseCategory[];
  professionalExperience: ProfessionalExperience[];
}