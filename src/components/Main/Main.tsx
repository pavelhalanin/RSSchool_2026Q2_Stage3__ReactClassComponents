import { Component } from 'react';
import CardList from '../CardList/CardList';
import type GlobalState from './GlobalState';

class Main extends Component<Record<string, never>, GlobalState> {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return <CardList />;
  }
}

export default Main;
