 'use client'
// import React from 'react';
// import {
//   ColumnDirective, ColumnsDirective, GridComponent,
//   Inject, Page, Sort, Filter, Group
// } from '@syncfusion/ej2-react-grids';
// import { data } from "../datasource";
// import Container from './Container';
// import { registerLicense } from '@syncfusion/ej2-base';

// registerLicense(
//   'Ngo9BigBOggjHTQxAR8/V1NAaF5cWWZCfEx3R3xbf1x0ZFZMZFRbRH5PMyBoS35RckViWHxednFUQmNUWUJ3'
// );

// export default function Home() {
//   const pageSettings: object = { pageSize: 6 };
//   const filterSettings: object = { type: 'Excel' };

//   return (
//     <div style={{ marginTop: '7%', textAlign: 'center' }}>
//       <Container>
//         <GridComponent
//           dataSource={data}
//           allowGrouping={true}
//           allowSorting={true}
//           allowFiltering={true}
//           allowPaging={true}
//           pageSettings={pageSettings}
//           filterSettings={filterSettings}
//           width='550px' 
//           style={{ margin: 'auto' }}
//         >
//           <ColumnsDirective>
//             <ColumnDirective field="OrderID" width="50" headerTextAlign="Center" />
//             <ColumnDirective field="CustomerID" width="50" headerTextAlign="Center" />
//             <ColumnDirective field="ShipCountry" width="50" headerTextAlign="Center"/>
//             <ColumnDirective
//               field="Freight"
//               width="50"
//               format="C2"
//               headerTextAlign="Center"
//             />
//           </ColumnsDirective>
//           <Inject services={[Page, Sort, Filter, Group]} />
//         </GridComponent>
//       </Container>
//     </div>
//   );
// }

import React, { ChangeEvent } from 'react';
import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Filter, Sort, Edit, Toolbar, Aggregate, Page,
  AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective
} from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from '../datasource';
import { registerLicense } from '@syncfusion/ej2-base';
import Container from './Container';

 registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF5cWWZCfEx3R3xbf1x0ZFZMZFRbRH5PMyBoS35RckViWHxednFUQmNUWUJ3'
);

type RowRenderingDirection = 'Vertical' | 'Horizontal';

function Grid() {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const validationRule = { required: true };
  const orderidRules = { required: true, number: true };
  const filterOptions = { type: 'Excel' as const }; 
  const renderingMode: RowRenderingDirection = 'Vertical';
  const dropDownData = [
    { text: 'Vertical', value: 'Vertical' },
    { text: 'Horizontal', value: 'Horizontal' },
  ];
  let grid: GridComponent | null = null;

  const created = (): void => {
    if (grid) {
      grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
  };

  const changeAlignment = (args: ChangeEventArgs): void => {
    if (grid) {
      grid.rowRenderingMode = args.value as RowRenderingDirection;
    }
  };

  const footerSum = (props: any): React.ReactNode => {
    return (<span>Total Models: {props.Count}</span>);
  };

  let menuFilter = { type: 'Menu' } as const; 
  let checkboxFilter = { type: 'CheckBox' } as const; 

  return (
    <Container>
      <div>
        <div>
          <label>Select row rendering mode :</label>
          <DropDownListComponent index={0} width={150} dataSource={dropDownData} change={changeAlignment}></DropDownListComponent>
        </div>
        <div className="e-adaptive-demo e-bigger">
          <div className="e-mobile-layout">
            <div className="e-mobile-content">
              <GridComponent
                id="adaptivebrowser"
                dataSource={data}
                height='100%'
                ref={(g) => grid = g}
                enableAdaptiveUI={true}
                rowRenderingMode={renderingMode}
                allowFiltering={true}
                allowSorting={true}
                allowPaging={true}
                filterSettings={filterOptions}
                toolbar={toolbarOptions}
                editSettings={editSettings}
                created={created}
              >
                <ColumnsDirective>
                  <ColumnDirective field='SNO' headerText='S NO' width='150' isPrimaryKey={true} validationRules={orderidRules}></ColumnDirective>
                  <ColumnDirective field='Model' headerText='Model Name' width='200' editType='dropdownedit' validationRules={validationRule} />
                  <ColumnDirective field='Developer' headerText='Developer' width='200' filter={menuFilter} validationRules={validationRule}></ColumnDirective>
                  <ColumnDirective field='ReleaseDate' headerText='Released Date' editType='datepickeredit' type='date' format='yMMM' width='200'></ColumnDirective>
                  <ColumnDirective field='AndroidVersion' headerText='Android Version' width='200' filter={checkboxFilter} validationRules={validationRule}></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Filter, Sort, Edit, Toolbar, Aggregate, Page]} />
                <AggregatesDirective>
                  <AggregateDirective>
                    <AggregateColumnsDirective>
                      <AggregateColumnDirective field='Model' type='Count' footerTemplate={footerSum}></AggregateColumnDirective>
                    </AggregateColumnsDirective>
                  </AggregateDirective>
                </AggregatesDirective>
              </GridComponent>
            </div>
          </div>
          
         
        </div>
      </div>
    </Container>
  );
}

export default Grid;
