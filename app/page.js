"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Input from "@/components/input/input.js";
import Textarea from "@/components/textarea/textarea";

function Inputs() {
  return (
    <>
      <div className={styles.inputholder}>
        <Input
          placeholder="Add Sender name"
          onClick={() => console.log("hi")}
          value={""}
          label="Sender name"
        />
        <Input
          placeholder="Add Sender eMail"
          onClick={() => console.log("hi")}
          value={""}
          label="Sender eMail"
        />
        <Input
          placeholder="Add Company name"
          onClick={() => console.log("hi")}
          value={""}
          label="Company name"
        />
      </div>

      <Textarea
        placeholder="Mail content"
        onClick={() => console.log("hi")}
        value={""}
        label="Main content"
      />

      <div className={`${styles.inputholder} ${styles.inputholderbottom}`}>
        <Input
          placeholder="Response length"
          onClick={() => console.log("hi")}
          value={""}
          label="Response length"
        />
        <Input
          placeholder="Tone"
          onClick={() => console.log("hi")}
          value={""}
          label="Tone"
        />
        <Input
          placeholder="Notes"
          onClick={() => console.log("hi")}
          value={""}
          label="Notes"
        />
      </div>
      <button className={styles.button}>Generate responce</button>
    </>
  );
}

function Responce() {
  return (
    <div className={styles.responce}>
      <p className={styles.title}>Mail points:</p>
      <p className={styles.text}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
      <p className={styles.title} style={{ marginTop: 20 }}>
        Responce:
      </p>
      <p className={styles.text}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. It is also used to
        temporarily replace text in a process called greeking, which allows
        designers to consider the form of a webpage or publication, without the
        meaning of the text influencing the design. Lorem ipsum is typically a
        corrupted version of De finibus bonorum et malorum, a 1st-century BC
        text by the Roman statesman and philosopher Cicero, with words altered,
        added, and removed to make it nonsensical and improper Latin. Versions
        of the Lorem ipsum text have been used in typesetting at least since the
        1960s, when it was popularized by advertisements for Letraset transfer
        sheets.[1] Lorem ipsum was introduced to the digital world in the
        mid-1980s, when Aldus employed it in graphic and word-processing
        templates for its desktop publishing program PageMaker. Other popular
        word processors, including Pages and Microsoft Word, have since adopted
        Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content
        managers such as Joomla! and WordPress, and CSS libraries such as
        Semantic UI.
      </p>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

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
              Inputs
            </p>
            <p
              className={activeTab === 1 ? styles.activeTab : ""}
              onClick={() => setActiveTab(1)}
            >
              Responce
            </p>
          </div>
        </div>
        <div className={styles.content}>
          {activeTab === 0 ? <Inputs /> : <Responce />}
        </div>
      </div>
    </main>
  );
}
