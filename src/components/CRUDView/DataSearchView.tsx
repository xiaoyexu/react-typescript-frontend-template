import React, { BaseSyntheticEvent, useState } from 'react';
import { Input } from 'antd';
/* Import CRUDView styles */
import './CRUDView.scss';

const { Search } = Input;

interface DataSearchViewProps {
  keyword: string;
  onChange: (value: BaseSyntheticEvent) => void;
  onSearch: (value: string) => void;
}

export type DataSearchViewRef = {};

const DataSearchView: React.ForwardRefExoticComponent<
  DataSearchViewProps & React.RefAttributes<DataSearchViewRef>
> = React.forwardRef<DataSearchViewRef, DataSearchViewProps>(
  (props: DataSearchViewProps, ref: React.ForwardedRef<DataSearchViewRef>) => {
    React.useImperativeHandle(ref, () => ({}));

    return (
      <div className="search-container">
        <Search
          placeholder="input search text"
          onSearch={props.onSearch}
          size="large"
          value={props.keyword}
          onChange={props.onChange}
          enterButton
          allowClear
        />
      </div>
    );
  }
);

export default DataSearchView;
