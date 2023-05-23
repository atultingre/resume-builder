import React, { useContext, useEffect } from "react";
import { X } from "react-feather";
import InputControl from "../InputControl/InputControl";
import styles from "./Editor.module.css";
import WorkExpBody from "../Pages/WorkExpBody";
import ProjectBody from "../Pages/ProjectBody";
import EducationBody from "../Pages/EducationBody";
import BasicInformationBody from "../Pages/BasicInformationBody";
import AchievementBody from "../Pages/AchievementBody";
import SummeryBody from "../Pages/SummeryBody";
import OtherBody from "../Pages/OtherBody";
import DataContext from "../../context/DataContext";
import EditorContext from "../../context/EditorContext";

function Editor() {
  const { sections, resumeInformation, setResumeInformation } =
    useContext(DataContext);

  const {
    activeInformation,
    setActiveInformation,
    activeDetailIndex,
    setActiveDetailIndex,
    sectionTitle,
    setSectionTitle,
    activeSectionKey,
    setActiveSectionKey,
    values,
    setValues,
  } = useContext(EditorContext);

  const section = sections;
  const information = resumeInformation;

  const summaryBody = <SummeryBody />;
  const workExpBody = <WorkExpBody />;
  const projectBody = <ProjectBody />;
  const educationBody = <EducationBody />;
  const basicInfoBody = <BasicInformationBody />;
  const achievementsBody = <AchievementBody />;
  const otherBody = <OtherBody />;

  const generateBody = () => {
    switch (section[activeSectionKey]) {
      case section.summary:
        return summaryBody;
      case section.basicInfo:
        return basicInfoBody;
      case section.workExp:
        return workExpBody;
      case section.project:
        return projectBody;
      case section.education:
        return educationBody;
      case section.achievement:
        return achievementsBody;
      case section.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (section[activeSectionKey]) {
      case section.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        setResumeInformation((prev) => ({
          ...prev,
          [section.basicInfo]: {
            ...prev[section.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case section.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[section.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        setResumeInformation((prev) => ({
          ...prev,
          [section.workExp]: {
            ...prev[section.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case section.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[section.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        setResumeInformation((prev) => ({
          ...prev,
          [section.project]: {
            ...prev[section.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case section.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[section.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        setResumeInformation((prev) => ({
          ...prev,
          [section.education]: {
            ...prev[section.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case section.achievement: {
        const tempPoints = values.points;

        setResumeInformation((prev) => ({
          ...prev,
          [section.achievement]: {
            ...prev[section.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }
      case section.summary: {
        const tempDetail = values.summary;

        setResumeInformation((prev) => ({
          ...prev,
          [section.summary]: {
            ...prev[section.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case section.other: {
        const tempDetail = values.other;

        setResumeInformation((prev) => ({
          ...prev,
          [section.other]: {
            ...prev[section.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      default: {
        return null;
      }
    }
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setResumeInformation((prev) => ({
      ...prev,
      [section[activeSectionKey]]: {
        ...information[section[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    setResumeInformation((prev) => ({
      ...prev,
      [section[activeSectionKey]]: {
        ...information[section[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const activeInfo = information[section[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(section[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[section[activeSectionKey]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[section[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(section)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}>
            {section[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />

        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}>
                  <p>
                    {section[activeSectionKey]} {index + 1}
                  </p>
                  <X
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
