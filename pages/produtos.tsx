import Head from 'next/head'
import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { withInstantSearch } from 'next-instantsearch'
import {
  Configure,
  Highlight,
  Hits,
  Pagination,
  RefinementList,
  SearchBox
} from 'react-instantsearch-dom'
import styled from 'styled-components'
//import { getAllProduct } from '../utils/api'
import { Intro } from '../components/intro/Intro'

// const searchClient = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_SEARCH_KEY}`)
const searchClient = algoliasearch(
  'ST2C30NRR7',
  '7de48bdd8f461ea96687faf441be89de'
)

const HitComponent = ({ hit }) => (
  <div className="hit">
    <div>
      <div className="hit-picture">
        <img src={`${hit.images.thumbnail.url}`} />
      </div>
    </div>
    <div className="hit-content">
      <div>
        <Highlight attribute="post_title" hit={hit} />
      </div>
      <div className="hit-type">
        <Highlight attribute="taxonomies.product_cat[0]" hit={hit} /> /{' '}
        <Highlight attribute="taxonomies.product_cat[1]" hit={hit} />
      </div>
    </div>
  </div>
)

const Products = () => (
  <>
    <Head>
      <title>Rava Cycle - Página Inicial</title>
    </Head>

    <Intro>produtos</Intro>

    <ProductsListWrap>
      <Configure filters="taxonomies.product_brand:rava" hitsPerPage={12} />
      <header>
        <SearchBox />
      </header>
      <Main>
        <div className="menu">
          <RefinementList attribute="taxonomies.product_cat" showMore={true} />
        </div>
        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </Main>
      <footer>
        <Pagination />
      </footer>
    </ProductsListWrap>
  </>
)

Products.getInitialProps = async () => ({
  indexName: 'wp_searchable_posts',
  attributesForFaceting: ['taxonomies.product_brand(Rava)']
})

export default withInstantSearch({
  searchClient
})(Products)

