"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import Input from "@/components/input/input.js";
import Textarea from "@/components/textarea/textarea";
import Loader from "@/components/loader/loader";

function Inputs({
  handleButtonClick,
  isLoading,
  senderName,
  setSenderName,
  senderEmail,
  setSenderEmail,
  companyName,
  setCompanyName,
  mailContent,
  setMailContent,
  responseLength,
  setResponseLength,
  tone,
  setTone,
  notes,
  setNotes,
}) {
  const onChange = (setter) => (event) => setter(event.target.value);

  return (
    <>
      <div style={{ opacity: isLoading ? 0.5 : 1 }}>
        <div className={styles.inputholder}>
          <Input
            placeholder="Add Sender name"
            value={senderName}
            onChange={onChange(setSenderName)}
            label="Sender name"
          />
          <Input
            placeholder="Add Sender eMail"
            value={senderEmail}
            onChange={onChange(setSenderEmail)}
            label="Sender eMail"
          />
          <Input
            placeholder="Add Company name"
            value={companyName}
            onChange={onChange(setCompanyName)}
            label="Company name"
          />
        </div>

        <Textarea
          placeholder="Mail content"
          value={mailContent}
          onChange={onChange(setMailContent)}
          label="Main content"
        />

        <div className={`${styles.inputholder} ${styles.inputholderbottom}`}>
          <Input
            placeholder="Response length"
            value={responseLength}
            onChange={onChange(setResponseLength)}
            label="Response Length"
          />
          <Input
            placeholder="Tone"
            value={tone}
            onChange={onChange(setTone)}
            label="Tone"
          />
        </div>

        <Textarea
          placeholder="Notes"
          value={notes}
          onChange={onChange(setNotes)}
          label="Notes"
          rows={2}
        />
      </div>
      <button
        className={styles.button}
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className={styles.loaderHolder}>
            <Loader /> <p>Much response coming your way...</p>
          </div>
        ) : (
          "You're a wizard, Harry!"
        )}
      </button>
      <a href="https://www.youtube.com/watch?v=IqUN4YdQgVQ" target="_blank" rel="noopener noreferrer" className={styles.wizardLink}>I'm a what?</a>
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [responseLength, setResponseLength] = useState("");
  const [tone, setTone] = useState("");
  const [notes, setNotes] = useState("");

  const handleButtonClick = async () => {
    if (
      senderName === "" ||
      senderEmail === "" ||
      companyName === "" ||
      mailContent === "" ||
      responseLength === "" ||
      tone === "" ||
      notes === ""
    ) {
      return;
    }
    setIsLoading(true);

    const inputsData = {
      senderName,
      senderEmail,
      companyName,
      mailContent,
      responseLength,
      tone,
      notes,
    };
    await sendInputsToAPI(inputsData);
  };

  const sendInputsToAPI = async (inputsData) => {
    try {
      const formattedInputsData = {
        variables: {
          ResponseLength: inputsData.responseLength,
          mail: inputsData.mailContent,
          SenderName: inputsData.senderName,
          SenderEmail: inputsData.senderEmail,
          CompanyName: inputsData.companyName,
          Tone: inputsData.tone,
          notes: inputsData.notes,
        },
      };

      const response = await fetch(
        "https://prod.api.promptchainer.io/api/flows/run/clhez0wo90005s10glie7tadf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
          body: JSON.stringify(formattedInputsData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error. Status: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data);
      setActiveTab(1);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function ResponseComponent({ response }) {
    return (
      <div>
        {response &&
          response.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2 style={{ marginBottom: "10px", color: "#244265" }}>
                {item.name}
              </h2>
              <p style={{ color: "#738ca8", lineHeight: "21px" }}>
                {item.output}
              </p>
            </div>
          ))}
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainholder}>
        <div className={styles.nav}>
          <h1>
            Email<span>Wizard</span>
          </h1>
          <div className={styles.tabs}>
            <p
              className={activeTab === 0 ? styles.activeTab : ""}
              onClick={() => setActiveTab(0)}
            >
              Insert Parameters
            </p>
            <p
              className={activeTab === 1 ? styles.activeTab : ""}
              onClick={() => setActiveTab(1)}
            >
              Wizard&apos;s Reponse
            </p>
          </div>
        </div>
        <div className={styles.content}>
          {activeTab === 0 ? (
            <Inputs
              handleButtonClick={handleButtonClick}
              isLoading={isLoading}
              senderName={senderName}
              setSenderName={setSenderName}
              senderEmail={senderEmail}
              setSenderEmail={setSenderEmail}
              companyName={companyName}
              setCompanyName={setCompanyName}
              mailContent={mailContent}
              setMailContent={setMailContent}
              responseLength={responseLength}
              setResponseLength={setResponseLength}
              tone={tone}
              setTone={setTone}
              notes={notes}
              setNotes={setNotes}
            />
          ) : (
            <ResponseComponent response={apiResponse} />
          )}
        </div>


        <div className={styles.blogPostLink}>
          <a
            href="https://github.com/PromptChainer/showcase-article-gen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Repo on Github🍴
          </a>
          <a
            href="https://blog.promptchainer.io/p/use-case-custom-built-article-writer"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Wanna know how we activated this chain of prompts in a matter of
            minutes?
          </a>
        </div>
      </div>
    </main>
  );
}
