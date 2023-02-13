import React from 'react';
import { Panel, Item, Navigation } from '../lib/es';
import '../lib/es/index.css';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

function getNav({ navProps = {}, panelProps, itemProps } = {}) {
  return (
    <Navigation {...navProps}>
      <Panel itemKey="0" content={<div>about</div>}>
        <span>About Us</span>
      </Panel>
      <Panel itemKey="1" content={<div>service</div>}>
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

describe('Navigation', () => {
  it('test appearance', async () => {
    const component = getNav();

    const { container } = render(component);

    // test Menu title
    expect(screen.getByText('About Us')).toBeTruthy();
    // check if has correct menu items
    expect(container.querySelectorAll('.dropdown').length === 4).toBeTruthy();
  });

  it('test panel', async () => {
    const component = getNav();
    const { container } = render(component);

    const item = container.querySelector('.dropdown');
    fireEvent.mouseEnter(item);

    await screen.findByText('about');
  });

  it('test onEntered event', async () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const component = getNav({
      navProps: {
        onEntered: () => {
          console.log('entered');
        },
      },
    });
    const { container } = render(component);
    // fire the first panel
    const item = container.querySelector('.dropdown');
    fireEvent.mouseEnter(item);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith('entered');
    });
  });
});
