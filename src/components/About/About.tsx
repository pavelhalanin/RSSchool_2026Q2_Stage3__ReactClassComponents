import type { JSX } from 'react';
import IconDiscord from './IconDiscord';
import IconGitHub from './IconGitHub';
import IconLinkedIn from './IconLinkedIn';
import styles from './About.module.css';

export default function About(): JSX.Element {
  return (
    <div className="container">
      <section className="section">
        <h1 className="h1">About</h1>
        <p>
          This is a Pokémon application built with React, TypeScript, and
          GraphQL API. The application allows users to browse Pokémon
          information.
        </p>
        <h2 className="h1">Pavel Galanin | React 2026Q2 (stage3)</h2>
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
      </section>
    </div>
  );
}
