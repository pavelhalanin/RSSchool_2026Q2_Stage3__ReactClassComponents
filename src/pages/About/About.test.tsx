import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
import styles from './About.module.css';
import ThemeProvider from '../../context/theme/ThemeProvider';

vi.mock('./IconDiscord', () => ({
  default: () => <svg data-testid="mock-discord" width="16" height="16" />,
}));

vi.mock('./IconGitHub', () => ({
  default: () => <svg data-testid="mock-github" width="16" height="16" />,
}));

vi.mock('./IconLinkedIn', () => ({
  default: () => <svg data-testid="mock-linkedin" width="16" height="16" />,
}));

describe('About', () => {
  it('renders complete page structure', () => {
    const { container } = render(
      <ThemeProvider>
        <About />
      </ThemeProvider>
    );

    expect(container.querySelector('.container')).toBeTruthy();
    expect(container.querySelector('.section')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
  });

  it('opens links in new tab', () => {
    render(
      <ThemeProvider>
        <About />
      </ThemeProvider>
    );

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toContain('noreferrer');
    });
  });

  it('renders all icons', () => {
    const { container } = render(
      <ThemeProvider>
        <About />
      </ThemeProvider>
    );

    expect(
      container.querySelector('[data-testid="mock-discord"]')
    ).toBeTruthy();
    expect(container.querySelector('[data-testid="mock-github"]')).toBeTruthy();
    expect(
      container.querySelector('[data-testid="mock-linkedin"]')
    ).toBeTruthy();
  });

  it('applies CSS module classes to lists', () => {
    const { container } = render(
      <ThemeProvider>
        <About />
      </ThemeProvider>
    );

    const lists = container.querySelectorAll(`.${styles.ul}`);
    expect(lists.length).toBe(2);
  });

  it('applies school class to RS School link', () => {
    const { container } = render(
      <ThemeProvider>
        <About />
      </ThemeProvider>
    );
    const schoolLink = container.querySelector(`.${styles.school}`);

    expect(schoolLink).toBeTruthy();
    expect(schoolLink?.textContent).toBe('RS School');
  });
});
