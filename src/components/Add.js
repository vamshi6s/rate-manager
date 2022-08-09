import * as React from 'react';
import '../Styles/style.scss';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import plus from '../images/Add.svg';


const Add = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
return (
<div className='row'>
							<div className='d-inline-block ml-10 h-60px'>
                            <span className='pr-20px side-font font-size-16'>Add rule</span>
								<button {...buttonProps} type='button' className='dropdown font-size-12px w-10 p-6px'>
									<span className='pr-15px'>New Rule</span>
									<FontAwesomeIcon className='font-size-14' icon={faAngleDown} />
								</button>

								<div className= {`dropdown-menu ${isOpen ? 'visible' : ''}`} role='menu'>
									<a 
										{...itemProps[0]}
									
										id='menu-item-1'
									>
										
										Rule 1
									</a>

									<a
										{...itemProps[1]}
										
										id='menu-item-2'
									>
										<FontAwesomeIcon icon="fa-brands fa-github" />
										Rule 2
									</a>

									<a {...itemProps[2]} href="/Addrule" onClick={() => alert('Click!')} id='menu-item-3'>
                                    <img className="w-13px mt-5px" src={plus}/>  
										Add Rule
									</a>
								</div>
							</div>
						</div>)
};

export default Add;