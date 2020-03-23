import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import './Item.scss'
import PlaceHolderImage from './../../PlaceHolder.JPG';

const Item = ({ templateInstance }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.templateInstanceId === templateInstance.templateInstanceId;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
          onClick={() => onSelectSlide(templateInstance)}>
          <img src={PlaceHolderImage} alt="" />
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
