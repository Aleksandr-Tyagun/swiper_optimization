import { useStaticQuery, graphql } from 'gatsby';

export const homeWorksBigImage = graphql`
  fragment homeWorksBigImage on File {
    childImageSharp {
      fluid(
        # srcSetBreakpoints: [194, 233, 388, 349, 1163]
        # srcSetBreakpoints: [
        #   50
        #   100
        #   150
        #   200
        #   250
        #   300
        #   350
        #   400
        #   450
        #   500
        #   550
        #   600
        #   650
        #   700
        #   1000
        #   1100
        #   1200
        #   1300
        #   1400
        #   1500
        # ]
        maxWidth: 755
        quality: 100
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const homeWorksMiddleImage = graphql`
  fragment homeWorksMiddleImage on File {
    childImageSharp {
      fluid(
        # srcSetBreakpoints: [125, 150, 225, 250, 750, 1000]
        # srcSetBreakpoints: [
        #   50
        #   100
        #   150
        #   200
        #   250
        #   300
        #   350
        #   400
        #   450
        #   1000
        #   1100
        #   1200
        #   1300
        #   1400
        #   1500
        # ]
        maxWidth: 500
        quality: 100
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const homeWorksSmallImage = graphql`
  fragment homeWorksSmallImage on File {
    childImageSharp {
      fluid(
        # srcSetBreakpoints: [60, 72, 119, 167, 357, 476]
        # srcSetBreakpoints: [
        #   50
        #   100
        #   150
        #   200
        #   1000
        #   1100
        #   1200
        #   1300
        #   1400
        #   1500
        # ]
        maxWidth: 238
        quality: 100
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const useHomeWorksAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      Art: file(
        relativePath: { eq: "sections/home-works/Art-Investments-Platform.jpg" }
      ) {
        name
        ...homeWorksMiddleImage
      }
      eScooter: file(
        relativePath: { eq: "sections/home-works/eScooter-Booking.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
      Web: file(relativePath: { eq: "sections/home-works/Web.jpg" }) {
        name
        ...homeWorksBigImage
      }
      Hommy: file(
        relativePath: { eq: "sections/home-works/Hommy-dashboard.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Investments: file(
        relativePath: {
          eq: "sections/home-works/Investments-Platform-Mobile.jpg"
        }
      ) {
        name
        ...homeWorksMiddleImage
      }
      Lazy: file(
        relativePath: { eq: "sections/home-works/Lazy-Daisy-Mobile.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Starbank: file(relativePath: { eq: "sections/home-works/Starbank.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Teampoint: file(
        relativePath: { eq: "sections/home-works/Teampoint.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Travel: file(
        relativePath: { eq: "sections/home-works/Travel-Agency-Website.jpg" }
      ) {
        name
        ...homeWorksSmallImage
      }
      Tude: file(relativePath: { eq: "sections/home-works/Tude-Website.jpg" }) {
        name
        ...homeWorksSmallImage
      }
      Realty: file(
        relativePath: { eq: "sections/home-works/Realty-Web-Dasboard.jpg" }
      ) {
        name
        ...homeWorksMiddleImage
      }
      North: file(
        relativePath: { eq: "sections/home-works/North-Face-Shop.jpg" }
      ) {
        name
        ...homeWorksBigImage
      }
    }
  `);

  return data;
};

export default useHomeWorksAssets;
