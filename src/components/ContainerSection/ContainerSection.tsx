import { useContext, type ReactNode } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';

interface IPropsContainerSection {
  children: ReactNode;
}

export default function ContainerSection(props: IPropsContainerSection) {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext must be used within ThemeProvider');
  }

  const { theme } = context;

  return (
    <div className="container">
      <section className="section" data-theme={theme}>
        {props.children}
      </section>
    </div>
  );
}
