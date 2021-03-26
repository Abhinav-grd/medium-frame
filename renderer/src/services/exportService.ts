import electron from 'electron';

const ipcRenderer = electron.ipcRenderer;

class ExportService {
    selectDirectory() {
        ipcRenderer.send('select-dir');
    }
}
export default new ExportService();
