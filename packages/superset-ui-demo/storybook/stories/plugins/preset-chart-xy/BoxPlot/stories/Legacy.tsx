import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import data from '../data';
import dummyDatasource from '../../../../../shared/dummyDatasource';

export const legacy = () => (
  <SuperChart
    chartType="v2-box-plot/legacy"
    width={400}
    height={400}
    datasource={dummyDatasource}
    queryData={{ data }}
    formData={{
      colorScheme: 'd3Category10',
      groupby: ['region'],
      metrics: ['sum__SP_POP_TOTL'],
      vizType: 'box_plot',
      whiskerOptions: 'Min/max (no outliers)',
    }}
  />
);
