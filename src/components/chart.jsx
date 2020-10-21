import _ from 'lodash';
import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

const average = data => _.round(_.sum(data)/data.length);

export default ({data,color,unit}) => {
  return(
    <div>
      <Sparklines data={data} width={120} height={180}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>Ave: {average(data)} {unit}</p>
    </div>
  );
}