import * as React from 'react';
import '../Styles/style.scss';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Add = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
return (
<div className='row'>
							<div className='d-inline-block ml-10 h-60px'>
                            <span className='pr-20px side-font'>Add rule</span>
								<button {...buttonProps} type='button' className='dropdown font-size-12px w-10 p-6px'>
									<span className='pr-20px'>New Rule</span>
									<FontAwesomeIcon icon={faAngleDown} />
								</button>

								<div className={`dropdown-menu ${isOpen ? 'visible' : ''}`} role='menu'>
									<a
										{...itemProps[0]}
										href='https://github.com/sparksuite/react-accessible-dropdown-menu-hook'
										id='menu-item-1'
									>
										<FontAwesomeIcon icon="fa-brands fa-github" />
										View on GitHub
									</a>

									<a
										{...itemProps[1]}
										href='https://www.npmjs.com/package/react-accessible-dropdown-menu-hook'
										id='menu-item-2'
									>
										<FontAwesomeIcon icon="fa-brands fa-github" />
										View on npm
									</a>

									<a {...itemProps[2]} onClick={() => alert('Click!')} id='menu-item-3'>
                                    <FontAwesomeIcon icon="fa-brands fa-github" />
										Item with click handler
									</a>
								</div>
							</div>
						</div>)
};

export default Add;