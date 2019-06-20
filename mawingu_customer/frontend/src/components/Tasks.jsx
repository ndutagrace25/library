import React, { Component } from 'react';


class Tasks extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>MARCHANT</th>
                        <th>MARCHANT PHONE</th>
                        <th>CUSTOMER</th>
                        <th>CUSTOMER PHONE</th>
                        <th>LOCATION</th>
                        <th>CREATED ON</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Grace</td>
                        <td>0708807403</td>
                        <td>Yule Pale</td>
                        <td>909090</td>
                        <td>Thigithu</td>
                        <td>11//23/2/</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Grace</td>
                        <td>0708807403</td>
                        <td>Yule Pale</td>
                        <td>909090</td>
                        <td>Thigithu</td>
                        <td>11//23/2/</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Grace</td>
                        <td>0708807403</td>
                        <td>Yule Pale</td>
                        <td>909090</td>
                        <td>Thigithu</td>
                        <td>11//23/2/</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Grace</td>
                        <td>0708807403</td>
                        <td>Yule Pale</td>
                        <td>909090</td>
                        <td>Thigithu</td>
                        <td>11//23/2/</td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default Tasks;