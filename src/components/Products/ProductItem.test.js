// shallow allows you to render a component with all its contents
import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductItem from "./ProductItem";
import Card from "../UI/Card";
configure({Adapter: new Adapter()});


describe('<ProductItem />', ()=>{
  it ('should render a card with style', ()=>{
      // here we are rendering the navigation item component and storing it in wrapper
      const wrapper = shallow(<ProductItem />);
      expect(wrapper.find(Card)).toHaveStyle(<style></style>);
  });
});
