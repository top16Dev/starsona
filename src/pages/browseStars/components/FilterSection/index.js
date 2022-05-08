import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';
import { sortList } from './constants';
import HeaderSection from '../../../../components/Header/styled';
import RangeSlider from '../../../../components/RangeSlider';
import PrimaryButton from '../../../../components/PrimaryButton';
import Picker from '../../../../components/Picker';
import { updateSelectedSubCategory, updateSort, updatePriceRange } from '../../../landing/actions/updateFilters';
import { fetchCelebrityList } from '../../../landing/actions/getCelebList';
import FilterStyled from './styled';

const FilterSection = (props) => {

  const getSortState = () => {
    const selectedSort = sortList.find(sortItem => sortItem.value === props.sortValue);
    return selectedSort;
  };

  const [selectedSubCat, updateSelectedSub] = useState(props.category.selected);
  const [selectedSort, updateSortState] = useState(getSortState());
  const [priceRange, updateSelectedPriceRange] = useState({ low: props.lowPrice, high: props.highPrice });

  useEffect(() => {
    props.fetchCelebrityList(0, true);
  }, []);

  useEffect(() => {
    updateSelectedSub(props.category.selected);
  }, [props.category.selected]);

  const updateSubCategory = subCategory => () => {
    let selectedList = [...selectedSubCat];
    if (selectedList.find(cat => cat.id === subCategory.id)) {
      selectedList = selectedList.filter(cat => cat.id !== subCategory.id);
      updateSelectedSub(selectedList);
    } else {
      selectedList = [...selectedList, subCategory];
      updateSelectedSub(selectedList);
    }
    if (document.body.getBoundingClientRect().width >= 832 || window.innerWidth >= 832) {
      props.updateSelectedSubCategory(selectedList);
    }
  };

  const updateSelectedSort = (sortValue) => {
    updateSortState(sortValue);
    if (document.body.getBoundingClientRect().width >= 832 || window.innerWidth >= 832) {
      props.updateSort(sortValue.value);
    }
  };

  const onSliderChange = (value) => {
    updateSelectedPriceRange({ low: value[0], high: value[1] });
    if (document.body.getBoundingClientRect().width >= 832 || window.innerWidth >= 832) {
      props.updatePriceRange(value[0], value[1]);
    }
  };

  const applyFilters = () => {
    props.updateSelectedSubCategory(selectedSubCat);
    props.updateSort(selectedSort.value);
    props.updatePriceRange(priceRange.low, priceRange.high);
    props.onClose();
  };

  const toggleSelectAll = () => {
    props.updateSelectedSubCategory([]);
    updateSelectedSub([]);
  };

  return (
    <FilterStyled>
      <FilterStyled.Header>
        <HeaderSection.HeaderDiv className="filter-header">
          <HeaderSection.BackIcon onClick={props.onClose}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </HeaderSection.BackIcon>
          <HeaderSection.HeaderLeft className="filter-logo">
            <Link to='/'>
              <HeaderSection.ImgLogo
                src="assets/images/logo_starsona.svg"
                alt="logo"
              />            
            </Link>
          </HeaderSection.HeaderLeft>
          <HeaderSection.HeaderRight visible>
            <FilterStyled.CloseButton onClick={props.onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </FilterStyled.CloseButton>
          </HeaderSection.HeaderRight>
        </HeaderSection.HeaderDiv>
      </FilterStyled.Header>
      <FilterStyled.Heading mobileOnly className="filter-heading">
        Filter
      </FilterStyled.Heading>
      
      <FilterStyled.Content>
        <FilterStyled.SubCategoryList className="subcategory-list">
          <FilterStyled.SubCategoryItem
            selected={selectedSubCat.length === 0}
            onClick={toggleSelectAll}
          >
            ALL
          </FilterStyled.SubCategoryItem>
          {
            props.category.subCategories.map(subCategory => (
              <FilterStyled.SubCategoryItem
                key={subCategory.id}
                selected={selectedSubCat.find(cat => cat.id === subCategory.id)}
                onClick={updateSubCategory(subCategory)}
              >
                {subCategory.title}
              </FilterStyled.SubCategoryItem>
            ))
          }
        </FilterStyled.SubCategoryList>
        <FilterStyled.SecondaryFilterWrapper>
          <FilterStyled.SecondaryFilter>
            <FilterStyled.SortHeading>Sort by</FilterStyled.SortHeading>
            <Picker list={sortList} onSelect={updateSelectedSort} selected={selectedSort} />
          </FilterStyled.SecondaryFilter>
          <FilterStyled.SecondaryFilter>
            <FilterStyled.FilterHeading>Price</FilterStyled.FilterHeading>
            <RangeSlider
              min={parseInt(props.config.min_rate)}
              max={parseInt(props.config.max_rate)}
              range={priceRange}
              onAfterChange={onSliderChange}
            />
          </FilterStyled.SecondaryFilter>
          <FilterStyled.ApplyButton>
            <PrimaryButton className="controlButton" onClick={applyFilters}>Apply</PrimaryButton>
          </FilterStyled.ApplyButton>
        </FilterStyled.SecondaryFilterWrapper>
      </FilterStyled.Content>
    </FilterStyled>
  );
};

FilterSection.propTypes = {
  onClose: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  updateSelectedSubCategory: PropTypes.func.isRequired,
  updateSort: PropTypes.func.isRequired,
  lowPrice: PropTypes.number.isRequired,
  highPrice: PropTypes.number.isRequired,
  updatePriceRange: PropTypes.func.isRequired,
  fetchCelebrityList: PropTypes.func.isRequired,
  sortValue: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.filters.category,
  lowPrice: state.filters.lowPrice,
  highPrice: state.filters.highPrice,
  sortValue: state.filters.sortValue,
  config: state.config.data,
});

const mapDispatchToProps = dispatch => ({
  fetchCelebrityList: (offset, refresh, selectedCategory) => dispatch(fetchCelebrityList(offset, refresh, selectedCategory)),
  updateSelectedSubCategory: selectedList => dispatch(updateSelectedSubCategory(selectedList)),
  updatePriceRange: (low, high) => dispatch(updatePriceRange(low, high)),
  updateSort: value => dispatch(updateSort(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
