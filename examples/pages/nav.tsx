import React from 'react';
import { Navigation, Item, Panel } from 'panel-navigation';
import 'panel-navigation/lib/index.css';

import About from './About';
import Services from './Services';

type NavProps = {
  visible: boolean;
};

export default function Nav(props: NavProps) {
  return (
    <Navigation visible={props.visible}>
      <Panel itemKey="0" content={<About />}>
        <span>About Us</span>
      </Panel>
      <Panel itemKey="1" content={<Services />}>
        <span>Services</span>
      </Panel>
      <Item isSubPage={true}>
        <a className="text">Studies</a>
      </Item>
      <Item>
        <a className="text">News</a>
      </Item>
    </Navigation>
  );
}
