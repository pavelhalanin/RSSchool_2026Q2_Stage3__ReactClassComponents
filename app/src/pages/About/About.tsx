import type { JSX } from 'react';
import IconDiscord from './IconDiscord';
import IconGitHub from './IconGitHub';
import IconLinkedIn from './IconLinkedIn';
import styles from './About.module.css';
import ImFine from './svg/RS_School_ImFine.svg';
import Expert from './svg/RS_School_Expert.svg';
import ContainerSection from '../../components/ContainerSection/ContainerSection';

export default function About(): JSX.Element {
  return (
    <ContainerSection>
      <h1 className="h1">About</h1>
      <div className={styles.two_blocks}>
        <div>
          <img src={ImFine} alt="" />
        </div>
        <div>
          <p>
            This is a Pokémon application built with React, TypeScript, and
            GraphQL API. The application allows users to browse Pokémon
            information.
          </p>
          <p>
            This app is not just another pet project. It is the result of
            training at RS School, written using a modern stack: GraphQL, React,
            and TypeScript.
          </p>
          <p>
            How was it created? Honestly: I come home from work, and instead of
            relaxing, I sit at the computer—and stay there until late at night.
            All this code was written in my free time after hard workdays. I
            invested not only knowledge into it, but also patience and the
            desire to create something truly high-quality.
          </p>
          <p>
            This project is living proof that it is possible to combine work,
            life, and serious development. And that RS School teaches real
            skills, not just a checkbox.
          </p>
        </div>
      </div>
      <div className={styles.two_blocks}>
        <div>
          <p>What about you?</p>
          <p>
            If you also want to master React, improve your TypeScript, and
            understand how modern frontend tools work, come to RS School.
          </p>
          <p>
            Enroll in the course:{' '}
            <a target="_blank" href="https://rs.school/" rel="noreferrer">
              https://rs.school/
            </a>
          </p>
          <p>
            Real projects, mentorship, a community, and a path that will make
            even a complex stack feel like home await you. Do not be afraid to
            start—I did it. And you can definitely do it too.
          </p>
        </div>
        <div>
          <img src={Expert} alt="" />
        </div>
      </div>
      <h2 className="h1">
        Pavel Halanin, React 2026Q2 Stage3: 27.04.2026 - 17.07.2026
      </h2>
      <ul className={styles.ul}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/users/1482615972060991488"
          >
            <IconDiscord />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pavelhalanin"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pavelhalanin/"
          >
            <IconLinkedIn />
          </a>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <a
            className={styles.school}
            target="_blank"
            rel="noreferrer"
            href="https://rs.school/"
          >
            RS School
          </a>
        </li>
      </ul>
    </ContainerSection>
  );
}
