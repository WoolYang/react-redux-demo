import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';

import  './SearchBar.less';

class SearchBar extends React.Component {


    render() {
        const dataSource = [
          {textKey: 'Some Text', valueKey: 'someFirstValue'},
          {textKey: 'Some Text', valueKey: 'someSecondValue'},
        ];
        const dataSourceConfig = {
          text: 'textKey',
          value: 'valueKey',
        };

        return (
            <AutoComplete
              floatingLabelText="Same text, different values"
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              dataSource={dataSource}
              dataSourceConfig={dataSourceConfig}
              floatingLabelText="搜索"
              fullWidth={true}
            />
       	)
    }
}

module.exports = SearchBar;
