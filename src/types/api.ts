export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIcon = {
  title: string
  icon: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: [TechIcon]
}

export type ConceptItem = {
  description: string
}

export type SectionConceptsProps = {
  title: string
  conceptItems: [ConceptItem]
}

// LandingPage props
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
