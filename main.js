const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow(){

	// create browser window
	win = new BrowserWindow({width: 1366, height: 768, icon: __dirname+'/raw/icon.png'});

	// load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// open devtools
	// win.webContents.openDevTools();

	win.on('closed', () => {
		win=null;
	});

}

// run create window interface
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => { 
	if(process.plateform !== 'darwin'){
		app.quit();
	}
});