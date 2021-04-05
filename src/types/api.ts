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

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: [Module]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type Benefit = {
  text: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: [Benefit]
  button: ButtonProps
}

export type SocialLink = {
  title: string
  url: string
}

export type ProfileProps = {
  name: string
  role: string
  description: string
  image: ImageProps
  socialLinks: [SocialLink]
}

export type SectionAboutUsProps = {
  title: string
  authors: [ProfileProps]
}

export type ReviewProps = {
  name: string
  description: string
  image: ImageProps
}

export type SectionReviewsProps = {
  title: string
  reviews: [ReviewProps]
}

// LandingPage props
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