const Main = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding: 2rem 1rem;
`

const ProductsListWrap = styled.div`
  [class^='ais-'] {
    box-sizing: border-box;
    font-size: 0.9rem;
  }

  a[class^='ais-'] {
    color: #21243d;
    text-decoration: none;
  }

  [class^='ais-'][class$='--disabled'] * {
    cursor: not-allowed;
  }

  .ais-Breadcrumb,
  .ais-ClearRefinements,
  .ais-CurrentRefinements,
  .ais-ClearRefinements-button,
  .ais-GeoSearch,
  .ais-HierarchicalMenu,
  .ais-Hits,
  .ais-Results,
  .ais-HitsPerPage,
  .ais-ResultsPerPage,
  .ais-InfiniteHits,
  .ais-InfiniteResults,
  .ais-Menu,
  .ais-MenuSelect,
  .ais-NumericMenu,
  .ais-NumericSelector,
  .ais-Pagination,
  .ais-Panel,
  .ais-PoweredBy,
  .ais-RangeInput,
  .ais-RangeSlider,
  .ais-RatingMenu,
  .ais-RefinementList,
  .ais-SearchBox,
  .ais-SortBy,
  .ais-SortBy-select,
  .ais-HitsPerPage-select,
  .ais-Stats,
  .ais-ToggleRefinement {
    color: #21243d;
    font-size: 0.75rem;
  }

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    background: rgba(226, 164, 0, 0.4);
  }

  .ais-Hits-list {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 680px) {
    .ais-Hits-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 900px) {
    .ais-Hits-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .ais-Hits-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .ais-RefinementList-item,
  .ais-Menu-item,
  .ais-HierarchicalMenu-item,
  .ais-RatingMenu-item {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ais-RefinementList-item,
  .ais-RefinementList-item *,
  .ais-RatingMenu-item {
    cursor: pointer;
  }

  .ais-HierarchicalMenu-link,
  .ais-RatingMenu-item,
  .ais-RefinementList-item {
    padding-bottom: 1rem;
  }

  .ais-Breadcrumb-item--selected,
  .ais-HierarchicalMenu-item--selected,
  .ais-Menu-item--selected {
    font-weight: bold;
  }

  .ais-RatingMenu-starIcon--full {
    fill: #e2a400;
  }

  .ais-RatingMenu-starIcon--empty {
    fill: rgba(0, 0, 0, 0.08);
  }

  .ais-Panel--collapsible {
    position: relative;
  }

  .ais-Panel--collapsed .ais-Panel-body,
  .ais-Panel--collapsed .ais-Panel-footer {
    display: none;
  }

  .ais-Panel-collapseButton {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 0;
  }

  .ais-Panel-header {
    border: none;
    color: #21243d;
    font-size: 0.678rem;
    font-weight: 600;
    letter-spacing: 0.08rem;
    line-height: 1.6;
    padding-bottom: 1rem;
    text-transform: uppercase;
  }

  .ais-SearchBox-form {
    position: relative;
  }

  .ais-SearchBox-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: rgba(65, 66, 71, 0.06);
    border: none;
    border-radius: 3px;
    color: rgba(33, 36, 61, 0.8);
    font-family: inherit;
    min-height: 54px;
    outline: none;
    padding-left: 56px;
    width: 100%;
  }

  .ais-SearchBox-input::placeholder {
    color: rgba(33, 36, 61, 0.5);
    opacity: 1;
  }

  .ais-SearchBox-input:-ms-input-placeholder {
    color: rgba(33, 36, 61, 0.5);
  }

  .ais-SearchBox-input::-ms-input-placeholder {
    color: rgba(33, 36, 61, 0.5);
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-loadingIndicator,
  .ais-SearchBox-submit {
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
  }

  .ais-SearchBox-reset[hidden],
  .ais-SearchBox-loadingIndicator[hidden] {
    display: none;
  }

  .ais-SearchBox-submit {
    left: 0;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-loadingIndicator {
    right: 0;
  }

  .ais-SearchBox-resetIcon {
    height: 10px;
    width: 10px;
  }

  .ais-RefinementList .ais-SearchBox-input {
    border-radius: 3px;
    color: rgba(33, 36, 61, 0.8);
    font-size: 0.8rem;
    min-height: 40px;
    padding: 0 44px;
  }

  .ais-RefinementList .ais-SearchBox-form {
    margin-bottom: 1rem;
  }

  .ais-HierarchicalMenu-link,
  .ais-RatingMenu-link,
  .ais-RefinementList-label {
    align-items: center;
    display: flex;
  }

  .ais-RefinementList-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: rgba(65, 66, 71, 0.08);
    border: none;
    border-radius: 2px;
    height: 1rem;
    margin: 0;
    margin-right: 1rem;
    position: relative;
    width: 1rem;
  }

  .ais-RefinementList-item--selected {
    font-weight: bold;
  }

  .ais-RefinementList-item--selected .ais-RefinementList-checkbox {
    background-color: #e2a400;
  }

  .ais-RefinementList-item--selected .ais-RefinementList-checkbox::after {
    background-color: #fff;
    border-radius: 4px;
    content: '';
    height: 4px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-2px) translateY(-2px);
    width: 4px;
  }

  .ais-HierarchicalMenu-count,
  .ais-Menu-count,
  .ais-RefinementList-count,
  .ais-ToggleRefinement-count,
  .ais-RatingMenu-count {
    align-items: center;
    background-color: rgba(65, 66, 71, 0.08);
    border-radius: 4px;
    color: rgba(33, 36, 61, 0.8);
    display: flex;
    font-size: 0.64rem;
    font-weight: 600;
    letter-spacing: 1.1px;
    margin-left: 8px;
    padding: 0 4px;
  }

  .ais-HierarchicalMenu-showMore,
  .ais-Menu-showMore,
  .ais-RefinementList-showMore {
    margin-top: 1rem;
  }

  .ais-HierarchicalMenu-list {
    font-weight: normal;
  }

  .ais-HierarchicalMenu-link::before {
    align-items: center;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%2390919E' fill-rule='nonzero' d='M0 4l4-4 4 4z'/%3E%3C/svg%3E%0A");
    display: flex;
    height: 8px;
    justify-content: center;
    margin-right: 1rem;
    width: 8px;
  }

  .ais-HierarchicalMenu-item--selected .ais-HierarchicalMenu-link::before {
    transform: rotate(180deg);
  }

  .ais-HierarchicalMenu-item--selected
    .ais-HierarchicalMenu-item:not(.ais-HierarchicalMenu-item--selected)
    .ais-HierarchicalMenu-link::before {
    transform: rotate(0);
  }

  .ais-ClearRefinements,
  .ais-ClearRefinements-button {
    color: rgba(33, 36, 61, 0.7);
  }

  .ais-ClearRefinements-button--disabled {
    color: rgba(33, 36, 61, 0.5);
  }

  .ais-ToggleRefinement-label {
    cursor: pointer;
    display: flex;
  }

  .ais-ToggleRefinement-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: rgba(65, 66, 71, 0.08);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 16px;
    margin-right: 16px;
    min-width: 30px;
    transition: background 150ms ease-out;
  }

  .ais-ToggleRefinement-checkbox:checked {
    background: #e2a400;
  }

  .ais-ToggleRefinement-checkbox::after {
    background-image: linear-gradient(to top, #f5f5fa, #fff);
    border-radius: 100%;
    box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15),
      0 2px 3px 0 rgba(93, 100, 148, 0.2);
    content: '';
    height: 16px;
    position: absolute;
    transition: transform 150ms ease-out;
    width: 16px;
  }

  .ais-ToggleRefinement-checkbox:checked::after {
    transform: translateX(100%);
  }

  .ais-SortBy,
  .ais-HitsPerPage {
    position: relative;
  }

  .ais-SortBy::after,
  .ais-HitsPerPage::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M14-5v16H-2V-5z'/%3E%3Cpath fill='%23000' stroke='%23FFF' stroke-width='.5' d='M2.228 1.332a.664.664 0 0 0-.942.001.665.665 0 0 0-.002.941l4.247 4.247c.259.26.679.26.938 0l4.247-4.247a.664.664 0 0 0-.002-.94.666.666 0 0 0-.942-.002L6 5.105 2.228 1.332z'/%3E%3C/g%3E%3C/svg%3E%0A");
    display: inline-block;
  }

  .ais-SortBy-select,
  .ais-HitsPerPage-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: #21243d;
    font-family: inherit;
  }

  .ais-RangeSlider .rheostat-horizontal {
    cursor: pointer;
    width: calc(100% - 10px);
  }

  .ais-RangeSlider .rheostat-background {
    background-color: rgba(65, 66, 71, 0.08);
    border: none;
    border-radius: 3px;
    height: 3px;
  }

  .ais-RangeSlider .rheostat-progress {
    background-color: #e2a400;
    border-radius: 3px;
    height: 3px;
    top: 0;
  }

  .ais-RangeSlider .rheostat-tooltip {
    font-weight: bold;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ais-RangeSlider .rheostat-handle {
    background-image: linear-gradient(to top, #f5f5fa, #fff);
    border: none;
    box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15),
      0 2px 3px 0 rgba(93, 100, 148, 0.2);
    margin-left: -5px;
    top: -9px;
  }

  .ais-RangeSlider .rheostat-marker {
    background-color: rgba(65, 66, 71, 0.08);
  }

  .ais-RangeInput-input {
    background: none;
    border: none;
    border-bottom: 1px solid #ebecf3;
    color: #21243d;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 600;
    min-width: none;
    padding: 0;
    padding-bottom: 3px;
  }

  .ais-RangeInput-label:first-of-type {
    margin-right: 6px;
  }

  .ais-RangeInput-label:last-of-type {
    margin-left: 6px;
  }

  .ais-Pagination-list {
    justify-content: center;
  }

  .ais-Pagination-item,
  .ais-Pagination-link {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .ais-Pagination-item {
    height: 38px;
    width: 38px;
  }

  .ais-Pagination-item {
    background-color: rgba(65, 66, 71, 0.08);
    border-radius: 4px;
    color: #414247;
  }

  .ais-Pagination-item--selected {
    background-color: #e2a400;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.34),
      rgba(255, 255, 255, 0)
    );
    font-weight: bold;
  }

  .ais-Pagination-item--firstPage,
  .ais-Pagination-item--previousPage,
  .ais-Pagination-item--nextPage,
  .ais-Pagination-item--lastPage {
    background: none;
  }

  .ais-Pagination-item--disabled {
    opacity: 0.33;
  }

  .ais-Pagination-item--selected a {
    color: #fff;
  }

  .ais-Pagination-item.ais-Pagination-item--page {
    margin-right: 4px;
  }

  .ais-Pagination-item.ais-Pagination-item--previousPage {
    margin-right: 1rem;
  }

  .ais-Pagination-item.ais-Pagination-item--nextPage {
    margin-left: calc(1rem - 4px);
  }

  .ais-Pagination-link {
    height: 100%;
    width: 100%;
  }

  .container {
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    padding: 2rem 1rem;
  }

  .container-filters {
    flex: 1;
    margin-right: 60px;
    max-width: 260px;
  }

  .container-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: 80px;
  }

  .container-results {
    flex: 3;
  }

  .container-options {
    border-bottom: 1px solid #ebecf3;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
    padding: 30px 0;
  }

  .container-options .container-option:not(:first-child) {
    margin-left: 48px;
  }

  .container-options select {
    min-width: 100px;
  }

  .container-footer {
    margin: 4rem 0;
  }

  em {
    font-style: normal;
  }

  em,
  mark {
    background: rgba(226, 164, 0, 0.4);
  }

  .clear-filters {
    align-items: center;
    display: flex;
  }

  .clear-filters svg {
    margin-right: 8px;
  }

  .container-body .ais-Panel {
    border-top: 1px solid #ebecf3;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  .ais-Panel-header {
    font-family: Hind, sans-serif;
  }

  .header .ais-SearchBox {
    height: 64px;
    width: 740px;
  }

  .header .ais-SearchBox .ais-SearchBox-input {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 48px 0 rgba(0, 0, 0, 0.2);
    font-family: Hind, sans-serif;
    height: 64px;

    padding: 4px 48px 0 64px;
  }

  .header .ais-SearchBox-submit {
    padding: 0 1rem 0 2rem;
    width: 64px;
  }

  .header .ais-SearchBox .ais-SearchBox-input::placeholder {
    color: rgba(33, 36, 61, 0.24);
    opacity: 1;
  }

  .ais-SearchBox-input:-ms-input-placeholder {
    color: rgba(33, 36, 61, 0.24);
  }

  .ais-SearchBox-input::-ms-input-placeholder {
    color: rgba(33, 36, 61, 0.24);
  }

  .ais-SearchBox-submit {
    color: #e2a400;
  }

  .ais-RefinementList .ais-SearchBox-input {
    font-family: Hind, sans-serif;

    padding-top: 2px;
  }

  .hit {
    color: #21243d;
    font-size: 14px;
    line-height: 18px;
  }

  .hit h1 {
    font-size: 14px;
  }

  .hit-category {
    color: #21243d;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 8px;
    opacity: 0.7;
    text-transform: uppercase;
  }

  .hit-description {
    margin-top: 2px;
  }

  .hit-info-container {
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .hit-image-container {
    align-items: center;
    display: flex;
    height: 174px;
    justify-content: center;
    margin: auto;
    width: 174px;
  }

  .hit-image {
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }

  .hit-em {
    color: #e2a400;
    font-size: 11px;
    font-weight: 600;
  }

  .hit-rating {
    border: 1px solid rgba(226, 164, 0, 0.5);
    border-radius: 4px;
    margin-left: 4px;
    padding: 0 4px;
  }

  .hits-empty-state {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 300px;
  }

  .hits-empty-state-title {
    font-family: Hind;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
  }

  .hits-empty-state-description {
    color: rgba(35, 37, 51, 0.6);
    font-size: 0.875rem;
    text-align: center;
  }

  .hits-empty-state .ais-ClearRefinements {
    margin-top: 1rem;
  }

  .hits-empty-state .ais-ClearRefinements-button--disabled {
    display: none;
  }

  .hits-empty-state .ais-ClearRefinements-button {
    background: rgba(10, 8, 41, 0.04);
    border-radius: 3px;
    color: #21243d;
    min-height: 48px;
    padding: 16px 24px;
  }

  .ais-ToggleRefinement-label {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .ais-ToggleRefinement-checkbox {
    font: inherit;
    margin-left: 1rem;
    margin-right: 0;
    position: relative;
  }

  .ais-ToggleRefinement-checkbox:checked::before {
    color: #e2a400;
  }

  .ais-ToggleRefinement-checkbox::before {
    align-items: center;
    color: rgba(33, 36, 61, 0.32);
    content: 'No';
    display: flex;
    font-size: 0.8rem;
    height: 16px;
    position: absolute;
    right: 38px;
  }

  .ais-ToggleRefinement-checkbox:checked::before {
    content: 'Yes';
  }

  .ais-ToggleRefinement-count {
    display: none;
  }

  .ais-RatingMenu-item:not(.ais-RatingMenu-item--selected) {
    opacity: 0.5;
  }

  .ais-RatingMenu-starIcon {
    margin-right: 0.5rem;
  }

  @media (min-width: 900px) {
    [data-layout='mobile'] {
      display: none;
    }
  }
`
