'use client'
import React, { useState } from 'react';
import { HomeOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';

const items = [
    {
        label: <Link href="/private/home">Home</Link>,
        key: 'Home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link href="/private/dashboard">Dashboard</Link>,
        key: 'Dashboard',
        icon: <DashboardOutlined />,

    }
]

const Navbar = () => {
    const [current, setCurrent] = useState();
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
export default Navbar;