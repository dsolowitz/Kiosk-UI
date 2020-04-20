import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import './Item.scss'
import PlaceHolderImage from './../../PlaceHolder.JPG';

const Item = ({ templateInstance }) => (

  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.templateInstanceId === templateInstance.templateInstanceId;

      var previewImage;
      if(templateInstance.previewPath && templateInstance.previewPath !== ""){
        previewImage = <img src={templateInstance.previewPath} alt="" />;
      } else{
        previewImage = <img src={PlaceHolderImage} alt="" />;
      }

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
          onClick={() => onSelectSlide(templateInstance)}>
            
          {previewImage}
        </div>
      );
    }}
  </SliderContext.Consumer>

);

export default Item;
