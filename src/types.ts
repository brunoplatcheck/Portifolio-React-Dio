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
  competencies: string[];
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

export interface GitHubProject {
  name: string;
  html_url: string;
  description: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export interface FeaturedProject {
  name: string;
  repoUrl: string;
}

export interface ProfileData {
  profile: {
    name: string;
    aboutMe: string;
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
  githubUser: string;
  featuredProjects: FeaturedProject[];
}

// Tipagem para as rotas do Stack Navigator (removendo DrawerStackParamList)
export type RootStackParamList = {
  Main: undefined;
  Skills: undefined;
  Education: undefined;
  ComplementaryEducation: undefined;
  ProfessionalExperience: undefined;
  GitHubProjects: undefined; // <-- DEVE ESTAR AQUI
};