import { type ReactNode } from 'react';
import { useTheme } from '../../hook/useTheme/useTheme';

interface IPropsContainerSection {
  children: ReactNode;
}

export default function ContainerSection(props: IPropsContainerSection) {
  const { theme } = useTheme();

  return (
    <div className="container">
      <section className="section" data-theme={theme}>
        {props.children}
      </section>
    </div>
  );
}
