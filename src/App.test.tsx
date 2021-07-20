import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

test('renders learn react link', () => {
});

describe("Timer Test", () => {
  let wrapper: ShallowWrapper;
  beforeEach(()=> {
    wrapper = shallow(<App />);
  })

  test("renders the title of Timer", () => {
    expect(wrapper.find("h1").text()).toContain("Timer App using TDD");
  })

  test("render buttons with text of START/STOP", () => {
    expect(wrapper.find('.start-btn').text()).toBe('START')
    expect(wrapper.find('.stop-btn').text()).toBe('STOP')
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#timer-value").text()).toBe('0')
  })

  test("render the click event of START/STOP button", () => {
    wrapper.find(".start-btn").simulate('click')
    setTimeout(() => {
      expect(wrapper.find("#timer-value").text()).toBe("1")
    }, 1000);
    setTimeout(() => {
      expect(wrapper.find("#timer-value").text()).toBe("2")
    }, 1000);
    setTimeout(() => {
      expect(wrapper.find("#timer-value").text()).toBe("3")
    }, 1000);

    expect(wrapper.find('.stop-btn').props().disabled).toBeFalsy();
    expect(wrapper.find('.start-btn').props().disabled).toBeTruthy();

    wrapper.find('.stop-btn').simulate('click');

    expect(wrapper.find('.stop-btn').props().disabled).toBeTruthy();
    expect(wrapper.find('.start-btn').props().disabled).toBeFalsy();
  })

})
