import electron from 'electron';

const ipcRenderer = electron.ipcRenderer;

class ExportService {
    async start() {
        ipcRenderer.send('start-export', null);
    }
    selectDirectory() {
        console.log('q');
        ipcRenderer.send('select-dir');
    }
}
export default new ExportService();
