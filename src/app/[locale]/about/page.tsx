import IconDiscord from '@/src/components/Pages/About/IconDiscord';
import IconGitHub from '@/src/components/Pages/About/IconGitHub';
import IconLinkedIn from '@/src/components/Pages/About/IconLinkedIn';
import styles from '@/src/components/Pages/About/About.module.css';
import ImFine from '@/src/components/Pages/About/svg/RS_School_ImFine.svg';
import Expert from '@/src/components/Pages/About/svg/RS_School_Expert.svg';
import Image from 'next/image';
import ContainerSection from '@/src/components/ContainerSection/ContainerSection';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return (
    <ContainerSection>
      <h1 className="h1">{t('title')}</h1>
      <div className={styles.two_blocks}>
        <div>
          <Image src={ImFine} alt="" width={200} height={200} loading="eager" />
        </div>
        <div>
          <p>{t('message1')}</p>
          <p>{t('message2')}</p>
          <p>{t('message3')}</p>
          <p>{t('message4')}</p>
        </div>
      </div>
      <div className={styles.two_blocks}>
        <div>
          <p>{t('message5')}</p>
          <p>{t('message6')}</p>
          <p>
            {t('message7')}{' '}
            <a target="_blank" href="https://rs.school/" rel="noreferrer">
              https://rs.school/
            </a>
          </p>
          <p>{t('message8')}</p>
        </div>
        <div>
          <Image src={Expert} alt="" width={200} height={200} loading="eager" />
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
