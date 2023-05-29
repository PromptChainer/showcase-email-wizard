"use client";
import styles from "./page.module.css";
import React, { useRef, useState, useEffect } from "react";
import Input from "@/components/input/input.js";
import Textarea from "@/components/textarea/textarea";
import Loader from "@/components/loader/loader";
import logo from "../app/logo.svg";
import Link from "next/link";
import Image from "next/image";

const LoaderComponent = ({ isLoadingEffect, setIsLoadingEffect }) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(
    Math.floor(Math.random() * loaderSentences.length)
  );
  const [randomSentence, setRandomSentence] = useState(
    loaderSentences[currentSentenceIdx]
  );
  const [displayTimeout, setDisplayTimeout] = useState(null);

  const calculateDisplayTime = (sentence) => {
    // Each word displays for 350ms, then a 50ms wait between words, then a 2s wait after the sentence
    return sentence.split(" ").length * 400 + 2000;
  };

  useEffect(() => {
    // Clear existing timeout
    if (displayTimeout) {
      clearTimeout(displayTimeout);
    }

    setIsLoadingEffect(false);

    setRandomSentence(loaderSentences[currentSentenceIdx]);

    // Set new timeout
    const newTimeout = setTimeout(() => {
      const nextSentenceIdx = (currentSentenceIdx + 1) % loaderSentences.length;
      setCurrentSentenceIdx(nextSentenceIdx);
      setIsLoadingEffect(true);
    }, calculateDisplayTime(randomSentence));
    setDisplayTimeout(newTimeout);

    // Cleanup on unmount or update
    return () => clearTimeout(displayTimeout);
  }, [currentSentenceIdx, randomSentence]); // Notice the change in dependencies for useEffect

  return (
    <div className={styles.loader}>
      <Loader />
      <p>
        {randomSentence.split(" ").map((word, wordIdx) => (
          <span
            className={isLoadingEffect ? styles["fade-in-word"] : ""}
            key={wordIdx}
            style={{
              animationDelay: `${wordIdx * 350}ms`, // Word display duration
            }}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};
function Inputs({
  handleButtonClick,
  isLoading,
  isLoadingEffect,
  setIsLoadingEffect,
  senderName,
  setSenderName,
  companyName,
  setCompanyName,
  mailContent,
  setMailContent,
  tone,
  setTone,
  notes,
  setNotes,
}) {
  const onChange = (setter) => (event) => setter(event.target.value);

  return (
    <>
      {!isLoading && (
        <>
          <div style={{ opacity: isLoading ? 0.5 : 1 }}>
            <div className={styles.inputholder}>
              <Input
                placeholder="Add Sender name"
                value={senderName}
                onChange={onChange(setSenderName)}
                label="(optional) Who sent you the mail?"
              />
              <Input
                placeholder="Add Company name"
                value={companyName}
                onChange={onChange(setCompanyName)}
                label="(optional) Your comapny's name"
              />
            </div>

            <Textarea
              placeholder="Mail content"
              value={mailContent}
              onChange={onChange(setMailContent)}
              label="Main content *"
            />

            <div
              className={`${styles.inputholder} ${styles.inputholderbottom}`}
            >
              <label for="tone ">Tone *</label>
              <div className={styles.selectHolder}>
                <select
                  id="tone"
                  name="tone"
                  onChange={onChange(setTone)}
                  value={tone}
                  className={styles.select}
                >
                  <option value="Formal">Formal</option>
                  <option value="Informal">Informal</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Serious">Serious</option>
                  <option value="Humorous">Humorous</option>
                  <option value="Sarcastic">Sarcastic</option>
                  <option value="Optimistic">Optimistic</option>
                  <option value="Pessimistic">Pessimistic</option>
                  <option value="Confident">Confident</option>
                  <option value="Excited">Excited</option>
                  <option value="Polite">Polite</option>
                  <option value="Angry">Angry</option>
                  <option value="Sad">Sad</option>
                  <option value="Neutral">Neutral</option>
                </select>
              </div>
            </div>

            <Textarea
              placeholder="Anything you'd like the AI overlord to focus on?"
              value={notes}
              onChange={onChange(setNotes)}
              label="Notes *"
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
          <a
            href="https://www.youtube.com/watch?v=IqUN4YdQgVQ"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.wizardLink}
          >
            {"[I'm a what? 🧙]"}
          </a>
        </>
      )}

      {isLoading && (
        <div className={styles.loadingHolder}>
          <LoaderComponent
            isLoadingEffect={isLoadingEffect}
            setIsLoadingEffect={setIsLoadingEffect}
          />
        </div>
      )}
    </>
  );
}

const loaderSentences = [
  "Orit rules this land together with Aryeh the grand shepherd ❤️",
  "Making funny faces to AI to stop it from world domination...",
  "Making the AI powering hamsters sweat real good...",
  "Load it and they will come.",
  "Having a philosophical chat with AI about right and wrong...",
  "Computing the secret to life. Or love. Or both.",
  "Never steal. The government hates competition...",
  "Optimism is a lack of information...",
  "Save water and shower together",
  "I’ve got a problem for your solution...",
  "Where there’s a will, there’s a relative.",
  "git happens",
  "May the forks be with you",
  "A commit a day keeps the doctor away",
  "The Elders of the Internet would never stand for it.",
  "I'm gonna walk my dog, brb",
  "Dividing by zero, muahahaha...",
  "Chuck Norris never git push. The repo pulls before.",
  "PromptChainer developers do it with <style>",
  "I need to git pull --my-life-together",
  "Proving P=NP...",
  "Please wait while the intern refills his coffee...",
  "Kindly hold on as our intern quits PromptChainer, this race isn't for the weak hearted...",
  "Distracted by adorable dog gifs...",
  "Finding someone to hold my beer...",
  "BRB, working on my side project...",
  "TODO: Insert a witty loading message...",
  "Let's hope it's worth the wait, eh?...",
  "Making 1s and 0s rain down upon you...",
  "Whatever you do, don't look behind you.",
  "Please wait, consulting the manual...",
  "Loading a funny message...",
  "Waiting for Daenerys to finish announcing all her titles...",
  "Feel free to spin in your chair...",
  "How many plants are currently in Promptchainer's office? Mail us your guess and the winner gets a filthy burgundy bean bag.",
  "Waiting for Ofir's character to walk so so slowly in Heroes...",
  "Waiting for Dani to finish playing his guitar...",
  "Waiting to finish listening to Simon's ideas for the future...",
  "Waiting for Stoyan to finish his 5 hours workout...",
  "Waiting for Aryeh and Chasey to finish barking at the door...",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingEffect, setIsLoadingEffect] = useState(true);

  const [senderName, setSenderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mailContent, setMailContent] = useState("");
  const [tone, setTone] = useState("");
  const [notes, setNotes] = useState("");

  // // Dev use only
  // const [senderName, setSenderName] = useState("John Smith");
  // const [companyName, setCompanyName] = useState("PromptChainer");
  // const [mailContent, setMailContent] = useState(
  //   "Hey, I was just wondering if you could help me understand the difference between a turtle and a tortoise? Also, can PromptChainer help me improve my golf swing? Cheers!"
  // );
  // const [tone, setTone] = useState("Friendly");
  // const [notes, setNotes] = useState(
  //   "The user is new to PromptChainer and might need a simple step-by-step explanation."
  // );

  const [randomSentence, setRandomSentence] = useState(
    loaderSentences[Math.floor(Math.random() * loaderSentences.length)]
  );

  const setNewRandomSentence = () => {
    const newSentence =
      loaderSentences[Math.floor(Math.random() * loaderSentences.length)];
    setRandomSentence(newSentence);
  };

  const handleButtonClick = async () => {
    if (mailContent === "" || tone === "" || notes === "") {
      return;
    }
    setIsLoading(true);
    setNewRandomSentence();

    const inputsData = {
      senderName,
      companyName,
      mailContent,
      tone,
      notes,
    };
    await sendInputsToAPI(inputsData);
  };

  const sendInputsToAPI = async (inputsData) => {
    try {
      const formattedInputsData = {
        variables: {
          mail: inputsData.mailContent,
          SenderName: inputsData.senderName,
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
    if (!response) {
      return (
        <div style={{ color: "black" }}>
          Whatchuwant? No inputs but you expect response. That&apos;s not how
          life works.
        </div>
      );
    }

    const filteredResponse = response.filter(
      (item) => item.name !== "FailedReplyInsight"
    );

    const replyNode = filteredResponse.find((item) => item.name === "Reply");

    const displayContent =
      !replyNode || !replyNode.output
        ? "Failed to get a reply insight from AI"
        : filteredResponse.map((item, index) => {
            const content =
              item.name === "MailPoints"
                ? item.output
                    .trim()
                    .split("\n")
                    .map((line, key) => (
                      <span key={key}>
                        {line.trim()}
                        <br />
                      </span>
                    ))
                : item.output;
            return (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h2 style={{ marginBottom: "10px", color: "#244265" }}>
                  {item.name}
                </h2>
                <p style={{ color: "#738ca8", lineHeight: "21px" }}>
                  {content}
                </p>
              </div>
            );
          });

    return (
      <div
        style={
          !filteredResponse
            ? {
                height: "560px",
              }
            : {}
        }
      >
        {displayContent}
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div
        className={styles.mainholder}
        style={
          isLoading
            ? {
                maxHeight: "630px",
                height: "100%",
              }
            : {}
        }
      >
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

          <Link target="_blank" href="https://promptchainer.io/">
            <div className={styles.poweredBy}>
              <p>Powered by:</p> <Image alt="logo" src={logo} height={20} />
            </div>
          </Link>
        </div>
        <div className={styles.content}>
          {activeTab === 0 ? (
            <Inputs
              handleButtonClick={handleButtonClick}
              isLoading={isLoading}
              senderName={senderName}
              setSenderName={setSenderName}
              companyName={companyName}
              setCompanyName={setCompanyName}
              mailContent={mailContent}
              setMailContent={setMailContent}
              tone={tone}
              setTone={setTone}
              notes={notes}
              setNotes={setNotes}
              isLoadingEffect={isLoadingEffect}
              setIsLoadingEffect={setIsLoadingEffect}
            />
          ) : (
            <ResponseComponent response={apiResponse} />
          )}
        </div>

        <div className={styles.blogPostLink}>
          <a
            href="https://github.com/PromptChainer/showcase-email-wizard"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Repo on Github🍴
          </a>
          <a
            href="https://blog.promptchainer.io/"
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
