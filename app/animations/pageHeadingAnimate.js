// $ Animation for the Main Section Headings "About, Projects, Contact"

const parentContainerHeading = {
  initialState: {
    opacity: 0,
    top: 0,
    scale: 0,
  },

  animateState: {
    opacity: 1,
    scale: 1,

    transition: {
      staggerChildren: 1,
      when: "beforeChildren",
    },
  },
};

// $ Animation for the heading child elements e.g. span element in PageHeading Component.
const childContainerHeading = {
  initialState: {
    scale: 0,
    opacity: 0,
    top: 0,
  },

  animateState: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 3,
    },
  },
};

// Amimation for the projects page secondary heading "My Latest Completed Projects"

const ContainerHeadingTwo = {
  initialState: {
    scale: 0,
    opacity: 0,
  },

  animateState: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 100,
    },
  },
};

const headingVariants = [
  parentContainerHeading,
  childContainerHeading,
  ContainerHeadingTwo,
];

export default headingVariants;
