import React, {useContext } from 'react';
import cx from 'classnames';
import SliderContext from './context'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';

const Slider = ({ children, activeSlide }) => {
  const {selectedInstance, setSelectedInstance} = useContext(TemplateInstanceContext);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = templateInstance => {
    setSelectedInstance(templateInstance);
  };

  const contextValue = {
     onSelectSlide: handleSelect,
    elementRef,
    selectedInstance,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={cx('slider')}>
          <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
    </SliderContext.Provider>
  );
};

export default Slider;
