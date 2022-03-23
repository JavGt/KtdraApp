const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
	const win = new BrowserWindow({
		width: 1024,
		height: 700,
		show: false,
		backgroundColor: '#2e2c29',
		autoHideMenuBar: true,
		webPreferences: {
			devTools: false,
		},
		title: 'Grupo Ktdra',
		center: true,
		minWidth: 800,
		minHeight: 600,
		hasShadow: true,
		icon: './src/icon/icon.icon',
	});

	win.loadURL('http://silvy.grupoktdra.com/');
	win.show();

	win.on('minimize', () => {
		console.log('minimize');
	});
	win.on('restore', () => {
		console.log('restore');
	});
	win.on('maximize', () => {
		console.log('maximize');
	});
});

app.on('window-all-closed', () => {
	console.log('Cerrando');
	app.quit();
});
