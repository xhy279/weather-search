import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import React from 'react';
import _ from 'lodash';

const average = (dataArr) => {
  return _.round(_.sum(dataArr) / dataArr.length);
}

const WeatherChart = (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};

export default WeatherChart;