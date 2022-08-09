import React from "react";
import '../../Styles/style.scss';
import User from '../../images/User.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera} from '@fortawesome/free-solid-svg-icons';
const Users = [
  {
    id: 1,
    selected: false,
    tenantdetails:{
      tenantId:'TEN0001',
      tenantname:'John Admin',
      tenantemail:'John@6storage.com',
      tenantnumber:'+123445567870'
    },
    storagedetails: {
      unitnumber:'Unit 1(small 5*5)mt',
      location:'location 1',
      building:'building 1'
    },
    
    leasedetails:{
      MoveIn:'30/06/2022',
      invoiceperiod:'Monthly',
      scheduledmoveout:'30/07/2022',
      lastpriceupdateon:'N/A'
    } ,
    RentalPrice: " $100",
  },
  {
    id: 2,
    selected: false,
    tenantdetails: {
      tenantId:'TEN0001',
      tenantname:'John Admin',
      tenantemail:'John@6storage.com',
      tenantnumber:'+123445567870'
    },
    storagedetails: {
      unitnumber:'Unit 1(small 5*5)mt',
      location:'location 1',
      building:'building 1'
    },
    leasedetails:{
      MoveIn:'30/06/2022',
      invoiceperiod:'Monthly',
      scheduledmoveout:'30/07/2022',
      lastpriceupdateon:'N/A'
    } ,
    RentalPrice: " $100",
  },
  {
    id: 3,
    selected: false,
    tenantdetails: {
      tenantId:'TEN0001',
      tenantname:'John Admin',
      tenantemail:'John@6storage.com',
      tenantnumber:'+123445567870'
    },
    storagedetails: {
      unitnumber:'Unit 1(small 5*5)mt',
      location:'location 1',
      building:'building 1'
    },
    leasedetails:{
      MoveIn:'30/06/2022',
      invoiceperiod:'Monthly',
      scheduledmoveout:'30/07/2022',
      lastpriceupdateon:'N/A'
    } ,
    RentalPrice: " $100",
  },
  {
    id: 4,
    selected: true,
    tenantdetails: {
      tenantId:'TEN0001',
      tenantname:'John Admin',
      tenantemail:'John@6storage.com',
      tenantnumber:'+123445567870'
    },
    storagedetails: {
      unitnumber:'Unit 1(small 5*5)mt',
      location:'location 1',
      building:'building 1'
    },
    leasedetails:{
      MoveIn:'30/06/2022',
      invoiceperiod:'Monthly',
      scheduledmoveout:'30/07/2022',
      lastpriceupdateon:'N/A'
    } ,
    RentalPrice: " $100",
  },
  {
    id: 5,
    selected: false,
    tenantdetails: {
      tenantId:'TEN0001',
      tenantname:'John Admin',
      tenantemail:'John@6storage.com',
      tenantnumber:'+123445567870'
    },
    storagedetails: {
      unitnumber:'Unit 1(small 5*5)mt',
      location:'location 1',
      building:'building 1'
    },
    leasedetails:{
      MoveIn:'30/06/2022',
      invoiceperiod:'Monthly',
      scheduledmoveout:'30/07/2022',
      lastpriceupdateon:'N/A'
    } ,
    RentalPrice: " $100",
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="Container-table">
        <div className="row ml-1px col-12">
            <table className="fixTableHead">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">Tenants Details</th>
                  <th scope="col">Storage Details</th>
                  <th scope="col">Lease Details</th>
                  <th scope="col">Current unit Rental price (with tax)</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td><div className='flex ml-15px'><div  ><img src={User}/></div><div className='ml-5px text-left'><span>{user.tenantdetails.tenantId}</span>  <span>{user.tenantdetails.tenantname}</span><br/><span>{user.tenantdetails.tenantemail}</span><br/><span>{user.tenantdetails.tenantnumber}</span></div></div></td>
                    <td><div className='flex ml-15px'><div className='ml-5px text-left'><span>{user.storagedetails.unitnumber}</span><br/>  <span>{user.storagedetails.location}</span> |<span>{user.storagedetails.building}</span><br/><span  ><FontAwesomeIcon className="text-blue font-size-12px  mr-5px" icon={faCamera} /><FontAwesomeIcon className="text-blue font-size-12px  mr-5px" icon={faCamera} /><FontAwesomeIcon className="text-blue font-size-12px mr-5px" icon={faCamera} /></span></div></div></td>
                    <td>{<div className='flex ml-5rem'><div className='ml-5px text-left'><span><span>Move in:</span>{user.leasedetails.MoveIn}</span><br/>  <span><span>Invoice Period:</span>{user.leasedetails.invoiceperiod}</span><br/><span><span>Scheduled Move Out:</span>{user.leasedetails.scheduledmoveout}</span><br/><span><span>Last Price Update on:</span>{user.leasedetails.lastpriceupdateon}</span></div></div>}</td>
                    <td>{user.RentalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
    );
  }
}

export default SelectTableComponent;