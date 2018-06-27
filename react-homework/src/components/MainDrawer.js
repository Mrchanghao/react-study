import React, { Component } from 'react';
import '../styles/Maindrawer.css'
import {List, NavBar, Icon, Drawer} from 'antd-mobile';

class MainDrawer extends Component {
  constructor(props) {
		super(props);
		this.state = { 
			open: false
		 };
		 this.onOpenChange = this.onOpenChange.bind(this)
}

onOpenChange(...args) {
	console.log(args);
	this.setState({
		open: !this.state.open
	})
}

render() {
	const sidebar = (<List>
		{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
			if (index === 0) {
				return (<List.Item key={index}
					thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
					multipleLine
				>Category</List.Item>);
			}
			return (<List.Item key={index}
				thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
			>Category{index}</List.Item>);
		})}
	</List>);
	console.log(<NavBar></NavBar>)
	return (<div>
		<NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
		<Drawer
			className="my-drawer"
			style={{ minHeight: document.documentElement.clientHeight }}
			enableDragHandle
			contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
			sidebar={sidebar}
			open={this.state.open}
			onOpenChange={this.onOpenChange}
		>
			{this.props.children}
		</Drawer>
	</div>);
}
}


export default MainDrawer;