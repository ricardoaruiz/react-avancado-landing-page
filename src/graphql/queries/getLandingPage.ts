const GET_LANGIND_PAGE = /* GraphQL */ `
  # Write your query or mutation here
  fragment image on UploadFile {
    alternativeText
    url
  }
  fragment logo on LandingPage {
    logo {
      ...image
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...image
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...image
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          ...image
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
    }
  }
`
export default GET_LANGIND_PAGE
