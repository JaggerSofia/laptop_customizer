import React from 'react';
import Option from './Option'
import slugify from 'slugify'

function Feature (props) {
    let feature = props.feature;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return(
        <Option 
          key={itemHash}
          itemHash={itemHash}
          item={item}
          feature={feature}
          updateFeature={props.updateFeature}
          selected={props.selected}
        />
      )
    })

      return(
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
  }

export default Feature