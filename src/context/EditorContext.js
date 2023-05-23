import { createContext, useContext, useState } from "react";
import DataContext from "./DataContext";

const EditorContext = createContext({});

export const EditorProvider = ({ children }) => {
    const {sections, resumeInformation} = useContext(DataContext)
    const section = sections;
    const information = resumeInformation;
    
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(section)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[section[Object.keys(section)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    section[Object.keys(section)[0]]
  );
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  return (
    <EditorContext.Provider
      value={{
        activeInformation,
        setActiveInformation,
        activeDetailIndex,
        setActiveDetailIndex,
        sectionTitle, setSectionTitle,
        handlePointUpdate,
        activeSectionKey, setActiveSectionKey,
        values, setValues
      }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
