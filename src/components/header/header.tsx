import React, {useCallback, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import closeSvg from '../../icons/close.svg';
import classNames from 'classnames';
import './header.scss';

const Header = () => {

    const [isHiddenState, setHiddenState] = useState<boolean | null>(null);
    const [isShown, setShown] = useState<boolean | null>(null);
    const [isHidden, setHidden] = useState<boolean | null>(null);
    //
    useEffect(() => {
        console.log('click on search', isHiddenState);
    }, [isHiddenState]);
    useEffect(() => {
        console.log('click on search isHidden', isHidden);
    }, [isHidden]);

    const handleClickSearch = useCallback ((): void => {
        if (isHiddenState === null) {
            setHiddenState(true);
            setShown(false);
            setHidden(false);
            console.log('handleClickSearch isHiddenState:', isHiddenState);
        } else if (isHiddenState === true) {
            setShown(false);
            setHidden(false);
            setHiddenState(!isHiddenState);
            console.log('handleClickSearch isHiddenState:', isHiddenState);
        } else if (isHiddenState === false) {
            console.log('handleClickSearch isHiddenState:', isHiddenState);
        }

    }, [isHiddenState]);


    const clickClose = useCallback((e) => {
        if (!isHidden && isHidden !== null ) {
            console.log("можем закрывата");
            setHidden(true);
            setShown(true);
            setHiddenState(true)
        }

    },[isHidden]);



    return (
        <div className="header-wrapper">
            <div className="header-menu">
                <div className="header-logo">
                    <i className="icon-car-24 icon-header"/>
                </div>
                <div className="header-menu-center">
                    <div className={classNames(
                        {"fade-out": isHiddenState,
                                "fade-in": !isHiddenState,
                        })}>
                        <div>2 block</div>
                        <div>3 block</div>
                        <div>4 block</div>
                        <div>5 block</div>
                        <div>6 block</div>
                        <div>7 block</div>
                        <div>8 block</div>
                    </div>
                </div>

                <div className="header-search" onClick={handleClickSearch}>
                    <i className="icon-search-24 icon-header"/>
                </div>


                <div className={classNames("toggle-icons",
                    {"change-icon": isHiddenState})}>
                    <div className={classNames(
                        "div-shop",
                        {"hide-icon": isShown === false},
                        {"show-icon": isShown === true}
                    )}>
                        <i className="icon-bag-24 icon-header"/>
                    </div>

                    <div className={classNames(
                        "div-close",
                        {"show-icon": isHidden === false},
                        {"hide-icon": isHidden === true},
                    )} onClick={clickClose}>
                        <i className="icon-close-24 icon-header"/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;
