const { createContext, useRef, useState } = require("react");

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const colors = [
    "#239ce2",
    "#48bb78",
    "#0bc5ea",
    "#a0aec0",
    "#ed8936",
    "#e80854",
    "#3a6c20",
    "#0000d3",
    "#f0525f",
    "#eaa03f",
  ];

  const sections = {
    basicInfo: "Basic Info",
    summary: "Objectives",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <DataContext.Provider
      value={{
        colors,
        activeColor,
        setActiveColor,
        resumeRef,
        sections,
        resumeInformation,
        setResumeInformation,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
