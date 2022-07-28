import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
} from "react-router-dom";
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>

        </aside>
    );
}

export default Sidebar;
